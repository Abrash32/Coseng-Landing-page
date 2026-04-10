"use server";

export async function submitTrainingForm(prevState, formData) {
  const contactForm = {
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
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    const response = await fetch(`${baseURL}/api/registrations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });
    const result = await response.json();
    if (result.data.acknowledged) {
      return {
        status: "successful",
        message: result.message,
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message: "Sorry!! There was an error sending your request. Try again",
    };
  }
}
