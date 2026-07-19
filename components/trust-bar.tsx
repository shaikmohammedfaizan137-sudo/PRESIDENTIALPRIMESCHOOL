'use client'

import { Award, HeartHandshake, MonitorPlay, ShieldCheck, Star, Trophy, Users } from 'lucide-react'
import { Reveal } from '@/components/reveal'

const badges = [
  { icon: ShieldCheck, label: '100% Safe Campus' },
  { icon: Users, label: 'Experienced Faculty' },
  { icon: MonitorPlay, label: 'Smart Classrooms' },
  { icon: Trophy, label: 'Sports & Activities' },
  { icon: Award, label: 'Holistic Learning' },
  { icon: HeartHandshake, label: 'Parent Trusted' },
  { icon: Star, label: '4.2 Google Rating' },
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
