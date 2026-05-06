import { MapPin, MessageCircle, Phone } from "lucide-react";
import { BrandLogoMark } from "./BrandLogoMark";
import { ADDRESS, PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL } from "../constants";

const hours = [
  { days: "Lun – Vie",  time: "8:00 AM – 9:00 PM" },
  { days: "Sábados",    time: "8:00 AM – 8:00 PM"  },
  { days: "Domingos",   time: "9:00 AM – 2:00 PM"  },
];

export function Footer() {
  return (
    <footer className="bg-brand-blue-dark text-white">
      {/* Brand accent stripe */}
      <div
        className="h-[3px] w-full bg-gradient-to-r from-brand-blue via-brand-red to-brand-blue"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3">
              <BrandLogoMark className="h-10 w-10 shrink-0" />
              <div>
                <p className="text-lg font-extrabold leading-tight">
                  Farmacia Maireni
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">
                  S.R.L.
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-200">
              Calidad, confianza y servicio. Tu farmacia de confianza en
              Santo Domingo.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/20 transition hover:bg-[#1ebe59]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden />
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-300">
              Contacto
            </h3>
            <div className="space-y-4">
              <p className="flex items-start gap-2.5 text-sm text-blue-100">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-red-400"
                  aria-hidden
                />
                {ADDRESS}
              </p>
              <a
                href={`tel:${PHONE_TEL}`}
                className="flex items-center gap-2.5 text-sm font-semibold text-[#25D366] transition hover:text-[#1ebe59]"
              >
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                {PHONE_DISPLAY}
              </a>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="mb-5 text-xs font-bold uppercase tracking-widest text-blue-300">
              Horarios
            </h3>
            <div className="space-y-3">
              {hours.map((h) => (
                <div
                  key={h.days}
                  className="flex items-center justify-between gap-4 text-sm"
                >
                  <span className="text-blue-200">{h.days}</span>
                  <span className="font-semibold text-white">{h.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar — extra bottom padding on mobile for the floating WhatsApp button */}
        <div className="mt-12 border-t border-white/10 pb-24 pt-6 sm:pb-6">
          <div className="flex flex-col items-center gap-4 text-center text-xs text-blue-300">
            <p>
              © {new Date().getFullYear()} Farmacia Maireni, S.R.L. Todos los
              derechos reservados.
            </p>
            <p>
              Desarrollado por{" "}
              <a 
                href="https://jeffrysantiago1912.github.io/AbbaTech/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-semibold text-white hover:underline transition-colors"
              >
                AbbaTech
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
