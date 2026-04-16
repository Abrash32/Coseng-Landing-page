import { sendEmail } from "@/lib/emails/sendgrid";
import { adminEnquiryEmailTemplate } from "@/templates/enquiryEmailTemplates/adminEnquiryEmailTemplate";
import { userEnquiryEmailTemplate } from "@/templates/enquiryEmailTemplates/userEnquiryEmailTemplate";

export async function handleEnquiryEmail(userData) {
  try {
    // Generate HTML templates synchronously
    const adminHtmlContent = adminEnquiryEmailTemplate(userData);
    const userHtmlContent = userEnquiryEmailTemplate(userData);

    // Asynchronously send both emails concurrently
    await Promise.all([
      sendEmail(
        "contacts@coseng.co.uk",
        "New Enquiry Notification",
        adminHtmlContent,
        userData
      ),
      sendEmail(
        userData.email,
        "Your Enquiry Confirmation",
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
