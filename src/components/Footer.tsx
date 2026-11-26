import Link from "next/link";
import { site } from "@/lib/site";
import CopyrightYear from "./CopyrightYear";

export function Footer() {
  const socials = (site.social ?? []).filter((s) => Boolean(s.href));

  return (
    <footer className="bg-deep text-ivory">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        {/* Brand statement and mini biography */}
        <div>
          <p className="text-2xl font-bold">I BUILD BRIDGES.</p>
          <p className="mt-2 font-semibold text-flame">{site.tagline}</p>
          <p className="mt-4 max-w-sm text-ivory/80">{site.shortBio}</p>
        </div>

        {/* Quick links */}
        <nav aria-label="Footer">
          <h2 className="font-bold">Explore</h2>
          <ul className="mt-4 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-ivory/80 hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-ivory/80 hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        {/* Connect */}
        <div>
          <h2 className="font-bold">Connect</h2>
          <ul className="mt-4 space-y-2">
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`} className="text-ivory/80 hover:text-white">
                  {site.email}
                </a>
              </li>
            ) : null}
            {socials.map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="capitalize text-ivory/80 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
            <li className="text-ivory/80">Port Harcourt, Nigeria</li>
          </ul>
        </div>

        {/* Kenex */}
        <div>
          <h2 className="font-bold">Kenex Konsults International</h2>
          <p className="mt-4 text-ivory/80">
            Corporate recruitment, HR outsourcing and technical manpower are delivered by Kenex.
          </p>
          <a
            href={site.links.kenex}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block rounded border-2 border-ivory px-4 py-2 font-semibold hover:bg-ivory hover:text-deep"
          >
            Visit Kenex
          </a>
        </div>
      </div>

      <div className="border-t border-ivory/20">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-sm text-ivory/80 sm:px-8">
          <p>
            © <CopyrightYear /> {site.name}. All rights reserved.
          </p>
          {site.flags.legalReady ? (
            <ul className="flex gap-5">
              <li><Link href="/privacy" className="hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
            </ul>
          ) : null}
        </div>
      </div>
    </footer>
  );
}