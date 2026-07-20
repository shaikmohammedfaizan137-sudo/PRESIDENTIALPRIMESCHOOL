'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'

const faqs = [
  {
    q: 'What is the admission process?',
    a: 'Admissions are in progress for Nursery to 9th Grade. Submit an inquiry, visit the campus for a tour and interaction, and complete the registration. Our team guides you at every step.',
  },
  {
    q: 'What are the school timings?',
    a: 'School runs Monday to Saturday. Pre-Primary: 9:00 AM – 12:30 PM. Primary and above: 9:00 AM – 4:00 PM. Second Saturdays are holidays.',
  },
  {
    q: 'What is the fee structure?',
    a: 'We believe quality education should be accessible. Fees vary by grade and are kept transparent and affordable, with flexible payment options. Contact the office at +91 96404 56760 or email presidentialprimeschool@gmail.com for details.',
  },
  {
    q: 'Is transportation available?',
    a: 'Yes. We operate safe, GPS-tracked buses covering Kamareddy town and nearby areas, with trained attendants on every route.',
  },
  {
    q: 'What curriculum does the school follow?',
    a: 'We follow an English medium, activity-blended curriculum with international standards. Numerous activities go hand-in-hand with the academic curriculum to strengthen the foundation of students\' careers and bring about their all-round development.',
  },
  {
    q: 'What facilities does the campus have?',
    a: 'Smart classrooms, science and computer labs, a learning resource centre (library) with access to books, reference materials, fiction, non-fiction, and e-books, sports grounds, a safe play area, and child-friendly infrastructure.',
  },
  {
    q: 'Is there a school uniform?',
    a: 'Yes, we have a smart, comfortable uniform for regular days and a separate sports uniform for physical education days. Details are shared at admission.',
  },
  {
    q: 'How does the school ensure student safety?',
    a: 'Safety is non-negotiable: full CCTV coverage, verified staff, controlled entry and exit, trained transport attendants, and regular safety drills.',
  },
]

export function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        <SectionHeading
          eyebrow="FAQ"
          title="Questions Parents Ask Us"
          description="Everything you need to know before joining the Presidential Prime family."
        />

        <div className="mt-14 flex flex-col gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-semibold text-ink">{f.q}</span>
                    <ChevronDown
                      aria-hidden
                      className={`h-5 w-5 shrink-0 text-gold transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted-foreground">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
