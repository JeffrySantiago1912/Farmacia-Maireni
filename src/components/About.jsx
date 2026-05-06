import { motion } from "framer-motion";
import { Heart, Sparkles, Zap } from "lucide-react";
import { HERO_CAROUSEL_SLIDES } from "../data/heroCarouselSlides";
import { sectionRevealProps } from "../lib/scrollReveal";

const aboutSlide = HERO_CAROUSEL_SLIDES[HERO_CAROUSEL_SLIDES.length - 1];

const pillars = [
  {
    label: "Confianza",
    text:  "Productos auténticos y un equipo que te escucha.",
    icon:  Heart,
  },
  {
    label: "Cercanía",
    text:  "Trato humano y seguimiento cuando nos necesitas.",
    icon:  Sparkles,
  },
  {
    label: "Rapidez",
    text:  "Atención ágil y entregas sin demoras innecesarias.",
    icon:  Zap,
  },
];

const highlights = [
  { value: "500+",   label: "Productos" },
  { value: "100%",   label: "Auténticos" },
  { value: "7 días", label: "Atención" },
];

export function About() {
  return (
    <motion.section
      id="nosotros"
      {...sectionRevealProps()}
      className="bg-white py-20"
    >
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-20">

        {/* Image column */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="relative order-2 mb-8 lg:order-1 lg:mb-0"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-slate-100">
            <img
              src={aboutSlide.src}
              alt="Interior de Farmacia Maireni"
              className={`h-full w-full object-cover ${aboutSlide.objectPosition}`}
              loading="lazy"
              decoding="async"
            />
          </div>

          {/* Stats overlay */}
          <div className="absolute -bottom-6 -right-3 rounded-2xl bg-brand-blue p-5 text-white shadow-2xl shadow-brand-blue/30 sm:-right-6">
            <div className="flex divide-x divide-white/20">
              {highlights.map((h, i) => (
                <div
                  key={h.label}
                  className={i === 0 ? "pr-5 text-center" : "px-5 text-center"}
                >
                  <p className="text-xl font-extrabold">{h.value}</p>
                  <p className="mt-0.5 text-xs text-blue-200">{h.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Text column */}
        <div className="order-1 pt-6 lg:order-2 lg:pt-0">
          <span className="mb-3 block text-xs font-bold uppercase tracking-widest text-brand-red">
            Sobre nosotros
          </span>
          <h2 className="text-3xl font-extrabold tracking-tight text-brand-blue sm:text-4xl">
            Más que una farmacia,<br />somos tu comunidad
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            En{" "}
            <strong className="font-bold text-brand-blue">
              Farmacia Maireni, S.R.L.
            </strong>{" "}
            trabajamos cada día para ofrecerte medicamentos, productos de
            cuidado personal y asesoría profesional con los más altos
            estándares.
          </p>
          <p className="mt-3 text-slate-500">
            Somos parte de tu comunidad en Santo Domingo y nos importa tu
            bienestar. Trabajamos con los principales seguros médicos del país.
          </p>

          <ul className="mt-8 space-y-5">
            {pillars.map((p) => (
              <li key={p.label} className="flex gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-red/10 text-brand-red">
                  <p.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-bold text-brand-blue">{p.label}</p>
                  <p className="text-sm leading-relaxed text-slate-500">
                    {p.text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}
