"use server";

import { revalidatePath } from "next/cache";

const BaseURI = process.env.NEXT_PUBLIC_SITE_URL;

export async function submitReviewForm(prevState, formData) {
  const reviewForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    rating: formData.get("rating") || "5",
    consent: formData.get("consent"),
    review: formData.get("review") || formData.get("message"),
  };
  try {
    const response = await fetch(`${BaseURI}/api/reviews`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reviewForm),
    });
    const result = await response.json();
    if (result.data.acknowledged) {
      revalidatePath("/reviews", "layout");
      revalidatePath("/", "layout");
      return {
        status: "successful",
        message: result.message,
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message:
        "Sorry!! There was an error sending your review/rating. Try again",
    };
  }
}
