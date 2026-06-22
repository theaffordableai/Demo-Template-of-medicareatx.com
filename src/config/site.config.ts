// Single source of truth for this site: brand, GHL, WebMCP, AEO identity.
// To spin a new client: copy this site folder and swap this file.
// Demo brand — Big Sioux Benefits, a fictional independent Medicare agency in Sioux Falls, SD.

export const site = {
  domain: "https://bigsiouxbenefits.com",
  brand: {
    name: "Big Sioux Benefits",
    short: "Big Sioux Benefits",
    tagline: "Medicare made easy — plus expert advice at no cost",
    // Org-level author for YMYL (Pillar 1 — never a single person)
    author: "Big Sioux Benefits Data Desk",
    advisorName: "Dale Hofer",
    advisorTitle: "Your personal Medicare & insurance consultant",
    foundedCity: "Sioux Falls",
    state: "SD",
    serviceArea: "the Sioux Falls metro & Siouxland — eastern South Dakota, northwest Iowa & southwest Minnesota",
    phone: "(605) 274-8100",
    phoneHref: "+16052748100",
    email: "info@bigsiouxbenefits.com",
    address: { street: "300 N Phillips Ave, Suite 200", city: "Sioux Falls", region: "SD", postal: "57104" },
    hours: "Mon–Fri 9am–5pm CT",
    npn: "DEMO-NPN-00000000",
    social: ["https://www.linkedin.com/company/big-sioux-benefits"] as string[],
  },
  // Brand design tokens (kept in sync with src/styles/ds/tokens/colors.css)
  theme: {
    ink: "#0f2233", primary: "#1d5082", primaryDark: "#13243b",
    accent: "#c2935e", accentDark: "#9a7038",
    cta: "#f2592b", teal: "#327c6a",
    paper: "#ffffff", soft: "#eaf1f8", line: "#e1e9f1", muted: "#46586d",
    headingFont: "'Lexend', system-ui, sans-serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    monoFont: "'Source Sans 3', monospace",
  },
  // GHL (demo IDs — replace with the client's real sub-account values)
  ghl: {
    locationId: "DEMO_LOCATION_ID",
    calendarId: "DEMO_CALENDAR_ID",
    chatWidgetId: "",
    voiceWidgetId: "",
    trackingDomain: "link.bigsiouxbenefits.com",
    trackingId: "tk_DEMO000000000000000000000000000",
    enableChat: true,
    enableVoice: false,
  },
  // WebMCP (Pillar 4) — tools this site exposes to AI agents
  webmcp: {
    name: "Big Sioux Benefits WebMCP",
    description: "Live Medicare plan + cost tools for browsing AI agents.",
  },
} as const;

export type Site = typeof site;
