'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Reveal, SectionHeading } from '@/components/reveal'
import { imgPath } from '@/lib/utils'

type Item = {
  src: string
  alt: string
  category: string
  tall?: boolean
}

const items: Item[] = [
  { src: imgPath('/images/classroom.png'), alt: 'Smart classroom session with an interactive board', category: 'Academics' },
  { src: imgPath('/images/science-lab.png'), alt: 'Students performing a chemistry experiment in the science lab', category: 'Labs', tall: true },
  { src: imgPath('/images/library.png'), alt: 'Students reading in the warmly lit school library', category: 'Library' },
  { src: imgPath('/images/sports.png'), alt: 'Children playing football on the school sports ground', category: 'Sports', tall: true },
  { src: imgPath('/images/robotics.png'), alt: 'Students building robots in the STEM lab', category: 'Robotics' },
  { src: imgPath('/images/events.png'), alt: 'Annual day cultural performance on a decorated stage', category: 'Events' },
  { src: imgPath('/images/arts.png'), alt: 'Children painting in the art classroom', category: 'Academics' },
  { src: imgPath('/images/hero-campus.png'), alt: 'Students walking through the school campus', category: 'Campus' },
]

const filters = ['All', 'Campus', 'Academics', 'Sports', 'Events', 'Robotics', 'Labs', 'Library']

export function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState<Item | null>(null)

  const visible = active === 'All' ? items : items.filter((i) => i.category === active)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setLightbox(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="gallery" className="bg-cream py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Campus Experience"
          title="Life at Presidential Prime School"
          description="A good campus in the centre of the city with a good ground and greenery. Classrooms, labs, sports, celebrations, and everything in between — explore the moments that make our campus special."
        />

        <Reveal className="mt-10">
          <div role="tablist" aria-label="Gallery filters" className="flex flex-wrap justify-center gap-2.5">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                role="tab"
                aria-selected={active === f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                  active === f
                    ? 'bg-primary text-primary-foreground shadow-luxury'
                    : 'bg-card text-muted-foreground hover:text-ink'
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <motion.div layout className="mt-12 columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.button
                key={item.src}
                layout
                type="button"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightbox(item)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-sm focus-visible:ring-2 focus-visible:ring-gold"
                aria-label={`View larger: ${item.alt}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={640}
                  height={item.tall ? 800 : 480}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                  {item.category}
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.alt}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              type="button"
              aria-label="Close fullscreen image"
              className="absolute right-5 top-5 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20"
              onClick={() => setLightbox(null)}
            >
              <X className="h-6 w-6" />
            </button>
            <motion.div
              initial={{ scale: 0.92 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.92 }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[85vh] w-full max-w-4xl overflow-hidden rounded-2xl"
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                width={1280}
                height={860}
                className="h-full w-full object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
