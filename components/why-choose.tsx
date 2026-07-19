'use client'

import {
  BookOpen,
  Brain,
  Bus,
  Camera,
  Laptop,
  MessagesSquare,
  Mic,
  MonitorPlay,
  Palette,
  ShieldCheck,
  Sparkles,
  Trophy,
  UserCheck,
  Users,
} from 'lucide-react'
import { Reveal, SectionHeading } from '@/components/reveal'

const features = [
  { icon: BookOpen, title: 'Academic Excellence', text: 'A rigorous, concept-first curriculum that builds deep understanding.' },
  { icon: Users, title: 'Experienced Teachers', text: 'Qualified, caring faculty trained in modern teaching methods.' },
  { icon: MonitorPlay, title: 'Smart Classrooms', text: 'Interactive digital boards make every lesson engaging.' },
  { icon: UserCheck, title: 'Individual Attention', text: 'Small class ratios so no child is ever left behind.' },
  { icon: ShieldCheck, title: 'Safe Campus', text: 'CCTV security, verified staff, and a clean, protected environment.' },
  { icon: Sparkles, title: 'Creative Learning', text: 'Activity-based lessons that spark curiosity and joy.' },
  { icon: Laptop, title: 'Digital Education', text: 'Computer labs and digital literacy from an early age.' },
  { icon: Trophy, title: 'Sports & Physical Education', text: 'Daily physical activity, games, and competitive sports.' },
  { icon: Palette, title: 'Arts & Music', text: 'Painting, craft, music, and dance to nurture every talent.' },
  { icon: Mic, title: 'Leadership Programs', text: 'Public speaking, student council, and confidence building.' },
  { icon: MessagesSquare, title: 'English Communication', text: 'Strong spoken English focus for global readiness.' },
  { icon: Brain, title: 'Future Ready Skills', text: "Robotics, coding, and problem-solving for tomorrow's world." },
  { icon: Bus, title: 'Safe Transportation', text: 'GPS-tracked buses with trained attendants on every route.' },
  { icon: Camera, title: 'Parent Communication', text: 'Regular updates so parents stay connected to progress.' },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Everything Your Child Needs to Thrive"
          description="Fourteen reasons parents across Kamareddy choose Presidential Prime School — and why children love coming here every morning."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08}>
              <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-luxury">
                <span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-gold transition-colors group-hover:bg-gold group-hover:text-accent-foreground">
                  <f.icon className="h-6 w-6" aria-hidden />
                </span>
                <h3 className="text-base font-semibold text-ink">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
