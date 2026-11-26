const labels: Record<string, string> = {
  business: "Business Advisory",
  workforce: "Workforce & Recruitment Advisory",
  speaking: "Speaking & Training",
  partnerships: "Partnerships & Media",
};

const clean = (v: unknown, max = 4000) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  // Honeypot: pretend success so bots learn nothing.
  if (clean(body.website)) return Response.json({ ok: true });

  const name = clean(body.name, 200);
  const email = clean(body.email, 200);
  const message = clean(body.message);
  const category = clean(body.category, 50);

  if (!name || !message || !labels[category] || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: "Please complete the required fields with a valid email address." }, { status: 400 });
  }

  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    console.error("Contact form: RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is not set.");
    return Response.json(
      { error: "Our enquiry form is not available right now. Please try again later." },
      { status: 503 }
    );
  }

  const lines = [
    `Category: ${labels[category]}`,
    `Name: ${name}`,
    `Email: ${email}`,
    `Organisation: ${clean(body.organisation, 200)}`,
    `Phone / WhatsApp: ${clean(body.phone, 60)}`,
    `Industry: ${clean(body.industry, 200)}`,
    `Preferred contact: ${clean(body.preferred, 60)}`,
    `Timeline: ${clean(body.timeline, 200)}`,
    `Budget range: ${clean(body.budget, 200)}`,
    "",
    message,
  ];

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Website enquiry: ${labels[category]} — ${name}`,
      text: lines.join("\n"),
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return Response.json({ error: "We could not send your enquiry. Please try again shortly." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
