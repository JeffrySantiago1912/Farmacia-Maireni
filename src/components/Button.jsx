const base =
  'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-brand-red text-white shadow-lg shadow-brand-red/25 hover:bg-brand-red-hover hover:shadow-xl hover:shadow-brand-red/30 focus-visible:outline-brand-red active:scale-[0.98]',
  secondary:
    'border-2 border-brand-blue bg-transparent text-brand-blue hover:bg-brand-blue/10 dark:border-blue-400 dark:text-blue-300 dark:hover:bg-blue-500/10 focus-visible:outline-brand-blue active:scale-[0.98]',
  ghost:
    'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white dark:bg-slate-800/80 dark:hover:bg-slate-700',
}

export function Button({
  as: Component = 'button',
  variant = 'primary',
  className = '',
  type,
  ...props
}) {
  const isNativeButton = Component === 'button'
  return (
    <Component
      {...(isNativeButton ? { type: type ?? 'button' } : {})}
      className={`${base} ${variants[variant] ?? variants.primary} ${className}`}
      {...props}
    />
  )
}
