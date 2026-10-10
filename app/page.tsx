import ContactForm from '@/components/contact-form'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import MarketplaceExplorer from '@/components/marketplace-explorer'
import WebDevelopmentPricing from '@/components/web-development-pricing'
import { plans, services } from '@/lib/site-content'

import {
  ArrowUpRight,
  Check,
  ChevronRight,
  Mail,
  MessageCircle,
  Sparkles,
  WalletCards,
} from 'lucide-react'

export default function Page() {
  return (
    <main className="home-page min-h-screen overflow-hidden bg-[#f7faf8] text-[#082b3f]">
      <SiteHeader />

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> DIGITAL MARKETPLACE INSIDERS</p>
          <h1>Make your marketplace<br /><span>work harder.</span></h1>
          <p className="hero-lede">The e-commerce growth partner built for ambitious businesses. We manage the detail, protect your accounts, and turn marketplace complexity into measurable growth.</p>
          <div className="hero-actions">
            <a href="/contact" className="primary-button">Ready to scale <ArrowUpRight size={18} /></a>
            <a href="/services" className="text-link">Explore services <ChevronRight size={17} /></a>
          </div>
          <MarketplaceExplorer />
          <div className="hero-proof"><span className="proof-icon"><Check size={15} /></span><span>Built by experienced marketplace specialists, quality analysts & senior account managers.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="hero-brand-mark">
            <img src="/translogo.png" alt="Translogo" />
          </div>
          <div className="floating-note note-top"><span>GROWTH FOCUS</span><strong>Clear plan</strong><small>Goals to next steps</small></div>
          <div className="floating-note note-bottom"><WalletCards size={18} /><span>One partner.<br /><strong>Every channel.</strong></span></div>
        </div>
      </section>

      <section id="services" className="services-section section-shell">
        <div className="section-intro"><div><p className="section-kicker">01 / WHAT WE DO</p><h2>Why choose<br /><span>E-Commerce Sathi?</span></h2></div><p className="section-description">From seller onboarding to marketplace growth strategy, get practical support for every stage of your e-commerce journey.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-top"><span className="service-number">{number}</span><Icon size={24} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="advantage" className="advantage-section"><div className="advantage-inner section-shell"><div className="advantage-badge">02</div><div><p className="section-kicker light">THE MARKETPLACE ADVANTAGE</p><h2>We know what<br /><span>the algorithm wants.</span></h2></div><div className="advantage-copy"><p>Unlock insider strategies from our team of experienced marketplace specialists, quality analysts, and senior account managers.</p><a href="/contact" className="light-link">Meet your growth partner <ArrowUpRight size={16} /></a></div></div></section>

      <section id="pricing" className="pricing-section section-shell">
        <div className="section-intro"><div><p className="section-kicker">03 / PLANS THAT FIT YOUR GROWTH</p><h2>Choose your<br /><span>next stage.</span></h2></div><p className="section-description">Clear monthly plans that scale with your marketplace needs. Every plan is billed per month; 18% GST applies.</p></div>
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
      </section>

      <WebDevelopmentPricing variant="home" />

      <section id="contact" className="contact-section section-shell"><div><p className="section-kicker light">05 / LET&apos;S WORK TOGETHER</p><h2>Ready to scale<br /><span>your business?</span></h2></div><div className="contact-details"><a href="tel:+919012426635" className="phone-link">+91 90124 26635 <ArrowUpRight size={20} /></a><a href="mailto:rahulpandeyji424@gmail.com" className="contact-line"><Mail size={18} /> rahulpandeyji424@gmail.com</a></div></section>

      <section className="home-contact-section section-shell"><div className="home-contact-copy"><p className="section-kicker">06 / START A CONVERSATION</p><h2>Let&apos;s make your<br /><span>next move.</span></h2><p>Share your marketplace details and we&apos;ll help you find the right path to healthier operations and stronger growth.</p><a href="mailto:rahulpandeyji424@gmail.com">rahulpandeyji424@gmail.com</a></div><ContactForm /></section>

      <SiteFooter />

      <a
        href="https://wa.me/919012426635?text=Hi%20E-Commerce%20Sathi%2C%20I%20want%20to%20discuss%20my%20marketplace%20growth%20requirements."
        className="whatsapp-float"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </main>
  )
}
