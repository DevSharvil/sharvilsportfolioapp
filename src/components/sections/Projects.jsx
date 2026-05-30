import { motion } from 'framer-motion'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Badge } from '@/components/ui/Badge'
import { projects } from '@/data/projects'

function ProjectCard({ project, index }) {
  return (
    <ScrollReveal delay={index * 0.1}>
      <motion.article
        whileHover={{ y: -6 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        className="group relative flex flex-col h-full p-6 rounded-2xl bg-bg-card border border-border-subtle hover:border-border-strong transition-all duration-300 shadow-card overflow-hidden"
      >
        {/* Gradient background blob */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{ background: `linear-gradient(90deg, transparent, ${project.accentColor}60, transparent)` }}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-2">
              <Badge variant={project.status === 'Production' ? 'teal' : 'gold'}>
                {project.status}
              </Badge>
              <Badge variant="default">{project.year}</Badge>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              {project.github && project.github !== '#' && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/10 transition-all"
                  aria-label={`${project.title} GitHub`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              )}
              {project.live && project.live !== '#' && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-text-primary hover:bg-white/10 transition-all"
                  aria-label={`${project.title} Live`}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Project visual placeholder */}
          <div
            className={`w-full h-36 rounded-xl bg-gradient-to-br ${project.gradient} border border-white/[0.06] mb-5 flex items-center justify-center overflow-hidden`}
          >
            <div className="text-center">
              <div
                className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center mx-auto mb-2"
                style={{ background: `${project.accentColor}18` }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <p className="font-mono text-xs" style={{ color: project.accentColor }}>
                {project.year}
              </p>
            </div>
          </div>

          {/* Title + tagline */}
          <h3 className="font-display font-700 text-lg text-text-primary mb-1 group-hover:text-accent-gold transition-colors">
            {project.title}
          </h3>
          <p className="text-accent-gold/70 text-xs font-mono mb-3">{project.tagline}</p>

          {/* Description */}
          <p className="text-text-secondary text-sm leading-relaxed font-body line-clamp-3 mb-4 flex-1">
            {project.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.features.map((f) => (
              <span key={f} className="text-xs font-mono text-text-muted bg-white/[0.03] border border-white/[0.06] px-2 py-0.5 rounded">
                {f}
              </span>
            ))}
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border-subtle">
            {project.tech.map((t) => (
              <span key={t} className="skill-pill text-xs" style={{ '--tw-border-opacity': 1 }}>
                {t}
              </span>
            ))}
          </div>
        </div>
      </motion.article>
    </ScrollReveal>
  )
}

export function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      <div className="section-container">
        <SectionHeader
          eyebrow="What I've Built"
          title="Projects"
          subtitle="A selection of enterprise and personal work I'm proud of."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        <ScrollReveal delay={0.3} className="mt-10 text-center">
          <p className="text-text-muted text-sm font-body">
            Most enterprise work is under NDA.{' '}
            <a
              href="#contact"
              className="text-accent-gold hover:underline"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Reach out for case studies.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
