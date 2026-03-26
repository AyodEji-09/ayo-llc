"use client";

import { Button } from "../ui/button";
import { FieldGroup, FieldSet } from "../ui/field";
import CustomInput from "./custom-input";
import { useState, FormEvent } from "react";
import { toast } from "sonner";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      // Show success toast
      toast.success("Message sent successfully! We'll get back to you soon.");

      // Clear form fields
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      // Show error toast
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form className="mx-auto max-w-4xl" onSubmit={handleSubmit}>
      <FieldSet>
        <FieldGroup>
          <div data-aos="fade-up" data-aos-delay="100">
            <CustomInput
              name="name"
              type="text"
              placeholder="Name"
              value={formData.name}
              onChange={(value) => handleChange("name", value)}
              required
              disabled={isLoading}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="200">
            <CustomInput
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={(value) => handleChange("email", value)}
              required
              disabled={isLoading}
            />
          </div>
          <div data-aos="fade-up" data-aos-delay="300">
            <CustomInput
              name="message"
              type="textarea"
              placeholder="Message"
              value={formData.message}
              onChange={(value) => handleChange("message", value)}
              required
              disabled={isLoading}
            />
          </div>
        </FieldGroup>

        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            type="submit"
            disabled={isLoading}
            className="bg-secondary h-auto w-full cursor-pointer rounded-sm py-3 text-sm transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
          >
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default CustomForm;
