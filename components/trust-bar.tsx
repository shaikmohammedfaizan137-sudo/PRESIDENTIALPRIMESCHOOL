'use client'

import { Award, HeartHandshake, MonitorPlay, ShieldCheck, Star, Trophy, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const badges = [
  { icon: Users, label: 'Only 24 Students Per Class' },
  { icon: Award, label: 'International Standards' },
  { icon: MonitorPlay, label: 'Activity-Based Learning' },
  { icon: Trophy, label: 'Sports & Activities' },
  { icon: ShieldCheck, label: 'Safe & Hygienic Campus' },
  { icon: HeartHandshake, label: 'Parent Trusted' },
  { icon: Star, label: 'Nursery to 9th Grade' },
]

export function TrustBar() {
  return (
    <section id="trust" aria-label="Why parents trust us" className="border-b border-border bg-cream py-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {badges.map((b) => (
              <li key={b.label} className="flex items-center gap-2.5">
                <b.icon className="h-5 w-5 text-gold" aria-hidden />
                <span className="text-sm font-semibold text-ink">{b.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
