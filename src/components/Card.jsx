export function Card({ children, className = '' }) {
  return (
    <div
      className={`rounded-2xl border border-brand-blue/15 bg-brand-blue/5 p-6 shadow-lg shadow-brand-blue/10 transition-shadow duration-300 hover:shadow-xl hover:shadow-brand-blue/15 dark:border-blue-500/20 dark:bg-blue-950/40 dark:shadow-black/30 ${className}`}
    >
      {children}
    </div>
  )
}
