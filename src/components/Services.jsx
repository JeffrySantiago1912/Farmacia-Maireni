import { motion } from "framer-motion";
import {
  CreditCard,
  Handshake,
  Home,
  MessageCircle,
  Store,
  Wallet,
} from "lucide-react";
import { WHATSAPP_URL } from "../constants";
import { sectionRevealProps } from "../lib/scrollReveal";

const services = [
  {
    title: "Servicio a domicilio",
    description:
      "Llevamos tus medicamentos donde estés, con la misma calidad y rapidez de siempre.",
    icon: Home,
  },
  {
    title: "Compra en local",
    description:
      "Visítanos y recibe asesoría personalizada en Av. Los Restauradores #134.",
    icon: Store,
  },
  {
    title: "Pago con tarjeta",
    description:
      "Aceptamos tarjetas de crédito y débito para mayor comodidad y seguridad.",
    icon: CreditCard,
  },
  {
    title: "Pago en efectivo",
    description:
      "Opción rápida y sin complicaciones para todos nuestros clientes.",
    icon: Wallet,
  },
  {
    title: "Seguros médicos",
    description:
      "Trabajamos con los principales seguros médicos del país. Consulta coberturas.",
    icon: Handshake,
  },
  {
    title: "Atención rápida",
    description:
      "Respondemos tus dudas y procesamos tus pedidos de forma inmediata vía WhatsApp.",
    icon: MessageCircle,
  },
];

export function Services() {
  return (
    <motion.section
      id="servicios"
      {...sectionRevealProps()}
      className="bg-slate-50 py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* Header row */}
        <div className="mb-12 text-center">
          <div>
            <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-brand-red">
              Lo que ofrecemos
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl">
              Servicios para tu comodidad
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-slate-600">
              Todo lo que necesitas para cuidar tu salud y la de tu familia,
              en un solo lugar.
            </p>
          </div>
        </div>

        {/*
          Fused grid: gap-px + bg-slate-200 creates 1px dividers.
          5 service cells + 1 CTA cell = 6 cells → desktop 3×2, tablet 2×3.
        */}
        <div className="grid gap-px overflow-hidden rounded-2xl border border-slate-200 bg-slate-200 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
              className="group flex flex-col gap-4 bg-white p-8 transition-colors duration-300 hover:bg-brand-blue"
            >
              <div className="inline-flex w-fit rounded-xl bg-brand-blue/10 p-3 transition-colors duration-300 group-hover:bg-white/15">
                <s.icon
                  className="h-6 w-6 text-brand-blue transition-colors duration-300 group-hover:text-white"
                  aria-hidden
                />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 transition-colors duration-300 group-hover:text-white">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 transition-colors duration-300 group-hover:text-blue-100">
                  {s.description}
                </p>
              </div>
            </motion.div>
          ))}


        </div>
      </div>
    </motion.section>
  );
}
