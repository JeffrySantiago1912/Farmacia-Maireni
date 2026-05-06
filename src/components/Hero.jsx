import { motion } from "framer-motion";
import {
  ChevronRight,
  Handshake,
  MessageCircle,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { WHATSAPP_URL } from "../constants";
import { HERO_CAROUSEL_SLIDES } from "../data/heroCarouselSlides";

const features = [
  { icon: Pill,        label: "Medicamentos"     },
  { icon: ShieldCheck, label: "Seguros médicos"  },
  { icon: Truck,       label: "Delivery"         },
  { icon: Handshake,   label: "Efectivo y tarjeta"},
];

const stats = [
  { value: "500+",   label: "Productos disponibles" },
  { value: "100%",   label: "Productos auténticos"  },
  { value: "7 días", label: "A la semana"           },
];

const ease = [0.22, 1, 0.36, 1];
const AUTO_INTERVAL_MS = 3000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused]           = useState(false);
  const slideCount = HERO_CAROUSEL_SLIDES.length;

  const goNext = useCallback(
    () => setActiveIndex((i) => (i + 1) % slideCount),
    [slideCount],
  );

  useEffect(() => {
    if (paused) return;
    const id = setInterval(goNext, AUTO_INTERVAL_MS);
    return () => clearInterval(id);
  }, [paused, goNext]);

  return (
    <section
      id="inicio"
      className="relative min-h-screen overflow-hidden bg-brand-blue-dark"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background carousel */}
      <div className="absolute inset-0" aria-hidden>
        {HERO_CAROUSEL_SLIDES.map((slide, i) => (
          <motion.img
            key={slide.src}
            src={slide.src}
            alt=""
            fetchPriority={i === 0 ? "high" : "low"}
            decoding="async"
            className={`absolute inset-0 h-full w-full object-cover ${slide.objectPosition}`}
            initial={false}
            animate={{ opacity: i === activeIndex ? 1 : 0 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
          />
        ))}
        {/* Left-to-right gradient — text stays fully readable on left */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-blue-dark via-brand-blue-dark/92 to-brand-blue/40 lg:to-brand-blue/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-blue-dark/75 via-transparent to-brand-blue-dark/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-4 py-24 sm:px-6">
        <div className="max-w-[34rem]">

          {/* Live badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 backdrop-blur-sm"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-sm font-semibold text-white">
              Farmacia Maireni · Santo Domingo, RD
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="mb-5 text-4xl font-extrabold leading-[1.07] tracking-tight text-white sm:text-5xl lg:text-[3.5rem]"
          >
            Tu salud,<br />
            <span className="text-red-400">nuestra</span>{" "}
            prioridad
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18, ease }}
            className="mb-8 max-w-[28rem] text-lg leading-relaxed text-blue-100"
          >
            Medicamentos, productos de cuidado personal y asesoría
            profesional. Trabajamos con los principales seguros médicos.
          </motion.p>

          {/* Feature pills */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.26, ease }}
            className="mb-10 flex flex-wrap gap-2"
          >
            {features.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 rounded-lg border border-white/15 bg-white/10 px-3 py-1.5 text-sm font-medium text-white backdrop-blur-sm"
              >
                <Icon className="h-3.5 w-3.5 shrink-0 text-red-300" aria-hidden />
                {label}
              </span>
            ))}
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34, ease }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-[#25D366] px-7 py-4 text-base font-bold text-white shadow-xl shadow-[#25D366]/30 transition hover:bg-[#1ebe59] hover:shadow-2xl hover:shadow-[#25D366]/45 active:scale-[0.98]"
            >
              <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
              Consultar por WhatsApp
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition hover:border-white/45 hover:bg-white/10 active:scale-[0.98]"
            >
              Nuestros servicios
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5, ease }}
          className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold text-white">{s.value}</p>
              <p className="text-sm text-blue-200">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Carousel dots */}
      <div
        className="absolute bottom-8 right-4 z-10 flex gap-2 sm:right-6"
        aria-label="Indicadores del carrusel"
      >
        {HERO_CAROUSEL_SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-label={`Imagen ${i + 1}`}
            aria-current={i === activeIndex ? "true" : undefined}
            className={`rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white ${
              i === activeIndex
                ? "h-2 w-8 bg-white"
                : "h-2 w-2 bg-white/35 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
