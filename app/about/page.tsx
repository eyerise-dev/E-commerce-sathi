import {
  ArrowUpRight,
  Check,
  Compass,
  Globe,
  Handshake,
  Lightbulb,
  Mail,
  MessageCircle,
  Phone,
  ShoppingCart,
  Target,
  UsersRound,
} from 'lucide-react'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'

const principles = [
  { number: '01', title: 'People before process', text: 'Every business has a different starting point. We listen first, learn how you work, and shape support around your real priorities.', icon: UsersRound },
  { number: '02', title: 'Clear, practical guidance', text: 'Marketplace work can get complicated quickly. We turn the next steps into clear actions, without burying you in jargon.', icon: Compass },
  { number: '03', title: 'Built for steady growth', text: 'Healthy accounts, useful catalogues, and consistent operations create a stronger base for long-term marketplace growth.', icon: Target },
]

const capabilities = [
  'Seller onboarding and marketplace setup',
  'Catalogue creation and listing improvement',
  'Account health and operational support',
  'Growth planning for marketplace sellers',
]

const contactCards = [
  { name: 'Rahul Pandey', role: 'CEO & Founder', email: 'rahulpandeyji424@gmail.com', phone: '+91 90124 26635' },
  { name: 'Sidhant', role: 'Seller Connect & Onboarding', email: 'shekhard2626@gmail.com', phone: '+91 90124 26635' },
]

export default function AboutPage() {
  return (
    <main className="about-page">
      <SiteHeader />

      <section className="section-shell about-hero">
        <div className="about-hero-copy">
          <p className="section-kicker"><span className="about-kicker-dot" /> ABOUT E-COMMERCE SATHI</p>
          <h1>Good commerce<br />starts with <span>good people.</span></h1>
          <p className="about-lede">We help businesses make sense of online marketplaces. From getting started to improving day-to-day operations, our team brings practical support to the details that keep your business moving.</p>
          <div className="about-hero-actions"><a className="about-primary-link" href="/services">Explore our services <ArrowUpRight size={17} /></a><span className="about-response-note"><span /> A real team, ready to help</span></div>
        </div>
        <div className="about-hero-art" aria-label="E-Commerce Sathi marketplace support">
          <div className="about-orbit about-orbit-one" /><div className="about-orbit about-orbit-two" />
          <div className="about-logo-frame"><img src="/translogo.png" alt="E-Commerce Sathi" /></div>
          <div className="about-note about-note-top"><span className="about-note-icon"><Check size={15} /></span><span><strong>Less guesswork</strong><small>Clear next steps</small></span></div>
          <div className="about-note about-note-bottom"><span className="about-note-icon"><Handshake size={16} /></span><span><strong>More partnership</strong><small>Support that stays close</small></span></div>
        </div>
      </section>

      <section className="about-story-band"><div className="section-shell about-story">
        <div className="about-story-label"><span>OUR POINT OF VIEW</span><span className="about-story-rule" /></div>
        <div className="about-story-copy"><h2>Marketplace growth is a team effort.</h2><p>Running an online business means balancing products, listings, account requirements, and customer expectations all at once. E-Commerce Sathi exists to make those moving parts easier to manage.</p><p>We work alongside sellers with hands-on marketplace support and thoughtful guidance. The goal is simple: give you more clarity in the everyday work, so you can focus on building your business.</p></div>
        <div className="about-story-stamp"><span>YOUR</span><strong>growth<br />partner</strong><ArrowUpRight size={18} /></div>
      </div></section>

      <section className="section-shell about-principles-section">
        <div className="about-section-heading"><div><p className="section-kicker">HOW WE WORK</p><h2>Support that feels<br /><span>thoughtful and human.</span></h2></div><p>Good support is more than a checklist. It means understanding the business behind the account and making the next step feel manageable.</p></div>
        <div className="about-principles">{principles.map(({ number, title, text, icon: Icon }) => <article className="about-principle" key={number}><div className="about-principle-top"><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="about-capabilities-band"><div className="section-shell about-capabilities">
        <div className="about-capabilities-copy"><p className="section-kicker light">ONE PARTNER, PRACTICAL SUPPORT</p><h2>From first steps<br />to <span>what comes next.</span></h2><p>Our work spans the everyday essentials of selling online, with guidance shaped around your goals and where you are in the journey.</p><a className="light-link" href="/services">See all services <ArrowUpRight size={16} /></a></div>
        <div className="about-capabilities-list">{capabilities.map((capability) => <div className="about-capability" key={capability}><span><Check size={15} /></span>{capability}<ArrowUpRight size={16} /></div>)}<div className="about-capability-note"><Lightbulb size={19} /><span>Thoughtful advice. Practical action. Progress you can build on.</span></div></div>
      </div></section>

      <section className="section-shell about-team-section">
        <div className="about-section-heading about-team-heading"><div><p className="section-kicker">THE PEOPLE BEHIND THE SUPPORT</p><h2>Meet your<br /><span>people at Sathi.</span></h2></div><p>Reach out directly. We&apos;re happy to learn about your business and help you figure out a useful next step.</p></div>
        <div className="about-team-grid">{contactCards.map((person, index) => <article key={person.name} className="about-team-card"><div className="about-team-card-top"><span className="about-team-index">0{index + 1} / TEAM</span><span className="about-team-avatar"><Handshake size={21} /></span></div><h3>{person.name}</h3><p className="about-team-role">{person.role}</p><div className="about-team-links"><a href={`mailto:${person.email}`}><Mail size={15} />{person.email}<ArrowUpRight size={14} /></a><a href={`tel:${person.phone.replace(/\s+/g, '')}`}><Phone size={15} />{person.phone}<ArrowUpRight size={14} /></a></div></article>)}</div>
        <div className="about-social-row"><a href="https://wa.me/919012426635" target="_blank" rel="noreferrer"><MessageCircle size={17} />Chat on WhatsApp<ArrowUpRight size={14} /></a><span><Globe size={16} /> E-Commerce Sathi <span className="about-social-divider" /> <ShoppingCart size={16} /> Marketplace growth, made more manageable</span></div>
      </section>

      <section className="section-shell about-bottom-cta"><div><p className="section-kicker light">READY WHEN YOU ARE</p><h2>Let&apos;s make your<br /><span>next step clearer.</span></h2></div><a href="/contact">Talk to our team <ArrowUpRight size={17} /></a></section>
      <SiteFooter />
    </main>
  )
}