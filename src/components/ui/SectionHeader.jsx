import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function SectionHeader({ eyebrow, title, subtitle, align = 'left', className = '' }) {
  const [ref, visible] = useScrollReveal()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`mb-14 ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      {eyebrow && (
        <p className="font-mono text-xs tracking-widest text-accent-gold uppercase mb-4">
          {eyebrow}
        </p>
      )}
      <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-700 text-text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-text-secondary font-body text-lg leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className={`mt-6 h-px w-16 bg-accent-gold ${align === 'center' ? 'mx-auto' : ''}`} />
    </motion.div>
  )
}
