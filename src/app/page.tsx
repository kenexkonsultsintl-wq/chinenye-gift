import Link from "next/link";
import { ArchPortrait } from "@/components/ArchPortrait";
import { ButtonLink } from "@/components/Button";
import { site } from "@/lib/site";

const wrap = "mx-auto max-w-[1200px] px-5 sm:px-8";

const credibility = [
  "Approximately 15 years in sales and business development.",
  "About seven years of recruitment experience.",
  "Founder of Kenex Konsults International, started May 2023 and launched in 2024.",
  "Convener of PH Career Connect & Job Fair.",
];

const pillars = [
  {
    word: "People",
    text: "Build stronger teams, define roles, improve workforce decisions and prepare professionals for real opportunities.",
  },
  {
    word: "Systems",
    text: "Create practical organisational structures, reporting lines, policies, SOPs and accountability frameworks.",
  },
  {
    word: "Growth",
    text: "Improve business positioning, business development, client relationships and commercial execution.",
  },
];

const story = [
  { stage: "Sales and business development", text: "My journey began in sales and business development." },
  { stage: "Recruitment", text: "Recruitment later revealed a gap between people looking for work and employers looking for talent." },
  { stage: "Skills development", text: "Skills development became necessary when qualifications did not always translate into workplace readiness." },
  { stage: "Business structuring", text: "Business structuring followed when good employees entered weak systems." },
];

const projects = [
  { name: "Kenex Konsults International", text: "Workforce, recruitment and business consulting solutions.", href: "/work#kenex" },
  { name: "Kenex Business School", text: "Practical skills, employability and business-development training.", href: "/work#business-school" },
  { name: "PH Career Connect & Job Fair", text: "Connecting talent, employers and career stakeholders.", href: "/work#ph-career-connect" },
  { name: "Workplace Reality", text: "Honest conversations about work, leadership, employees and employers.", href: "/work#workplace-reality" },
];

