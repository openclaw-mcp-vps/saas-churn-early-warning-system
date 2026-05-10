export default function Home() {
  const faqs = [
    {
      q: 'How does ChurnGuard predict churn?',
      a: 'We analyze login frequency, feature usage, support tickets, and billing signals to score each customer 0–100. Scores above 70 trigger automated retention workflows.'
    },
    {
      q: 'What integrations are supported?',
      a: 'ChurnGuard connects to Stripe, Intercom, HubSpot, Segment, and any REST API. Setup takes under 10 minutes with our guided wizard.'
    },
    {
      q: 'Can I cancel anytime?',
      a: 'Yes. No contracts, no lock-in. Cancel from your dashboard in one click and you will not be charged again.'
    }
  ]

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          Early Warning System
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict customer churn<br />
          <span className="text-[#58a6ff]">30 days before it happens</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes behavior patterns and engagement signals to surface at-risk customers and fire retention campaigns automatically — before they cancel.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
        >
          Start for $17/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required for 14-day trial. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-3 gap-6 text-center">
          {[['94%', 'Prediction accuracy'], ['30 days', 'Average lead time'], ['3 min', 'Setup time']].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#8b949e] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <div className="text-[#8b949e] text-sm mb-6">/month per workspace</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              'Up to 5,000 tracked customers',
              'ML churn scoring updated daily',
              'Automated email & Slack alerts',
              'Stripe, Intercom & HubSpot sync',
              'Retention campaign templates',
              'Priority support'
            ].map(f => (
              <li key={f} className="flex items-center gap-2">
                <span className="text-[#58a6ff]">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently asked questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-6 text-xs text-[#6e7681]">
        &copy; {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
