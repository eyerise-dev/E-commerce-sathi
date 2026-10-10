'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  Check,
  Code2,
  LayoutGrid,
  Rocket,
  Smartphone,
  ShoppingCart,
  Target,
  Workflow,
} from 'lucide-react'

const websiteBenefits = [
  {
    number: '01',
    label: 'CUSTOMER JOURNEY',
    title: 'Make the next step obvious',
    text: 'Organize pages around the questions customers have, then make it easy to enquire, call, or continue to checkout.',
    icon: Target,
  },
  {
    number: '02',
    label: 'MOBILE EXPERIENCE',
    title: 'Feel effortless on every screen',
    text: 'Responsive layouts keep content readable, controls usable, and key actions close at hand on phones and tablets.',
    icon: Smartphone,
  },
  {
    number: '03',
    label: 'STRUCTURE & CONTENT',
    title: 'Give every page a purpose',
    text: 'Clear hierarchy, useful page content, and consistent navigation help visitors understand your offer without hunting.',
    icon: LayoutGrid,
  },
  {
    number: '04',
    label: 'READY TO GROW',
    title: 'Start with strong foundations',
    text: 'Thoughtful page structure, search-friendly basics, and scoped integrations make it easier to keep improving over time.',
    icon: Workflow,
  },
]

const projectTypes = [
  {
    name: 'Business website',
    icon: LayoutGrid,
    fit: 'For service businesses and growing brands',
    summary: 'A clear, credible home for your business that explains what you do and makes it easy for the right people to get in touch.',
    deliverables: ['Page structure and content direction', 'Responsive home, about, and service pages', 'Enquiry form and contact pathways', 'Search-friendly page foundations'],
    focus: 'Clarity, trust, and enquiries',
  },
  {
    name: 'Online store',
    icon: ShoppingCart,
    fit: 'For brands ready to sell directly online',
    summary: 'A considered shopping experience that helps customers move from product discovery to checkout with confidence.',
    deliverables: ['Product and category page structure', 'Mobile-first shopping experience', 'Cart and checkout flow planning', 'Store content and launch checklist'],
    focus: 'Product discovery and purchase flow',
  },
  {
    name: 'Campaign page',
    icon: Rocket,
    fit: 'For a launch, offer, event, or focused campaign',
    summary: 'A focused page built around one message and one next step, with the content and calls to action kept easy to follow.',
    deliverables: ['Campaign message and page outline', 'Focused responsive landing page', 'Lead capture or enquiry pathway', 'Measurement-ready page structure'],
    focus: 'One clear message and action',
  },
  {
    name: 'Website refresh',
    icon: Code2,
    fit: 'For businesses ready to improve an existing website',
    summary: 'A practical redesign that improves usability and presentation while preserving the parts of your site that already work.',
    deliverables: ['Current-site and content review', 'Updated visual and navigation direction', 'Responsive page improvements', 'Quality and performance review'],
    focus: 'Usability, consistency, and speed',
  },
]

const deliverySteps = [
  { number: '01', title: 'Understand', text: 'Align on your audience, goals, content, and must-have functionality.' },
  { number: '02', title: 'Plan and design', text: 'Shape the page structure and visual direction before development begins.' },
  { number: '03', title: 'Build and review', text: 'Develop responsive pages, then review the details together across screen sizes.' },
  { number: '04', title: 'Prepare to launch', text: 'Complete final checks and make sure the next steps after launch are clear.' },
]

