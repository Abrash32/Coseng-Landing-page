export function adminEnquiryEmailTemplate(userData) {
  return `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
      <h2 style="color: #2a7de1;">New Enquiry Received</h2>
      <p>A new enquiry has been submitted through the COSENG website.</p>
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${userData.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${userData.email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${userData.phone || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${userData.service || "N/A"}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
          <td style="padding: 8px; border: 1px solid #ddd;">${userData.message}</td>
        </tr>
      </table>
      <p style="margin-top: 20px;">Best regards,<br>COSENG Website Automator</p>
    </div>
  `;
}
