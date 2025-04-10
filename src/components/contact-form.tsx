"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/schemas/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      // Here you would typically send the data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
      setIsSuccess(true);
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {isSuccess && (
        <div
          data-cy="success-message"
          className="bg-green-50 text-green-800 p-4 rounded-md mb-4"
        >
          Thank you for your message. We'll get back to you soon!
        </div>
      )}

      <div>
        <Input
          {...register("name")}
          placeholder="Your Name"
          className="w-full"
          aria-label="Name"
        />
        {errors.name && (
          <span data-cy="error-name" className="text-red-500 text-sm">
            {errors.name.message}
          </span>
        )}
      </div>

      <div>
        <Input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="w-full"
          aria-label="Email"
        />
        {errors.email && (
          <span data-cy="error-email" className="text-red-500 text-sm">
            {errors.email.message}
          </span>
        )}
      </div>

      <div>
        <Input
          {...register("projectTitle")}
          placeholder="Project Title"
          className="w-full"
          aria-label="Project Title"
        />
        {errors.projectTitle && (
          <span data-cy="error-projectTitle" className="text-red-500 text-sm">
            {errors.projectTitle.message}
          </span>
        )}
      </div>

      <div>
        <Textarea
          {...register("projectDescription")}
          placeholder="Project Description"
          className="w-full"
          rows={5}
          aria-label="Project Description"
        />
        {errors.projectDescription && (
          <span data-cy="error-projectDescription" className="text-red-500 text-sm">
            {errors.projectDescription.message}
          </span>
        )}
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}