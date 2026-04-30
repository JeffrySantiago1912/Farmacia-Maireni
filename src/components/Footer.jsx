import { MapPin, Sparkles } from "lucide-react";
import { BrandLogoMark } from "./BrandLogoMark";
import { ADDRESS } from "../constants";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-100 text-slate-800 dark:bg-slate-950 dark:text-slate-200">
      <div
        className="h-1 w-full bg-gradient-to-r from-brand-blue via-brand-blue to-brand-red"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#f1f5f9_55%,#e8eef5_100%)] dark:bg-[linear-gradient(180deg,#020617_0%,#0f172a_40%,#020617_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-40 dark:opacity-25"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231e3a8a' fill-opacity='0.07'%3E%3Cpath d='M32 20v24M20 32h24' stroke-width='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 top-16 h-80 w-80 rounded-full bg-brand-red/12 blur-[120px] dark:bg-red-600/15" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-brand-blue/10 blur-[100px] dark:bg-blue-600/12" />

      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12">
        <div className="flex flex-col items-center gap-10 sm:flex-row sm:items-start sm:justify-between sm:gap-12">
          <div className="flex max-w-md flex-col items-center text-center sm:flex-row sm:items-start sm:text-left">
            <div className="relative mb-4 shrink-0 sm:mb-0 sm:mr-5">
              <BrandLogoMark className="h-16 w-16 rounded-2xl shadow-lg shadow-brand-blue/25 ring-2 ring-white/80 dark:ring-white/20" />
              <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white shadow-md ring-2 ring-white dark:ring-slate-900">
                ✓
              </span>
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">
                Farmacia Maireni
              </p>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-blue dark:text-sky-300">
                S.R.L.
              </p>
              <p className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-brand-blue/20 bg-white/90 px-3 py-1 text-xs font-semibold text-brand-blue shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-sky-100">
                <Sparkles
                  className="h-3.5 w-3.5 text-amber-500 dark:text-amber-300"
                  aria-hidden
                />
                Santo Domingo
              </p>
              <p className="mt-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                Seguros médicos · Calidad y confianza
              </p>
            </div>
          </div>

          <div className="flex max-w-md flex-col items-center gap-4 text-center sm:items-end sm:text-right">
            <a
              href="#ubicacion"
              className="inline-flex max-w-full items-start gap-2 text-sm text-slate-600 underline-offset-2 transition hover:text-brand-blue hover:underline dark:text-slate-400 dark:hover:text-sky-300 sm:justify-end"
            >
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-brand-red dark:text-red-400"
                aria-hidden
              />
              <span>{ADDRESS}</span>
            </a>

          </div>
        </div>

        <div className="mt-10 border-t border-slate-200/90 pt-6 pb-20 sm:pb-6 dark:border-white/10">
          <div className="flex flex-col items-center gap-3 text-xs text-slate-600 sm:grid sm:grid-cols-3 sm:items-center sm:gap-4 sm:text-sm dark:text-slate-400">
            <p className="text-center sm:text-left">
              © {new Date().getFullYear()} Farmacia Maireni, S.R.L.
            </p>
            <p className="text-center">
              <span className="text-slate-500 dark:text-slate-500">
                Desarrollado por{" "}
              </span>
              <span className="font-semibold text-brand-blue dark:text-sky-300">
                AbbaTech
              </span>
            </p>

          </div>
        </div>
      </div>
    </footer>
  );
}
