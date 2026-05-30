import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'

const HIGHLIGHTS = [
  { icon: '⚛️', label: 'Enterprise React', desc: 'Complex dashboards, finance & HR workflows at scale' },
  { icon: '⚡', label: 'Performance', desc: 'Code splitting, lazy loading, bundle optimization' },
  { icon: '🔐', label: 'Auth & RBAC', desc: 'Azure AD, role-based access control systems' },
  { icon: '📊', label: 'Data Visualization', desc: 'AG Grid, Recharts, real-time dashboards' },
  { icon: '🧩', label: 'Component Architecture', desc: 'Reusable, testable, design-system-ready' },
  { icon: '🔗', label: 'API Integration', desc: 'RESTful APIs, error handling, caching strategies' },
]

const STATS = [
  { value: '4', label: 'Years Experience' },
  { value: '16+', label: 'Components Built' },
  { value: '5', label: 'Enterprise Products' },
  { value: '35%', label: 'Load Time Reduced' },
]

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="section-container">
        <SectionHeader
          eyebrow="Who I Am"
          title="About Me"
          subtitle="I build the things users interact with — obsessively."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Text column */}
          <div>
            <ScrollReveal>
              <div className="space-y-5 text-text-secondary font-body text-base leading-relaxed">
                <p>
                  I'm a React.js Frontend Developer with <span className="text-text-primary font-500">4 years of experience</span> building
                  production-grade enterprise applications. My work lives at the intersection of
                  technical precision and user-centered thinking.
                </p>
                <p>
                  At my current role, I work across analytics dashboards, finance workflows, and
                  workforce management modules — all requiring high-performance React, complex state
                  management with <span className="text-text-primary font-500">Redux Toolkit</span>, and
                  robust <span className="text-text-primary font-500">Azure AD / RBAC</span> authentication patterns.
                </p>
                <p>
                  I care deeply about{' '}
                  <span className="text-text-primary font-500">component architecture</span> — building
                  systems that scale without becoming a liability. Whether it's a 50-column AG Grid table
                  or a multi-step form wizard, the underlying structure should be clean, typed with
                  TypeScript, and easy for a new developer to understand.
                </p>
                <p>
                  Beyond code, I'm a photographer who sees composition in data tables and rhythm in API
                  waterfalls. I bring that same visual and structural sensibility to every interface I build.
                </p>
              </div>
            </ScrollReveal>

            {/* Stats row */}
            <ScrollReveal delay={0.2} className="mt-10">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {STATS.map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-bg-card border border-border-subtle">
                    <p className="font-display font-800 text-2xl text-accent-gold mb-1">{stat.value}</p>
                    <p className="font-mono text-xs text-text-muted">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Highlights grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {HIGHLIGHTS.map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -3, borderColor: 'rgba(240,165,0,0.25)' }}
                  className="p-5 rounded-xl bg-bg-card border border-border-subtle shadow-card transition-colors group"
                >
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-display font-600 text-sm text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
                    {item.label}
                  </h3>
                  <p className="text-text-muted text-xs leading-relaxed font-body">{item.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
