"use server";

<<<<<<< HEAD
export async function submitProgramEnrollForm(state, formData) {
  try {
    // You can process the formData here or send an email/save to db etc.
    console.log("Enrollment form submitted", formData);

    // Mock delay to simulate network request
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      status: "successful",
      message: "Form was submitted successfully!",
    };
  } catch (error) {
    return {
      status: "failed",
      message: "An error occurred while submitting the form. Please try again.",
=======
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
>>>>>>> ae2a57fd14bbbc289d20cfc65950a68220020f38
    };
  }
}
