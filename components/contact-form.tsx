'use client'

import { FormEvent, useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus('sending')

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      return
    }

    const form = event.currentTarget
    const data = new FormData(form)
    data.append('access_key', accessKey)
    data.append('subject', 'New website or marketplace enquiry')
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
    <form className="enquiry-form home-enquiry-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span>Tell us about your project</span><small>We&apos;ll be in touch soon</small></div>
      <label>Name<input name="name" type="text" placeholder="Your full name" autoComplete="name" required /></label>
      <div className="form-grid">
        <label>Email<input name="email" type="email" placeholder="you@company.com" autoComplete="email" required /></label>
        <label>Phone<input name="phone" type="tel" placeholder="+91 00000 00000" autoComplete="tel" required /></label>
      </div>
      <label>What do you need help with?
        <select name="interest" defaultValue="" required>
          <option value="" disabled>Select a project type</option>
          <option>Marketplace seller support</option>
          <option>Campaign landing page</option>
          <option>Business website</option>
          <option>Website redesign</option>
          <option>E-commerce store</option>
          <option>Not sure yet</option>
        </select>
      </label>
      <label>Current marketplace or website <span className="form-optional">OPTIONAL</span>
        <input name="platform_or_website" type="text" placeholder="Amazon, Shopify, your website URL..." />
      </label>
      <label>Project details
        <textarea name="details" rows={4} placeholder="Tell us about your goals, pages, features, or marketplace needs..." required />
      </label>
      <button className="form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending enquiry...' : 'Send enquiry'} <ArrowUpRight size={18} /></button>
      {status === 'success' && <p className="form-message success" role="status"><CheckCircle2 size={16} /> Thanks — your enquiry has been sent.</p>}
      {status === 'error' && <p className="form-message error" role="alert">Something went wrong. Please email us directly.</p>}
    </form>
  )
}
