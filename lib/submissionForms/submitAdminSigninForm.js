"use server";

import { adminSigninSchema } from "../schemas";
import { connectToDb } from "../mongodb";

export async function submitAdminSigninForm(prevState, formData) {
  const rawFormData = {
    email: formData.get("email"),
    password: formData.get("password"),
    loginid: formData.get("loginid"),
  };

  const validation = adminSigninSchema.safeParse(rawFormData);

  if (!validation.success) {
    return {
      status: "failed",
      message: "Validation failed: " + validation.error.errors.map(e => e.message).join(", "),
    };
  }

  const { email, password, loginid } = validation.data;

  try {
    const db = await connectToDb("cosengwebsite");
    const admin = await db.collection("admins").findOne({ 
      email: email,
      loginid: loginid 
      // In a real app, passwords should be hashed (e.g., with bcrypt)
    });

    if (admin && admin.password === password) {
      // Remove sensitive data before returning
      const { password: _, ...adminData } = admin;
      
      return {
        status: "successful",
        message: "Login successful.",
        userData: adminData,
      };
    } else {
      return {
        status: "failed",
        message: "Invalid email, password, or Login ID.",
      };
    }
  } catch (error) {
    console.error("Admin signin error:", error);
    return {
      status: "failed",
      message: "Sorry!! There was an error approving your login request. Try again",
    };
  }
}
