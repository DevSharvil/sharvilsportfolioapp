import { motion } from 'framer-motion'
import { useScrollReveal } from '@/hooks/useScrollReveal'

export function ScrollReveal({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  once = true,
}) {
  const [ref, visible] = useScrollReveal({ once })

  const variants = {
    up: { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } },
    down: { hidden: { opacity: 0, y: -32 }, show: { opacity: 1, y: 0 } },
    left: { hidden: { opacity: 0, x: 32 }, show: { opacity: 1, x: 0 } },
    right: { hidden: { opacity: 0, x: -32 }, show: { opacity: 1, x: 0 } },
    fade: { hidden: { opacity: 0 }, show: { opacity: 1 } },
    scale: { hidden: { opacity: 0, scale: 0.92 }, show: { opacity: 1, scale: 1 } },
  }

  const chosen = variants[direction] || variants.up

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={visible ? 'show' : 'hidden'}
      variants={chosen}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
