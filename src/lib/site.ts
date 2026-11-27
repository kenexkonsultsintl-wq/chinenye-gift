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
  links: {
    kenex: "https://www.kenexkonsultsintl.com",
    phCareerConnect: "https://phcareerconnectandjobfair.com",
    kenexLinkedIn: "https://www.linkedin.com/company/kenex-konsults-international/",
    kenexLinktree: "https://linktr.ee/kenexkonsultsinternational",
    workplaceReality: "https://www.youtube.com/@workplace-realities",
  },
  // [TO SUPPLY] final email - rendered only when set
  email: null as string | null,
  phone: {
    display: "+234 906 835 6851",
    tel: "+2349068356851",
    whatsapp: "https://wa.me/2349068356851",
  },
  social: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/chinenye-gift-anyanso-6b9a43191",
    },
    { label: "Instagram", href: "https://www.instagram.com/hrextrordinary/" },
    {
      label: "Facebook",
      href: "https://www.facebook.com/chinenyegift.anyanso/",
    },
    { label: "YouTube", href: "https://www.youtube.com/@chinenyegift" },
  ] as { label: string; href: string }[],
  flags: {
    guideReady: false,
    legalReady: false,
    newsletterReady: false,
  },
};