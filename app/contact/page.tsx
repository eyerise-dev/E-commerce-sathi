'use client'

import { FormEvent, useState } from 'react'
import { ArrowLeft, ArrowUpRight, CheckCircle2, Mail, Phone } from 'lucide-react'

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')
    const form = event.currentTarget
    const data = new FormData(form)
    data.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ?? '')
    data.append('subject', 'New E-Commerce Sathi enquiry')
    data.append('from_name', 'E-Commerce Sathi website')

    try {
      const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const result = await response.json()
      if (!result.success) throw new Error('Submission failed')
      form.reset()
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <main className="contact-page">
      <header className="site-header contact-header">
        <a href="/" className="brand-mark" aria-label="E-Commerce Sathi home"><span className="brand-symbol"><HandshakeMark /></span><span><strong>E-Commerce</strong> <em>Sathi</em></span></a>
        <a className="header-cta" href="/">Back to home <ArrowUpRight size={16} /></a>
      </header>
      <section className="contact-page-hero section-shell">
        <div className="contact-page-copy">
          <a className="back-link" href="/"><ArrowLeft size={15} /> Back to E-Commerce Sathi</a>
          <p className="section-kicker">04 / LET&apos;S WORK TOGETHER</p>
          <h1>Let&apos;s grow your<br /><span>marketplace.</span></h1>
          <p>Tell us a little about your business and marketplace setup. Our team will get back to you with the right next step.</p>
          <div className="contact-page-details"><a href="tel:+919012426635"><Phone size={17} /> +91 90124 26635</a><a href="mailto:rahulpandeyji424@gmail.com"><Mail size={17} /> rahulpandeyji424@gmail.com</a></div>
        </div>
        <form className="enquiry-form" onSubmit={handleSubmit}>
          <div className="form-heading"><span>Start a conversation</span><small>All fields are required</small></div>
          <label>Name<input name="name" type="text" placeholder="Your full name" required /></label>
          <div className="form-grid"><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label></div>
          <div className="form-grid"><label>State<input name="state" type="text" placeholder="Your state" required /></label><label>Platform name<input name="platform" type="text" placeholder="Amazon, Flipkart, Meesho..." required /></label></div>
          <button className="form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry...' : 'Send enquiry'} <ArrowUpRight size={18} /></button>
          {status === 'success' && <p className="form-message success"><CheckCircle2 size={16} /> Thanks — your enquiry has been sent.</p>}
          {status === 'error' && <p className="form-message error">Something went wrong. Please email us directly at rahulpandeyji424@gmail.com.</p>}
        </form>
      </section>
      <footer className="contact-page-footer section-shell"><span>A unit of Eyerise</span><span>© 2026 E-Commerce Sathi</span><span>Terms &amp; conditions apply.</span></footer>
    </main>
  )
}

function HandshakeMark() { return <svg viewBox="0 0 96 70" aria-hidden="true"><path d="M11 18 23 6l17 4 10 9-8 7-9-4-7 8 15 12c4 3 9 3 12-1l7-8"/><path d="m85 18-12-12-17 4-10 9 8 7 9-4 7 8-15 12c-4 3-9 3-12-1l-7-8"/><path d="m28 34 14 13c3 3 7 3 10 0l6-6 4 4c3 3 7 3 10 0l8-8"/><path d="m40 43 6 6c3 3 7 3 10 0l5-5"/></svg> }
