import * as z from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectTitle: z.string().min(3, "Project title must be at least 3 characters"),
  projectDescription: z.string().min(10, "Project description must be at least 10 characters"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;