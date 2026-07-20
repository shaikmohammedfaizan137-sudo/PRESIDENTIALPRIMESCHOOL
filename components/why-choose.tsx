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
  { icon: Brain, title: 'Critical Thinking', text: 'The school addresses the 4 Cs of 21st-century skills, starting with critical thinking to build analytical minds.' },
  { icon: Sparkles, title: 'Creativity', text: 'Fostering creativity through activity-based learning, arts, music, and hands-on exploration.' },
  { icon: MessagesSquare, title: 'Communication', text: 'Ensures spoken English through an English Language Acquisition Programme for global readiness.' },
  { icon: Users, title: 'Collaboration', text: 'Co-curricular, environmental and community-based activities foster continuous collaborative learning.' },
  { icon: BookOpen, title: 'International Standards', text: 'International standards of education with aesthetically designed classrooms and quality infrastructural facilities.' },
  { icon: MonitorPlay, title: 'Learning Beyond Classroom', text: 'Focuses on learning beyond the classroom through co-curricular activities, extra-curricular activities and field trips.' },
  { icon: UserCheck, title: 'Character & Competence', text: 'Reinforces the school culture through the development of character and competence.' },
  { icon: ShieldCheck, title: 'Safety & Hygiene', text: 'Prioritizes safety and hygiene to ensure a secure and healthy learning environment.' },
  { icon: Trophy, title: 'Competitive Exam Training', text: 'Trains students for competitive exams, Olympiads, technology-based assessments and other learning experiences.' },
  { icon: Laptop, title: 'Career Development', text: 'Foundation programmes for IIT, NEET, IAS, IPS, UPSC and competitive examinations.' },
  { icon: Palette, title: 'Skill Building Programme', text: 'Diverse clubs including Robotics, Science Club, IT Club, Vedic Mathematics, Music, Dance and more.' },
  { icon: Mic, title: 'Counselling & Guidance', text: 'Academic, career, personal and emotional counselling in a supportive environment.' },
  { icon: Bus, title: 'Parent-Teacher Interaction', text: 'Regular Parent-Teacher Meetings to discuss and identify individual student needs and solutions.' },
  { icon: Camera, title: 'Quality Management', text: 'Quality management through parent and student feedback systems with corrective measures.' },
]

export function WhyChoose() {
  return (
    <section id="why-us" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Learning for Life and Learning to Lead"
          description="Our school supports learning for life and learning to LEAD with aesthetically designed classrooms and quality infrastructural facilities."
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
