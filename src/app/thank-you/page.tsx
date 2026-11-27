import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";

export const metadata: Metadata = { title: "Thank you | Chinenye Gift", robots: { index: false } };

export default function ThankYouPage() {
  return (
    <section className="mx-auto max-w-[1200px] px-5 py-24 sm:px-8">
      <h1 className="max-w-3xl text-4xl sm:text-5xl">Thank you. Your message has been received.</h1>
      <p className="mt-5 max-w-[56ch] text-lg">
        We will review your enquiry and respond using the contact details you provided. In the meantime, explore more
        of Chinenye’s work and resources.
      </p>
      <div className="mt-8 flex flex-wrap gap-4">
        <ButtonLink href="/insights">Explore insights</ButtonLink>
        <ButtonLink href="/" variant="secondary">Return home</ButtonLink>
      </div>
    </section>
  );
}
