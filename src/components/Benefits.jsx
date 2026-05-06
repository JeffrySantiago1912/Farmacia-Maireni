import { motion } from "framer-motion";
import { MapPinned, MessageCircle, PackageCheck, Truck, Zap } from "lucide-react";
import { WHATSAPP_URL } from "../constants";
import { sectionRevealProps } from "../lib/scrollReveal";

const benefits = [
  {
    number: "01",
    title:  "Atención rápida",
    description:
      "Filas ágiles y personal preparado para ayudarte al instante.",
    icon: Zap,
  },
  {
    number: "02",
    title:  "Productos confiables",
    description:
      "Cadena de custodia certificada y proveedores reconocidos. Cero falsificaciones.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title:  "Entrega eficiente",
    description:
      "Coordinamos tu pedido para que llegue exactamente cuando lo necesitas.",
    icon: Truck,
  },
  {
    number: "04",
    title:  "Ubicación estratégica",
    description:
      "Fácil acceso en Av. Los Restauradores #134, Santo Domingo.",
    icon: MapPinned,
  },
];

export function Benefits() {
  return (
    <motion.section
      id="beneficios"
      {...sectionRevealProps()}
      className="bg-brand-blue py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header */}
        <div className="mb-14 text-center">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-red-300">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Beneficios pensados para ti
          </h2>
          <p className="mt-4 text-blue-200">
            La farmacia que pone tu salud y comodidad por encima de todo.
          </p>
        </div>

        {/* 4-col grid — no hover motion */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="mb-5 flex items-start justify-between">
                <div className="rounded-xl bg-white/15 p-3">
                  <b.icon
                    className="h-6 w-6 text-white"
                    strokeWidth={2}
                    aria-hidden
                  />
                </div>
                <span className="select-none text-2xl font-black text-white/12">
                  {b.number}
                </span>
              </div>
              <h3 className="font-bold text-white">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-200">
                {b.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="font-medium text-blue-100">
            ¿Listo para recibir la mejor atención farmacéutica?
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-white shadow-2xl shadow-[#25D366]/20 transition hover:bg-[#1ebe59] active:scale-[0.98]"
          >
            <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
            Consultar medicamento ahora
          </a>
        </div>
      </div>
    </motion.section>
  );
}
