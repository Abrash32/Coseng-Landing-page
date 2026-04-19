"use server";

import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
import { createPortalSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";

const s3 = new S3({
  region: "eu-north-1",
});

const BUCKET_NAME = "coseng-limited-documentations-cloud-uploads";

export async function submitCreatePortalForm(formData) {
  // 1. Extract sections from FormData
  let sections = [];
  try {
    sections = JSON.parse(formData.get("sections") || "[]");
  } catch (e) {
    console.error("Failed to parse sections:", e);
  }

  // 2. Map and Validate basic fields
  const rawData = {
    category: formData.get("category"),
    title: formData.get("title"),
    description: formData.get("description"),
    author: formData.get("author"),
    eventDate: formData.get("eventDate") || undefined,
    eventTime: formData.get("eventTime") || undefined,
    eventVenue: formData.get("eventVenue") || undefined,
    eventLink: formData.get("eventLink") || undefined,
    imageUrl: formData.get("imageUrl") || undefined,
    sections: sections,
  };

  const validation = createPortalSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const validatedData = validation.data;
  const slug = slugify(validatedData.title, { lower: true });
  const categoryFolder = validatedData.category.toLowerCase();

  try {
    // 3. Handle main image upload
    let mainImageName = validatedData.imageUrl || "";
    const imageFile = formData.get("imageFile");

    if (imageFile instanceof File && imageFile.size > 0) {
      const extension = imageFile.name.split(".").pop();
      mainImageName = `${slug}.${extension}`;
      const bufferedImage = await imageFile.arrayBuffer();
      
      await s3.putObject({
        Bucket: BUCKET_NAME,
        Key: `${categoryFolder}/images/${mainImageName}`,
        Body: Buffer.from(bufferedImage),
        ContentType: imageFile.type,
      });
    }

    // 4. Handle section image uploads
    const processedSections = await Promise.all(
      (validatedData.sections || []).map(async (section, index) => {
        const sectionSlug = slugify(section.title, { lower: true });
        let sectionImageName = section.imageUrl || "";
        
        const sectionImageFile = formData.get(`sectionImage_${index}`);
        if (sectionImageFile instanceof File && sectionImageFile.size > 0) {
          const extension = sectionImageFile.name.split(".").pop();
          sectionImageName = `${sectionSlug}.${extension}`;
          const sectionBufferedImage = await sectionImageFile.arrayBuffer();
          
          await s3.putObject({
            Bucket: BUCKET_NAME,
            Key: `${categoryFolder}/images/${sectionImageName}`,
            Body: Buffer.from(sectionBufferedImage),
            ContentType: sectionImageFile.type,
          });
        }

        return {
          ...section,
          slug: sectionSlug,
          image: sectionImageName,
          content: xss(section.content), // Sanitize content
        };
      })
    );

    // 5. Prepare final document
    const finalData = {
      ...validatedData,
      slug,
      image: mainImageName,
      sections: processedSections,
      description: xss(validatedData.description), // Sanitize description
    };

    // 6. Save to database directly
    const collectionName = "content_portals"; // Or based on category
    const result = await saveToDatabase(finalData, collectionName, "cosengwebsite");

    if (result.acknowledged) {
      revalidatePath("/blog", "layout");
      return {
        status: "successful",
        message: `You have successfully added a new ${validatedData.category}`,
      };
    }

    throw new Error("Insert not acknowledged");

  } catch (error) {
    console.error("Portal creation error:", error);
    return {
      status: "failed",
      message: "An error occurred processing your submit request. Please try again.",
    };
  }
}
