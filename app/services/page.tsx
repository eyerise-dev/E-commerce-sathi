import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronRight,
  ClipboardList,
} from 'lucide-react'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import { services } from '@/lib/site-content'

const serviceOutcomes = [
  'Clarify account setup and launch steps',
  'Understand account and category requirements',
  'Prepare organized product information for upload',
  'Keep product attributes clear and consistent',
  'Improve listing structure and product content',
  'Spot account issues that need follow-up',
  'Get practical help with day-to-day seller tasks',
  'Prioritize growth opportunities for your channels',
]

export default function ServicesPage() {
  return (
    <main className="service-route-page">
      <SiteHeader />
      <section className="section-shell route-hero service-route-hero">
        <div className="route-hero-copy">
          <p className="section-kicker">MARKETPLACE SERVICES</p>
          <h1>Better marketplace<br /><span>work, made manageable.</span></h1>
          <p>From your first seller account steps to the daily work of keeping listings and operations healthy, get practical support shaped around your business.</p>
          <a className="route-primary-link" href="/contact">Talk through your needs <ArrowUpRight size={16} /></a>
        </div>
        <div className="route-hero-aside">
          <span className="route-aside-icon"><ClipboardList size={24} /></span>
          <p className="route-aside-label">SUPPORT, CONNECTED</p>
          <strong>Setup. Catalogue.<br />Account health. Growth.</strong>
          <span className="route-aside-line" />
          <p>Choose the help you need now and build from there.</p>
        </div>
      </section>

      <section className="section-shell service-route-list">
        <div className="route-section-heading">
          <div><p className="section-kicker">WHAT WE CAN HELP WITH</p><h2>Marketplace support<br /><span>for every stage.</span></h2></div>
          <p>Clear, hands-on support for sellers who want to spend less time untangling marketplace tasks and more time running their business.</p>
        </div>
        <div className="service-route-grid">
          {services.map(({ number, icon: Icon, title, text }, index) => (
            <article className="service-route-card" key={number}>
              <div className="service-route-card-top"><span>{number} / SERVICE</span><Icon size={24} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <div className="service-route-outcome"><Check size={14} /><span>{serviceOutcomes[index]}</span></div>
              <a href="/contact" aria-label={`Ask about ${title}`}>Discuss this service <ArrowRight size={15} /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell service-route-cta">
        <div><p className="section-kicker light">A GOOD PLACE TO START</p><h2>Not sure what<br /><span>you need yet?</span></h2></div>
        <p>Tell us where your marketplace business is today. We can help you identify a useful next step and the right support for it.</p>
        <a href="/contact">Start a conversation <ChevronRight size={17} /></a>
      </section>
      <SiteFooter />
    </main>
  )
}