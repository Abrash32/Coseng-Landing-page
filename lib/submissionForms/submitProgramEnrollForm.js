"use server";

import { revalidatePath } from "next/cache";
import { programEnrollSchema } from "../schemas";
import { saveToDatabase } from "../saveToDatabase";
import { handleEnrollmentEmail } from "../emails/handleEnrollmentEmail";

export async function submitProgramEnrollForm(prevState, formData) {
  // formData in this file was passed as a plain object from the client (looking at the old code)
  // But standard Server Actions use FormData. I will support the plain object structure 
  // if it's already integrated that way, but ideally it should be FormData.
  // The old code did: const enrollForm = { name: formData.name, ... }
  
  const rawData = formData instanceof FormData ? Object.fromEntries(formData.entries()) : formData;

  const validation = programEnrollSchema.safeParse(rawData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + (validation.error?.issues?.map(e => e.message).join(", ") || "Invalid form data"),
    };
  }

  const validatedData = validation.data;
  const collectionName = validatedData.collection || "enrollments";

  try {
    const result = await saveToDatabase(validatedData, collectionName);
    
    revalidatePath("/services", "layout");

    if (result.acknowledged) {
      try {
        await handleEnrollmentEmail(validatedData);
      } catch (emailError) {
        console.error("Email notification failed:", emailError);
      }

      return {
        status: "successful",
        message: "You have successfully enrolled in the program.",
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
