import type { Metadata } from "next";
import Link from "next/link";
import { ArchPortrait } from "@/components/ArchPortrait";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";
export const instant = false;

export const metadata: Metadata = {
  title: "Contact Chinenye Gift | Advisory, Speaking & Collaboration",
  description:
    "Get in touch with Chinenye Gift for business advisory, workforce strategy, speaking engagements, partnerships and professional enquiries.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

// Links across the site use ?subject=...; map them to the form's categories.
const subjectMap: Record<string, string> = {
  business: "business",
  workforce: "workforce",
  speaking: "speaking",
  training: "speaking",
  partnerships: "partnerships",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ subject?: string }>;
}) {
  const { subject } = await searchParams;
  const initial = subject ? subjectMap[subject] : undefined;

  return (
    <>
      <section className={`${wrap} grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:py-24`}>
        <div>
          <h1 className="text-[clamp(2.25rem,4.6vw,3.75rem)]">Let’s start with the right conversation.</h1>
          <p className="mt-6 max-w-[48ch] text-lg">
            Tell me what you are building, what challenge you are facing or what opportunity you would like to
            explore. My team and I will review your enquiry and guide you to the appropriate next step.
          </p>

          <div className="mt-10 w-full max-w-[220px]">
            <ArchPortrait src="/images/contact.jpg" alt="Portrait of Chinenye Gift" />
          </div>

          <div className="mt-10 border-t-2 border-deep/25 pt-6">
            <h2 className="text-2xl">Prefer email?</h2>
            <ul className="mt-3 space-y-1 text-lg">
              {site.email && (
                <li>
                  Email: <a href={`mailto:${site.email}`} className="font-bold text-sea underline underline-offset-4">{site.email}</a>
                </li>
              )}
              <li>Location: Port Harcourt, Nigeria</li>
              {site.social.map((s) => (
                <li key={s.href}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="font-bold text-sea underline underline-offset-4">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 border-t-2 border-deep/25 pt-6">
            <h2 className="text-2xl">Book a focused strategy conversation.</h2>
            <p className="mt-3 max-w-[48ch]">
              Bring one clear challenge. We will use the session to understand your situation, identify priorities and
              discuss practical next steps.
            </p>
            <p className="mt-4">
              <Link href="/book" className="font-bold text-sea underline underline-offset-4">
                View consultation options
              </Link>
            </p>
          </div>
        </div>

        <div>
          <h2 className="mb-8 text-3xl">Tell me a little about your enquiry.</h2>
          <p className="-mt-4 mb-8 max-w-[56ch]">
            Share enough context for us to understand the problem and respond appropriately.
          </p>
          <ContactForm initialCategory={initial} />
        </div>
      </section>
    </>
  );
}