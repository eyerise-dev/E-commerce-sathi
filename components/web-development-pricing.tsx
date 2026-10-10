import {
  ArrowUpRight,
  Check,
  Code2,
  LayoutGrid,
  Rocket,
  ShoppingCart,
} from 'lucide-react'

const webDevelopmentOffers = [
  {
    name: 'Campaign landing page',
    price: '₹7,999',
    icon: Rocket,
    scope: 'One responsive campaign page',
    summary: 'A focused page for a launch, offer, product, or campaign.',
    includes: ['Offer and content hierarchy', 'Clear calls to action', 'Enquiry or lead-capture form', 'Mobile and launch checks'],
  },
  {
    name: 'Website redesign',
    price: '₹11,999',
    icon: Code2,
    scope: 'Refresh for up to 5 existing pages',
    summary: 'A thoughtful redesign to improve clarity, usability, and speed.',
    includes: ['Current page and content review', 'Updated visual and navigation direction', 'Responsive usability improvements', 'Quality and performance review'],
  },
  {
    name: 'Business website',
    price: '₹15,999',
    icon: LayoutGrid,
    scope: 'Up to 5 core business pages',
    summary: 'A polished home for your brand, services, and enquiries.',
    includes: ['Mobile-first page design', 'Home, about, and service pages', 'Contact form and enquiry path', 'Search-ready page structure'],
  },
  {
    name: 'E-commerce store',
    price: '₹29,999',
    icon: ShoppingCart,
    scope: 'Starter storefront; catalogue sized to brief',
    summary: 'A clear shopping experience that makes it easy to browse and buy.',
    includes: ['Product and category layouts', 'Starter catalogue setup', 'Cart and standard checkout flow', 'Mobile shopping and launch checks'],
  },
]

type WebDevelopmentPricingProps = {
  variant: 'home' | 'page'
}

export default function WebDevelopmentPricing({ variant }: WebDevelopmentPricingProps) {
  const isHome = variant === 'home'

  return (
    <section id={isHome ? 'web-development' : undefined} className={`web-build-section section-shell${isHome ? ' web-build-home' : ' web-build-page'}`}>
      <div className="section-intro">
        <div>
          <p className="section-kicker">{isHome ? '04 / WEB DESIGN & DEVELOPMENT' : 'WEB DEVELOPMENT / PROJECT PRICING'}</p>
          <h2>{isHome ? <>Digital experiences<br /><span>built for what&apos;s next.</span></> : <>Clear starting prices.<br /><span>Thoughtful website builds.</span></>}</h2>
        </div>
        <div className="web-build-intro-copy">
          <p className="section-description">{isHome ? 'From a focused landing page to a complete online store, see typical starting prices and what each build can include.' : 'Choose a useful starting point. We confirm the exact pages, content, features, and integrations in your project scope before work begins.'}</p>
          {isHome && <a href="/web-development" className="text-link">Explore web development <ArrowUpRight size={16} /></a>}
        </div>
      </div>

      <div className="web-build-grid">
        {webDevelopmentOffers.map(({ name, price, icon: Icon, scope, summary, includes }, index) => (
          <article className={`web-build-card${index === 3 ? ' web-build-card-featured' : ''}`} key={name}>
            <div className="web-build-card-top"><span>0{index + 1} / PROJECT TYPE</span><Icon size={23} strokeWidth={1.7} /></div>
            <h3>{name}</h3>
            <p className="web-build-summary">{summary}</p>
            <p className="web-build-scope"><span>BASE SCOPE</span>{scope}</p>
            <ul>{includes.map((item) => <li key={item}><Check size={14} />{item}</li>)}</ul>
            <div className="web-build-price"><span>Starting from</span><strong>{price}</strong><small>one-time build</small><small className="web-build-gst">+18% GST</small></div>
            <a href="/contact">Discuss a project <ArrowUpRight size={15} /></a>
          </article>
        ))}
      </div>
      <p className="web-build-pricing-note">Starting prices apply to the base scopes shown; final quotes vary by pages, features, integrations, and content readiness. Prices exclude 18% GST, domain, hosting, and third-party platform fees. <a href="https://www.akoode.com/blog/website-development-cost-in-india" target="_blank" rel="noreferrer">View India pricing benchmark <ArrowUpRight size={12} /></a></p>
    </section>
  )
}