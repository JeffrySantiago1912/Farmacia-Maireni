import { Menu, MessageCircle, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { BrandLogoMark } from "./BrandLogoMark";
import { WHATSAPP_URL } from "../constants";

const links = [
  { href: "#inicio",     label: "Inicio"     },
  { href: "#servicios",  label: "Servicios"  },
  { href: "#nosotros",   label: "Nosotros"   },
  { href: "#ubicacion",  label: "Ubicación"  },
  { href: "#beneficios", label: "Beneficios" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-0 z-50 border-b border-slate-100 bg-white/96 shadow-sm backdrop-blur-md"
    >
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6"
        aria-label="Principal"
      >
        {/* Logo */}
        <a
          href="#inicio"
          className="flex shrink-0 items-center gap-2.5 transition hover:opacity-80"
        >
          <BrandLogoMark className="h-9 w-9" />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-sm font-extrabold tracking-tight text-brand-blue">
              Farmacia Maireni
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
              S.R.L.
            </span>
          </div>
        </a>

        {/* Links — desktop */}
        <div className="hidden flex-1 items-center justify-center gap-0.5 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-blue/5 hover:text-brand-blue"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA + hamburger */}
        <div className="flex shrink-0 items-center gap-3">


          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            {open
              ? <X    className="h-5 w-5 text-brand-blue" />
              : <Menu className="h-5 w-5 text-brand-blue" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-brand-blue/5 hover:text-brand-blue"
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
