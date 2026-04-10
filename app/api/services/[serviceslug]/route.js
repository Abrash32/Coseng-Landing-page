import Services from "@/app/services/page";
import { MongoClient } from "mongodb";

import { NextResponse } from "next/server";

const client = new MongoClient(process.env.MONGODB_URI);
const dbName = "cosengwebsite";
let db;

async function connectToDb() {
  if (!db) {
    await client.connect();
    db = client.db(dbName); // Get the services database
  }
}

export async function GET(request, { params }) {
  let slug = params.serviceslug; // Get the slug from the URL

  try {
    await connectToDb();
    const servicesCollection = db.collection("services");
    // Fetch the service by slug
    const service = await servicesCollection.findOne({ slug });
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service); // Return the service as JSON
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}
