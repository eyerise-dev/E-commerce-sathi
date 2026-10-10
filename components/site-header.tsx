'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

const homeSections = ['top', 'services', 'pricing', 'web-development', 'contact']

export default function SiteHeader() {
  const pathname = usePathname()
  const [activeSection, setActiveSection] = useState('top')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('')
      return
    }

    const sections = homeSections
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)
        if (visible[0]) setActiveSection(visible[0].target.id)
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pathname])

  const links = [
    { label: 'Home', href: '/', active: pathname === '/' && activeSection === 'top' },
    { label: 'About Us', href: '/about', active: pathname === '/about' },
    { label: 'Web Development', href: '/web-development', active: pathname === '/web-development' || (pathname === '/' && activeSection === 'web-development') },
    { label: 'Services', href: '/services', active: pathname === '/services' || (pathname === '/' && activeSection === 'services') },
    { label: 'Pricing', href: '/pricing', active: pathname === '/pricing' || (pathname === '/' && activeSection === 'pricing') },
    { label: 'Contact', href: '/contact', active: pathname === '/contact' || (pathname === '/' && activeSection === 'contact') },
  ]

  return (
    <header className="site-header">
      <Link href="/" className="site-logo" aria-label="E-Commerce Sathi home">
        <img src="/translogo.png" alt="E-Commerce Sathi" />
      </Link>
      <nav className="site-nav" aria-label="Primary navigation">
        {links.map(({ label, href, active }) => (
          <Link
            key={label}
            href={href}
            className={active ? 'is-active' : undefined}
            aria-current={active ? 'page' : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>
      <Link className="header-cta" href="/contact">
        Let&apos;s talk <ArrowUpRight size={16} />
      </Link>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
        aria-controls="mobile-primary-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X size={21} /> : <Menu size={21} />}
      </button>
      <nav id="mobile-primary-navigation" className={`mobile-primary-navigation${menuOpen ? ' is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
        {links.map(({ label, href, active }) => (
          <Link key={label} href={href} className={active ? 'is-active' : undefined} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
            {label}<ArrowUpRight size={15} />
          </Link>
        ))}
      </nav>
    </header>
  )
}