import Link from 'next/link'
import { ArrowUpRight, Mail, MessageCircle, Phone } from 'lucide-react'

export default function SiteFooter() {
  return (
    <footer className="footer section-shell">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Link href="/" className="footer-logo" aria-label="E-Commerce Sathi home"><img src="/translogo.png" alt="E-Commerce Sathi" /></Link>
          <p className="footer-tagline">Digital Marketplace Insiders</p>
          <p className="footer-description">Your growth partner for healthier accounts, stronger listings, smoother operations, and better marketplace performance.</p>
        </div>
        <div className="footer-column"><p className="footer-label">Explore</p><Link href="/">Home</Link><Link href="/about">About us</Link><Link href="/web-development">Web development</Link><Link href="/pricing">Pricing plans</Link></div>
        <div className="footer-column"><p className="footer-label">Services</p><Link href="/services">Seller onboarding &amp; registration <ArrowUpRight size={13} /></Link><Link href="/services">Catalogue &amp; listing support <ArrowUpRight size={13} /></Link><Link href="/services">Account health monitoring <ArrowUpRight size={13} /></Link><Link href="/services">Marketplace growth strategy <ArrowUpRight size={13} /></Link></div>
        <div className="footer-column footer-contact"><p className="footer-label">Contact</p><a href="tel:+919012426635"><Phone size={14} />+91 90124 26635</a><a href="mailto:rahulpandeyji424@gmail.com"><Mail size={14} />rahulpandeyji424@gmail.com</a><a href="https://wa.me/919012426635" target="_blank" rel="noreferrer"><MessageCircle size={14} />WhatsApp us</a><Link href="/contact">Send an enquiry <ArrowUpRight size={13} /></Link></div>
      </div>
      <div className="footer-bottom"><p>© 2026 E-Commerce Sathi. All rights reserved.</p><span>Terms &amp; conditions apply. Prices exclusive of applicable taxes.</span></div>
    </footer>
  )
}