"use server";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";
import { revalidatePath } from "next/cache";
const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
const s3 = new S3({
  region: "eu-north-1",
});

export async function submitCreatePortalForm(formData) {
  const category = xss(formData.get("category"));
  const title = xss(formData.get("title"));
  const description = xss(formData.get("description"));
  const author = xss(formData.get("author"));
  const eventDate = xss(formData.get("eventDate"));
  const eventTime = xss(formData.get("eventTime"));
  const eventVenue = xss(formData.get("eventVenue"));
  const eventLink = xss(formData.get("eventLink"));
  const imageUrl = xss(formData.get("imageUrl"));
  const imageFile =
    formData.get("imageFile") instanceof File
      ? formData.get("imageFile")
      : null;

  const sections = JSON.parse(formData.get("sections") || "[]").map(
    (section, index) => {
      const sectionImageFile = formData.get(`sectionImage_${index}`);
      return {
        ...section,
        imageFile: sectionImageFile instanceof File ? sectionImageFile : null,
      };
    }
  );

  try {
    const slug = slugify(title, { lower: true });
    let fileName;

    if (imageFile) {
      const extension = imageFile.name.split(".").pop();
      fileName = `${slug}.${extension}`;
      const bufferedImage = await imageFile.arrayBuffer();
      await s3.putObject({
        Bucket: "coseng-limited-documentations-cloud-uploads",
        Key: `${category.toLowerCase()}/images/${fileName}`,
        Body: Buffer.from(bufferedImage),
        ContentType: imageFile.type,
      });
    }

    const processedSections = await Promise.all(
      sections.map(async (section) => {
        const sectionSlug = slugify(section.title, { lower: true });
        let sectionFileName;

        if (section.imageFile) {
          const extension = section.imageFile.name.split(".").pop();
          sectionFileName = `${sectionSlug}.${extension}`;
          const sectionBufferedImage = await section.imageFile.arrayBuffer();
          await s3.putObject({
            Bucket: "coseng-limited-documentations-cloud-uploads",
            Key: `${category.toLowerCase()}/images/${sectionFileName}`,
            Body: Buffer.from(sectionBufferedImage),
            ContentType: section.imageFile.type,
          });
        }

        return {
          title: section.title,
          content: section.content,
          slug: sectionSlug,
          imageUrl: section.imageUrl || "",
          image: sectionFileName,
        };
      })
    );

    const formBody = {
      title,
      description,
      slug,
      category,
      author,
      image: fileName || imageUrl,
      sections: processedSections,
      createdAt: new Date(),
    };

    if (category === "Events") {
      formBody.eventDate = eventDate;
      formBody.eventTime = eventTime;
      formBody.eventVenue = eventVenue;
      formBody.eventLink = eventLink;
    }

    const res = await fetch(`${baseURL}/api/blognewsevent`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formBody),
    });

    const result = await res.json();
    revalidatePath("/blog", "layout");
    // Ensure the result returned is a plain object
    return {
      message: `You have successfully added a new ${category.slice(0, -1)}`,
      status: "successful",
    };
  } catch (error) {
    return {
      message:
        "An error occurred processing your submit request. Please try again.",
      status: "failed",
    };
  }
}
