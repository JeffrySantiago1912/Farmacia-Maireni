import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin } from "lucide-react";
import { ADDRESS, MAPS_EMBED_SRC, MAPS_OPEN_URL } from "../constants";
import { sectionRevealProps } from "../lib/scrollReveal";

const hours = [
  { days: "Lunes – Viernes", time: "8:00 AM – 9:00 PM" },
  { days: "Sábados", time: "8:00 AM – 8:00 PM" },
  { days: "Domingos", time: "9:00 AM – 2:00 PM" },
];

export function Location() {
  return (
    <motion.section
      id="ubicacion"
      {...sectionRevealProps()}
      className="bg-white py-16 dark:bg-slate-950 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%", amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-blue-300 sm:text-4xl">
            Ubicación
          </h2>
          <p className="mt-2 flex flex-wrap items-center justify-center gap-2 text-slate-600 dark:text-slate-400">
            <MapPin className="h-5 w-5 shrink-0 text-brand-red" aria-hidden />
            {ADDRESS}
          </p>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-brand-blue/15 shadow-xl dark:border-blue-500/20">
              <iframe
                title="Mapa: Farmacia Maireni, S.R.L."
                src={MAPS_EMBED_SRC}
                className="aspect-video min-h-[280px] w-full border-0 lg:min-h-[360px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-brand-blue underline-offset-4 transition hover:text-brand-red hover:underline dark:text-blue-300 dark:hover:text-red-400"
            >
              Abrir ubicación en Google Maps
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.55,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <div className="rounded-2xl border border-brand-blue/10 bg-brand-blue/5 p-6 dark:border-blue-500/25 dark:bg-blue-950/50">
              <div className="mb-4 flex items-center gap-2 text-brand-blue dark:text-blue-200">
                <Clock className="h-6 w-6 text-brand-red" aria-hidden />
                <span className="text-lg font-semibold">Horario</span>
              </div>
              <ul className="space-y-3" aria-label="Horario de atención">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex flex-col justify-between gap-1 border-b border-brand-blue/10 pb-3 last:border-0 last:pb-0 sm:flex-row sm:items-center dark:border-blue-400/20"
                  >
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {row.days}
                    </span>
                    <span className="text-sm text-slate-600 dark:text-slate-300">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                Horarios referenciales; pueden variar en días festivos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
