"use server";

import { reviewFormSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";

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
      message: "Validation failed: " + validation.error.errors.map(e => e.message).join(", "),
    };
  }

  const validatedData = validation.data;

  try {
    const result = await saveToDatabase(validatedData, "client_reviews", "cosengwebsite");

    if (result.acknowledged) {
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
