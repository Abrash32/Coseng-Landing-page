import { connectToDb } from "@/lib/mongodb";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import { serviceSchema } from "@/lib/schemas";

export const dynamic = "force-dynamic";

const BUCKET_NAME = "coseng-limited-website-2024-files-bucket";
const s3 = new S3({
  region: "eu-north-1",
});

// GET: Fetch all services
export async function GET() {
  try {
    const db = await connectToDb("cosengwebsite");
     if (!db) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
    const servicesCollection = db.collection("services");
    const services = await servicesCollection.find({}).toArray();

    return NextResponse.json(services);
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}

// POST: Save a new service with image upload
export async function POST(request) {
  try {
    const formData = await request.formData();
    
    // 1. Extract and validate data
    const rawData = {
      title: formData.get("title"),
      summary: formData.get("summary"),
      instructions: formData.get("instructions") || undefined,
      creator: formData.get("creator"),
      creator_email: formData.get("creator_email"),
    };

    const validation = serviceSchema.safeParse(rawData);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const validatedData = validation.data;
    const slug = slugify(validatedData.title, { lower: true });
    
    const service = {
      ...validatedData,
      slug,
      summary: xss(validatedData.summary),
      instructions: xss(validatedData.instructions || ""),
      createdAt: new Date(),
    };

    // 2. Handle Image Upload
    const imageFile = formData.get("image");
    if (imageFile instanceof File && imageFile.size > 0) {
      const extension = imageFile.name.split(".").pop();
      const fileName = `${slug}.${extension}`;
      const bufferedImage = await imageFile.arrayBuffer();

      await s3.putObject({
        Bucket: BUCKET_NAME,
        Key: fileName,
        Body: Buffer.from(bufferedImage),
        ContentType: imageFile.type,
      });

      service.image = fileName;
    }

    // 3. Save to MongoDB
    const db = await connectToDb("cosengwebsite");
    if (!db) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
    const servicesCollection = db.collection("services");
    await servicesCollection.insertOne(service);

    return NextResponse.json(
      { message: "Service saved successfully", slug },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to save service:", error);
    return NextResponse.json(
      { error: "Failed to save service" },
      { status: 500 }
    );
  }
}
