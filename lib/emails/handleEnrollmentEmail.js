import { sendEmail } from "@/lib/emails/sendgrid";
import { adminEnrollmentEmailTemplate } from "@/templates/enrollmentEmailTemplate/adminEnrollmentEmailTemplate";
import { userEnrollmentEmailTemplate } from "@/templates/enrollmentEmailTemplate/userEnrollmentEmailTemplate";
// import { adminEmailTemplate, userEmailTemplate } from '@/lib/emailTemplates'; // Ensure these exist

export async function handleEnrollmentEmail(userData) {
  try {
    // Synchronously generate HTML templates
    const adminHtmlContent = await adminEnrollmentEmailTemplate(userData);
    const userHtmlContent = await userEnrollmentEmailTemplate(userData);
    // Asynchronously send both emails concurrently
    // console.log(userData);
    await Promise.all([
      sendEmail(
        "contacts@coseng.co.uk",
        "New Enrollment Notification",
        adminHtmlContent,
        userData
      ),
      sendEmail(
        userData.email,
        "Your Enrollment Confirmation",
        userHtmlContent,
        userData
      ),
    ]);

    // console.log("✅ Emails sent to admin and user.");
  } catch (error) {
    return;
    // console.error("❌ Error sending emails:", error.message);
    // Handle errors (e.g., retry logic or error logging)
  }
}
