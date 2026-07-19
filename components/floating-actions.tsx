'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Sticky mobile bottom CTA */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-border bg-card/95 p-3 backdrop-blur-md md:hidden">
        <a
          href="#admissions"
          className="flex-1 rounded-full bg-gold py-3 text-center text-sm font-semibold text-accent-foreground"
        >
          Admissions Open
        </a>
        <a
          href="tel:+919640456760"
          className="flex-1 rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground"
        >
          Call Now
        </a>
      </div>

      {/* WhatsApp button */}
      <a
        href="https://wa.me/919640456760"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-20 right-4 z-40 rounded-full bg-[#25D366] p-3.5 text-white shadow-luxury transition-transform hover:scale-110 md:bottom-6 md:right-6"
      >
        <MessageCircle className="h-6 w-6" aria-hidden />
      </a>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-36 right-4 z-40 rounded-full border border-border bg-card p-3 text-ink shadow-luxury transition-transform hover:scale-110 md:bottom-22 md:right-6"
          >
            <ArrowUp className="h-5 w-5" aria-hidden />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}
