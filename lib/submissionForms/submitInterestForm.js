"use server";

import { interestFormSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";
import { handleInterestRegistrationEmail } from "../emails/handleInterestRegistrationEmail";

export async function submitInterestForm(prevState, formData) {
  const rawFormData = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company"),
    service: formData.get("service"),
    category: formData.get("category"),
    address: formData.get("address"),
    consent: formData.get("consent"),
    country: formData.get("country"),
    message: formData.get("message"),
  };

  const validation = interestFormSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + validation.error.errors.map(e => e.message).join(", "),
    };
  }

  const validatedData = validation.data;

  try {
    const result = await saveToDatabase(validatedData, "interest_explorations");

    if (result.acknowledged) {
      try {
        await handleInterestRegistrationEmail(validatedData);
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      return {
        status: "successful",
        message: "Your interest has been registered. We will contact you shortly.",
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
