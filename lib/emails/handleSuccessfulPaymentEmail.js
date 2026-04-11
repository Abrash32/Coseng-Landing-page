import { sendEmail } from "@/lib/emails/sendgrid";
import { adminEmailTemplate } from "@/templates/paymentEmailTemplates/adminEmailTemplate";
import { userEmailTemplate } from "@/templates/paymentEmailTemplates/userEmailTemplate";
// import { adminEmailTemplate, userEmailTemplate } from '@/lib/emailTemplates'; // Ensure these exist

export async function handleSuccessfulPayment(userData, receiptUrl) {
  try {
    // Synchronously generate HTML templates
    const adminHtmlContent = await adminEmailTemplate(userData, receiptUrl);
    const userHtmlContent = await userEmailTemplate(userData, receiptUrl);

    // Asynchronously send both emails concurrently
    await Promise.all([
      sendEmail(
        "contacts@coseng.co.uk",
        "New Order/Payment Notification",
        adminHtmlContent,
        userData
      ),
      sendEmail(
        userData.email,
        "Your order/Payment Confirmation",
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
