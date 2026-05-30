import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const SOCIAL = [
  {
    label: 'GitHub',
    href: 'https://github.com/DevSharvil',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/sharvil-bidkar-259754217',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
]

const TECH_TAGS = ['React.js', 'TypeScript', 'Redux', 'AG Grid', 'Azure AD', 'Tailwind']

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

export function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Dot grid */}
        <div className="absolute inset-0 dot-grid opacity-30" />

        {/* Gold radial glow — top right */}
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(240,165,0,0.08) 0%, transparent 70%)' }} />

        {/* Teal radial glow — bottom left */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,212,170,0.06) 0%, transparent 70%)' }} />

        {/* Floating code tags */}
        {[
          { text: '<ReactDOM />', top: '15%', right: '8%', delay: 0 },
          { text: 'useState()', top: '72%', right: '12%', delay: 0.5 },
          { text: '.map()', top: '30%', left: '4%', delay: 1 },
          { text: 'async/await', top: '60%', left: '6%', delay: 0.3 },
        ].map((tag) => (
          <motion.div
            key={tag.text}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 + tag.delay, duration: 0.6 }}
            className="absolute hidden lg:block"
            style={{ top: tag.top, right: tag.right, left: tag.left }}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5 + tag.delay, repeat: Infinity, ease: 'easeInOut' }}
              className="font-mono text-xs text-text-muted px-3 py-1.5 rounded-lg border border-border-subtle bg-bg-card/50"
            >
              {tag.text}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Main content */}
      <div className="section-container relative z-10 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Social links — vertical on left (desktop) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="hidden xl:flex fixed left-8 bottom-0 flex-col items-center gap-4 pb-8"
            style={{ top: '50%', transform: 'translateY(-50%)', position: 'fixed', left: '24px' }}
          >
            {SOCIAL.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-muted hover:text-accent-gold transition-colors"
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
            <div className="w-px h-16 bg-border-default" />
          </motion.div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse-slow" />
              <span className="font-mono text-xs text-accent-teal tracking-wider uppercase">
                Available for opportunities
              </span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            transition={{ delayChildren: 0.2 }}
          >
            <motion.h1
              variants={itemVariants}
              className="font-display font-800 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-text-primary leading-[1.05] tracking-tight mb-4"
            >
              Sharvil
              <br />
              <span className="text-gold-gradient">Bidkar</span>
            </motion.h1>

            {/* Role */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-display text-xl sm:text-2xl text-text-secondary font-500">
                React.js Frontend Developer
              </span>
              <span className="hidden sm:inline text-text-muted">·</span>
              <span className="font-mono text-sm text-accent-gold bg-accent-gold-dim border border-accent-gold/20 px-3 py-1 rounded-full">
                4 Years
              </span>
            </motion.div>

            {/* Bio */}
            <motion.p
              variants={itemVariants}
              className="text-text-secondary font-body text-lg leading-relaxed max-w-xl mb-8"
            >
              Building enterprise-grade React applications with a focus on{' '}
              <span className="text-text-primary">performance</span>,{' '}
              <span className="text-text-primary">scalability</span>, and{' '}
              <span className="text-text-primary">exceptional user experience</span>.
            </motion.p>

            {/* Tech tags */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-10">
              {TECH_TAGS.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Button
                size="lg"
                onClick={() => scrollTo('projects')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
                View Projects
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={() => scrollTo('contact')}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                Contact Me
              </Button>

              <Button
                variant="ghost"
                size="lg"
                href="/Sharvil_Bidkar_Resume_Reactjs.pdf"
                target="_blank"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 0.6 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="font-mono text-xs text-text-muted tracking-widest">SCROLL</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
