import { ArrowUpRight, Check } from 'lucide-react'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { plans } from '@/lib/site-content'

const pricingQuestions = [
  {
    question: 'Are these prices monthly?',
    answer: 'Yes. The listed marketplace plans are billed monthly. An additional 18% GST applies.',
  },
  {
    question: 'Which plan should I choose?',
    answer: 'Choose based on your current catalogue size and the kind of support you need. These plans cover up to 500 SKUs; for a larger catalogue or specific requirements, contact us to discuss a custom scope.',
  },
  {
    question: 'Can I ask about a custom scope?',
    answer: 'Yes. Share your marketplace, catalogue size, and priorities with our team to discuss the scope that fits your needs.',
  },
]

export default function PricingPage() {
  return (
    <main className="pricing-route-page">
      <SiteHeader />
      <section className="section-shell pricing-route-hero">
        <div><p className="section-kicker">PLANS THAT FIT YOUR GROWTH</p><h1>Choose your<br /><span>next stage.</span></h1></div>
        <div className="pricing-route-summary"><p>Clear monthly marketplace support plans, with a practical scope for different stages of growth.</p><span><Check size={15} /> All plans billed monthly</span><span><Check size={15} /> 18% GST applies</span></div>
      </section>

      <section className="section-shell pricing-route-plans">
        <div className="pricing-grid">
          {plans.map(({ name, price, scope, features, popular }) => (
            <article className={`pricing-plan${popular ? ' pricing-plan-popular' : ''}`} key={name}>
              {popular && <span className="plan-popular-label">Most popular</span>}
              <div className="plan-heading"><p>{name}</p>{scope && <span>{scope}</span>}</div>
              <div className="plan-price"><strong>{price}</strong><span>/ month</span></div>
              <p className="plan-tax">+ 18% GST</p>
              <a className="plan-cta" href="/contact">Choose {name} <ArrowUpRight size={16} /></a>
              <ul>{features.map((feature) => <li key={feature}><Check size={15} />{feature}</li>)}</ul>
            </article>
          ))}
        </div>
        <p className="pricing-route-note">Prices shown are for marketplace support plans and exclude applicable taxes. Final scope can be discussed with our team.</p>
      </section>

      <section className="section-shell pricing-faq-section">
        <div className="route-section-heading"><div><p className="section-kicker">A FEW QUICK DETAILS</p><h2>Good to know<br /><span>before you choose.</span></h2></div><p>Have a question that isn&apos;t covered here? Our team can help clarify the scope before you get started.</p></div>
        <div className="pricing-faq-list">{pricingQuestions.map(({ question, answer }) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div>
      </section>
      <SiteFooter />
    </main>
  )
}