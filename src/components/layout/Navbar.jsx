import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/utils/cn'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Photography', href: '#photography' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on resize
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled
            ? 'glass-strong border-b border-border-subtle shadow-[0_1px_0_rgba(255,255,255,0.04)]'
            : 'bg-transparent'
        )}
      >
        <div className="section-container">
          <nav className="flex items-center justify-between h-16 md:h-18">
            {/* Logo */}
            <a
              href="#home"
              onClick={() => handleNavClick('#home')}
              className="font-display font-bold text-lg text-text-primary hover:text-accent-gold transition-colors"
            >
              SB<span className="text-accent-gold">.</span>
            </a>

            {/* Desktop nav */}
            <ul className="hidden md:flex items-center gap-1">
              {NAV_LINKS.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className={cn(
                        'relative px-4 py-2 text-sm font-body rounded-full transition-all duration-200',
                        isActive
                          ? 'text-accent-gold'
                          : 'text-text-secondary hover:text-text-primary'
                      )}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-indicator"
                          className="absolute inset-0 rounded-full bg-accent-gold/10 border border-accent-gold/20"
                          transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
                        />
                      )}
                      <span className="relative z-10">{link.label}</span>
                    </button>
                  </li>
                )
              })}
            </ul>

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              <a
                href="/Sharvil_Bidkar_Resume_Reactjs.pdf"
                download
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold text-bg-primary text-sm font-display font-600 hover:bg-accent-gold-light transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </a>

              {/* Hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden relative w-9 h-9 rounded-lg bg-bg-card border border-border-subtle flex items-center justify-center"
                aria-label="Toggle menu"
              >
                <div className="w-4 flex flex-col gap-1 items-end">
                  <motion.span
                    animate={menuOpen ? { rotate: 45, y: 5, width: '100%' } : { rotate: 0, y: 0, width: '100%' }}
                    className="block h-0.5 bg-text-primary rounded-full origin-center"
                    style={{ width: '100%' }}
                  />
                  <motion.span
                    animate={menuOpen ? { opacity: 0, x: -8 } : { opacity: 1, x: 0 }}
                    className="block h-0.5 bg-text-primary rounded-full"
                    style={{ width: '65%' }}
                  />
                  <motion.span
                    animate={menuOpen ? { rotate: -45, y: -5, width: '100%' } : { rotate: 0, y: 0, width: '75%' }}
                    className="block h-0.5 bg-text-primary rounded-full origin-center"
                  />
                </div>
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-16 z-40 glass-strong border-b border-border-subtle md:hidden"
          >
            <nav className="section-container py-4">
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.label}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                  >
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="w-full text-left px-4 py-3 rounded-lg text-text-secondary hover:text-text-primary hover:bg-bg-hover transition-colors font-body"
                    >
                      {link.label}
                    </button>
                  </motion.li>
                ))}
                <li className="pt-2 pb-1">
                  <a
                    href="/Sharvil_Bidkar_Resume_Reactjs.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 rounded-lg bg-accent-gold/10 text-accent-gold font-body font-500"
                    onClick={() => setMenuOpen(false)}
                  >
                    Download Resume
                  </a>
                </li>
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
