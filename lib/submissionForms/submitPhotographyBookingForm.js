"use server";

export async function submitPhotographyBookingForm(prevState, formData) {
  const contactForm = {
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    consent: formData.get("consent"),
    message: formData.get("message"),
  };
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL;

  try {
    const response = await fetch(`${baseURL}/api/photographybooking`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(contactForm),
    });

    if (!response.ok) throw new Error("Network response was not ok");

    const result = await response.json();
    if (result?.data?.acknowledged) {
      return {
        status: "successful",
        message: result.message,
      };
    } else {
      throw new Error("Failed to submit form");
    }
  } catch (error) {
    // console.error("Error submitting form:", error);
    return {
      status: "failed",
      message:
        "Sorry! There was an error sending your request. Please try again.",
    };
  }
}
