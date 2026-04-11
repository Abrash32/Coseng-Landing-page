"use server";

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
    };
  }
}
