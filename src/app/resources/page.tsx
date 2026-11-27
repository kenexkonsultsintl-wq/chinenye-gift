import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Free Guides & Digital Resources | Chinenye Gift",
  description:
    "Practical business, workforce and career resources from Chinenye Gift, including free guides, templates and upcoming digital toolkits.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

const planned = [
  "Business Development Playbooks",
  "SME Business Structure Toolkits",
  "Hiring and Recruitment Guides",
  "Career Positioning Workbooks",
  "Interview Preparation Resources",
  "Business Growth Planners",
  "Workforce Management Templates",
  "Founder Systems and Operations Resources",
];

const steps = [
  "Choose the resource relevant to your present challenge.",
  "Complete secure checkout or request a free guide.",
  "Receive the resource and put the tools into practice.",
];

export default function ResourcesPage() {
  return (
    <>
      <section className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4.25rem)]">Practical tools for real-world progress.</h1>
        <p className="mt-6 max-w-[62ch] text-lg">
          Explore free guides, useful templates, workbooks and learning resources created to help founders,
          businesses and professionals move from insight to action.
        </p>
      </section>

      {/* Free guide: "Coming soon" until the PDF and email delivery exist */}
      <section className="bg-mist/60">
        <div className={`${wrap} grid gap-8 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center`}>
          <div>
            <p className="text-[0.95rem] font-medium text-sea">Free guide</p>
            <h2 className="mt-2 text-3xl sm:text-4xl">
              7 Business Structure Mistakes That Hold Growing Businesses Back.
            </h2>
            <p className="mt-5 max-w-[56ch] text-lg">
              Running a business should not mean carrying every decision, task and problem yourself.
            </p>
            <p className="mt-4 max-w-[56ch] text-lg">
              This practical introductory guide will help you identify common weaknesses in roles, reporting,
              documentation, people systems and execution, and decide what to fix first.
            </p>
            <div className="mt-8">
              {site.flags.guideReady ? (
                <ButtonLink href="/resources/business-structure-mistakes">Get the free guide</ButtonLink>
              ) : (
                <p className="inline-block rounded-full border-2 border-deep/30 px-6 py-2.5 font-bold text-deep">
                  Coming soon
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className={`${wrap} py-20`}>
        <h2 className="max-w-2xl text-3xl sm:text-4xl">A growing library of practical resources.</h2>
        <ul className="mt-10 grid gap-x-12 sm:grid-cols-2">
          {planned.map((x) => (
            <li
              key={x}
              className="flex items-baseline justify-between gap-4 border-t border-deep/20 py-4 text-lg text-deep"
            >
              <span className="font-medium">{x}</span>
              <span className="text-[0.9rem] text-sea">Planned</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-deep text-ivory">
        <div className={`${wrap} py-20`}>
          <h2 className="!text-ivory text-3xl sm:text-4xl">Choose. Learn. Apply.</h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s} className="border-t-2 border-flame pt-4 text-lg">
                <span className="font-display text-sm font-bold text-flame">Step {i + 1}</span>
                <p className="mt-1">{s}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Newsletter: hidden until an email provider and consent flow exist */}
      {site.flags.newsletterReady && (
        <section className={`${wrap} py-20`}>
          <h2 className="text-3xl sm:text-4xl">Get practical insights in your inbox.</h2>
          <p className="mt-4 max-w-[56ch] text-lg">
            Occasional lessons on business structure, workforce decisions, growth and founder experiences. Useful
            ideas without unnecessary noise.
          </p>
        </section>
      )}
    </>
  );
}
