'use client'

import Image from 'next/image'
import { imgPath } from '@/lib/utils'
import { Reveal, SectionHeading } from '@/components/reveal'

const pillars = [
  {
    title: 'Our Vision',
    text: 'To be the most trusted institution in Kamareddy where every child grows into a confident, compassionate, and capable future leader.',
  },
  {
    title: 'Our Mission',
    text: 'To deliver world-class, student-first education that blends strong academics with character, creativity, and modern life skills.',
  },
  {
    title: 'Our Values',
    text: 'Excellence, discipline, integrity, curiosity, and respect — woven into every classroom, playground, and celebration.',
  },
  {
    title: 'Learning Philosophy',
    text: 'Activity-based, individual-attention learning where children ask questions, explore ideas, and build real understanding — not rote memory.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About the School"
          title="Where Character Meets Academic Excellence"
          description="Presidential Prime School is a premium English medium institution in KPR Colony, Kamareddy — built on the belief that every child deserves a world-class education, close to home."
        />

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl shadow-luxury">
              <Image
                src={imgPath('/images/classroom.png')}
                alt="Students engaged in a modern smart classroom at Presidential Prime School"
                width={720}
                height={520}
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </Reveal>

          <div className="relative">
            <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px bg-border" />
            <ol className="flex flex-col gap-8">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1}>
                  <li className="relative pl-12">
                    <span
                      aria-hidden
                      className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-gold text-xs font-bold text-accent-foreground"
                    >
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-semibold text-ink">{p.title}</h3>
                    <p className="mt-1.5 text-pretty leading-relaxed text-muted-foreground">{p.text}</p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
