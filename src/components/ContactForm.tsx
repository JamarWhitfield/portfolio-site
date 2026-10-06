"use client";

import { useRef, useState } from "react";

const panelClassName = "rounded-3xl border border-slate-800/90 bg-slate-900/32 backdrop-blur-sm";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formStatus === "sending") return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    setFormStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData
      });

      if (response.ok) {
        setFormStatus("success");
        formRef.current?.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  };

  return (
    <form ref={formRef} className={`${panelClassName} grid gap-4 p-5 sm:p-6`} onSubmit={handleSubmit}>
      <input type="hidden" name="access_key" value="49cd1fe2-5206-46db-a18d-48362a69afe2" />
      <div className="grid gap-4 md:grid-cols-2">
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Name
          <input
            name="name"
            autoComplete="name"
            required
            className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
            placeholder="Your name"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300">
          Email
          <input
            type="email"
            name="email"
            autoComplete="email"
            required
            className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
            placeholder="you@example.com"
          />
        </label>
        <label className="flex flex-col gap-2 text-sm text-slate-300 md:col-span-2">
          Subject
          <input
            name="subject"
            autoComplete="off"
            required
            className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
            placeholder="Subject"
          />
        </label>
      </div>
      <label className="flex flex-col gap-2 text-sm text-slate-300">
        Message
        <textarea
          name="message"
          autoComplete="off"
          required
          rows={5}
          className="rounded-xl border border-slate-700 bg-transparent px-4 py-3 text-base text-white outline-none ring-accent/40 transition focus:border-slate-500 focus:ring"
          placeholder="Write your message..."
        />
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:opacity-70 sm:w-fit"
        disabled={formStatus === "sending"}
      >
        {formStatus === "sending" ? "Sending..." : "Send Message →"}
      </button>
      <p className="min-h-5 text-sm text-slate-400" aria-live="polite">
        {formStatus === "success" && "Message sent. I’ll get back to you soon."}
        {formStatus === "error" && "Something went wrong. Please try again."}
      </p>
    </form>
  );
}
