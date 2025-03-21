"use client";

import React from "react";
import { Mail, Phone, PhoneIcon as WhatsApp  } from "lucide-react";

export default function ContactForm() {
  return (
    <div className="max-w-md mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-center">Contáctame</h2>
      <p className="text-center text-gray-600 dark:text-gray-400">
        Elige cómo deseas contactarme:
      </p>

      <div className="flex flex-col gap-4">
        {/* Opción Email */}
        <a
          href="mailto:nahu.davila@gmail.com"
          className="w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
        >
          Enviar Email <Mail size={20} />
        </a>

        {/* Opción WhatsApp */}
        <a
          href="https://api.whatsapp.com/send?phone=543834232861"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full font-medium transition-opacity flex items-center justify-center gap-2"
        >
          Enviar WhatsApp <WhatsApp size={20} />
        </a>
      </div>
    </div>
  );
}
