'use client'

import Image from 'next/image'
import { imgPath } from '@/lib/utils'
import { Reveal, SectionHeading } from '@/components/reveal'

const stories = [
  {
    src: imgPath('/images/sports.png'),
    alt: 'Students playing football together',
    title: 'Life-Long Lessons Through Sports',
    text: 'We train students to strengthen their physical capabilities. Sports develop physical fitness, confidence, discipline, leadership, teamwork, resilience and competitive spirit.',
  },
  {
    src: imgPath('/images/robotics.png'),
    alt: 'Students building a robot in the STEM lab',
    title: 'Clubs & Skill Building',
    text: 'Diverse clubs including Robotics, Science Club, Music, Dance, Art & Craft, Debate, Vedic Mathematics, Yoga and more — helping students explore their passions and build confidence.',
  },
  {
    src: imgPath('/images/events.png'),
    alt: 'Cultural performance during annual day celebrations',
    title: 'Global Exposure & Events',
    text: 'Students have opportunities to participate and compete through various events and programmes, boosting their confidence and preparing them for future careers.',
  },
]

export function StudentLife() {
  return (
    <section id="campus" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Student Life"
          title="More Than Marks — Memories, Friendships, Growth"
          description="Learning at Presidential Prime School happens everywhere: in classrooms, on the field, on stage, and in every friendship formed along the way."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {stories.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.12}>
              <article className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury">
                <div className="overflow-hidden">
                  <Image
                    src={s.src}
                    alt={s.alt}
                    width={560}
                    height={380}
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
