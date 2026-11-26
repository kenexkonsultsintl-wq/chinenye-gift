import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { ArchPortrait } from "@/components/ArchPortrait";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";
import SystemDiagram from "@/components/SystemDiagram";

export const metadata: Metadata = {
  title: "About Chinenye Gift | Founder Story & Professional Journey",
  description:
    "Explore the journey of Chinenye Gift Ekene Chukwuocha, from sales and business development to recruitment, workforce strategy and business growth.",
};

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

// Set to true once Chinenye confirms the outdoor photo (public/images/about-early.jpg)
// really is from early in her career. While false, nothing shows in that spot.
const showEarlyPhoto = true;

const beliefs = [
  "Opportunities exist, but people must be prepared to access them.",
  "Qualifications matter; capability and workplace readiness matter too.",
  "Talented employees perform better when roles, systems and accountability are clear.",
  "Founders should build organisations that can function without their constant physical involvement.",
  "Business development is larger than marketing.",
  "People, systems and strategy must work together.",
  "Africa’s human capital deserves deliberate development and better connections to opportunity.",
  "Meaningful progress requires diagnosis, structure and execution.",
];

const journey = [
  "Sales",
  "Business development",
  "Recruitment",
  "Skills development",
  "Workforce strategy",
  "Business structuring",
  "Business growth",
];

// A story chapter: heading on the left, text on the right.
function Chapter({
  title,
  tint = false,
  children,
}: {
  title: string;
  tint?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={tint ? "bg-mist/60" : ""}>
      <div className={`${wrap} grid gap-6 py-16 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:py-20`}>
        <h2 className="text-3xl sm:text-4xl md:sticky md:top-24 md:self-start">{title}</h2>
        <div className="max-w-[60ch] space-y-5 text-lg">{children}</div>
      </div>
    </section>
  );
}

