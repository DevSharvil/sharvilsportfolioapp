import { cn } from '@/utils/cn'

const styles = {
  gold: 'bg-accent-gold-dim border-accent-gold/30 text-accent-gold',
  teal: 'bg-accent-teal-dim border-accent-teal/30 text-accent-teal',
  default: 'bg-white/5 border-white/10 text-text-secondary',
  success: 'bg-green-500/10 border-green-500/20 text-green-400',
}

export function Badge({ children, variant = 'default', className = '' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono border',
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
