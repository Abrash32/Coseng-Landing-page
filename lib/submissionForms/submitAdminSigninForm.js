"use server";
const baseURL = process.env.NEXT_PUBLIC_SITE_URL || window.location.origin;
export async function submitAdminSigninForm(prevState, formData) {
  const contactForm = {
    password: formData.get("password"),
    email: formData.get("email"),
    loginid: formData.get("loginid"),
  };
  try {
    const response = await fetch(`${baseURL}/api/signin`, {
      method: "POST",
      body: JSON.stringify(contactForm),
      headers: {
        "Content-Type": "application/json",
      },
    });

    // Check if response is OK and if there’s content to parse
    if (!response.ok) {
      return {
        status: "failed",
        message: "Login request failed. Check your details.",
      };
    }

    // Attempt to parse JSON only if content is present
    const resultText = await response.text();
    const result = resultText ? JSON.parse(resultText) : {};
    if (result.status === 200) {
      return {
        status: "successful",
        message: result.message,
        userData: result.data,
      };
    } else {
      return {
        status: "failed",
        message: result.message || "Login request failed. Check your details.",
      };
    }
  } catch (error) {
    return {
      status: "failed",
      message:
        "Sorry!! There was an error approving your login request. Try again",
    };
  }
}
