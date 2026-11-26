"use client";

import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export const categories = [
  { id: "business", label: "Business Advisory", text: "Structure, operational clarity and growth." },
  { id: "workforce", label: "Workforce & Recruitment Advisory", text: "Roles, systems and staffing strategy." },
  { id: "speaking", label: "Speaking & Training", text: "Keynotes, panels, workshops and development programmes." },
  { id: "partnerships", label: "Partnerships & Media", text: "Collaborations, interviews and strategic opportunities." },
];

const field =
  "mt-1.5 w-full rounded-xl border-2 border-deep/25 bg-white px-4 py-3 text-base text-ink focus:border-sea focus:outline-none";

export function ContactForm({ initialCategory }: { initialCategory?: string }) {
  const router = useRouter();
  const [category, setCategory] = useState(initialCategory ?? "");
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, category }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error ?? "Something went wrong. Please try again.");
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-8" noValidate={false}>
      <fieldset>
        <legend className="font-display text-xl font-bold text-deep">How can I help?</legend>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <label
              key={c.id}
              className={`block cursor-pointer rounded-2xl border-2 p-4 transition-colors ${
                category === c.id ? "border-sea bg-mist" : "border-deep/20 hover:border-sea"
              }`}
            >
              <input
                type="radio"
                name="category"
                value={c.id}
                checked={category === c.id}
                onChange={() => setCategory(c.id)}
                className="sr-only"
                required
              />
              <span className="block font-display font-bold text-deep">{c.label}</span>
              <span className="mt-1 block text-[0.95rem]">{c.text}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="font-medium text-deep">Full name (required)</span>
          <input name="name" required autoComplete="name" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Email (required)</span>
          <input name="email" type="email" required autoComplete="email" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Organisation</span>
          <input name="organisation" autoComplete="organization" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Phone / WhatsApp</span>
          <input name="phone" type="tel" autoComplete="tel" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Industry</span>
          <input name="industry" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Preferred contact method</span>
          <select name="preferred" className={field} defaultValue="">
            <option value="">No preference</option>
            <option>Email</option>
            <option>Phone call</option>
            <option>WhatsApp</option>
          </select>
        </label>
        <label className="block">
          <span className="font-medium text-deep">Project timeline</span>
          <input name="timeline" className={field} />
        </label>
        <label className="block">
          <span className="font-medium text-deep">Budget range</span>
          <input name="budget" className={field} />
        </label>
      </div>

      <label className="block">
        <span className="font-medium text-deep">Brief message (required)</span>
        <textarea name="message" required rows={6} className={field} />
      </label>

      {/* Honeypot: real visitors never see or fill this */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label>
          Website
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <p className="text-[0.95rem]">Please do not submit confidential staff or candidate records through this form.</p>

      {status === "error" && (
        <p role="alert" className="rounded-xl border-2 border-flame bg-white px-4 py-3 font-medium text-ink-strong">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || !category}
        className="inline-flex min-h-12 items-center justify-center rounded-full bg-flame px-8 py-3 text-base font-bold text-ink-strong transition-colors hover:bg-[#ff7a33] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send enquiry"}
      </button>
      {!category && <p className="-mt-4 text-[0.95rem]">Choose one of the options above to continue.</p>}
    </form>
  );
}
