import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Phone number is too short").optional().or(z.literal("")),
  company: z.string().optional().or(z.literal("")),
  service: z.string().optional().or(z.literal("")),
  category: z.string().optional().or(z.literal("")),
  address: z.string().optional().or(z.literal("")),
  consent: z.string().refine(val => val === "on" || val === "true", "Consent is required"),
  country: z.string().min(2, "Country is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const trainingFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is too short"),
  service: z.string().optional().or(z.literal("")),
  category: z.string().optional().or(z.literal("")),
  consent: z.string().refine(val => val === "on" || val === "true", "Consent is required"),
  country: z.string().min(2, "Country is required"),
  currency: z.string().optional().or(z.literal("")),
  program: z.string().min(1, "Program is required"),
  eventVenue: z.string().default("Microsoft Teams"),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  eventLink: z.string().optional(),
});

export const adminSigninSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password is too short"),
  loginid: z.string().min(1, "Login ID is required"),
});

export const sectionSchema = z.object({
  title: z.string().min(1, "Section title is required"),
  content: z.string().min(1, "Section content is required"),
  imageUrl: z.string().optional(),
});

export const createPortalSchema = z.object({
  category: z.string().min(1, "Category is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  author: z.string().min(1, "Author is required"),
  eventDate: z.string().optional(),
  eventTime: z.string().optional(),
  eventVenue: z.string().optional(),
  eventLink: z.string().optional(),
  imageUrl: z.string().optional(),
  sections: z.array(sectionSchema).optional(),
});

export const interestFormSchema = contactFormSchema; 

export const interviewPrepSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is too short"),
  subject: z.string().min(1, "Subject is required"),
  consent: z.string().refine(val => val === "on" || val === "true", "Consent is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export const photographyBookingSchema = interviewPrepSchema; 

export const programEnrollSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional().default("N/A"),
  company: z.string().optional(),
  service: z.string().optional(),
  address: z.string().optional().default("N/A"),
  country: z.string().optional().default("N/A"),
  message: z.string().optional().default("N/A"),
  consent: z.string().refine(val => val === "on" || val === "true", "Consent is required"),
  type: z.string().optional(),
  program: z.string().optional(),
  category: z.string().optional(),
  price: z.string().optional().default("N/A"),
  description: z.string().optional().default("N/A"),
  duration: z.string().optional().default("N/A"),
  collection: z.string().min(1, "Collection name is required"),
});

export const serviceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  summary: z.string().min(1, "Summary is required"),
  instructions: z.string().optional(),
  creator: z.string().min(1, "Creator name is required"),
  creator_email: z.string().email("Invalid creator email"),
});

export const reviewFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().optional().or(z.literal("")),
  message: z.string().min(10, "Feedback must be at least 10 characters"),
});
