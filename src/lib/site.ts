// Central site config. Later this moves into Sanity ("Profile" content type).
export const site = {
  name: "Chinenye Gift",
  fullName: "Chinenye Gift Ekene Chukwuocha",
  tagline: "Building People. Strengthening Businesses. Creating Opportunities.",
  shortBio:
    "Business and workforce strategist, recruitment consultant and founder of Kenex Konsults International.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Expertise", href: "/expertise" },
    { label: "Work & Impact", href: "/work" },
    { label: "Resources", href: "/resources" },
    { label: "Insights", href: "/insights" },
  ],
  // [VERIFY] before launch
  links: {
    kenex: "https://www.kenexkonsultsintl.com",
    phCareerConnect: "https://phcareerconnectandjobfair.com",
  },
  // [TO SUPPLY] - rendered only when set
  email: null as string | null,
  social: [] as { label: string; href: string }[],
  // Blueprint: hide until the guide PDF, consent form and delivery email exist.
  flags: {
    guideReady: false,
    legalReady: false,
    newsletterReady: false,
  },
};