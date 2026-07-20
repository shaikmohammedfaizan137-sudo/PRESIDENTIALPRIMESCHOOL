'use client'

import { Blocks, FlaskConical, Lightbulb, Rocket } from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const stages = [
  {
    icon: Blocks,
    stage: 'Pre-Primary',
    grades: 'Nursery, Junior KG & Senior KG',
    curriculum: 'Montessori, kindergarten and play-way methods adopted and adapted for the pre-primary level',
    methods: 'Audio-visual aids, activity-based learning, colours, textures, music and movement',
    outcomes: 'Love, warmth and security as children begin their journey into the school environment',
  },
  {
    icon: Lightbulb,
    stage: 'Primary',
    grades: 'Grades 1 – 5',
    curriculum: 'Strong foundation in Reading, Writing, Speaking, Languages, Science, Social Science and Mathematics',
    methods: 'Play-way methods, experiential learning, collaborative and reciprocal learning',
    outcomes: 'Assimilation of information, clarity of concepts, nurturing multiple intelligences',
  },
  {
    icon: FlaskConical,
    stage: 'Middle School',
    grades: 'Grades 6 – 8',
    curriculum: 'Student-friendly and learner-centred teaching methodologies',
    methods: 'Teaching through technology, with technology and from technology — Comprehend, Apply, Evaluate, Create',
    outcomes: 'Creative and independent thinkers prepared to meet life\'s challenges',
  },
  {
    icon: Rocket,
    stage: 'Secondary School',
    grades: 'Grade 9',
    curriculum: 'Curriculum that prepares students for a global future with career guidance',
    methods: 'Self-reliant decision-making, calculated risks, managing complexity',
    outcomes: 'Self-directed, creative, curious learners with sound reasoning abilities',
  },
]

export function Academics() {
  return (
    <section id="academics" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Academics"
          title="A Clear Path from First Steps to Future Success"
          description="Every stage of learning at Presidential Prime School is thoughtfully designed — from the formative pre-primary years to secondary school, preparing students for a global future."
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
