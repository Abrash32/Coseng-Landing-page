import { sendEmail } from "@/lib/emails/sendgrid";
import { adminTrainingEmailTemplate } from "@/templates/trainingEmailTemplates/adminTrainingEmailTemplate";
import { userTrainingEmailTemplate } from "@/templates/trainingEmailTemplates/userTrainingEmailTemplate";
export async function handleTrainingEmail(userData) {
  try {
    // Synchronously generate HTML templates
    const adminHtmlContent = await adminTrainingEmailTemplate(userData);
    const userHtmlContent = await userTrainingEmailTemplate(userData);

    // Asynchronously send both emails concurrently
    await Promise.all([
      sendEmail(
        "contacts@coseng.co.uk",
        "New Training Registration",
        adminHtmlContent,
        userData
      ),
      sendEmail(
        "beatriceue@gmail.com",
        "New Training Registration",
        adminHtmlContent,
        userData
      ),
      sendEmail(
        userData.email,
        "Training Registration Confirmation",
        userHtmlContent,
        userData
      ),
    ]);
    // console.log("✅ Emails sent to admin and user.");
  } catch (error) {
    // console.error("❌ Error sending emails:", error.message);
    // Handle errors (e.g., retry logic or error logging)
  }
}
