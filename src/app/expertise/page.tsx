import type { Metadata } from "next";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work With Chinenye Gift | Business, Workforce & Growth Advisory",
  description:
    "Explore advisory services in business structure, recruitment strategy, sales growth, career positioning and practical training.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

const services = [
  {
    id: "business-structure",
    title: "Business Structure & Growth Advisory",
    audience: "For founders and organisations whose growth has outpaced their systems.",
    text: "I help business owners create clearer structures that support accountability, people management and scale.",
    areas: [
      "Organisational design and reporting lines",
      "Job descriptions and role clarity",
      "Policies, SOPs and operating processes",
      "Performance frameworks and KPIs",
      "Administrative and workforce systems",
      "Growth priorities and implementation roadmaps",
    ],
    cta: "Book a business structure session",
    href: "/book?service=business-structure",
  },
  {
    id: "workforce-strategy",
    title: "Recruitment & Workforce Strategy",
    audience: "For employers making important workforce decisions.",
    text: "I help organisations think beyond filling vacancies to defining the roles, expectations and people systems needed for performance.",
    areas: [
      "Workforce planning and role definition",
      "Recruitment process design and evaluation criteria",
      "Candidate assessment frameworks",
      "Employer advisory and onboarding structure",
      "Performance expectations and staff management approach",
    ],
    cta: "Enquire about workforce advisory",
    href: "/contact?subject=workforce",
  },
  {
    id: "sales-strategy",
    title: "Business Development & Sales Strategy",
    audience: "For businesses that need stronger customer acquisition and growth systems.",
    text: "I help teams examine how their market positioning, prospecting, sales processes, follow-up and partnerships influence revenue opportunities.",
    areas: [
      "Customer and market positioning",
      "Prospecting and lead-generation systems",
      "Client acquisition and relationship management",
      "Sales workflows and follow-up structures",
      "Partnership strategy and commercial priorities",
    ],
    cta: "Book a growth strategy session",
    href: "/book?service=growth",
  },
  {
    id: "career-strategy",
    title: "Career & Employability Strategy",
    audience: "For graduates and professionals preparing for meaningful opportunities.",
    text: "I help people understand the skills, positioning, communication and workplace readiness employers expect.",
    areas: [
      "Career positioning and job-search planning",
      "Interview preparation and employer expectations",
      "Communication and professional behaviour",
      "Employability and digital-readiness development",
      "Professional growth planning",
    ],
    cta: "Enquire about career strategy",
    href: "/contact?subject=career",
  },
  {
    id: "training",
    title: "Corporate Training & Workshops",
    audience: "For teams, employers, associations and professional groups.",
    text: "I support practical learning experiences that translate into usable skills, stronger performance and better workplace outcomes.",
    areas: [
      "Business development and sales",
      "Workplace performance and professionalism",
      "Employability and career readiness",
      "Recruitment and workforce awareness",
      "Leadership and people-management conversations",
    ],
    cta: "Request a training proposal",
    href: "/contact?subject=training",
  },
];

const steps = [
  { word: "Discover", text: "We clarify your situation, objectives, constraints and desired outcomes." },
  { word: "Design", text: "We agree the appropriate scope, priorities, deliverables and implementation approach." },
  { word: "Deliver", text: "Advisory, training or corporate execution proceeds under agreed timelines and responsibilities." },
];

const industries = [
  "Oil and gas",
  "Construction",
  "Engineering",
  "Hospitality",
  "Real estate",
  "Healthcare",
  "Manufacturing",
  "FMCG",
  "Retail",
  "Logistics",
  "Financial services",
  "Professional services",
];

export default function ExpertisePage() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4.25rem)]">
          The right solution begins with the right diagnosis.
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg">
          Businesses do not all struggle for the same reasons. Before recommending recruitment, training, restructuring
          or commercial intervention, I work to understand the real constraint, then identify practical steps forward.
        </p>
        <div className="mt-8">
          <ButtonLink href="/book">Book a discovery consultation</ButtonLink>
        </div>
      </section>

      {/* Services */}
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i % 2 === 0 ? "bg-mist/60" : ""}>
          <div className={`${wrap} grid gap-8 py-16 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:py-20`}>
            <div>
              <p className="text-[0.95rem] font-medium text-sea">{s.audience}</p>
              <h2 className="mt-3 text-3xl sm:text-4xl">{s.title}</h2>
              <p className="mt-5 max-w-[48ch] text-lg">{s.text}</p>
              <div className="mt-8">
                <ButtonLink href={s.href}>{s.cta}</ButtonLink>
              </div>
            </div>
            <div>
              <p className="font-display text-lg font-bold text-deep">Typical areas of support</p>
              <ul className="mt-4">
                {s.areas.map((a) => (
                  <li key={a} className="border-t border-deep/20 py-3 first:border-t-2 last:border-b last:border-deep/20">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      ))}

      {/* How we work */}
      <section className={`${wrap} py-20`}>
        <h2 className="text-3xl sm:text-4xl">Diagnose. Structure. Execute.</h2>
        <ol className="mt-12 grid gap-10 border-deep/20 md:grid-cols-3 md:gap-8 md:border-t">
          {steps.map((s) => (
            <li key={s.word} className="relative border-l-2 border-deep/20 pl-6 md:border-l-0 md:pl-0 md:pt-8">
              <span
                aria-hidden="true"
                className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-flame md:-top-[7px] md:left-0"
              />
              <p className="font-display text-3xl font-extrabold text-sea">{s.word}</p>
              <p className="mt-2 max-w-[34ch]">{s.text}</p>
            </li>
          ))}
        </ol>
        <div className="mt-10">
          <ButtonLink href="/contact" variant="secondary">Start a conversation</ButtonLink>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-mist/60">
        <div className={`${wrap} py-20`}>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Experience across different business environments.</h2>
          <p className="mt-4 max-w-[62ch] text-lg">
            My work has involved sectors including oil and gas, construction, engineering, hospitality, real estate,
            healthcare, manufacturing, FMCG, retail, logistics, financial services and professional services.
          </p>
          <ul className="mt-8 flex flex-wrap gap-3" aria-label="Sectors">
            {industries.map((x) => (
              <li key={x} className="rounded-full border-2 border-deep/25 px-4 py-1.5 text-base text-deep">
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Personal advisory vs Kenex fulfilment */}
      <section className="bg-deep text-ivory">
        <div className={`${wrap} grid gap-8 py-20 md:grid-cols-[1.2fr_0.8fr] md:items-center`}>
          <div>
            <h2 className="!text-ivory text-3xl sm:text-4xl">Need a team to execute the solution?</h2>
            <p className="mt-4 max-w-[56ch] text-lg text-ivory/90">
              For corporate recruitment, HR outsourcing, technical manpower supply or other Kenex-delivered services,
              you may also engage the Kenex team directly.
            </p>
          </div>
          <div className="flex flex-wrap gap-4 md:justify-end">
            <ButtonLink href={site.links.kenex} external>Visit Kenex</ButtonLink>
            <ButtonLink href="/book" variant="onDark">Book with Chinenye</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
