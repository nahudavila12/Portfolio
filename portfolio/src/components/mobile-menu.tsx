"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)} className="p-2 text-black dark:text-white" aria-label="Abrir menú">
        <Menu className="w-6 h-6" />
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black z-50 flex flex-col">
          <div className="flex justify-end p-4">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 text-black dark:text-white"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col items-center justify-center flex-1 gap-8">
            <Link
              href="#"
              className="text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Inicio
            </Link>
            <Link
              href="#portfolio"
              className="text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Portafolio
            </Link>
            <Link
              href="#skills"
              className="text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Habilidades
            </Link>
            <Link
              href="#education"
              className="text-xl hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Educación
            </Link>
            <Link
              href="#contact"
              className="text-xl bg-purple-600 text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:bg-purple-700 dark:hover:bg-purple-200 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </div>
  )
}

