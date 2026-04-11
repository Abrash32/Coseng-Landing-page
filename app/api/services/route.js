import { MongoClient } from "mongodb";
import slugify from "slugify";
import xss from "xss";
import { S3 } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";
import formidable from "formidable";
import fs from "fs/promises"; // For file handling
export const dynamic = "force-dynamic";

const dbName = "cosengwebsite";
let db;

async function connectToDb() {
  if (!db) {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI environment variable is not defined");
    }
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(dbName); // Get the services database
  }
}

async function parseFormData(request) {
  const form = formidable({ multiples: true });

  return new Promise((resolve, reject) => {
    form.parse(request, (err, fields, files) => {
      if (err) reject(err);
      resolve({ fields, files });
    });
  });
}

// POST: Save a new service with file upload
export async function POST(request) {
  try {
    await connectToDb();

    // Parse incoming form data
    const { fields, files } = await parseFormData(request);

    // Get service data from the form fields
    const service = {
      title: fields.title,
      slug: slugify(fields.title, { lower: true }),
      summary: xss(fields.summary),
      instructions: xss(fields.instructions),
      creator: fields.creator,
      creator_email: fields.creator_email,
    };

    // If there is an image, process it
    if (files.image) {
      const imageFile = files.image[0]; // If multiple, take the first file
      const extension = imageFile.originalFilename.split(".").pop();
      const fileName = `${service.slug}.${extension}`;

      // Upload the image to S3
      const s3 = new S3({
        region: "eu-north-1",
      });
      const fileBuffer = await fs.readFile(imageFile.filepath); // Read the file buffer
      await s3.putObject({
        Bucket: "coseng-limited-website-2024-files-bucket",
        Key: fileName,
        Body: fileBuffer,
        ContentType: imageFile.mimetype,
      });

      // Set the file name as the image path
      service.image = fileName;
    }

    // Insert the service document into MongoDB
    const servicesCollection = db.collection("services");
    await servicesCollection.insertOne(service);

    return NextResponse.json(
      { message: "Service saved successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to save service" },
      { status: 500 }
    );
  }
}

export async function GET(request) {
  try {
    await connectToDb();
    const servicesCollection = db.collection("services");
    const services = await servicesCollection.find({}).toArray();
    if (!services) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(services); // Return the service as JSON
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}
