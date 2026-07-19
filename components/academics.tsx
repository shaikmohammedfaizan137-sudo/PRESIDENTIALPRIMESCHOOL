'use client'

import { Blocks, FlaskConical, Lightbulb, Rocket } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const stages = [
  {
    icon: Blocks,
    stage: 'Pre-Primary',
    grades: 'Nursery – UKG',
    curriculum: 'Play-way and Montessori-inspired foundation',
    methods: 'Learning through play, phonics, rhymes, motor-skill activities',
    outcomes: 'Confident communication, early literacy and numeracy, joyful curiosity',
  },
  {
    icon: Lightbulb,
    stage: 'Primary',
    grades: 'Grades 1 – 5',
    curriculum: 'Strong fundamentals in English, Math, Science & EVS',
    methods: 'Activity-based learning, smart classes, reading programs',
    outcomes: 'Concept clarity, fluent English, independent thinking habits',
  },
  {
    icon: FlaskConical,
    stage: 'Middle School',
    grades: 'Grades 6 – 8',
    curriculum: 'Deeper subject mastery with labs and projects',
    methods: 'Experiments, group projects, digital learning, competitions',
    outcomes: 'Analytical skills, scientific temper, leadership foundations',
  },
  {
    icon: Rocket,
    stage: 'High School',
    grades: 'Grades 9 – 10',
    curriculum: 'Board-focused academics with career guidance',
    methods: 'Expert faculty, regular assessments, personalised mentoring',
    outcomes: 'Outstanding board results and future-ready confidence',
  },
]

export function Academics() {
  return (
    <section id="academics" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="A Clear Path from First Steps to Future Success"
          description="Every stage of learning at Presidential Prime School is thoughtfully designed with the right curriculum, teaching methods, and outcomes."
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stages.map((s, i) => (
            <Reveal key={s.stage} delay={i * 0.1}>
              <article className="flex h-full flex-col rounded-3xl border border-border bg-card p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury">
                <span className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-gold">
                  <s.icon className="h-7 w-7" aria-hidden />
                </span>
                <h3 className="text-xl font-semibold text-ink">{s.stage}</h3>
                <p className="mt-0.5 text-sm font-medium text-gold">{s.grades}</p>
                <dl className="mt-5 flex flex-col gap-4 text-sm">
                  <div>
                    <dt className="font-semibold text-ink">Curriculum</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted-foreground">{s.curriculum}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Teaching Methods</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted-foreground">{s.methods}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-ink">Learning Outcomes</dt>
                    <dd className="mt-0.5 leading-relaxed text-muted-foreground">{s.outcomes}</dd>
                  </div>
                </dl>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
