import { motion } from "framer-motion";
import {
  Handshake,
  MessageCircle,
  Pill,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { WHATSAPP_URL } from "../constants";
import { HERO_CAROUSEL_SLIDES } from "../data/heroCarouselSlides";
import { Button } from "./Button";

const highlights = [
  {
    label: "Medicamentos y recetas",
    icon: Pill,
  },
  {
    label: "Productos de confianza",
    icon: ShieldCheck,
  },
  {
    label: "Servicio a domicilio",
    icon: Truck,
  },
  {
    label: "Seguros médicos",
    icon: Handshake,
  },
];

const ease = [0.22, 1, 0.36, 1];

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.52, ease },
  },
};

const AUTO_INTERVAL_MS = 2000;

export function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(() =>
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : false,
  );

  const slideCount = HERO_CAROUSEL_SLIDES.length;

  const goNext = useCallback(() => {
    setActiveIndex((i) => (i + 1) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (reduceMotion || paused) return undefined;
    const id = window.setInterval(goNext, AUTO_INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, paused, goNext]);

  const transitionDuration = reduceMotion ? 0 : 1.25;

  return (
    <section
      id="inicio"
      className="relative isolate min-h-[min(88vh,900px)] overflow-hidden border-b border-slate-200/40 dark:border-b-0"
      aria-roledescription="carrusel"
      aria-label="Inicio — Farmacia Maireni"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <span className="sr-only" aria-live="polite">
        Diapositiva {activeIndex + 1} de {slideCount}
      </span>

      {/* Carrusel de fondo — imagen visible; velo ligero solo para contraste */}
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
            transition={{
              duration: transitionDuration,
              ease: [0.4, 0, 0.2, 1],
            }}
          />
        ))}
        {/* Velo general + zona central más oscura para texto sin “cuadro” */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/35 to-slate-950/72 dark:from-slate-950/40 dark:via-slate-950/45 dark:to-slate-950/82" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_110%_85%_at_50%_40%,rgba(15,23,42,0.58)_0%,rgba(15,23,42,0.15)_55%,transparent_72%)] dark:bg-[radial-gradient(ellipse_110%_85%_at_50%_40%,rgba(2,6,23,0.62)_0%,rgba(15,23,42,0.18)_55%,transparent_72%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[min(88vh,900px)] max-w-6xl flex-col justify-center px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
        <motion.div
          className="mx-auto w-full max-w-3xl text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={fadeUp}
            className="mx-auto mb-5 max-w-2xl text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:mb-6 lg:text-[3.25rem] lg:leading-[1.05] xl:text-[3.5rem] [text-shadow:0_1px_2px_rgba(0,0,0,0.85),0_4px_24px_rgba(0,0,0,0.65),0_12px_48px_rgba(0,0,0,0.45)]"
          >
            Farmacia Maireni 
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mb-8 max-w-xl text-lg leading-relaxed text-white sm:text-xl lg:mb-9 [text-shadow:0_1px_3px_rgba(0,0,0,0.9),0_3px_16px_rgba(0,0,0,0.55)]"
          >
            Medicamentos, productos de cuidado personal y orientación
            profesional. También trabajamos con{" "}
            <strong className="font-semibold text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.95)]">
              seguros médicos
            </strong>
            .
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mb-10 flex flex-wrap justify-center gap-2.5"
            aria-label="Servicios destacados"
          >
            {highlights.map(({ label, icon: Icon }) => (
              <li key={label}>
                <span className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-black/35 px-3.5 py-2 text-xs font-medium text-white shadow-[0_4px_16px_rgba(0,0,0,0.35)] backdrop-blur-[2px] sm:text-sm [text-shadow:0_1px_2px_rgba(0,0,0,0.8)]">
                  <Icon
                    className="h-4 w-4 shrink-0 text-red-300 drop-shadow-md"
                    aria-hidden
                  />
                  {label}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                as="a"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="w-full rounded-2xl px-8 py-3.5 text-base shadow-xl shadow-brand-red/45 transition-[transform,box-shadow] hover:bg-brand-red-hover hover:shadow-2xl hover:shadow-brand-red/50 sm:min-w-[240px]"
                aria-label="Escribir por WhatsApp"
              >
                <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                Escribir por WhatsApp
              </Button>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto"
            >
              <Button
                as="a"
                href="#servicios"
                variant="secondary"
                className="w-full rounded-2xl border-2 border-white/70 bg-black/30 px-8 py-3.5 text-base text-white shadow-[0_4px_20px_rgba(0,0,0,0.35)] backdrop-blur-[2px] hover:bg-black/45 focus-visible:outline-white sm:min-w-[190px] dark:border-white/70 dark:text-white dark:hover:bg-black/45"
              >
                Ver servicios
              </Button>
            </motion.div>
          </motion.div>

          {/* Indicadores — centrados, activo con brillo */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex justify-center gap-2.5 sm:mt-10"
            aria-label="Seleccionar imagen de fondo"
          >
            {HERO_CAROUSEL_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                aria-current={i === activeIndex ? "true" : undefined}
                aria-label={`Imagen ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ${
                  i === activeIndex
                    ? "w-10 bg-white shadow-[0_0_16px_rgba(255,255,255,0.65)] ring-2 ring-white/40"
                    : "w-2.5 bg-white/40 hover:bg-white/65"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-24 bg-gradient-to-t from-slate-50 to-transparent dark:from-slate-950 sm:h-28"
        aria-hidden
      />
    </section>
  );
}
