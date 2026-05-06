import { motion } from "framer-motion";
import { Clock, ExternalLink, MapPin } from "lucide-react";
import { ADDRESS, MAPS_EMBED_SRC, MAPS_OPEN_URL } from "../constants";
import { sectionRevealProps } from "../lib/scrollReveal";

const hours = [
  { days: "Lunes – Viernes", time: "8:00 AM – 9:00 PM" },
  { days: "Sábados",         time: "8:00 AM – 8:00 PM" },
  { days: "Domingos",        time: "9:00 AM – 2:00 PM"  },
];

export function Location() {
  return (
    <motion.section
      id="ubicacion"
      {...sectionRevealProps()}
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-12">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-brand-red">
            Dónde estamos
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl">
            Ubicación y horarios
          </h2>
          <p className="mt-4 flex items-start gap-2 text-slate-600 sm:items-center">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-brand-red sm:mt-0" aria-hidden />
            {ADDRESS}
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-5">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <iframe
                title="Mapa: Farmacia Maireni, S.R.L."
                src={MAPS_EMBED_SRC}
                className="aspect-video min-h-[280px] w-full border-0 lg:min-h-[340px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={MAPS_OPEN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-blue underline-offset-4 transition hover:text-brand-red hover:underline"
            >
              Abrir en Google Maps
              <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col justify-center lg:col-span-2"
          >
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-5 flex items-center gap-2.5">
                <div className="rounded-xl bg-brand-blue/10 p-2.5">
                  <Clock className="h-5 w-5 text-brand-blue" aria-hidden />
                </div>
                <span className="text-lg font-bold text-brand-blue">
                  Horario de atención
                </span>
              </div>

              <ul className="space-y-4" aria-label="Horario de atención">
                {hours.map((row) => (
                  <li
                    key={row.days}
                    className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-slate-700">
                      {row.days}
                    </span>
                    <span className="text-sm font-semibold text-brand-blue">
                      {row.time}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="mt-5 rounded-lg border border-slate-100 bg-slate-50 p-3 text-xs text-slate-500">
                * Horarios referenciales; pueden variar en días festivos.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
