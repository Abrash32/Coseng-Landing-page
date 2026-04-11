import { sendEmail } from "@/lib/emails/sendgrid";
import { userInterestEmailTemplate } from "@/templates/enquiryEmailTemplates/userInterestEmailTemplate";

export async function handleInterestRegistrationEmail(userData) {
  try {
    // Synchronously generate HTML templates
    // const adminHtmlContent = await adminEnquiryEmailTemplate(userData);
    const userHtmlContent = await userInterestEmailTemplate(userData);

    // Asynchronously send both emails concurrently
    await Promise.all([
      // sendEmail(
      //   "contacts@coseng.co.uk",
      //   "New Enquiry Notification",
      //   adminHtmlContent,
      //   userData
      // ),
      sendEmail(
        userData.email,
        "Interest Registration Confirmation",
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
