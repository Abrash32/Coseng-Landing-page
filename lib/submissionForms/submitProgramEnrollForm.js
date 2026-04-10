"use server";

import { revalidatePath } from "next/cache";

export async function submitProgramEnrollForm(prevState, formData) {
  const enrollForm = {
    name: formData.name,
    email: formData.email,
    phone: formData.phone || "N/A",
    company: formData.company,
    service: formData.service,
    address: formData.address || "N/A",
    country: formData.country || "N/A",
    message: formData.message || "N/A",
    consent: formData.consent,
    type: formData.type,
    program: formData.program,
    category: formData.category,
    price: formData.price || "N/A",
    description: formData.description || "N/A",
    duration: formData.duration || "N/A",
    collection: formData.collection,
  };
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const response = await fetch(`${baseURL}/api/enrollments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(enrollForm),
    });
    const result = await response.json();
    revalidatePath("/services", "layout");
    if (result.data.acknowledged) {
      return {
        status: "successful",
        message: result.message,
      };
    }
    console.log(result);
  } catch (error) {
    return {
      status: "failed",
      message: "Sorry!! There was an error sending your request. Try again",
    };
  }
}
