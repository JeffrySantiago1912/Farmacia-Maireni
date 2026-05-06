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
      transition={{ type: "spring", stiffness: 280, damping: 22, delay: 1 }}
      className="wa-ring fixed bottom-6 right-6 z-50 flex max-w-[min(100vw-3rem,15rem)] items-center gap-2.5 rounded-full bg-[#25D366] py-3.5 pl-3.5 pr-5 text-white shadow-2xl shadow-[#25D366]/40 sm:bottom-8 sm:right-8"
      aria-label="Habla con nosotros por WhatsApp"
    >
      {/* Icon circle */}
      <span className="relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20">
        <MessageCircle
          className="h-5 w-5"
          aria-hidden
          strokeWidth={2.2}
        />
      </span>

      {/* Label */}
      <span className="min-w-0 leading-none">
        <span className="block text-[10px] font-bold uppercase tracking-wider text-green-100">
          WhatsApp
        </span>
        <span className="mt-0.5 block truncate text-sm font-extrabold">
          Escríbenos ahora
        </span>
      </span>
    </motion.a>
  );
}
