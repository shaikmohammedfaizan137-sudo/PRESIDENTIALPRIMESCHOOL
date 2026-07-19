import { MapPin, Phone } from 'lucide-react'
import Image from 'next/image'
import { imgPath } from '@/lib/utils'
import { InstagramIcon } from '@/components/icons/instagram'

const quickLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#academics', label: 'Academics' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#admissions', label: 'Admissions' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-3 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={imgPath('/images/logo.jpeg')}
              alt="Presidential Prime School logo"
              width={56}
              height={56}
              className="rounded-full"
            />
            <div>
              <p className="font-heading font-semibold">Presidential Prime School</p>
              <p className="text-sm text-primary-foreground/60">Shaping Future Leaders</p>
            </div>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
            A premium English medium school in Kamareddy nurturing curiosity, confidence,
            character, and academic excellence.
          </p>
        </div>

        <nav aria-label="Footer navigation">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Quick Links</h3>
          <ul className="grid grid-cols-2 gap-2.5">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/75 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gold">Get in Touch</h3>
          <ul className="flex flex-col gap-3 text-sm text-primary-foreground/75">
            <li className="flex items-start gap-2.5">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden />
              <span>Om Shanthi Road, KPR Colony, Kamareddy, Telangana – 503111</span>
            </li>
            <li>
              <a href="tel:+919640456760" className="flex items-center gap-2.5 transition-colors hover:text-gold">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                +91 96404 56760
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/presidentialprimeschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 transition-colors hover:text-gold"
              >
                <InstagramIcon className="h-4 w-4 shrink-0 text-gold" aria-hidden />
                @presidentialprimeschool
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-center text-xs text-primary-foreground/55 md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} Presidential Prime School. All rights reserved.</p>
          <p>Admissions Open 2026-27 · Kamareddy, Telangana</p>
        </div>
      </div>
    </footer>
  )
}
