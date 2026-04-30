const WHATSAPP_MESSAGE = encodeURIComponent(
  '¡Hola! Quisiera obtener información sobre un medicamento o producto. ¿Me pueden ayudar?'
);
export const WHATSAPP_URL = `https://wa.me/18095902333?text=${WHATSAPP_MESSAGE}`;
export const PHONE_DISPLAY = '+1 809 590 2333'
export const PHONE_TEL = '+18095902333'

/** Dirección según ficha oficial en Google Maps */
export const ADDRESS =
  'Av. Los Restauradores #134, Santo Domingo 11404, República Dominicana'

/**
 * Coordenadas del marcador según la ficha oficial (bloque !8m2 en la URL de Maps).
 */
export const MAPS_LAT = 18.5358641
export const MAPS_LNG = -69.8651603

/**
 * URL canónica de la ficha (sin tracking). Abre el mismo lugar que compartiste.
 */
export const MAPS_OPEN_URL =
  'https://www.google.com/maps/place/Farmacia+Maireni,+S.R.L./@18.5357471,-69.8652245,20z/data=!4m12!1m5!3m4!2zMTjCsDMyJzA4LjkiTiA2OcKwNTEnNTYuMSJX!8m2!3d18.5358113!4d-69.8655799!3m5!1s0x8eaf8899001b6bff:0xc92488896417ebf1!8m2!3d18.5358641!4d-69.8651603!16s%2Fg%2F11bzt9ngr0'

/**
 * Mapa embebido (`pb` de Google) atado al id del lugar
 * `0x8eaf8899001b6bff:0xc92488896417ebf1`, no solo coordenadas sueltas.
 */
export const MAPS_EMBED_SRC =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3785.167849627267!2d-69.8652245!3d18.5357471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8899001b6bff%3A0xc92488896417ebf1!2sFarmacia%20Maireni%2C%20S.R.L.!5e0!3m2!1ses!2sdo!4v1704067200000!5m2!1ses!2sdo'
