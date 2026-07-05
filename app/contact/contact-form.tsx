"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const initialStatus: FormStatus = { type: "idle", message: "" };
const WEB3FORMS_URL = "https://api.web3forms.com/submit";
const WEB3FORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "fb0e8641-b425-4ad2-88a0-40691270eb6e";

const inputClass =
  "min-h-10 rounded-[10px] border border-[#cdd9ed] bg-[#f5f8ff] px-4 text-xs text-[#182035] outline-none transition duration-300 placeholder:text-[#9aaac2] focus:border-[#004aad] focus:bg-white focus:shadow-[0_0_0_3px_rgba(0,74,173,0.08)]";

export function ContactForm() {
  const [status, setStatus] = useState<FormStatus>(initialStatus);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", `MTN Investments inquiry: ${formData.get("enquiry_type") || "Website inquiry"}`);
    formData.append("from_name", "MTN Investments Website");

    try {
      const response = await fetch(WEB3FORMS_URL, {
        method: "POST",
        body: formData,
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
        message: result?.message || "Your partnership enquiry has been sent. We will get back to you shortly.",
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
      className="rounded-[10px] bg-white p-5 shadow-[0_18px_50px_rgba(0,48,135,0.10)] sm:p-8 lg:p-9"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-5">
        <input className="hidden" name="botcheck" tabIndex={-1} autoComplete="off" />

        <div className="grid gap-5 md:grid-cols-2">
          <label className="grid gap-2 text-[11px] font-bold text-[#182035]">
            Full Name
            <input className={inputClass} type="text" name="name" placeholder="Dr. Sarah Al-Rashidi" required />
          </label>

          <label className="grid gap-2 text-[11px] font-bold text-[#182035]">
            Organisation
            <input className={inputClass} type="text" name="organisation" placeholder="Zenith Capital LLC" required />
          </label>
        </div>

        <label className="grid gap-2 text-[11px] font-bold text-[#182035]">
          Business Email
          <input className={inputClass} type="email" name="email" placeholder="sarah@zenithcapital.com" required />
        </label>

        <label className="grid max-w-[480px] gap-2 text-[11px] font-bold text-[#182035]">
          Enquiry Type
          <select className={inputClass} name="enquiry_type" defaultValue="" required>
            <option value="" disabled>
              Select an enquiry type
            </option>
            <option>Tokenization</option>
            <option>Wallet and settlement</option>
            <option>Exchange infrastructure</option>
            <option>Private EVM network</option>
            <option>Strategic partnership</option>
          </select>
        </label>

        <label className="grid max-w-[680px] gap-2 text-[11px] font-bold text-[#182035]">
          Message
          <textarea
            className={`${inputClass} min-h-[122px] resize-y py-3`}
            name="message"
            placeholder="Briefly describe your organisation and the project scope..."
            required
          />
        </label>

        {status.type !== "idle" && (
          <div
            className={
              status.type === "success"
                ? "flex items-start gap-2 rounded-[10px] border border-[#13845f]/20 bg-[#13845f]/10 p-3 text-sm text-[#0f684b]"
                : "rounded-[10px] border border-red-200 bg-red-50 p-3 text-sm text-red-700"
            }
          >
            {status.type === "success" && <CheckCircle2 className="mt-0.5 shrink-0" size={16} aria-hidden />}
            <span>{status.message}</span>
          </div>
        )}

        <button
          className="inline-flex min-h-[58px] items-center justify-center gap-2 rounded-[10px] bg-[#004aad] px-5 py-3 text-xs font-bold text-white shadow-[0_14px_28px_rgba(0,74,173,0.28)] transition duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="animate-spin" size={16} aria-hidden /> Sending
            </>
          ) : (
            <>
              Submit Partnership Enquiry <ArrowRight size={14} aria-hidden />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
