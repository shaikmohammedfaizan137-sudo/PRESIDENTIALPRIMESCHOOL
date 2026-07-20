'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { ArrowRight, Award, GraduationCap, Users } from 'lucide-react'
import Image from 'next/image'
import { imgPath } from '@/lib/utils'
import { useEffect, useRef, useState } from 'react'

const stats = [
  { icon: Award, value: 'Only 24 Students', label: 'In a Classroom' },
  { icon: GraduationCap, value: 'Nursery to 9th', label: 'Grade Admissions' },
  { icon: Users, value: 'Quality Education', label: 'International Standards' },
]

const typewriterWords = ['Leaders.', 'Thinkers.', 'Dreamers.', 'Achievers.']

function TypewriterWord() {
  const [displayText, setDisplayText] = useState('')
  const [underlineWidth, setUnderlineWidth] = useState(0)
  const textRef = useRef<HTMLSpanElement>(null)

  /* All mutable animation state lives in a ref so it survives re-renders
     and isn't disrupted by React Strict Mode double-mounting */
  const state = useRef({
    wordIdx: 0,
    charIdx: 0,
    phase: 'typing' as 'typing' | 'pausing' | 'deleting' | 'waiting',
    tick: 0,
  })

  /* Measure text width for the gold underline */
  useEffect(() => {
    if (textRef.current) {
      setUnderlineWidth(textRef.current.offsetWidth)
    }
  }, [displayText])

  /* Single interval drives the entire animation – robust against Strict Mode */
  useEffect(() => {
    const TICK_MS = 50 // base tick interval (ms)
    const TYPE_TICKS = 2 // 100ms per typed char
    const DEL_TICKS = 1 // 50ms per deleted char
    const PAUSE_TICKS = 30 // 1500ms pause after word is fully typed
    const WAIT_TICKS = 6 // 300ms pause after word is fully deleted

    const id = setInterval(() => {
      const s = state.current
      s.tick++

      const word = typewriterWords[s.wordIdx]

      if (s.phase === 'typing') {
        if (s.tick % TYPE_TICKS === 0) {
          s.charIdx++
          setDisplayText(word.slice(0, s.charIdx))
          if (s.charIdx >= word.length) {
            s.phase = 'pausing'
            s.tick = 0
          }
        }
      } else if (s.phase === 'pausing') {
        if (s.tick >= PAUSE_TICKS) {
          s.phase = 'deleting'
          s.tick = 0
        }
      } else if (s.phase === 'deleting') {
        if (s.tick % DEL_TICKS === 0) {
          s.charIdx--
          setDisplayText(word.slice(0, s.charIdx))
          if (s.charIdx <= 0) {
            s.phase = 'waiting'
            s.tick = 0
          }
        }
      } else if (s.phase === 'waiting') {
        if (s.tick >= WAIT_TICKS) {
          s.wordIdx = (s.wordIdx + 1) % typewriterWords.length
          s.charIdx = 0
          s.phase = 'typing'
          s.tick = 0
        }
      }
    }, TICK_MS)

    /* Start by typing the first character immediately */
    const word = typewriterWords[state.current.wordIdx]
    state.current.charIdx = 1
    setDisplayText(word.slice(0, 1))

    return () => clearInterval(id)
  }, [])

  return (
    <span className="relative inline-flex items-baseline align-baseline">
      {/* Typed text */}
      <span
        ref={textRef}
        className="text-gold-gradient italic"
      >
        {displayText}
      </span>

      {/* Gold underline that animates width */}
      <motion.span
        aria-hidden
        className="absolute -bottom-1 left-0 h-[2px] rounded-full md:-bottom-1.5 md:h-[3px]"
        style={{
          background:
            'linear-gradient(90deg, oklch(0.78 0.115 85), oklch(0.68 0.105 85))',
        }}
        animate={{ width: underlineWidth > 0 ? underlineWidth : 0 }}
        transition={{ duration: 0.08, ease: 'easeOut' }}
      />
    </span>
  )
}

export function Hero() {
  const reduce = useReducedMotion()

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: reduce
      ? { duration: 0 }
      : { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
  })

  return (
    <section id="top" className="bg-hero-navy relative overflow-hidden">
      {/* School building background image */}
      <Image
        src={imgPath('/images/school-building.jpg')}
        alt=""
        fill
        priority
        className="pointer-events-none absolute inset-0 z-0 object-cover opacity-[0.15]"
      />
      {/* Dark gradient overlay on top of the image for readability */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,20,40,0.7) 0%, rgba(10,20,40,0.5) 50%, rgba(10,20,40,0.8) 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Soft gold glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[28rem] w-[52rem] -translate-x-1/2 rounded-full opacity-20 blur-3xl"
        style={{
          background: 'radial-gradient(ellipse, oklch(0.68 0.105 85 / 0.55), transparent 65%)',
        }}
      />

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 pb-24 pt-32 text-center lg:pb-28 lg:pt-40">
        <motion.p
          {...fadeUp(0.05)}
          className="inline-flex items-center gap-2.5 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-gold"
        >
          <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-gold" />
          Admissions Are in Progress
        </motion.p>

        <motion.h1
          {...fadeUp(0.15)}
          className="mt-7 font-heading text-[2.75rem] font-semibold leading-[1.06] tracking-tight text-white md:text-6xl lg:text-7xl"
        >
          Empowering The Intellectual{' '}
          <TypewriterWord />
        </motion.h1>

        <motion.p
          {...fadeUp(0.25)}
          className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/65 md:text-lg"
        >
          Learning gives you creativity and creativity leads to thinking, and thinking provides knowledge and knowledge makes you great. — A.P.J. Abdul Kalam
        </motion.p>

        <motion.div {...fadeUp(0.35)} className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href="#contact"
            className="shadow-gold-glow group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-ink transition-transform hover:scale-[1.03]"
          >
            Enquire Now
            <ArrowRight
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden
            />
          </a>
          <a
            href="#admissions"
            className="inline-flex items-center rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white transition-colors hover:border-gold/60 hover:text-gold"
          >
            Admissions Open
          </a>
        </motion.div>

        {/* Stats row: hairline-separated cards, centered */}
        <motion.dl
          {...fadeUp(0.45)}
          className="mt-16 grid w-full grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3"
        >
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 bg-navy-deep/80 px-6 py-7 backdrop-blur-sm"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Icon className="h-5 w-5 text-gold" aria-hidden />
              </span>
              <div>
                <dd className="font-heading text-lg font-semibold text-white md:text-xl">
                  {value}
                </dd>
                <dt className="mt-1 text-[0.65rem] uppercase tracking-[0.18em] text-white/50">
                  {label}
                </dt>
              </div>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  )
}