// Photo block used inside chapters.
function Photo({
  src,
  alt,
  ratio = "aspect-[4/3]",
}: {
  src: string;
  alt: string;
  ratio?: string;
}) {
  return (
    <div className={`${ratio} relative overflow-hidden rounded-2xl bg-mist`}>
      <Image src={src} alt={alt} fill sizes="(min-width: 768px) 560px, 100vw" className="object-cover" />
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20`}>
        <div>
          <h1 className="text-[clamp(2.25rem,4.8vw,4rem)]">
            My work has always been about connecting what is missing.
          </h1>
          <div className="mt-6 max-w-[58ch] space-y-4 text-lg">
            <p>
              I am Chinenye Gift Ekene Chukwuocha — a business and workforce strategist, recruitment consultant,
              business growth advisor, entrepreneur and founder of Kenex Konsults International.
            </p>
            <p>
              My professional journey began in sales and evolved through approximately 15 years of sales, business
              development, client acquisition and commercial relationships. Every new chapter has brought me closer
              to one question: what is preventing people and businesses from reaching their potential?
            </p>
          </div>
        </div>
        <ArchPortrait src="/images/about-hero.jpg" alt="Portrait of Chinenye Gift Ekene Chukwuocha" />
      </section>

      <Chapter title="Sales taught me how businesses grow." tint>
        <p>
          My career started in sales. Over time, I moved into business development and began working more closely
          with client relationships, commercial growth, business positioning and entrepreneurship.
        </p>
        <p>
          Those early experiences helped me understand that sustainable business growth requires much more than
          visibility. It requires customers, relationships, trust and consistent execution.
        </p>
        {showEarlyPhoto && (
          <Photo src="/images/about-early.jpg" alt="Chinenye Gift early in her career" />
        )}
      </Chapter>

      <Chapter title="Then I discovered a gap between jobs and job seekers.">
        <p>
          About seven years ago, I entered recruitment through a former place of employment. I met talented people
          discouraged by unemployment, while also encountering employers with vacancies they genuinely wanted to fill.
        </p>
        <p>
          I began to understand that the story was not always simply that no opportunities existed. There was often a
          disconnect between access, readiness, employer expectations and available talent.
        </p>
        <p>
          That experience shaped my determination to help connect capable people with opportunities and prepare them
          to compete for those opportunities.
        </p>
      </Chapter>

      <Chapter title="From concern to company." tint>
        <ol className="grid gap-4 sm:grid-cols-2">
          {[
            { when: "May 2023", what: "Kenex Konsults International officially started" },
            { when: "2024", what: "The company was officially launched" },
          ].map((m) => (
            <li key={m.when} className="border-l-4 border-flame pl-4">
              <p className="font-display text-2xl font-extrabold text-deep">{m.when}</p>
              <p className="text-base">{m.what}</p>
            </li>
          ))}
        </ol>
        <p>
          Recruitment was a starting point. As we worked with employers and candidates, we discovered skills gaps,
          technology gaps, communication challenges, computer-literacy gaps and workplace-readiness issues. Access
          alone was not enough.
        </p>
        <p>
          <ButtonLink href={site.links.kenex} variant="secondary" external>Visit Kenex</ButtonLink>
        </p>
      </Chapter>

      <Chapter title="Opportunity is powerful. Preparation makes it usable.">
        <p>
          The challenges we observed contributed to the development of Kenex Business School — a practical learning
          platform focused on skills that help graduates, professionals and business-development personnel perform in
          real workplaces.
        </p>
        <p>My belief is that training should not end with information. It should lead to practical change.</p>
      </Chapter>

      <Chapter title="What happens when the right employee enters the wrong system?" tint>
        <p>
          We saw that some people got hired but struggled to perform or remain in their roles. In some cases, the
          deeper problem was unclear responsibilities, poor reporting lines, weak HR processes, limited documentation,
          missing SOPs or inadequate performance systems.
        </p>
        <p>
          That shifted the question from “Who should we recruit?” to “What kind of organisation are we recruiting this
          person into?”
        </p>
        <p>
          I began helping business owners build the structures that support teams, performance and sustainable growth.
        </p>
        <SystemDiagram />
      </Chapter>

      {/* Pull quote */}
      <section className={`${wrap} py-20`}>
        <blockquote className="max-w-4xl border-l-4 border-flame pl-6 sm:pl-10">
          <p className="font-display text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-tight text-deep">
            Growth requires the right combination of people, systems and strategy.
          </p>
        </blockquote>
        <div className="mt-8 max-w-[62ch] space-y-5 text-lg sm:ml-10">
          <p>
            My earlier years in business development became essential again. Organisations could build better teams
            and systems, yet still struggle with sales, visibility, customer acquisition or market positioning.
          </p>
          <p>
            Today, my work brings these disciplines together. I diagnose the gaps, help clarify the right interventions
            and support practical execution.
          </p>
        </div>
      </section>

      <Chapter title="Building a company that can work beyond its founder." tint>
        <p>
          One of my current priorities is helping Kenex become a more structured, founder-independent organisation —
          one where capable teams can implement work while I focus on direction, strategy, management and growth.
        </p>
        <p>
          This has also inspired me to build Chinenye Gift as an independent personal brand: a space for my ideas,
          experience, lessons, resources and conversations beyond a single company.
        </p>
      </Chapter>

      {/* Beliefs */}
      <section id="beliefs" className={`${wrap} py-20`}>
        <h2 className="text-3xl sm:text-4xl">What I believe.</h2>
        <ul className="mt-10 grid gap-x-12 gap-y-8 sm:grid-cols-2">
          {beliefs.map((b) => (
            <li key={b} className="border-t-2 border-deep/20 pt-4 text-lg font-medium text-deep">
              {b}
            </li>
          ))}
        </ul>
      </section>

      {/* Journey */}
      <section className="bg-deep text-ivory">
        <div className={`${wrap} py-20`}>
          <h2 className="!text-ivory text-3xl sm:text-4xl">The journey in one line.</h2>
          <ol className="mt-12 grid gap-8 border-ivory/30 lg:grid-cols-7 lg:gap-4 lg:border-t lg:pt-0">
            {journey.map((stage) => (
              <li
                key={stage}
                className="relative border-l-2 border-ivory/30 pl-6 lg:border-l-0 lg:pl-0 lg:pt-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-flame lg:-top-[7px] lg:left-0"
                />
                <span className="font-display text-lg font-bold">{stage}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mist">
        <div className={`${wrap} py-20`}>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">The story continues through the work.</h2>
          <p className="mt-4 max-w-[60ch] text-lg">
            Explore the projects, ideas and practical tools shaping my next chapter.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/work">See my work</ButtonLink>
            <ButtonLink href="/resources" variant="secondary">Explore resources</ButtonLink>
            <ButtonLink href="/expertise" variant="secondary">Work with me</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}