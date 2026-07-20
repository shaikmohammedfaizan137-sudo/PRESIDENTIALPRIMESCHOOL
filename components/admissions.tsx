'use client'

import { CalendarCheck, CheckCircle2, Phone } from 'lucide-react'
import { useState, type FormEvent } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'

const grades = [
  'Nursery',
  'LKG',
  'UKG',
  'Grade 1',
  'Grade 2',
  'Grade 3',
  'Grade 4',
  'Grade 5',
  'Grade 6',
  'Grade 7',
  'Grade 8',
  'Grade 9',
]

const inputClass =
  'w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold'

export function Admissions() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const message = [
      'New Admission Inquiry — Presidential Prime School',
      `Student: ${data.get('student')}`,
      `Parent: ${data.get('parent')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email') || '-'}`,
      `Grade: ${data.get('grade')}`,
      `Message: ${data.get('message') || '-'}`,
    ].join('\n')
    window.open(`https://wa.me/919640456760?text=${encodeURIComponent(message)}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="admissions" className="relative overflow-hidden bg-primary py-24 md:py-32">
      <div
        aria-hidden
        className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-2">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold">
            Admissions Are in Progress
          </p>
          <h2 className="text-balance font-heading text-3xl font-semibold text-primary-foreground md:text-5xl">
            Nursery to 9th Grade — Only 24 Students in a Classroom
          </h2>
          <p className="mt-5 max-w-lg text-pretty leading-relaxed text-primary-foreground/75">
            One of the most important decisions you will make as a parent is choosing the right
            school for your children. Presidential Prime School aims to provide the right
            environment for quality education and the overall development of children.
          </p>
          <ul className="mt-8 flex flex-col gap-3">
            {['Nursery to 9th Grade admissions', 'Only 24 students in a classroom', 'Quality education with international standards'].map(
              (li) => (
                <li key={li} className="flex items-center gap-3 text-primary-foreground/90">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold" aria-hidden />
                  <span className="text-sm">{li}</span>
                </li>
              ),
            )}
          </ul>
          <a
            href="tel:+919640456760"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
          >
            <Phone className="h-4 w-4" /> Call +91 96404 56760
          </a>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="rounded-3xl bg-card p-8 shadow-luxury md:p-10">
            {submitted ? (
              <div className="flex flex-col items-center gap-4 py-14 text-center">
                <CalendarCheck className="h-14 w-14 text-gold" aria-hidden />
                <h3 className="text-xl font-semibold text-ink">Inquiry Sent!</h3>
                <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                  Thank you for your interest in Presidential Prime School. Our admissions team
                  will reach out to you shortly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-sm font-semibold text-gold underline-offset-4 hover:underline"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="font-heading text-xl font-semibold text-ink">Admission Inquiry</h3>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="student" className="sr-only">
                      Student name
                    </label>
                    <input id="student" name="student" required placeholder="Student Name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="parent" className="sr-only">
                      Parent name
                    </label>
                    <input id="parent" name="parent" required placeholder="Parent Name" className={inputClass} />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      placeholder="Phone Number"
                      pattern="[0-9+ -]{10,}"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input id="email" name="email" type="email" placeholder="Email (optional)" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="grade" className="sr-only">
                    Grade applying for
                  </label>
                  <select id="grade" name="grade" required defaultValue="" className={inputClass}>
                    <option value="" disabled>
                      Grade Applying For
                    </option>
                    {grades.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Message (optional)"
                    className={inputClass}
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-accent-foreground shadow-luxury transition-transform hover:scale-[1.02]"
                >
                  Submit Inquiry via WhatsApp
                </button>
                <p className="text-center text-xs text-muted-foreground">
                  Your inquiry opens in WhatsApp — no data is stored on this website.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
