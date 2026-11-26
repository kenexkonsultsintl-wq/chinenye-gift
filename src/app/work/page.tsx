import type { Metadata } from "next";
import Image from "next/image";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects & Impact | Chinenye Gift",
  description:
    "Explore selected initiatives and consulting work involving recruitment, workforce development, business structure and career opportunity.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

type Img = { src: string; alt: string };

// A button appears only when a verified link exists (blueprint: no fake buttons).
// A logo or image appears only when one is listed here.
const projects: {
  id: string;
  name: string;
  role: string;
  text: string;
  href?: string;
  logo?: Img;
  image?: Img;
}[] = [
  {
    id: "kenex",
    name: "Kenex Konsults International",
    role: "Founder | Started May 2023 • Launched 2024",
    text: "A workforce and business consulting company supporting recruitment, HR advisory, staff management, business structuring, commercial growth, training and technical manpower services.",
    href: site.links.kenex,
    logo: { src: "/images/kenex-logo.jpg", alt: "Kenex Konsults International logo" },
  },
  {
    id: "business-school",
    name: "Kenex Business School",
    role: "Practical workforce and business skills development",
    text: "Created in response to skills and readiness gaps observed through recruitment. Training covers business development, sales, professional communication, workplace skills, career readiness and related areas.",
  },
  {
    id: "ph-career-connect",
    name: "PH Career Connect & Job Fair",
    role: "Convener | Employment and career connection",
    text: "A platform intended to bring together employers, job seekers, recruiters, business leaders, partners and career stakeholders to improve access to opportunities and workplace understanding.",
    href: site.links.phCareerConnect,
    logo: { src: "/images/phcc-logo.jpg", alt: "PH Career Connect & Job Fair logo" },
    image: {
      src: "/images/work-phcc.jpg",
      alt: "The PH Career Connect & Job Fair organising team in front of the event backdrop",
    },
  },
  {
    id: "workplace-reality",
    name: "Workplace Reality",
    role: "Workplace conversations and media",
    text: "Conversations exploring employer and employee expectations, recruitment, performance, leadership, salary, promotions, resignation, workplace culture and the future of work.",
  },
  {
    id: "business-structuring",
    name: "Selected Business Structuring Engagements",
    role: "Confidential client work; case studies pending",
    text: "Support for organisational structure, job roles, SOPs, reporting, workforce processes, administrative systems and business-development planning. Detailed examples will be published with client permission.",
  },
];

// Fill these when approved material arrives. Empty = section stays hidden.
const clients: { name: string }[] = [];
const caseStudies: { title: string; summary: string; href: string }[] = [];
const testimonials: { quote: string; name: string; role: string }[] = [];

export default function WorkPage() {
  return (
    <>
      <section className={`${wrap} py-16 lg:py-24`}>
        <h1 className="max-w-4xl text-[clamp(2.25rem,5vw,4.25rem)]">
          Work that connects purpose to practical solutions.
        </h1>
        <p className="mt-6 max-w-[62ch] text-lg">
          From workforce access and skills development to business structuring and growth strategy, my projects
          reflect a belief that lasting impact requires practical execution.
        </p>
        <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-2xl bg-mist sm:aspect-[16/9]">
          <Image
            src="/images/work-hero.jpg"
            alt="A speaker addressing the audience at PH Career Connect & Job Fair"
            fill
            priority
            sizes="(min-width: 1200px) 1200px, 100vw"
            className="object-cover object-[50%_30%]"
          />
        </div>
      </section>

      <section className={`${wrap} pb-20`}>
        <ul className="border-t-2 border-deep/25">
          {projects.map((p) => (
            <li
              key={p.id}
              id={p.id}
              className="grid gap-4 border-b border-deep/20 py-10 md:grid-cols-[0.9fr_1.1fr] md:gap-16"
            >
              <div>
                {p.logo && (
                  <div className="relative mb-5 h-20 w-40 overflow-hidden rounded-xl">
                    <Image src={p.logo.src} alt={p.logo.alt} fill sizes="160px" className="object-cover" />
                  </div>
                )}
                <h2 className="text-2xl sm:text-3xl">{p.name}</h2>
                <p className="mt-2 text-[0.95rem] font-medium text-sea">{p.role}</p>
              </div>
              <div>
                <p className="max-w-[58ch] text-lg">{p.text}</p>
                {p.image && (
                  <div className="relative mt-6 aspect-[16/9] overflow-hidden rounded-2xl">
                    <Image
                      src={p.image.src}
                      alt={p.image.alt}
                      fill
                      sizes="(min-width: 768px) 560px, 100vw"
                      className="object-cover object-[50%_30%]"
                    />
                  </div>
                )}
                {p.href && (
                  <div className="mt-6">
                    <ButtonLink href={p.href} variant="secondary" external>
                      Explore project
                    </ButtonLink>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>

      {clients.length > 0 && (
        <section className="bg-mist/60">
          <div className={`${wrap} py-20`}>
            <h2 className="max-w-2xl text-3xl sm:text-4xl">Organisations and teams I have worked with.</h2>
            <ul className="mt-8 flex flex-wrap gap-3">
              {clients.map((c) => (
                <li key={c.name} className="rounded-full border-2 border-deep/25 px-4 py-1.5 text-deep">
                  {c.name}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {caseStudies.length > 0 && (
        <section id="case-studies" className={`${wrap} py-20`}>
          <h2 className="text-3xl sm:text-4xl">Proof matters more than promises.</h2>
          <p className="mt-4 max-w-[62ch] text-lg">
            Explore how business problems were diagnosed, how solutions were designed and what changed after
            implementation.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-2">
            {caseStudies.map((c) => (
              <li key={c.href} className="rounded-2xl border-2 border-deep/15 p-7">
                <p className="font-display text-xl font-bold text-deep">{c.title}</p>
                <p className="mt-2">{c.summary}</p>
                <div className="mt-5">
                  <ButtonLink href={c.href} variant="secondary">Read case study</ButtonLink>
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="bg-mist/60">
          <div className={`${wrap} py-20`}>
            <h2 className="text-3xl sm:text-4xl">What clients and collaborators say.</h2>
            <ul className="mt-8 grid gap-8 md:grid-cols-2">
              {testimonials.map((t) => (
                <li key={t.name}>
                  <blockquote className="border-l-4 border-flame pl-5 text-xl text-deep">“{t.quote}”</blockquote>
                  <p className="mt-3 pl-5 text-[0.95rem]">
                    {t.name}, {t.role}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-deep text-ivory">
        <div className={`${wrap} py-20`}>
          <h2 className="!text-ivory text-3xl sm:text-4xl">Have a similar challenge?</h2>
          <p className="mt-4 max-w-[56ch] text-lg text-ivory/90">
            Let’s discuss what your business needs and the most practical next step.
          </p>
          <div className="mt-8">
            <ButtonLink href="/contact">Let’s talk</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}