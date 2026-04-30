import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "../constants";

export function WhatsAppFloat() {
  return (
    <motion.a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 280, damping: 20, delay: 0.35 }}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="fixed bottom-3 right-3 z-50 flex max-w-[min(100vw-1.75rem,13.5rem)] items-center gap-2 rounded-full bg-brand-red py-1.5 pl-1.5 pr-3 text-white shadow-[0_6px_22px_-4px_rgba(220,38,38,0.48)] ring-[1.5px] ring-white/95 dark:bg-brand-red dark:ring-slate-950/95 dark:shadow-[0_6px_22px_-4px_rgba(0,0,0,0.4)] sm:bottom-4 sm:right-4 sm:gap-2 sm:py-2 sm:pl-2 sm:pr-3.5"
      aria-label="Habla con nosotros por WhatsApp"
    >
      <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/25 sm:h-9 sm:w-9">
        <MessageCircle
          className="relative z-1 h-[18px] w-[18px] drop-shadow-sm sm:h-5 sm:w-5"
          aria-hidden
          strokeWidth={2}
        />
      </span>
      <span className="min-w-0 text-left leading-none">
        <span className="block text-[9px] font-semibold uppercase tracking-wide text-red-100 sm:text-[10px]">
          WhatsApp
        </span>
        <span className="mt-0.5 block text-[11px] font-bold leading-snug sm:text-xs">
          Pedir por WhatsApp
        </span>
      </span>
    </motion.a>
  );
}
