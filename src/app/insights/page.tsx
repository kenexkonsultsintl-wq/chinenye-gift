import Link from "next/link";
import type { Metadata } from "next";
import { ArchPortrait } from "@/components/ArchPortrait";

export const metadata: Metadata = {
  title: "Insights & Speaking | Chinenye Gift",
  description:
    "Explore Chinenye Gift's perspectives on business structure, recruitment, workforce development, employability and entrepreneurship.",
};

// No articles exist yet. Replace with Sanity data when the CMS is connected.
const articles: { slug: string; title: string; category: string; date: string }[] = [];

// Set to the verified channel link when supplied. Empty keeps the section hidden.
const workplaceRealityUrl = "";

const collections: [string, string][] = [
  ["Entrepreneurship", "What it really takes to build beyond the founder."],
  ["People & Work", "Recruitment, workplace culture, performance and expectations."],
  ["Business Systems", "Roles, SOPs, management and operational clarity."],
  ["Growth & Sales", "Positioning, business development, customer relationships and execution."],
  ["Career & Employability", "Skills, professional readiness and better opportunities."],
];

const topics = [
  "Building Businesses That Can Work Without the Founder",
  "Business Development Beyond Marketing",
  "Recruitment, Skills Gaps and the Future of Work",
  "Why Businesses Struggle With People",
  "From Qualification to Employability",
  "Building Systems That Improve Workforce Performance",
  "Sales, Visibility and Business Growth",
  "Closing the Gap Between Talent and Opportunity",
];

export default function InsightsPage() {
  return (
    <main>
      {/* Hero */}
      <section className="bg-ivory px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <h1 className="max-w-3xl text-4xl font-bold text-deep md:text-5xl">
              Honest conversations. Practical thinking. Real-world lessons.
            </h1>
            <p className="mt-5 max-w-2xl text-lg text-ink">
              I share what I have learned through building a company, working with employers,
              supporting professionals and helping businesses improve people, systems and growth.
            </p>
          </div>
          <ArchPortrait
            src="/images/insights-hero.jpg"
            alt="Chinenye Gift, full-length portrait"
            position="object-top"
          />
        </div>
      </section>

      {/* Collections */}
      <section className="px-5 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-10 md:grid-cols-[1fr_2fr]">
          <h2 className="text-3xl font-bold text-deep">Explore the conversations.</h2>
          <ul>
            {collections.map(([name, line]) => (
              <li key={name} className="border-t border-deep/20 py-5">
                <h3 className="text-xl font-bold text-deep">{name}</h3>
                <p className="mt-1 text-ink">{line}</p>
              </li>
            ))}
            <li className="border-t border-deep/20" />
          </ul>
        </div>
        {articles.length > 0 && (
          <div className="mx-auto mt-8 max-w-[1200px]">
            <Link href="#articles" className="inline-block rounded bg-flame px-6 py-3 font-semibold text-ink">
              READ ALL ARTICLES
            </Link>
          </div>
        )}
      </section>

      {/* Articles: only rendered when published content exists */}
      {articles.length > 0 && (
        <section id="articles" className="bg-mist px-5 py-16">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold text-deep">Latest articles</h2>
            <ul className="mt-8 grid gap-6 md:grid-cols-3">
              {articles.map((a) => (
                <li key={a.slug} className="rounded bg-white p-6">
                  <p className="text-sm font-semibold text-sea">{a.category}</p>
                  <h3 className="mt-2 text-xl font-bold text-deep">
                    <Link href={`/insights/${a.slug}`}>{a.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-ink">{a.date}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Speaking intro */}
      <section id="speaking" className="bg-deep px-5 py-20 text-white">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <h2 className="text-3xl font-bold md:text-4xl">Invite me into the conversation.</h2>
            <p className="mt-4 max-w-2xl text-lg">
              I welcome opportunities to contribute practical perspectives at conferences, corporate
              events, panels, business forums, career programmes, professional training sessions and
              entrepreneurship gatherings.
            </p>
            <Link
              href="/contact?subject=speaking"
              className="mt-8 inline-block rounded bg-flame px-6 py-3 font-semibold text-ink"
            >
              INVITE ME TO SPEAK
            </Link>
          </div>
          <div className="mx-auto w-full max-w-[300px]">
            <ArchPortrait src="/images/speaking.jpg" alt="Portrait of Chinenye Gift" />
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="px-5 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold text-deep">Topics I can speak on.</h2>
          <ul className="mt-8 grid gap-x-10 md:grid-cols-2">
            {topics.map((t) => (
              <li key={t} className="border-t border-deep/20 py-4 text-ink">{t}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Media: hidden until a verified link is supplied */}
      {workplaceRealityUrl && (
        <section className="bg-mist px-5 py-16">
          <div className="mx-auto max-w-[1200px]">
            <h2 className="text-3xl font-bold text-deep">Watch and listen.</h2>
            <p className="mt-3 max-w-2xl text-ink">
              Explore selected workplace conversations, interviews and event contributions.
            </p>
            <a
              href={workplaceRealityUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block rounded border-2 border-sea px-6 py-3 font-semibold text-sea"
            >
              WATCH WORKPLACE REALITY
            </a>
          </div>
        </section>
      )}

      {/* Speaker enquiry teaser */}
      <section className="bg-ivory px-5 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold text-deep">Planning an event?</h2>
          <p className="mt-3 max-w-2xl text-ink">
            Share your audience, theme, date, location and the contribution you have in mind.
          </p>
          <Link
            href="/contact?subject=speaking"
            className="mt-6 inline-block rounded bg-flame px-6 py-3 font-semibold text-ink"
          >
            SEND A SPEAKING ENQUIRY
          </Link>
        </div>
      </section>
    </main>
  );
}