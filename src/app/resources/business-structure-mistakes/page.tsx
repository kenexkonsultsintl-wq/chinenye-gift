import { notFound } from "next/navigation";
import type { Metadata } from "next";
import GuideForm from "@/components/GuideForm";
import { site } from "@/lib/site"; // check the export name at the top of site.ts

export const metadata: Metadata = {
  title: "Free Guide | 7 Business Structure Mistakes | Chinenye Gift",
  description:
    "A practical guide to recognising common business structure mistakes and improving roles, reporting, accountability and operations.",
};

const learn = [
  "How unclear job roles affect execution.",
  "Why missing reporting lines and weak accountability hold teams back.",
  "Where to begin when documenting systems and responsibilities.",
];

export default function GuidePage() {
  if (!site.flags.guideReady) notFound();

  return (
    <main>
      <section className="bg-ivory px-5 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-bold text-deep md:text-5xl">
              Is your business growing faster than its structure?
            </h1>
            <p className="mt-5 text-lg text-ink">
              Download my free introductory guide, &ldquo;7 Business Structure Mistakes That Hold
              Growing Businesses Back.&rdquo;
            </p>
            <p className="mt-4 text-ink">
              Understand common blind spots and the questions every growing business owner should
              ask before hiring more people or expanding operations.
            </p>
          </div>
          <div id="guide-form">
            <h2 className="text-2xl font-bold text-deep">Send me the guide.</h2>
            <p className="mt-2 mb-6 text-ink">
              Enter your first name and email to receive your copy. You may also choose to receive
              occasional business and career insights.
            </p>
            <GuideForm />
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="text-3xl font-bold text-deep">Inside the guide</h2>
          <ul className="mt-6 max-w-2xl">
            {learn.map((l) => (
              <li key={l} className="border-t border-deep/20 py-4 text-ink">{l}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}