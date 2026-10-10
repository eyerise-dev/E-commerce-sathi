import { ArrowUpRight, Clock3, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import ContactForm from '@/components/contact-form'
import SiteFooter from '@/components/site-footer'
import SiteHeader from '@/components/site-header'

export default function ContactPage() {
  return (
    <main className="contact-page">
      <SiteHeader />

      <section className="section-shell contact-page-hero">
        <div className="contact-page-copy">
          <p className="section-kicker">LET&apos;S START A CONVERSATION</p>
          <h1>Tell us where<br />you want to <span>go.</span></h1>
          <p>Tell us about your marketplace goals or website project. Our team will learn what you need and help you define a practical next step.</p>
          <div className="contact-page-details">
            <a href="tel:+919012426635"><Phone size={17} />+91 90124 26635<ArrowUpRight size={14} /></a>
            <a href="mailto:rahulpandeyji424@gmail.com"><Mail size={17} />rahulpandeyji424@gmail.com<ArrowUpRight size={14} /></a>
            <a href="https://wa.me/919012426635" target="_blank" rel="noreferrer"><MessageCircle size={17} />Message us on WhatsApp<ArrowUpRight size={14} /></a>
          </div>
          <div className="contact-page-note"><span><Clock3 size={17} /></span><p><strong>We&apos;ll take it from here.</strong><br />Send an enquiry and our team will follow up with you.</p></div>
        </div>
        <ContactForm />
      </section>

      <section className="section-shell contact-page-bottom"><div><MapPin size={18} /><span>Supporting businesses selling across online marketplaces</span></div><a href="/about">Get to know E-Commerce Sathi <ArrowUpRight size={15} /></a></section>
      <SiteFooter />
    </main>
  )
}
