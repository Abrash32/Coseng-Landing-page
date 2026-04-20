export function userEnrollmentEmailTemplate(userData) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2a7de1;">Enrollment Confirmed, ${userData.name}!</h2>
      <p>Thank you for enrolling with COSENG. We've received your enrollment and our team will be in touch shortly with further details.</p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; border: 1px solid #ddd; margin-top: 20px;">
        <h3 style="margin-top: 0; color: #555;">Your Enrollment Details:</h3>
        <p><strong>Program:</strong> ${userData.program || "N/A"}</p>
        <p><strong>Service:</strong> ${userData.service || "General"}</p>
        <p><strong>Category:</strong> ${userData.category || "N/A"}</p>
        <p><strong>Price:</strong> ${userData.price || "N/A"}</p>
        <p><strong>Duration:</strong> ${userData.duration || "N/A"}</p>
      </div>
      <p style="margin-top: 20px;">In the meantime, feel free to browse our <a href="https://www.coseng.co.uk/services" style="color: #2a7de1;">latest services</a>.</p>
      <p>Best regards,<br>The COSENG Team</p>
    </div>
  `;
}
