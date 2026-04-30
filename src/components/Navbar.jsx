import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BrandLogoMark } from "./BrandLogoMark";
import { DarkModeToggle } from "./DarkModeToggle";

const links = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#ubicacion", label: "Ubicación" },
  { href: "#beneficios", label: "Beneficios" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-brand-blue/10 bg-white/90 backdrop-blur-md dark:border-blue-500/15 dark:bg-slate-950/90"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6"
        aria-label="Principal"
      >
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2 text-brand-blue transition hover:opacity-90 dark:text-blue-300"
        >
          <BrandLogoMark />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-bold tracking-tight">
              Farmacia Maireni
            </span>
            <span className="text-[10px] font-medium uppercase tracking-wider text-slate-500 dark:text-slate-400">
              S.R.L.
            </span>
          </span>
        </a>

        <div className="hidden flex-1 items-center justify-center gap-1 md:flex lg:gap-2">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="whitespace-nowrap px-2 py-1 text-sm font-medium text-slate-700 transition hover:text-brand-red dark:text-slate-300 dark:hover:text-red-400 lg:px-3"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <DarkModeToggle />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-brand-blue/15 md:hidden dark:border-blue-500/25"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open ? (
              <X className="h-5 w-5 text-brand-blue dark:text-blue-300" />
            ) : (
              <Menu className="h-5 w-5 text-brand-blue dark:text-blue-300" />
            )}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-brand-blue/10 md:hidden dark:border-blue-500/15"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-brand-blue/5 hover:text-brand-red dark:text-slate-300 dark:hover:bg-blue-950/50"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
