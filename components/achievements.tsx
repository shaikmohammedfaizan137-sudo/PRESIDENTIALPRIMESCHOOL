'use client'

import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Reveal } from '@/components/reveal'

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const reduce = useReducedMotion()
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (reduce) {
      setValue(target)
      return
    }
    const controls = animate(0, target, {
      duration: 2,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    })
    return () => controls.stop()
  }, [inView, target, reduce])

  return (
    <span ref={ref} className="font-heading text-4xl font-semibold text-gold md:text-5xl">
      {value.toLocaleString('en-IN')}
      {suffix}
    </span>
  )
}

const stats = [
  { target: 500, suffix: '+', label: 'Happy Students' },
  { target: 30, suffix: '+', label: 'Expert Teachers' },
  { target: 25, suffix: '+', label: 'Awards & Achievements' },
  { target: 10, suffix: '+', label: 'Years of Excellence' },
  { target: 20, suffix: '+', label: 'Clubs & Activities' },
  { target: 100, suffix: '%', label: 'Happy Parents' },
]

export function Achievements() {
  return (
    <section aria-label="School achievements" className="bg-primary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-x-6 gap-y-12 text-center md:grid-cols-3 lg:grid-cols-6">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.6 }}
                className="flex flex-col items-center gap-2"
              >
                <Counter target={s.target} suffix={s.suffix} />
                <span className="text-sm font-medium text-primary-foreground/75">{s.label}</span>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
