"use client";

import { Button } from "../ui/button";
import { FieldGroup, FieldSet } from "../ui/field";
import CustomInput from "./custom-input";
import { useState, FormEvent } from "react";

const CustomForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

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

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error ? error.message : "Something went wrong",
      );

      // Reset error message after 5 seconds
      setTimeout(() => {
        setStatus("idle");
        setErrorMessage("");
      }, 5000);
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
              disabled={status === "loading"}
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
              disabled={status === "loading"}
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
              disabled={status === "loading"}
            />
          </div>
        </FieldGroup>

        {/* Success Message */}
        {status === "success" && (
          <div
            className="mb-4 rounded-sm bg-green-50 p-4 text-center text-sm text-green-800 sm:text-base"
            data-aos="fade-up"
          >
            ✓ Message sent successfully! We'll get back to you soon.
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div
            className="mb-4 rounded-sm bg-red-50 p-4 text-center text-sm text-red-800 sm:text-base"
            data-aos="fade-up"
          >
            ✗ {errorMessage}
          </div>
        )}

        <div data-aos="fade-up" data-aos-delay="400">
          <Button
            type="submit"
            disabled={status === "loading"}
            className="bg-secondary h-auto w-full cursor-pointer rounded-sm py-3 text-sm transition-all duration-200 hover:scale-[1.02] hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 sm:text-base"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </FieldSet>
    </form>
  );
};

export default CustomForm;
