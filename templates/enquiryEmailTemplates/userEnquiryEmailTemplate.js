export function userEnquiryEmailTemplate(userData) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2a7de1;">Thank You for Reaching Out, ${userData.name}!</h2>
      <p>We've received your enquiry and our team will get back to you shortly.</p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-top: 20px;">
        <h3 style="margin-top: 0; color: #555;">Details of your enquiry:</h3>
        <p><strong>Service:</strong> ${userData.service || "General Inquiry"}</p>
        <p><strong>Message Summary:</strong> ${userData.message.substring(0, 100)}...</p>
      </div>
      <p style="margin-top: 20px;">In the meantime, feel free to browse our <a href="https://www.coseng.co.uk/services" style="color: #2a7de1;">latest services</a>.</p>
      <p>Best regards,<br>The COSENG Team</p>
    </div>
  `;
}
