"use server";

export async function submitContactForm(prevState, formData) {
  const contactForm = {
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
  const baseURL = process.env.NEXT_PUBLIC_SITE_URL;
  try {
    const response = await fetch(`${baseURL}/api/enquiries`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactForm),
    });
    const result = await response.json();
    console.log(result);
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
