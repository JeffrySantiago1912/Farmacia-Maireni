import { motion } from "framer-motion";
import { Heart, Sparkles, Zap } from "lucide-react";
import { HERO_CAROUSEL_SLIDES } from "../data/heroCarouselSlides";
import { sectionRevealProps } from "../lib/scrollReveal";

const aboutCarouselSlide =
  HERO_CAROUSEL_SLIDES[HERO_CAROUSEL_SLIDES.length - 1];

const pillars = [
  {
    label: "Confianza",
    text: "Productos auténticos y un equipo que te escucha.",
    icon: Heart,
  },
  {
    label: "Cercanía",
    text: "Trato humano y seguimiento cuando nos necesitas.",
    icon: Sparkles,
  },
  {
    label: "Rapidez",
    text: "Atención ágil y entregas sin demoras innecesarias.",
    icon: Zap,
  },
];

export function About() {
  return (
    <motion.section
      id="nosotros"
      {...sectionRevealProps()}
      className="border-y border-brand-blue/10 bg-slate-50 py-16 dark:border-blue-500/25 dark:bg-[linear-gradient(180deg,#0f172a_0%,#111827_45%,#0f172a_100%)] sm:py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight text-brand-blue dark:text-blue-200 sm:text-4xl">
            Sobre nosotros
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-700 dark:text-slate-200">
            En{" "}
            <strong className="text-brand-blue dark:text-blue-300">
              Farmacia Maireni, S.R.L.
            </strong>{" "}
            trabajamos cada día para ofrecerte medicamentos, productos de
            cuidado personal y asesoría profesional con los más altos
            estándares. Somos parte de tu comunidad en Santo Domingo y nos
            importa tu bienestar.
          </p>
          <ul className="mt-8 space-y-4">
            {pillars.map((p) => (
              <li key={p.label} className="flex gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-red/12 text-brand-red shadow-sm ring-1 ring-brand-red/20 dark:bg-red-500/15 dark:text-red-300 dark:ring-red-400/35">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-brand-blue dark:text-blue-200">
                    {p.label}
                  </p>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%", amount: 0.15 }}
          transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[5/4] overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue via-brand-blue to-brand-red p-[3px] shadow-xl shadow-brand-blue/25 dark:shadow-black/50">
            <div className="relative h-full min-h-[260px] overflow-hidden rounded-[1.35rem] bg-slate-200 dark:bg-slate-800">
              <img
                src={aboutCarouselSlide.src}
                alt="Medicamentos y productos de farmacia"
                className={`h-full w-full object-cover ${aboutCarouselSlide.objectPosition}`}
                loading="lazy"
                decoding="async"
                width={1600}
                height={900}
              />
              <div
                className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-gradient-to-tr from-brand-blue/25 to-transparent dark:from-brand-blue/35"
                aria-hidden
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
