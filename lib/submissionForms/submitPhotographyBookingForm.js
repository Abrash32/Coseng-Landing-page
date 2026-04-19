"use server";

import { photographyBookingSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";

export async function submitPhotographyBookingForm(prevState, formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    consent: formData.get("consent"),
    message: formData.get("message"),
  };

  const validation = photographyBookingSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const validatedData = validation.data;

  try {
    const result = await saveToDatabase(validatedData, "photography_bookings");

    if (result.acknowledged) {
      return {
        status: "successful",
        message: "Your photography session has been booked successfully.",
      };
    }

    throw new Error("Insert not acknowledged");
  } catch (error) {
    console.error("Submission error:", error);
    return {
      status: "failed",
      message: "Sorry! There was an error sending your request. Please try again.",
    };
  }
}