export default function WebDevelopmentExplorer() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeProject = projectTypes[activeIndex]

  return (
    <>
      <section className="section-shell web-benefits-section">
        <div className="route-section-heading web-benefits-heading">
          <div><p className="section-kicker">BUILT AROUND YOUR CUSTOMERS</p><h2>A website should do<br /><span>more than look good.</span></h2></div>
          <p>Your website is often the first detailed introduction to your business. We focus on the experience behind the visuals: what customers need to know, where they should go next, and how the site supports your goals.</p>
        </div>
        <div className="web-benefits-grid">
          {websiteBenefits.map(({ number, label, title, text, icon: Icon }, index) => (
            <article className="web-benefit-card" key={number} style={{ animationDelay: `${index * 85}ms` }}>
              <div className="web-benefit-top"><span>{number} / {label}</span><Icon size={22} strokeWidth={1.7} /></div>
              <h3>{title}</h3>
              <p>{text}</p>
              <span className="web-benefit-rule" />
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell web-project-section">
        <div className="route-section-heading web-project-heading">
          <div><p className="section-kicker">A CLEAR, CUSTOM SCOPE</p><h2>Choose your project.<br /><span>See what it includes.</span></h2></div>
          <p>Start with the kind of website you need. We&apos;ll talk through your goals, content, and required functionality, then agree on the deliverables before development begins.</p>
        </div>
        <div className="web-project-layout">
          <div className="web-project-options" role="tablist" aria-label="Website project types">
            {projectTypes.map(({ name, icon: Icon }, index) => (
              <button className={`web-project-option${activeIndex === index ? ' is-active' : ''}`} key={name} type="button" role="tab" id={`project-tab-${index}`} aria-selected={activeIndex === index} aria-controls="project-detail-panel" onClick={() => setActiveIndex(index)}>
                <span className="web-project-option-icon"><Icon size={19} /></span>
                <span>{name}</span>
                <ArrowUpRight size={15} />
              </button>
            ))}
            <div className="web-project-option-note"><span className="web-project-note-dot" />Not sure which one fits? We&apos;ll help you define the scope.</div>
          </div>

          <article className="web-project-detail" id="project-detail-panel" role="tabpanel" aria-labelledby={`project-tab-${activeIndex}`} key={activeProject.name}>
            <div className="web-project-detail-top"><span>PROJECT TYPE / 0{activeIndex + 1}</span><activeProject.icon size={22} /></div>
            <p className="web-project-fit">{activeProject.fit}</p>
            <h3>{activeProject.name}<br /><span>designed around your goals.</span></h3>
            <p className="web-project-summary">{activeProject.summary}</p>
            <div className="web-project-focus"><span>PRIMARY FOCUS</span><strong>{activeProject.focus}</strong></div>
            <ul>{activeProject.deliverables.map((item) => <li key={item}><Check size={15} />{item}</li>)}</ul>
            <a href="/contact">Get a project consultation <ArrowUpRight size={16} /></a>
          </article>
        </div>
      </section>

      <section className="web-delivery-band">
        <div className="section-shell web-delivery-section">
          <div className="web-delivery-heading"><p className="section-kicker light">A CLEAR PROCESS</p><h2>Thoughtful at every<br /><span>stage of the build.</span></h2><p>You stay involved throughout, with a shared understanding of decisions, deliverables, and what happens next.</p></div>
          <div className="web-delivery-steps">{deliverySteps.map(({ number, title, text }, index) => <article className="web-delivery-step" key={number} style={{ animationDelay: `${index * 90}ms` }}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div><Check size={17} /></article>)}</div>
        </div>
      </section>

      <section className="section-shell web-dev-faq-section">
        <div className="route-section-heading"><div><p className="section-kicker">PROJECT QUESTIONS</p><h2>A few useful<br /><span>things to know.</span></h2></div><p>We&apos;ll confirm the exact pages, functionality, content, and delivery plan with you before work begins.</p></div>
        <div className="pricing-faq-list">
          <details><summary>How do project scope and pricing work? <span>+</span></summary><p>Scope depends on the number and type of pages, design needs, content readiness, and any required integrations. We&apos;ll clarify those details and agree on the deliverables before work starts.</p></details>
          <details><summary>Can you improve a website I already have? <span>+</span></summary><p>Yes. A refresh can start with a review of your current pages, content, and customer journeys, then focus on the improvements that matter most to your goals.</p></details>
          <details><summary>What if my website content is not ready? <span>+</span></summary><p>That&apos;s fine. We can map the content each page needs and identify what should be prepared. Any copywriting or content-production responsibilities are clarified as part of the project scope.</p></details>
          <details><summary>How do we get started? <span>+</span></summary><p>Send an enquiry with a little context about your business, audience, and goals. We&apos;ll follow up to understand the project and discuss practical next steps.</p></details>
        </div>
      </section>

      <section className="section-shell web-project-cta">
        <div><p className="section-kicker light">YOUR NEXT STEP</p><h2>Have a website idea?<br /><span>Let&apos;s shape it.</span></h2></div>
        <p>Tell us what you&apos;re building, who it needs to serve, and what you want visitors to do. We&apos;ll help turn that into a clear first conversation about scope.</p>
        <a href="/contact">Talk about your project <ArrowUpRight size={16} /></a>
      </section>
    </>
  )
}