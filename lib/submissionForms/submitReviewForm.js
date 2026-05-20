"use server";

import { reviewFormSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";
import { revalidatePath } from "next/cache";

export async function submitReviewForm(prevState, formData) {
  const rawFormData = {
    name: formData.get("name"),
    company: formData.get("company"),
    message: formData.get("message"),
  };

  const validation = reviewFormSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const ratingValue = formData.get("rating");

  const validatedData = {
    ...validation.data,
    feedback: validation.data.message, // Map message to feedback to match UI
    stars: parseInt(ratingValue) || 5, // Capture dynamic rating
    createdAt: new Date()
  };

  try {
    const result = await saveToDatabase(validatedData, "reviews", "cosengwebsite");

    if (result.acknowledged) {
      revalidatePath("/");
      revalidatePath("/reviews");
      revalidatePath("/photography");
      return {
        status: "successful",
        message: "Thank you for your feedback! It has been submitted successfully.",
      };
    }
    
    throw new Error("Insert not acknowledged");
  } catch (error) {
    console.error("Submission error:", error);
    return {
      status: "failed",
      message: "Sorry! There was an error submitting your feedback. Please try again.",
    };
  }
}
