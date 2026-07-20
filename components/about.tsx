'use client'

import Image from 'next/image'
import { imgPath } from '@/lib/utils'
import { Reveal, SectionHeading } from '@/components/reveal'

const pillars = [
  {
    title: 'Our Vision',
    text: 'Our vision is to develop global leaders for tomorrow. We aspire to have our students develop into lifelong learners with a sense of purpose, good moral judgment and commitment to making the world a better place.',
  },
  {
    title: 'Our Mission',
    text: 'To inspire young minds to meet their full potential as learners. Our intent is to create a supportive educational environment that produces self-motivated students and reliable future citizens.',
  },
  {
    title: 'Our Philosophy',
    text: 'We believe in the philosophy of embarking on the mission to enlighten young minds with deliberate and systematic education, inculcating the spirit of being humane as well as social values and spiritual development in a harmonious manner.',
  },
  {
    title: 'A School With a Difference',
    text: 'Presidential Prime School believes in activity-blended education. Perceptive teaching awakens the creative and leadership skills dormant in every child, making it a school with a difference.',
  },
]

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="About the School"
          title="A School Where Every Child Matters"
          description="Your children from our school will make a mark for themselves in the world and will always 'Kindle to Enlighten' their path to success, bringing pride to the Nation. We believe in merging old-school values with new-age methodologies to create well-rounded individuals who create a positive change in society."
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
