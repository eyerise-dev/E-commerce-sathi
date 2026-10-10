import { ArrowUpRight, Check, Code2, LayoutGrid, Rocket, ShoppingCart } from 'lucide-react'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'
import WebDevelopmentExplorer from '@/components/web-development-explorer'
import WebDevelopmentPricing from '@/components/web-development-pricing'

export default function WebDevelopmentPage() {
  return (
    <main className="web-dev-page">
      <SiteHeader />

      <section className="section-shell web-dev-route-hero">
        <div className="web-dev-route-copy">
          <p className="section-kicker">WEBSITE DESIGN &amp; DEVELOPMENT</p>
          <h1>Build a website<br />that works for <span>your business.</span></h1>
          <p>From custom business sites to online stores, we map the customer journey, plan the pages, and build responsive experiences that make your offer clear and the next step easy to take.</p>
          <div className="web-dev-route-actions"><a href="/contact">Tell us about your project <ArrowUpRight size={16} /></a><span><Check size={15} /> Responsive by design</span><span><Check size={15} /> Clear scope before build</span></div>
        </div>
        <div className="web-dev-route-visual">
          <div className="web-dev-route-orbit" />
          <div className="web-dev-stack-card">
            <div className="web-dev-stack-top"><span className="web-dev-stack-dots"><i /><i /><i /></span><span>PROJECT FLOW</span><Code2 size={16} /></div>
            <div className="web-dev-stack-brand"><img src="/translogo.png" alt="E-Commerce Sathi" /></div>
            <div className="web-dev-stack-row"><span><LayoutGrid size={17} /></span><strong>Brand website</strong><Check size={15} /></div>
            <div className="web-dev-stack-row"><span><ShoppingCart size={17} /></span><strong>Online store</strong><Check size={15} /></div>
            <div className="web-dev-stack-row"><span><Rocket size={17} /></span><strong>Campaign page</strong><Check size={15} /></div>
            <div className="web-dev-stack-footer"><span /> Plan clearly. Build thoughtfully.</div>
          </div>
        </div>
      </section>
      <WebDevelopmentPricing variant="page" />
      <WebDevelopmentExplorer />
      <SiteFooter />
    </main>
  )
}