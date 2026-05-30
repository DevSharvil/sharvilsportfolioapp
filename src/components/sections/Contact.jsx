import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { ScrollReveal } from '@/components/ui/ScrollReveal'
import { Button } from '@/components/ui/Button'

// ⚠️ Replace with your EmailJS credentials
const EMAILJS_SERVICE_ID = 'your_service_id'
const EMAILJS_TEMPLATE_ID = 'your_template_id'
const EMAILJS_PUBLIC_KEY = 'your_public_key'

const CONTACT_INFO = [
  {
    label: 'Email',
    value: 'sharvilbidkar5@email.com',
    href: 'mailto:sharvilbidkar5@email.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
   {
    label: 'Mobile',
    value: '+91 9139379638',
    href: 'tel:+919139379638',
    icon: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.08 4.18 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.63 2.62a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.46-1.15a2 2 0 0 1 2.11-.45c.84.3 1.72.51 2.62.63A2 2 0 0 1 22 16.92z" />
    </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sharvil-bidkar-259754217',
    href: 'https://linkedin.com/in/sharvil-bidkar-259754217',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/DevSharvil',
    href: 'https://github.com/DevSharvil',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
]

const inputClass =
  'w-full bg-bg-hover border border-border-default rounded-xl px-4 py-3 text-text-primary font-body text-sm placeholder-text-muted focus:outline-none focus:border-accent-gold/50 focus:ring-1 focus:ring-accent-gold/30 transition-all duration-200'

export function Contact() {
  const formRef = useRef(null)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border-default to-transparent" />

      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(240,165,0,0.05) 0%, transparent 70%)' }} />

      <div className="section-container">
        <SectionHeader
          eyebrow="Get In Touch"
          title="Let's Work Together"
          subtitle="Open to full-time roles, freelance projects, and interesting collaborations."
          align="center"
        />

        <div className="grid lg:grid-cols-5 gap-10 max-w-5xl mx-auto">
          {/* Contact info */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-bg-card border border-border-subtle">
                <p className="font-mono text-xs text-text-muted uppercase tracking-widest mb-4">Direct Contact</p>
                <div className="space-y-4">
                  {CONTACT_INFO.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      target={info.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-bg-hover border border-border-subtle flex items-center justify-center text-text-muted group-hover:text-accent-gold group-hover:border-accent-gold/30 group-hover:bg-accent-gold-dim transition-all duration-200">
                        {info.icon}
                      </div>
                      <div>
                        <p className="font-mono text-xs text-text-muted">{info.label}</p>
                        <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors font-body">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-accent-teal/5 border border-accent-teal/20 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-accent-teal animate-pulse-slow" />
                <p className="text-accent-teal text-xs font-mono">
                  Available for new opportunities
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="left" delay={0.1} className="lg:col-span-3">
            <form ref={formRef} onSubmit={handleSubmit} className="p-7 rounded-2xl bg-bg-card border border-border-subtle shadow-card space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2">Your Name</label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Rahul Sharma"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-muted mb-2">Email Address</label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="rahul@company.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className="block font-mono text-xs text-text-muted mb-2">Subject</label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  placeholder="Frontend Developer Role at Acme Inc."
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block font-mono text-xs text-text-muted mb-2">Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Hi Sharvil, we have an exciting opportunity..."
                  className={`${inputClass} resize-none`}
                />
              </div>

              {/* Submit */}
              <div className="flex items-center justify-between pt-2">
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-accent-teal text-sm font-mono"
                  >
                    ✓ Message sent! I'll reply soon.
                  </motion.p>
                )}
                {status === 'error' && (
                  <p className="text-red-400 text-sm font-mono">
                    ✗ Something went wrong. Try email directly.
                  </p>
                )}
                {status === 'idle' && <span />}

                <Button
                  type="submit"
                  disabled={status === 'sending'}
                  size="lg"
                  className="ml-auto"
                >
                  {status === 'sending' ? (
                    <>
                      <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-4 h-4 border-2 border-bg-primary border-t-transparent rounded-full"
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                      Send Message
                    </>
                  )}
                </Button>
              </div>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
