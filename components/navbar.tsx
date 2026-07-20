'use client'

import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, Phone, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { imgPath } from '@/lib/utils'

const links = [
  { href: '#about', label: 'About' },
  { href: '#academics', label: 'Academics' },
  { href: '#campus', label: 'Campus Life' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#testimonials', label: 'Parents' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass shadow-luxury' : 'bg-transparent'
      }`}
    >
      <motion.div
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-gold"
        style={{ scaleX: progress }}
      />
      <nav aria-label="Main navigation" className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="#top" className="flex items-center gap-3">
          <Image
            src={imgPath('/images/logo.jpeg')}
            alt="Presidential Prime School logo"
            width={52}
            height={52}
            className="rounded-full"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span
              className={`font-heading text-sm font-semibold tracking-wide md:text-base ${
                scrolled ? 'text-ink' : 'text-white'
              }`}
            >
              Presidential Prime School
            </span>
            <span className={`text-xs ${scrolled ? 'text-muted-foreground' : 'text-white/70'}`}>
              Kamareddy, Telangana
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-xs font-semibold uppercase tracking-wider underline-offset-8 transition-colors hover:text-gold hover:underline hover:decoration-gold/60 ${
                scrolled ? 'text-ink' : 'text-white/80'
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#admissions"
            className="rounded-full bg-gold px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-ink shadow-luxury transition-transform hover:scale-[1.03]"
          >
            Admissions Open
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden ${scrolled ? 'text-ink' : 'text-white'}`}
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border px-6 pb-6 pt-2 lg:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink transition-colors hover:bg-secondary"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#admissions"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gold px-5 py-3 text-center text-sm font-semibold text-accent-foreground"
            >
              Admissions Are in Progress
            </a>
            <a
              href="tel:+919640456760"
              className="mt-1 flex items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-ink"
            >
              <Phone className="h-4 w-4" /> +91 96404 56760
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
