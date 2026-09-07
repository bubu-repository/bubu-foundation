const FAQS = [
  {
    q: "Who can join Bubu Foundation?",
    a: "Anyone who has worked at BUBU, in any role, at any point. There's no seniority cutoff and no invite required — register with the email you'd like to use and build your profile.",
  },
  {
    q: "Is this an official BUBU platform?",
    a: "Yes. Bubu Foundation is BUBU's own alumni initiative — a sibling to BUBU.COM, not a third-party community.",
  },
  {
    q: "Does it cost anything to join or post an opportunity?",
    a: "No. Registration, building a profile, browsing the directory, and posting or answering opportunities are all free.",
  },
  {
    q: "How does the collaboration board actually work?",
    a: "Alumni post what they're building or looking for — a co-founder, a freelance gig, investment interest, a volunteer project. Everything happens person-to-person from there, over LinkedIn or WhatsApp. The board just makes the introduction.",
  },
  {
    q: "Can I remove my profile later?",
    a: "Yes, any time. Message the team and your profile comes down — no data stays published without your say.",
  },
  {
    q: "What if I don't have anything to post right now?",
    a: "Most people join to browse first. A complete profile is enough to be found — plenty of connections start with someone else reaching out to you.",
  },
];

export function FAQSection() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-3xl">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand">FAQ</p>
          <h2 className="mt-4 font-display text-4xl tracking-wide text-ink md:text-5xl">
            Questions, answered
          </h2>
        </div>

        <div className="mt-10 divide-y divide-line-lt border-y border-line-lt">
          {FAQS.map((faq) => (
            <details key={faq.q} className="group py-5">
              <summary className="ring-focus flex items-center justify-between gap-4 rounded-input">
                <span className="font-display text-lg tracking-wide text-ink md:text-xl">{faq.q}</span>
                <svg
                  className="accordion-icon shrink-0 text-brand"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden
                >
                  <path d="M10 4v12M4 10h12" strokeLinecap="round" />
                </svg>
              </summary>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-body">{faq.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
