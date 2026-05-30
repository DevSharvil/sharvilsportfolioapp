import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { skillCategories } from '@/data/skills'

const COLOR_MAP = {
  gold: {
    card: 'border-accent-gold/20 hover:border-accent-gold/40',
    icon: 'text-accent-gold bg-accent-gold-dim',
    pill: 'bg-accent-gold/8 border-accent-gold/20 text-accent-gold',
    bar: 'bg-accent-gold',
  },
  teal: {
    card: 'border-accent-teal/20 hover:border-accent-teal/40',
    icon: 'text-accent-teal bg-accent-teal-dim',
    pill: 'bg-accent-teal/8 border-accent-teal/20 text-accent-teal',
    bar: 'bg-accent-teal',
  },
  gray: {
    card: 'border-white/10 hover:border-white/20',
    icon: 'text-text-secondary bg-white/5',
    pill: 'bg-white/5 border-white/10 text-text-secondary',
    bar: 'bg-text-secondary',
  },
  purple: {
    card: 'border-purple-400/20 hover:border-purple-400/40',
    icon: 'text-purple-400 bg-purple-400/10',
    pill: 'bg-purple-400/8 border-purple-400/20 text-purple-400',
    bar: 'bg-purple-400',
  },
}

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="section-container">
        <SectionHeader
          eyebrow="What I Know"
          title="Skills & Tech Stack"
          subtitle="Technologies I use to build fast, scalable, and maintainable frontend systems."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, catIndex) => {
            const colors = COLOR_MAP[category.color] || COLOR_MAP.gray
            return (
              <ScrollReveal key={category.id} delay={catIndex * 0.1}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className={`p-6 rounded-2xl bg-bg-card border ${colors.card} transition-all duration-300 h-full`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-lg ${colors.icon}`}>
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-600 text-text-primary text-base">
                        {category.title}
                      </h3>
                      <p className="font-mono text-xs text-text-muted">
                        {category.skills.length} technologies
                      </p>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIndex * 0.1 + i * 0.05 }}
                        className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 cursor-default hover:scale-105 ${colors.pill}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </ScrollReveal>
            )
          })}
        </div>

        {/* Core proficiency bar — decorative */}
        <ScrollReveal delay={0.4} className="mt-12">
          <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
            <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-6">
              Core Proficiency
            </p>
            <div className="space-y-4">
              {[
                { label: 'React.js / TypeScript', pct: 95 },
                { label: 'Redux Toolkit / State Management', pct: 90 },
                { label: 'UI Architecture & Design Systems', pct: 88 },
                { label: 'Performance Optimization', pct: 85 },
                { label: 'API Integration & Error Handling', pct: 92 },
              ].map((item, i) => (
                <div key={item.label}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm font-body text-text-secondary">{item.label}</span>
                    <span className="font-mono text-xs text-accent-gold">{item.pct}%</span>
                  </div>
                  <div className="h-1 bg-bg-hover rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full bg-gradient-to-r from-accent-gold to-accent-gold-light"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
