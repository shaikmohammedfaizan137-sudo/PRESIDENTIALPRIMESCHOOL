'use client'

import { MapPin, MessageCircle, Phone, Star } from 'lucide-react'
import { InstagramIcon } from '@/components/icons/instagram'
import { Reveal, SectionHeading } from '@/components/reveal'

export function Contact() {
  return (
    <section id="contact" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Visit Our Campus — We Would Love to Meet You"
          description="Come see the classrooms, meet the teachers, and experience the Presidential Prime difference in person."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="flex h-full flex-col gap-4">
              <a
                href="https://www.google.com/maps/place/Presidential+Prime+School/@18.3329849,78.3331164,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury"
              >
                <span className="rounded-xl bg-secondary p-3 text-gold">
                  <MapPin className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-ink">Our Address</span>
                  <span className="mt-1 block text-sm leading-relaxed text-muted-foreground">
                    Om Shanthi Road, KPR Colony,
                    <br />
                    Kamareddy, Telangana – 503111
                  </span>
                </span>
              </a>

              <a
                href="tel:+919640456760"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury"
              >
                <span className="rounded-xl bg-secondary p-3 text-gold">
                  <Phone className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-ink">Call Us</span>
                  <span className="mt-1 block text-sm text-muted-foreground">+91 96404 56760</span>
                </span>
              </a>

              <a
                href="https://wa.me/919640456760"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury"
              >
                <span className="rounded-xl bg-secondary p-3 text-gold">
                  <MessageCircle className="h-6 w-6" aria-hidden />
                </span>
                <span>
                  <span className="block font-semibold text-ink">WhatsApp</span>
                  <span className="mt-1 block text-sm text-muted-foreground">
                    Chat with our admissions team instantly
                  </span>
                </span>
              </a>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="https://www.instagram.com/presidentialprimeschool/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-1 items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-luxury"
                >
                  <span className="rounded-xl bg-secondary p-3 text-gold">
                    <InstagramIcon className="h-6 w-6" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">Instagram</span>
                    <span className="mt-1 block text-sm text-muted-foreground">@presidentialprimeschool</span>
                  </span>
                </a>
                <div className="flex flex-1 items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
                  <span className="rounded-xl bg-secondary p-3 text-gold">
                    <Star className="h-6 w-6 fill-current" aria-hidden />
                  </span>
                  <span>
                    <span className="block font-semibold text-ink">Google Rating</span>
                    <span className="mt-1 block text-sm text-muted-foreground">4.2 ★ — Educational Institution</span>
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="h-full min-h-96 overflow-hidden rounded-3xl border border-border shadow-luxury">
              <iframe
                title="Presidential Prime School location on Google Maps"
                src="https://www.google.com/maps?q=Presidential+Prime+School,+Om+Shanthi+Road,+KPR+Colony,+Kamareddy,+Telangana+503111&ll=18.3329849,78.3331164&z=17&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
