"use client";

import { useState } from "react";

export default function GuideForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setStatus(res.ok ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <p className="rounded bg-mist p-6 text-deep">
        Thank you. Please check your email for your copy of the guide.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div>
        <label htmlFor="firstName" className="block font-semibold text-deep">First name</label>
        <input id="firstName" name="firstName" required autoComplete="given-name"
          className="mt-1 w-full rounded border border-deep/30 bg-white px-4 py-3 text-ink" />
      </div>
      <div>
        <label htmlFor="email" className="block font-semibold text-deep">Email</label>
        <input id="email" name="email" type="email" required autoComplete="email"
          className="mt-1 w-full rounded border border-deep/30 bg-white px-4 py-3 text-ink" />
      </div>
      <label className="flex items-start gap-3 text-ink">
        <input type="checkbox" name="deliveryConsent" required className="mt-1" />
        <span>I agree to receive the guide by email.</span>
      </label>
      <label className="flex items-start gap-3 text-ink">
        <input type="checkbox" name="marketingConsent" className="mt-1" />
        <span>I would also like to receive occasional business and career insights.</span>
      </label>
      {status === "error" && (
        <p role="alert" className="text-red-700">
          Something went wrong. Please try again in a moment.
        </p>
      )}
      <button type="submit" disabled={status === "sending"}
        className="rounded bg-flame px-6 py-3 font-semibold text-ink disabled:opacity-60">
        {status === "sending" ? "SENDING..." : "SEND MY FREE GUIDE"}
      </button>
    </form>
  );
}