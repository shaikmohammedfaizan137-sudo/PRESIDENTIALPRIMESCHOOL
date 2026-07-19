'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { useCallback, useEffect, useState } from 'react'
import { SectionHeading } from '@/components/reveal'

const testimonials = [
  {
    name: 'Ramesh Kumar',
    role: 'Parent, Grade 4',
    stars: 5,
    text: 'The teachers give real individual attention. My daughter went from shy to confidently speaking English on stage within one year. Best school in Kamareddy without a doubt.',
  },
  {
    name: 'Swapna Reddy',
    role: 'Parent, Grade 7 & LKG',
    stars: 5,
    text: 'Both my children study here and I have complete peace of mind. Safe campus, caring staff, and the smart classrooms keep them genuinely excited about learning.',
  },
  {
    name: 'Mahesh Goud',
    role: 'Parent, Grade 9',
    stars: 4,
    text: 'Excellent academic focus with regular updates to parents. The discipline and values they teach alongside studies is what sets Presidential Prime apart.',
  },
  {
    name: 'Anitha Sharma',
    role: 'Parent, Grade 2',
    stars: 5,
    text: 'The activity-based learning approach is wonderful. My son actually looks forward to school every morning — that says everything about this place.',
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % testimonials.length), [])
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [next, paused])

  const t = testimonials[index]

  return (
    <section id="testimonials" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by Parents Across Kamareddy"
          description="Real words from the families who matter most."
        />

        <div
          className="relative mt-14"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45 }}
              className="glass rounded-3xl border border-border p-8 text-center shadow-luxury md:p-12"
            >
              <Quote className="mx-auto mb-5 h-10 w-10 text-gold" aria-hidden />
              <blockquote className="text-pretty text-lg leading-relaxed text-ink md:text-xl">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-7">
                <div className="mb-2 flex justify-center gap-1 text-gold" aria-label={`${t.stars} out of 5 stars`}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < t.stars ? 'fill-current' : 'opacity-30'}`} aria-hidden />
                  ))}
                </div>
                <p className="font-semibold text-ink">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full border border-border bg-card p-2.5 text-ink transition-colors hover:bg-secondary"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === index}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${
                    i === index ? 'w-8 bg-gold' : 'w-2.5 bg-border hover:bg-muted-foreground'
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full border border-border bg-card p-2.5 text-ink transition-colors hover:bg-secondary"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
