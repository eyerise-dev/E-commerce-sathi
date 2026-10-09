import ContactForm from '@/components/contact-form'

import {
  ArrowUpRight,
  BarChart3,
  Check,
  ChevronRight,
  Mail,
  MessageCircle,
  PackageSearch,
  ShieldCheck,
  Sparkles,
  Truck,
  WalletCards,
} from 'lucide-react'

const marketplaces = [
  { name: 'Flipkart', image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e5/Flipkart_logo_%282026%29.svg/960px-Flipkart_logo_%282026%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail', tint: 'flipkart' },
  { name: 'Amazon', image: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', tint: 'amazon' },
  { name: 'Meesho', image: 'https://upload.wikimedia.org/wikipedia/commons/3/33/Meesho_logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original', tint: 'meesho' },
]

const services = [
  {
    number: '01',
    icon: PackageSearch,
    title: 'Cataloging & listings',
    text: 'SEO optimized titles, descriptions, & high-converting images for Meesho, Flipkart, Amazon, Myntra.',
  },
  {
    number: '02',
    icon: Truck,
    title: 'Inventory & order mgmt',
    text: 'Real-time stock syncing across all channels & seamless order fulfillment processing.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'Account health & compliance',
    text: 'Proactive monitoring to prevent listing suppressions, policy violations, & resolve Safe-T claims.',
  },
  {
    number: '04',
    icon: BarChart3,
    title: 'ROI-driven ads',
    text: 'Strategic ad management on Flipkart & Amazon PPC to maximize your Return on Ad Spend (ROAS).',
  },
]

const plans = [
  ['01', '0–20', '₹2,999'],
  ['02', '21–50', '₹3,999'],
  ['03', '51–100', '₹4,999'],
  ['04', '101–500', '₹8,999'],
  ['05', '501+', '₹12,999'],
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faf8] text-[#082b3f]">
      <header className="site-header">
        <a href="#top" className="site-logo" aria-label="Home">
          <img src="/translogo.png" alt="Translogo" />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#advantage">Our advantage</a><a href="#pricing">Pricing</a>
        </nav>
        <a className="header-cta" href="/contact">Let&apos;s talk <ArrowUpRight size={16} /></a>
      </header>

      <section id="top" className="hero section-shell">
        <div className="hero-copy">
          <p className="eyebrow"><Sparkles size={15} /> DIGITAL MARKETPLACE INSIDERS</p>
          <h1>Make your marketplace<br /><span>work harder.</span></h1>
          <p className="hero-lede">The e-commerce growth partner built for ambitious businesses. We manage the detail, protect your accounts, and turn marketplace complexity into measurable growth.</p>
          <div className="hero-actions">
            <a href="/contact" className="primary-button">Ready to scale <ArrowUpRight size={18} /></a>
            <a href="#services" className="text-link">Explore services <ChevronRight size={17} /></a>
          </div>
          <div className="marketplace-row" aria-label="Marketplace partners">
            {marketplaces.map(({ name, image, short, tint }) => (
              <div key={name} className={`marketplace-badge ${tint}`}>
                {image ? (
                  <img src={image} alt={name} className="marketplace-logo" />
                ) : (
                  <span className="marketplace-mark">{short}</span>
                )}
                {short && <span>{name}</span>}
              </div>
            ))}
          </div>
          <div className="hero-proof"><span className="proof-icon"><Check size={15} /></span><span>Built by experienced marketplace specialists, quality analysts & senior account managers.</span></div>
        </div>
        <div className="hero-visual">
          <div className="visual-orbit orbit-one" /><div className="visual-orbit orbit-two" />
          <div className="hero-brand-mark">
            <img src="/translogo.png" alt="Translogo" />
          </div>
          <div className="floating-note note-top"><span>ROAS</span><strong>2.8x</strong><small>↑ 34% this month</small></div>
          <div className="floating-note note-bottom"><WalletCards size={18} /><span>One partner.<br /><strong>Every channel.</strong></span></div>
        </div>
      </section>

      <section id="services" className="services-section section-shell">
        <div className="section-intro"><div><p className="section-kicker">01 / WHAT WE DO</p><h2>Everything your<br /><span>store needs.</span></h2></div><p className="section-description">From first listing to final order, we bring the operator-level expertise that helps your business stay healthy, visible, and ready to grow.</p></div>
        <div className="service-grid">{services.map(({ number, icon: Icon, title, text }) => <article className="service-card" key={number}><div className="service-top"><span className="service-number">{number}</span><Icon size={24} strokeWidth={1.7} /></div><h3>{title}</h3><p>{text}</p><span className="card-arrow"><ArrowUpRight size={17} /></span></article>)}</div>
      </section>

      <section id="advantage" className="advantage-section"><div className="advantage-inner section-shell"><div className="advantage-badge">02</div><div><p className="section-kicker light">THE MARKETPLACE ADVANTAGE</p><h2>We know what<br /><span>the algorithm wants.</span></h2></div><div className="advantage-copy"><p>Unlock insider strategies from our team of experienced marketplace specialists, quality analysts, and senior account managers.</p><a href="/contact" className="light-link">Meet your growth partner <ArrowUpRight size={16} /></a></div></div></section>

      <section className="proposal-section section-shell"><div className="section-intro"><div><p className="section-kicker">04 / COMMERCIAL PROPOSAL</p><h2>Commit longer.<br /><span>Save more.</span></h2></div><p className="section-description">Volume-based discounts designed to scale seamlessly alongside your catalog growth.</p></div><div className="proposal-card"><div className="proposal-table proposal-table-head"><span>SKU range</span><span>Base monthly rate</span><span>3-month plan <small>10% discount</small></span><span>6-month plan <small>15% discount</small></span></div>{[['0 – 20','₹2,999 / mo','₹8,097 · Save ₹900','₹15,294 · Save ₹2,700'],['21 – 50','₹3,999 / mo','₹10,797 · Save ₹1,200','₹20,394 · Save ₹3,600'],['51 – 100','₹4,999 / mo','₹13,497 · Save ₹1,500','₹25,494 · Save ₹4,500'],['101 – 500','₹9,999 / mo','₹26,997 · Save ₹3,000','₹50,994 · Save ₹9,000'],['501+','₹12,999 / mo','₹35,097 · Save ₹3,900','₹66,294 · Save ₹11,700']].map(([sku, base, three, six]) => <div className="proposal-table proposal-table-row" key={sku}><strong>{sku} SKUs</strong><span>{base}</span><span>{three}</span><span>{six}</span></div>)}</div><div className="proposal-terms"><h3>Key terms &amp; conditions</h3><ul><li>Multi-month contract values are billed entirely upfront to qualify for the 10% or 15% discount.</li><li>If an active account exceeds its registered SKU boundaries mid-cycle, the plan shifts to the corresponding tier on a pro-rata basis.</li><li>Standard renewals revert to default monthly rates unless a subsequent multi-month extension is locked before expiration.</li></ul></div></section>

      <section className="service-sheet-section section-shell"><div className="section-intro"><div><p className="section-kicker">04 / THE COMPLETE PICTURE</p><h2>Built around<br /><span>your growth.</span></h2></div><p className="section-description">One focused marketplace growth partnership, with the insider expertise and transparent plans to help you scale confidently.</p></div><div className="detail-grid"><article className="detail-panel detail-panel-wide"><div className="detail-panel-heading"><span className="service-number">01</span><h3>Our core services</h3></div><div className="detail-service-list">{services.map(({ icon: Icon, title, text }) => <div className="detail-service" key={title}><Icon size={22} /><div><h4>{title}</h4><p>{text}</p></div></div>)}</div></article><article className="detail-panel advantage-detail"><div className="detail-panel-heading"><span className="service-number">02</span><h3>The marketplace advantage</h3></div><p>Unlock insider strategies from our team of experienced marketplace specialists, quality analysts, and senior account managers. We know what the algorithm wants.</p><a href="/contact" className="text-link">Work with insiders <ArrowUpRight size={16} /></a></article><article className="detail-panel detail-panel-wide"><div className="detail-panel-heading"><span className="service-number">03</span><h3>Transparent tiered pricing <small>per platform / per month</small></h3></div><div className="detail-pricing">{plans.map(([tier, sku, price]) => <div className="detail-pricing-row" key={tier}><span>Tier {tier}</span><strong>{sku} SKUs</strong><b>{price}</b></div>)}</div><p className="pricing-note">Terms &amp; conditions apply. Prices exclusive of applicable taxes.</p></article><article className="detail-panel ready-detail"><p className="section-kicker light">READY TO SCALE YOUR BUSINESS?</p><a href="tel:+919012426635">+91 90124 26635 <ArrowUpRight size={18} /></a><span>Marketplace growth partner</span></article></div></section>

      <section id="contact" className="contact-section section-shell"><div><p className="section-kicker light">04 / LET&apos;S WORK TOGETHER</p><h2>Ready to scale<br /><span>your business?</span></h2></div><div className="contact-details"><a href="tel:+919012426635" className="phone-link">+91 90124 26635 <ArrowUpRight size={20} /></a><a href="mailto:rahulpandeyji424@gmail.com" className="contact-line"><Mail size={18} /> rahulpandeyji424@gmail.com</a></div></section>

      <section className="home-contact-section section-shell"><div className="home-contact-copy"><p className="section-kicker">05 / START A CONVERSATION</p><h2>Let&apos;s make your<br /><span>next move.</span></h2><p>Share your marketplace details and we&apos;ll help you find the right path to healthier operations and stronger growth.</p><a href="mailto:rahulpandeyji424@gmail.com">rahulpandeyji424@gmail.com</a></div><ContactForm /></section>

      <footer className="footer section-shell">
        <div className="footer-main">
          <div className="footer-brand-block">
            <p className="footer-tagline">Digital Marketplace Insiders</p>
            <p className="footer-description">Your growth partner for healthier accounts, stronger listings, smoother operations, and better marketplace performance.</p>
          </div>
          <div className="footer-column"><p className="footer-label">Explore</p><a href="#services">Core services</a><a href="#advantage">Our advantage</a><a href="#pricing">Pricing plans</a><a href="/contact">Get in touch</a></div>
          <div className="footer-column"><p className="footer-label">Services</p><span>Cataloging &amp; listings</span><span>Inventory &amp; order management</span><span>Account health &amp; compliance</span><span>ROI-driven ads</span></div>
          <div className="footer-column footer-contact"><p className="footer-label">Contact</p><a href="tel:+919012426635">+91 90124 26635</a><a href="mailto:rahulpandeyji424@gmail.com">rahulpandeyji424@gmail.com</a></div>
        </div>
        <div className="footer-bottom"><p>© 2026. All rights reserved.</p><span>Terms &amp; conditions apply. Prices exclusive of applicable taxes.</span></div>
      </footer>

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
