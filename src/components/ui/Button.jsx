import { motion } from 'framer-motion'
import { cn } from '@/utils/cn'

const variants = {
  primary: 'bg-accent-gold text-bg-primary hover:bg-accent-gold-light font-display font-600 shadow-gold',
  secondary: 'bg-transparent border border-border-default text-text-primary hover:bg-bg-hover hover:border-border-strong',
  ghost: 'bg-transparent text-text-secondary hover:text-text-primary hover:bg-bg-hover',
  teal: 'bg-transparent border border-accent-teal/40 text-accent-teal hover:bg-accent-teal/10',
}

const sizes = {
  sm: 'px-4 py-2 text-sm gap-1.5',
  md: 'px-5 py-2.5 text-sm gap-2',
  lg: 'px-7 py-3.5 text-base gap-2.5',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  href,
  target,
  onClick,
  disabled = false,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center rounded-full font-body transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed'

  const classes = cn(base, variants[variant], sizes[size], className)

  if (href) {
    return (
      <motion.a
        href={href}
        target={target}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        className={classes}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      whileTap={{ scale: disabled ? 1 : 0.97 }}
      {...props}
    >
      {children}
    </motion.button>
  )
}
