"use server";

import { trainingFormSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";
import { handleTrainingEmail } from "../emails/handleTrainingEmail";

export async function submitTrainingForm(prevState, formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    service: formData.get("service"),
    category: formData.get("category"),
    consent: formData.get("consent"),
    country: formData.get("country"),
    currency: formData.get("currency"),
    program: formData.get("program"),
    eventVenue: "Microsoft Teams",
    eventDate: "13th Sep 2025",
    eventTime: "9:00 AM (GMT)",
    eventLink: "https://teams.microsoft.com/meet/3124752537706?p=ivywMq4wdNMegKicJq",
  };

  const validation = trainingFormSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const validatedData = validation.data;

  try {
    const result = await saveToDatabase(validatedData, "registrations");

    if (result.acknowledged) {
      try {
        await handleTrainingEmail(validatedData);
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      return {
        status: "successful",
        message: "Your registration for the training program was successful.",
      };
    }
    
    throw new Error("Insert not acknowledged");
  } catch (error) {
    console.error("Submission error:", error);
    return {
      status: "failed",
      message: "Sorry!! There was an error sending your request. Try again",
    };
  }
}
