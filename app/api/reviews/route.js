import { connectToDb } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import { reviewFormSchema } from "@/lib/schemas";

export const dynamic = "force-dynamic";

// GET: Fetch all reviews
export async function GET() {
  try {
    const db = await connectToDb("cosengwebsite");
    if (!db) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
    const reviewsCollection = db.collection("reviews");
    const reviews = await reviewsCollection.find({}).sort({ createdAt: -1 }).toArray();

    return NextResponse.json(reviews);
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    return NextResponse.json(
      { error: "Failed to fetch reviews" },
      { status: 500 }
    );
  }
}

// POST: Save a new review
export async function POST(request) {
  try {
    const body = await request.json();
    
    // Extract data
    const rawData = {
      name: body.name,
      company: body.company || "",
      message: body.message || body.feedback || body.review,
    };

    const validation = reviewFormSchema.safeParse(rawData);
    if (!validation.success) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.error.errors },
        { status: 400 }
      );
    }

    const validatedData = validation.data;
    const rating = parseInt(body.rating || body.stars) || 5;

    const review = {
      ...validatedData,
      feedback: validatedData.message,
      stars: rating,
      createdAt: new Date(),
    };

    const db = await connectToDb("cosengwebsite");
    if (!db) {
      return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
    }
    const reviewsCollection = db.collection("reviews");
    const result = await reviewsCollection.insertOne(review);

    return NextResponse.json(
      { message: "Review submitted successfully", id: result.insertedId },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to submit review:", error);
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    );
  }
}
