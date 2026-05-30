import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Lightbox from 'yet-another-react-lightbox'
import 'yet-another-react-lightbox/styles.css'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { photos, photoCategories } from '@/data/photos'

export function Photography() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(-1)

  const filtered = useMemo(() =>
    activeCategory === 'All' ? photos : photos.filter((p) => p.category === activeCategory),
    [activeCategory]
  )

  const lightboxSlides = filtered.map((p) => ({ src: p.src }))

  // Split into 3 columns for masonry
  const columns = useMemo(() => {
    const cols = [[], [], []]
    filtered.forEach((photo, i) => cols[i % 3].push({ ...photo, originalIndex: i }))
    return cols
  }, [filtered])

  return (
    <section id="photography" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-30"
        style={{ background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,212,170,0.04) 0%, transparent 70%)' }} />

      <div className="section-container">
        <SectionHeader
          eyebrow="Through My Mobile's Lens"
          title={<>Photography</>}
          subtitle="When I step away from the keyboard, I pick up my Mobile. Here's what I see."
          align="center"
        />

        {/* Category filter */}
        <ScrollReveal className="flex flex-wrap justify-center gap-2 mb-12">
          {photoCategories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`px-4 py-2 rounded-full text-sm font-body transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-accent-teal text-bg-primary font-500'
                  : 'bg-bg-card border border-border-subtle text-text-secondary hover:text-text-primary hover:border-border-strong'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Masonry Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-3"
          >
            {columns.map((col, colIndex) => (
              <div key={colIndex} className="flex flex-col gap-3">
                {col.map((photo, rowIndex) => (
                  <motion.div
                    key={photo.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: (colIndex * 0.05) + (rowIndex * 0.08), duration: 0.4 }}
                    onClick={() => setLightboxIndex(photo.originalIndex)}
                    className="group relative overflow-hidden rounded-xl cursor-pointer"
                    style={{ aspectRatio: photo.width / photo.height > 1 ? '4/3' : '3/4' }}
                  >
                    <img
                      src={photo.thumb}
                      alt={photo.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Photo info */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <p className="font-display font-600 text-white text-sm">{photo.title}</p>
                      <p className="font-mono text-xs text-white/60">{photo.location}</p>
                    </div>

                    {/* Expand icon */}
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/40 border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-90 group-hover:scale-100">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="15 3 21 3 21 9" />
                        <polyline points="9 21 3 21 3 15" />
                        <line x1="21" y1="3" x2="14" y2="10" />
                        <line x1="3" y1="21" x2="10" y2="14" />
                      </svg>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-3 left-3">
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full bg-black/40 text-white/70 border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        {photo.category}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="text-text-muted font-body">No photos in this category yet.</p>
          </div>
        )}

        {/* Caption */}
        <ScrollReveal className="mt-10 text-center">
          <p className="text-text-muted text-sm font-mono">
            Shot on Sony α6000 · {photos.length} photos across {photoCategories.length - 1} categories
          </p>
        </ScrollReveal>
      </div>

      {/* Lightbox */}
      <Lightbox
        open={lightboxIndex >= 0}
        index={lightboxIndex}
        slides={lightboxSlides}
        close={() => setLightboxIndex(-1)}
      />
    </section>
  )
}
