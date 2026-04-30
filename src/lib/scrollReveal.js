/**
 * Animaciones al hacer scroll: cada sección entra con fade + ligero slide
 * **una sola vez por visita** (`viewport.once: true`).
 *
 * No se repiten al subir/bajar de nuevo; equivale a “solo la primera vez” que
 * esa zona entra en pantalla tras cargar la página.
 */
export function sectionRevealProps(options = {}) {
  const { delay = 0, y = 52 } = options
  return {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-12%', amount: 0.12 },
    transition: {
      duration: 0.65,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }
}
