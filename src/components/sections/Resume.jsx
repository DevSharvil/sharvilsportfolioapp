import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

const STATS = [
  { value: '4', label: 'Years Experience', icon: '📅' },
  { value: '6+', label: 'Projects Delivered', icon: '🚀' },
  { value: '10+', label: 'Technologies', icon: '⚛️' },
  { value: '5', label: 'Enterprise Products', icon: '🏢' },
]

const RESUME_HIGHLIGHTS = [
  { section: 'Experience', items: ['React.js Frontend Developer @ SLK Softwares IT Org (2022–Present)', 'Frontend Developer Intern (2021–2022)'] },
  { section: 'Education', items: ['BCS'] },
  { section: 'Certifications', items: ['React.js Certification — Udemy', 'JavaScript Advanced — LinkedIn Learning'] },
]

export function Resume() {
  return (
    <section id="resume" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="section-container">
        <SectionHeader
          eyebrow="Career Summary"
          title="Resume"
          subtitle="A snapshot of my professional journey."
          align="center"
        />

        {/* Stats */}
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -3 }}
                className="p-5 rounded-2xl bg-bg-card border border-border-subtle text-center hover:border-accent-gold/20 transition-all group"
              >
                <div className="text-2xl mb-2">{stat.icon}</div>
                <div className="font-display font-800 text-3xl text-accent-gold mb-1">{stat.value}</div>
                <div className="font-mono text-xs text-text-muted">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>

        {/* Resume preview card */}
        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Preview */}
          <ScrollReveal className="lg:col-span-3">
            <div className="p-8 rounded-2xl bg-bg-card border border-border-subtle shadow-card">
              {/* Mock resume header */}
              <div className="border-b border-border-subtle pb-6 mb-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display font-800 text-2xl text-text-primary">Sharvil Bidkar</h3>
                    <p className="text-accent-gold font-body text-sm mt-1">React.js Frontend Developer</p>
                    <div className="flex flex-wrap gap-3 mt-2">
                      <span className="font-mono text-xs text-text-muted">📧 sharvilbidkar5@email.com</span>
                      <span className="font-mono text-xs text-text-muted">📍 Pune, India</span>
                      <span className="font-mono text-xs text-text-muted">💼 github.com/DevSharvil</span>
                    </div>
                  </div>
                  <div className="w-14 h-14 rounded-xl bg-accent-gold/10 border border-accent-gold/20 flex items-center justify-center">
                    <span className="font-display font-800 text-lg text-accent-gold">SB</span>
                  </div>
                </div>
              </div>

              {RESUME_HIGHLIGHTS.map((section) => (
                <div key={section.section} className="mb-5">
                  <p className="font-display font-600 text-xs text-text-muted uppercase tracking-widest mb-2">
                    {section.section}
                  </p>
                  <ul className="space-y-1.5">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-text-secondary font-body">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-accent-gold/50 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {/* Blurred "hidden" rows to suggest more content */}
              <div className="space-y-2 pt-4 border-t border-border-subtle">
                {['Skills · React · TypeScript · Redux · AG Grid · Azure AD', 'Projects · Enterprise Dashboard · Agile DMP · Interview Tracker'].map((row) => (
                  <div
                    key={row}
                    className="h-3 rounded bg-white/[0.04] blur-[1px] opacity-60"
                    style={{ width: `${60 + Math.random() * 30}%` }}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Download CTA */}
          <ScrollReveal delay={0.2} className="lg:col-span-2">
            <div className="space-y-4 sticky top-24">
              <div className="p-6 rounded-2xl bg-accent-gold/5 border border-accent-gold/20">
                <div className="w-12 h-12 rounded-xl bg-accent-gold/15 flex items-center justify-center mb-4">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0a500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                    <polyline points="14 2 14 8 20 8" />
                    <line x1="16" y1="13" x2="8" y2="13" />
                    <line x1="16" y1="17" x2="8" y2="17" />
                    <polyline points="10 9 9 9 8 9" />
                  </svg>
                </div>
                <h3 className="font-display font-700 text-text-primary text-lg mb-2">
                  Full Resume PDF
                </h3>
                <p className="text-text-secondary text-sm font-body mb-5 leading-relaxed">
                  Complete experience, skills, projects, and education — formatted for recruiters.
                </p>
                <Button
                  size="lg"
                  href="/Sharvil_Bidkar_Resume_Reactjs.pdf"
                  target="_blank"
                  className="w-full justify-center"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Download PDF
                </Button>
              </div>

              <div className="p-4 rounded-xl bg-bg-card border border-border-subtle text-center">
                <p className="text-text-muted text-xs font-mono">
                  Last updated · <span className="text-accent-teal">23-May</span>
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
