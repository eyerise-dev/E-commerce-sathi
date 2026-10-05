'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
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

  return <form className="enquiry-form home-enquiry-form" onSubmit={handleSubmit}>
    <div className="form-heading"><span>Tell us about your business</span><small>We&apos;ll be in touch soon</small></div>
    <label>Name<input name="name" type="text" placeholder="Your full name" required /></label>
    <div className="form-grid"><label>Email<input name="email" type="email" placeholder="you@company.com" required /></label><label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" required /></label></div>
    <div className="form-grid"><label>State<input name="state" type="text" placeholder="Your state" required /></label><label>Platform name<input name="platform" type="text" placeholder="Amazon, Flipkart, Meesho..." required /></label></div>
    <button className="form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry...' : 'Send enquiry'} <ArrowUpRight size={18} /></button>
    {status === 'success' && <p className="form-message success"><CheckCircle2 size={16} /> Thanks — your enquiry has been sent.</p>}
    {status === 'error' && <p className="form-message error">Something went wrong. Please email us directly.</p>}
  </form>
}
