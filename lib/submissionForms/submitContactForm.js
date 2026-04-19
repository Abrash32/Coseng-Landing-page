"use server";

import { contactFormSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";
import { handleEnquiryEmail } from "../emails/handleEnquiryEmail";

export async function submitContactForm(prevState, formData) {
  // 1. Extract and validate data
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

  const validation = contactFormSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const validatedData = validation.data;

  try {
    // 2. Save to Database
    const result = await saveToDatabase(validatedData, "enquiries");

    if (result.acknowledged) {
      // 3. Send Confirmation Email (Optional but recommended)
      try {
        await handleEnquiryEmail(validatedData);
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
        // We still return success as the data is saved
      }

      return {
        status: "successful",
        message: "Your request has been sent successfully. We will get back to you shortly.",
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