// Latest insights render only when real posts exist (blueprint: hide if none).
const posts: { title: string; href: string; category: string }[] = [];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} grid items-center gap-12 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:py-20`}>
        <div>
          <p className="text-[0.95rem] font-medium text-sea">Business, people, systems and growth</p>
          <h1 className="mt-4 text-[clamp(2.5rem,5.4vw,4.5rem)]">
            I build bridges between people, businesses and opportunities.
          </h1>
          <div className="mt-6 max-w-[56ch] space-y-4 text-lg">
            <p>
              I’m Chinenye Gift Ekene Chukwuocha, a business and workforce strategist, recruitment consultant,
              business growth advisor and founder of Kenex Konsults International.
            </p>
            <p>
              I help growing businesses strengthen their people, systems and strategy, while helping professionals
              better position themselves for meaningful opportunities.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/expertise">Work with me</ButtonLink>
            <ButtonLink href="/work" variant="secondary">Explore my work</ButtonLink>
          </div>
          {site.flags.guideReady && (
            <p className="mt-5">
              <Link href="/resources/business-structure-mistakes" className="font-bold text-sea underline underline-offset-4">
                Get my free guide
              </Link>
            </p>
          )}
        </div>
        <ArchPortrait src="/images/home-hero.jpg" alt="Portrait of Chinenye Gift" />
      </section>

      {/* Credibility */}
      <section className="border-y border-deep/10 bg-mist/60">
        <div className={`${wrap} py-12`}>
          <h2 className="text-2xl sm:text-3xl">Rooted in experience. Built through practice.</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-deep/15">
            {credibility.map((c) => (
              <li key={c} className="lg:px-6 lg:first:pl-0 lg:last:pr-0">{c}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* People. Systems. Growth. */}
      <section className={`${wrap} py-20`}>
        <h2 className="text-3xl sm:text-4xl">People. Systems. Growth.</h2>
        <div className="mt-10 grid gap-10 md:grid-cols-3">
          {pillars.map((p, i) => (
            <div key={p.word} className={i === 1 ? "md:pt-10" : i === 2 ? "md:pt-20" : ""}>
              <p className="font-display text-4xl font-extrabold text-sea sm:text-5xl">{p.word}</p>
              <p className="mt-3 max-w-[34ch]">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10">
          <ButtonLink href="/expertise" variant="secondary">Explore my expertise</ButtonLink>
        </div>
      </section>

      {/* Story */}
      <section className="bg-mist/60">
        <div className={`${wrap} py-20`}>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">I followed the problems and built solutions.</h2>
          <ol className="mt-12 grid gap-10 border-deep/20 md:grid-cols-4 md:gap-6 md:border-t md:pt-0">
            {story.map((s) => (
              <li key={s.stage} className="relative border-l-2 border-deep/20 pl-6 md:border-l-0 md:pl-0 md:pt-8">
                <span
                  aria-hidden="true"
                  className="absolute -left-[7px] top-1 h-3 w-3 rounded-full bg-flame md:-top-[7px] md:left-0"
                />
                <p className="font-display text-lg font-bold text-deep">{s.stage}</p>
                <p className="mt-2 text-[0.98rem]">{s.text}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 max-w-2xl text-xl font-medium text-deep">
            Today, I work where people, systems and business growth meet.
          </p>
          <div className="mt-6">
            <ButtonLink href="/about" variant="secondary">Read my story</ButtonLink>
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className={`${wrap} py-20`}>
        <h2 className="text-3xl sm:text-4xl">Ideas are valuable. Execution creates impact.</h2>
        <ul className="mt-10 grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <li key={p.name}>
              <Link
                href={p.href}
                className="block h-full rounded-2xl border-2 border-deep/15 bg-white/50 p-7 transition-colors hover:border-sea"
              >
                <p className="font-display text-xl font-bold text-deep">{p.name}</p>
                <p className="mt-2">{p.text}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10">
          <ButtonLink href="/work">View projects and impact</ButtonLink>
        </div>
      </section>

      {/* Founder belief */}
      <section className="overflow-hidden bg-deep text-ivory">
        <div className={`${wrap} py-24 text-center`}>
          <p className="font-display text-[clamp(2.75rem,9vw,7rem)] font-extrabold leading-none tracking-tight">
            I BUILD BRIDGES.
          </p>
          <svg viewBox="0 0 600 60" className="mx-auto mt-6 w-full max-w-xl" fill="none" aria-hidden="true">
            <path d="M0 58 Q75 0 150 58 Q225 0 300 58 Q375 0 450 58 Q525 0 600 58" stroke="#F26A21" strokeWidth="3" strokeLinecap="round" />
          </svg>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-ivory/90">
            Between people and opportunities. Between businesses and talent. Between ideas and execution.
          </p>
          <div className="mt-8">
            <ButtonLink href="/about#beliefs" variant="onDark">Discover my philosophy</ButtonLink>
          </div>
        </div>
      </section>

      {/* Lead magnet: hidden until the guide, consent form and delivery email exist */}
      {site.flags.guideReady && (
        <section className={`${wrap} py-20`}>
          <h2 className="max-w-2xl text-3xl sm:text-4xl">Start with a stronger business foundation.</h2>
          <p className="mt-4 max-w-[60ch]">
            Get my free guide: “7 Business Structure Mistakes That Hold Growing Businesses Back.” Practical questions
            and actions you can use to assess roles, systems and accountability.
          </p>
          <div className="mt-8">
            <ButtonLink href="/resources/business-structure-mistakes">Get the free guide</ButtonLink>
          </div>
        </section>
      )}

      {/* Latest insights: hidden until posts exist */}
      {posts.length > 0 && (
        <section className={`${wrap} py-20`}>
          <h2 className="text-3xl sm:text-4xl">Ideas worth putting to work.</h2>
          <p className="mt-4 max-w-[60ch]">
            Explore practical reflections on recruitment, workplace realities, business structure, entrepreneurship and
            sustainable growth.
          </p>
          <ul className="mt-8 grid gap-5 md:grid-cols-3">
            {posts.map((p) => (
              <li key={p.href}>
                <Link href={p.href} className="block rounded-2xl border-2 border-deep/15 p-6 hover:border-sea">
                  <span className="text-sm text-sea">{p.category}</span>
                  <span className="mt-1 block font-display text-lg font-bold text-deep">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <ButtonLink href="/insights" variant="secondary">Read my insights</ButtonLink>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="bg-mist">
        <div className={`${wrap} py-20`}>
          <h2 className="max-w-2xl text-3xl sm:text-5xl">Let’s build something that works.</h2>
          <p className="mt-4 max-w-[60ch] text-lg">
            Whether you are a founder seeking structure, a professional navigating your next move or an organisation
            strengthening its workforce, let’s begin with the real problem.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ButtonLink href="/book">Book a consultation</ButtonLink>
            <ButtonLink href="/contact?subject=speaking" variant="secondary">Invite me to speak</ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}