"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = { type: "idle", message: "" };
const WEB3FORMS_URL = "https://api.web3forms.com/submit";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus({
        type: "error",
        message: "Contact form is not configured yet.",
      });
      setIsSubmitting(false);
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", `MTN Investments inquiry: ${formData.get("interest") || "Website inquiry"}`);
    formData.append("from_name", "MTN Investments Website");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData)),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || "Unable to send your message right now.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent. We will get back to you shortly.",
      });
      form.reset();
    } catch (error) {
      setStatus({
        type: "error",
        message: error instanceof Error ? error.message : "Unable to send your message.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      className="rounded-lg border border-[#dce5f3] bg-white p-5 shadow-[0_18px_50px_rgba(0,48,135,0.11)] sm:p-7"
      onSubmit={handleSubmit}
    >
      <p className="mb-3 font-mono text-xs font-extrabold uppercase text-[#0a55c7]">Contact Form</p>
      <h2 className="font-serif text-2xl font-bold text-[#071327] sm:text-3xl">Request a conversation</h2>
      <p className="mt-3 text-sm leading-6 text-[#5d6c87]">
        Share your details and the team will respond through the right institutional track.
      </p>

      <div className="mt-6 grid gap-4">
        <input className="hidden" name="botcheck" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="grid gap-2 text-sm font-bold text-[#071327]">
            Name
            <input
              className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
              type="text"
              name="name"
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-2 text-sm font-bold text-[#071327]">
            Work email
            <input
              className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
              type="email"
              name="email"
              placeholder="you@company.com"
              required
            />
          </label>
        </div>

        <label className="grid gap-2 text-sm font-bold text-[#071327]">
          Interest
          <select
            className="rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
            name="interest"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Select a track
            </option>
            <option>Tokenization</option>
            <option>Wallet and settlement</option>
            <option>Exchange infrastructure</option>
            <option>Sovereign EVM network</option>
          </select>
        </label>

        <label className="grid gap-2 text-sm font-bold text-[#071327]">
          Message
          <textarea
            className="min-h-32 resize-y rounded-lg border border-[#dce5f3] bg-[#fbfdff] px-4 py-3 font-normal outline-none transition focus:border-[#003087]"
            name="message"
            placeholder="Tell us what you want to build"
            required
          />
        </label>

        {status.type !== "idle" && (
          <div
            className={
              status.type === "success"
                ? "flex items-start gap-2 rounded-lg border border-[#13845f]/20 bg-[#13845f]/10 p-3 text-sm text-[#0f684b]"
                : "rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            }
          >
            {status.type === "success" && <CheckCircle2 className="mt-0.5 shrink-0" size={16} aria-hidden />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg bg-[#003087] px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} aria-hidden /> Sending
            </>
          ) : (
            <>
              Send Inquiry <ArrowRight size={16} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
