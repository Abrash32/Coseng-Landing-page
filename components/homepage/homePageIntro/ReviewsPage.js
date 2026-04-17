import { getFromDatabase } from "@/lib/getFromDatabase";
import ReviewsClient from "./ReviewsClient";

export default async function ReviewsPage() {
  let reviews = [];
  
  try {
    // Fetch latest 6 reviews from MongoDB
    reviews = await getFromDatabase("reviews", {}, { sort: { createdAt: -1 }, limit: 6 });
  } catch (error) {
    console.error("Failed to fetch reviews:", error);
    // Fallback or empty state is handled by passing empty array
  }

  return <ReviewsClient initialReviews={reviews} />;
}
