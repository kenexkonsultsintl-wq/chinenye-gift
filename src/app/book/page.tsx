import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Consultation | Chinenye Gift",
  description:
    "Book a strategy conversation with Chinenye Gift about business growth, business structure, people systems or career positioning.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

// Add a calendar or payment link to a session once confirmed. No link = enquiry button.
const sessions: { name: string; text: string; href?: string }[] = [
  {
    name: "Business Clarity Session",
    text: "For founders needing direction on systems, structure, responsibilities or business growth.",
  },
  {
    name: "Workforce Strategy Session",
    text: "For employers reviewing roles, workforce needs or hiring processes.",
  },
  {
    name: "Career Positioning Session",
    text: "For professionals seeking practical guidance on employability, job search or career growth.",
  },
];

const steps = [
  "Complete a short form explaining your primary challenge.",
  "Attend your scheduled session and discuss the relevant context.",
  "Receive the agreed next-step guidance or deliverable, if included in your session package.",
];

export default function BookPage() {
  return (
    <>
      <section className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4.25rem)]">Clarity is the first step to better decisions.</h1>
        <p className="mt-6 max-w-[62ch] text-lg">
          If you are working through a business challenge, workforce question or career decision, a focused
          conversation can help you understand the problem and prioritise your next steps.
        </p>
      </section>

      <section className="bg-mist/60">
        <div className={`${wrap} py-20`}>
          <h2 className="text-3xl sm:text-4xl">Choose your conversation.</h2>
          <ul className="mt-10 border-t-2 border-deep/25">
            {sessions.map((s) => (
              <li key={s.name} className="grid gap-4 border-b border-deep/20 py-8 md:grid-cols-[0.9fr_1.1fr_auto] md:items-center md:gap-10">
                <h3 className="text-2xl">{s.name}</h3>
                <p className="text-lg">{s.text}</p>
                {s.href ? (
                  <ButtonLink href={s.href} external>Select a session</ButtonLink>
                ) : (
                  <ButtonLink href="/contact">Enquire about this session</ButtonLink>
                )}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <h2 className="text-3xl sm:text-4xl">Prepare. Discuss. Decide.</h2>
        <ol className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s) => (
            <li key={s} className="border-t-2 border-flame pt-4 text-lg">{s}</li>
          ))}
        </ol>
        <div className="mt-12 max-w-[62ch] border-l-4 border-sea pl-5">
          <p className="font-display text-lg font-bold text-deep">A note about scope.</p>
          <p className="mt-1">
            Consultations are advisory conversations. Any additional research, documentation, implementation,
            recruitment or training work will be scoped and agreed separately.
          </p>
          {site.flags.legalReady && (
            <p className="mt-3">
              <a href="/terms" className="font-bold text-sea underline underline-offset-4">View terms</a>
            </p>
          )}
        </div>
      </section>
    </>
  );
}
