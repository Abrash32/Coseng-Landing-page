import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request, { params }) {
  const { serviceslug } = await params;

  try {
    const db = await connectToDb("cosengwebsite");
    const servicesCollection = db.collection("services");
    
    // Fetch the service by slug
    const service = await servicesCollection.findOne({ slug: serviceslug });
    
    if (!service) {
      return NextResponse.json({ error: "Service not found" }, { status: 404 });
    }

    return NextResponse.json(service);
  } catch (error) {
    console.error(`Failed to fetch service ${serviceslug}:`, error);
    return NextResponse.json(
      { error: "Failed to fetch service" },
      { status: 500 }
    );
  }
}
