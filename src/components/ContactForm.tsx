import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Input } from "./ui/input";
import { buttonVariants } from "./ui/button";

const SHOOT_TYPES = [
  "Portraits",
  "Headshots",
  "Grad",
  "Couple",
  "Engagement",
  "Wedding",
  "Family",
  "Maternity",
  "E-commerce",
  "Other",
] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  shootType: string;
  message: string;
}

const formatPhone = (value: string) => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
};

export const ContactForm = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    shootType: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          phone: form.phone,
          shoot_type: form.shootType,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      setStatus("success");
      setForm({ name: "", email: "", phone: "", shootType: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="container text-center py-24 sm:py-32">
      <h2 className="text-3xl lg:text-4xl font-bold">
        Get in{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Touch!
        </span>
      </h2>
      <p className="md:w-3/4 mx-auto mt-4 mb-10 text-l text-muted-foreground">
        Have a project in mind? Send a message and let's make it happen.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto max-w-lg flex flex-col gap-4 text-left"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="name" className="text-sm font-medium">
            Name
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="email" className="text-sm font-medium">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="your@email.com"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-sm font-medium">
            Phone Number
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(xxx) xxx-xxxx"
            value={form.phone}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, phone: formatPhone(e.target.value) }))
            }
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="shootType" className="text-sm font-medium">
            Type of Photoshoot
          </label>
          <select
            id="shootType"
            name="shootType"
            value={form.shootType}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, shootType: e.target.value }))
            }
            required
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="" disabled>
              Select a session type
            </option>
            {SHOOT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about the shoot in mind..."
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className={`w-full ${buttonVariants({ variant: "outline" })} disabled:opacity-50`}
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="text-center text-sm text-green-600 dark:text-green-400">
            Message sent successfully! I'll be in touch soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-sm text-red-600 dark:text-red-400">
            Something went wrong. Please try again.
          </p>
        )}
      </form>
    </section>
  );
};
