import { motion } from "framer-motion";
import { CreditCard, Handshake, Home, Store, Wallet } from "lucide-react";
import { sectionRevealProps } from "../lib/scrollReveal";
import { Card } from "./Card";

const services = [
  {
    title: "Servicio a domicilio",
    description: "Llevamos tus medicamentos donde estés, con la misma calidad.",
    icon: Home,
  },
  {
    title: "Compra en local",
    description:
      "Visítanos y recibe asesoría personalizada en nuestra farmacia.",
    icon: Store,
  },
  {
    title: "Pago con tarjeta de crédito",
    description: "Aceptamos tarjetas para tu comodidad y seguridad.",
    icon: CreditCard,
  },
  {
    title: "Pago en efectivo",
    description: "Opción tradicional, rápida y sin complicaciones.",
    icon: Wallet,
  },
  {
    title: "Seguros médicos",
    description:
      "Trabajamos con seguros médicos. Consulta coberturas por WhatsApp.",
    icon: Handshake,
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Services() {
  return (
    <motion.section
      id="servicios"
      {...sectionRevealProps()}
      className="bg-white py-16 dark:bg-slate-950 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-blue-300 sm:text-4xl">
            Servicios
          </h2>
          <p className="mt-2 text-slate-600 dark:text-slate-400">
            Todo lo que necesitas para cuidar tu salud y la de tu familia.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-12%", amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((s) => (
            <motion.div key={s.title} variants={item}>
              <Card className="group h-full hover:border-brand-red/25">
                <div className="mb-4 inline-flex rounded-xl bg-brand-blue p-3 text-white shadow-md transition group-hover:scale-105 group-hover:bg-brand-red">
                  <s.icon className="h-6 w-6" aria-hidden />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-brand-blue dark:text-blue-200">
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {s.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
