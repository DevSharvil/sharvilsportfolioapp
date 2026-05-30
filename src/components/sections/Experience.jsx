import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { experiences } from '@/data/experience'

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="section-container">
        <SectionHeader
          eyebrow="My Journey"
          title="Experience"
          subtitle="Where I've worked and what I've built."
        />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 md:left-8 top-2 bottom-2 w-px timeline-line hidden sm:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.id} delay={index * 0.15}>
                <div className="relative flex gap-6 sm:gap-10">
                  {/* Timeline dot */}
                  <div className="relative flex-shrink-0 hidden sm:block">
                    <div className="w-16 h-16 rounded-2xl bg-bg-card border border-border-default flex items-center justify-center z-10 relative">
                      <motion.div
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.4 }}
                        className="w-3 h-3 rounded-full bg-accent-gold"
                      />
                    </div>
                  </div>

                  {/* Content card */}
                  <motion.div
                    whileHover={{ y: -2 }}
                    className="flex-1 p-6 md:p-8 rounded-2xl bg-bg-card border border-border-subtle hover:border-accent-gold/20 transition-all duration-300 shadow-card"
                  >
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant={exp.type === 'Full-time' ? 'gold' : 'default'}>
                            {exp.type}
                          </Badge>
                          <Badge variant="default">{exp.years}</Badge>
                        </div>
                        <h3 className="font-display font-700 text-xl text-text-primary mt-2">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-accent-gold font-body font-500 text-sm">{exp.company}</span>
                          <span className="text-text-muted text-sm">·</span>
                          <span className="text-text-muted text-sm font-mono">{exp.location}</span>
                        </div>
                      </div>
                      <div className="shrink-0">
                        <span className="font-mono text-xs text-text-muted bg-bg-hover px-3 py-1.5 rounded-lg border border-border-subtle whitespace-nowrap">
                          {exp.duration}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-text-secondary text-sm leading-relaxed mb-5 font-body">
                      {exp.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-2 mb-6">
                      {exp.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-text-secondary font-body">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent-gold/60 flex-shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs px-2.5 py-1 rounded-full bg-white/[0.04] border border-white/10 text-text-muted"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
