/**
 * Cruz médica de marca: colores planos azul (horizontal) y rojo (vertical), sin degradados.
 */
export function BrandLogoMark({
  className = "h-10 w-10 rounded-xl shadow-md ring-1 ring-slate-200/90 dark:ring-slate-600/80",
}) {
  return (
    <span
      className={`inline-flex shrink-0 items-center justify-center bg-white dark:bg-slate-950 ${className}`}
      aria-hidden
    >
      <svg
        viewBox="0 0 40 40"
        className="h-[58%] w-[58%]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="7"
          y="17"
          width="26"
          height="6"
          rx="2"
          fill="var(--color-brand-blue, #1e3a8a)"
        />
        <rect
          x="17"
          y="7"
          width="6"
          height="26"
          rx="2"
          fill="var(--color-brand-red, #dc2626)"
        />
      </svg>
    </span>
  );
}
