import { motion } from "framer-motion";
import { MapPinned, MessageCircle, PackageCheck, Truck, Zap } from "lucide-react";
import { WHATSAPP_URL } from "../constants";
import { sectionRevealProps } from "../lib/scrollReveal";

const benefits = [
  {
    title: "Atención rápida",
    description: "Filas ágiles y personal preparado para ayudarte al instante.",
    icon: Zap,
  },
  {
    title: "Productos confiables",
    description: "Cadena de custodia y proveedores reconocidos.",
    icon: PackageCheck,
  },
  {
    title: "Entrega eficiente",
    description: "Coordinamos tu pedido para que llegue cuando lo necesitas.",
    icon: Truck,
  },
  {
    title: "Ubicación estratégica",
    description: "Fácil acceso en Av. Los Restauradores, Santo Domingo.",
    icon: MapPinned,
  },
];

export function Benefits() {
  return (
    <motion.section
      id="beneficios"
      {...sectionRevealProps()}
      className="border-t border-brand-blue/10 bg-gradient-to-b from-slate-50 to-white py-16 dark:border-blue-500/15 dark:from-slate-900 dark:to-slate-950 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-blue-300 sm:text-4xl">
            ¿Por qué elegirnos?
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Beneficios pensados para tu tranquilidad.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 44 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%", amount: 0.12 }}
              transition={{
                duration: 0.55,
                delay: i * 0.07,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-transparent bg-white p-6 shadow-lg shadow-brand-blue/10 transition hover:border-brand-red/20 dark:bg-slate-900 dark:shadow-black/40"
            >
              <div
                className="mb-4 inline-flex rounded-full bg-gradient-to-br from-brand-red/12 to-brand-blue/12 p-[11px] text-brand-red shadow-[0_2px_12px_-2px_rgba(220,38,38,0.2)] ring-1 ring-brand-red/15 dark:from-red-500/20 dark:to-blue-600/25 dark:text-red-300 dark:ring-white/10"
                aria-hidden
              >
                <b.icon className="h-6 w-6" strokeWidth={2.25} />
              </div>
              <h3 className="font-semibold text-brand-blue dark:text-blue-200">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                {b.description}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
            ¿Listo para recibir la mejor atención farmacéutica?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-brand-red px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-red/35 transition hover:scale-[1.03] hover:bg-brand-red-hover hover:shadow-xl hover:shadow-brand-red/40 active:scale-[0.98]"
            aria-label="Consultar medicamento ahora por WhatsApp"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
            Consultar medicamento ahora
          </a>
        </div>
      </div>
    </motion.section>
  );
}
