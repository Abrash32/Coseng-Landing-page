import sgMail from "@sendgrid/mail";
import { saveToDatabase } from "../saveToDatabase";

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Ensure your SendGrid API key is set in environment variables

/**
 * Sends an email using SendGrid.
 *
 * @param {string} to - Recipient email address.
 * @param {string} subject - Email subject.
 * @param {string} htmlContent - HTML content of the email.
 * @returns {Promise<void>} - A promise indicating success or failure.
 */
export async function sendEmail(to, subject, htmlContent, userData) {
  const msg = {
    to,
    from: "contacts@coseng.co.uk", // Ensure this email is verified in your SendGrid account
    subject,
    html: htmlContent,
  };

  try {
    await sgMail.send(msg);
    // console.log(`📧 Email sent successfully to ${to}`);
  } catch (error) {
    // console.error(
    //   `❌ Error sending email to ${to}:`,
    //   error.response ? error.response.body : error.message
    // );
    if (to.match("coseng")) {
      saveToDatabase(
        {
          sender: to,
          recipient: to,
          errorMessage: "Failed to send Email",
          ...userData,
        },
        "email-errors"
      );
    }
    throw new Error("Failed to send email");
  }
}
