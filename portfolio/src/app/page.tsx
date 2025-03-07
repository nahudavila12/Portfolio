"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Download, PhoneIcon as WhatsApp } from "lucide-react"

import MobileMenu from "@/components/mobile-menu"
import TechCarousel from "@/components/tech-carrusel"
import AnimatedSection from "@/components/animated-section"
import SkillCard from "@/components/skills-card"
import EducationItem from "@/components/education"
import FAQItem from "@/components/faq"
import ContactForm from "@/components/contact"



export default function Portfolio() {
 
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === "A") {
        const href = target.getAttribute("href")
        if (href && href.startsWith("#") && href.length > 1) {
          e.preventDefault()
          const targetId = href.substring(1)
          const targetElement = document.getElementById(targetId)
          if (targetElement) {
            window.scrollTo({
              top: targetElement.offsetTop - 100,
              behavior: "smooth",
            })
          }
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)
    return () => document.removeEventListener("click", handleAnchorClick)
  }, [])

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
     
      <header className="container mx-auto px-4 py-6 flex justify-between items-center sticky top-0 z-40 backdrop-blur-md bg-white/80 dark:bg-black/80">
        <div className="flex items-center gap-2">
          <Image
            src="/foto de perfil.jpg"
            width={32}
            height={32}
            alt="Nahuel Davila"
            className="rounded-full object-cover"
            priority
          />
          <span className="font-medium">Nahuel Davila</span>
          <span className="text-xs text-gray-600 dark:text-gray-400">Full Stack Developer</span>
        </div>
        <div className="flex items-center gap-4">
      
          <nav className="hidden md:flex items-center gap-8">
            <Link href="#" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Inicio
            </Link>
            <Link
              href="#portfolio"
              className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Portafolio
            </Link>
            <Link href="#skills" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Habilidades
            </Link>
            <Link
              href="#education"
              className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Educación
            </Link>
            <Link
              href="#contact"
              className="text-sm bg-purple-600 text-white dark:bg-white dark:text-black px-4 py-2 rounded-full hover:bg-purple-700 dark:hover:bg-purple-200 transition-colors"
            >
              Contacto
            </Link>
          </nav>
          <MobileMenu />
        </div>
      </header>

      
      <section className="container mx-auto px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-900/30 backdrop-blur-sm px-3 py-1 rounded-full mb-6"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full"></span>
          <span className="text-xs text-green-800 dark:text-green-400">Disponible para proyectos freelance</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold mb-4"
        >
          Hola, soy Nahuel.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-8"
        >
          Soy Full Stack Developer.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 mb-12"
        >
          Cristian Nahuel Davila Echavarria es un desarrollador full stack basado en Argentina, especializado en
          Node.js, Nest, Express, MongoDB, PostgreSQL, Redux, TypeScript, React, Next, Tailwind y más.
        </motion.p>

       
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="/path-to-your-cv.pdf"
            download
            className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <Download size={20} />
            Descargar CV
          </a>
          <a
            href="https://wa.me/543834232861"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors flex items-center gap-2"
          >
            <WhatsApp size={20} />
            Contactar por WhatsApp
          </a>
        </div>

       
        <TechCarousel />
      </section>

     
      <section id="portfolio" className="container mx-auto px-4 py-8 scroll-mt-24">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-8 text-center">Mi Trabajo</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection>
            <motion.div
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Peluqueria Gisela"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-bold text-xl">Peluqueria Gisela</h3>
                <p className="text-sm text-gray-300">Gestión de peluquería (2024)</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="InstaStay"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-bold text-xl">InstaStay</h3>
                <p className="text-sm text-gray-300">Gestión de hoteles (2024)</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="Github Helper"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-bold text-xl">Github Helper</h3>
                <p className="text-sm text-gray-300">Proyecto personal (2024-Actualidad)</p>
              </div>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="relative group overflow-hidden rounded-xl cursor-pointer"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/placeholder.svg?height=300&width=600"
                width={600}
                height={300}
                alt="The Tere Boomstricks"
                className="w-full h-[250px] object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 p-4">
                <h3 className="font-bold text-xl">The Tere Boomstricks</h3>
                <p className="text-sm text-gray-300">Proyecto académico (2024)</p>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>

        
        <div className="text-center mt-8">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="#"
              className="inline-block text-sm text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b border-gray-300 dark:border-gray-700 pb-1"
            >
              Ver todos los proyectos
            </Link>
          </motion.div>
        </div>
      </section>

      
      <section
        id="skills"
        className="container mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800 scroll-mt-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Mis Habilidades Destacadas,</h2>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Experiencia en la que Puedes Confiar</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Como desarrollador full stack con sólida experiencia en la creación de soluciones integrales para la web y
              aplicaciones móviles, he trabajado en proyectos variados que me han permitido dominar tanto el desarrollo
              del lado del servidor como el de la interfaz de usuario. Mi enfoque está en la eficiencia, la
              escalabilidad y la entrega de productos de alta calidad.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            <AnimatedSection>
              <SkillCard
                number="01"
                title="Desarrollo Full Stack"
                description="Creo aplicaciones web completas utilizando tecnologías modernas como React, Node.js, Nest, Express y bases de datos SQL/NoSQL, asegurando una experiencia de usuario fluida y un rendimiento óptimo."
              />
            </AnimatedSection>

            <AnimatedSection>
              <SkillCard
                number="02"
                title="Front-end Avanzado"
                description="Desarrollo interfaces de usuario atractivas y responsivas utilizando React, Next.js, Redux, y herramientas de estilizado como Tailwind y Bootstrap."
              />
            </AnimatedSection>

            <AnimatedSection>
              <SkillCard
                number="03"
                title="Back-end Robusto"
                description="Implemento servidores y APIs eficientes con Node.js, Nest, y Express, integrando bases de datos como MongoDB y PostgreSQL para crear soluciones escalables."
              />
            </AnimatedSection>

            <AnimatedSection>
              <SkillCard
                number="04"
                title="DevOps y Despliegue"
                description="Experiencia en el despliegue de aplicaciones utilizando plataformas como Render y Vercel, asegurando un ciclo de desarrollo continuo y eficiente."
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

     
      <section
        id="education"
        className="container mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800 scroll-mt-24"
      >
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">Educación y Formación</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatedSection>
            <EducationItem
              title="Full Stack Web Developer"
              institution="Henry Bootcamp"
              year="Marzo 2024 - Febrero 2025"
              description="Formación teórica y práctica en desarrollo web full stack, trabajando con tecnologías modernas como Nest.js, Next, React, TypeScript, y bases de datos SQL y NoSQL."
            />
          </AnimatedSection>

          <AnimatedSection>
            <EducationItem
              title="Administración de Empresas"
              institution="En curso"
              year="2023 - 2024"
              description="Estudio de estrategias empresariales, finanzas y liderazgo."
            />
          </AnimatedSection>

          <AnimatedSection>
            <EducationItem
              title="Trader en Bull Finanzas"
              institution="Certificación obtenida"
              year="2021"
              description="Formación sobre mercados financieros, trading y análisis técnico."
            />
          </AnimatedSection>

          <AnimatedSection>
            <EducationItem
              title="Diplomatura en DevOps"
              institution="En curso"
              year="2025"
              description="Formación sobre la cultura DevOps, automatización de procesos y despligue continuo."
            />
          </AnimatedSection>

          <AnimatedSection>
            <EducationItem
              title="Secundario Completo"
              institution="F.A.S.T.A. Catamarca"
              year="2022"
              description="Título de educación secundaria con enfoque en ciencias sociales y económicas."
            />
          </AnimatedSection>
        </div>
      </section>

      
      <section className="container mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12">Opiniones de Clientes Satisfechos</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatedSection>
            <motion.div
              className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/gisela.png?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Cliente"
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Gisela Echavarria</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Peluquera</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Nahuel dio vida a nuestra marca con visuales impresionantes y un diseño intuitivo. Su atención al
                detalle y enfoque creativo superaron nuestras expectativas."
              </p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div
              className="bg-gray-100 dark:bg-gray-900/50 p-6 rounded-xl"
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(168, 85, 247, 0.1)" }}
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src="/leo-ghion.png?height=48&width=48"
                  width={48}
                  height={48}
                  alt="Cliente"
                  className="rounded-full"
                />
                <div>
                  <h4 className="font-bold">Leandro Ghion</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Account Manager</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                "Nahuel no solo cumple con nuestros requisitos, sino que los mejora con su visión creativa. Trabajar con
                él ha sido transformador para mis clientes."
              </p>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

     
      <section className="container mx-auto px-4 py-16 border-t border-gray-200 dark:border-gray-800">
        <AnimatedSection>
          <h2 className="text-3xl font-bold mb-12 text-center">Preguntas Frecuentes</h2>
        </AnimatedSection>

        <div className="max-w-3xl mx-auto space-y-4">
          <FAQItem
            question="¿Cómo es tu proceso de diseño y desarrollo?"
            answer="Mi proceso comienza con una consulta detallada para entender tus necesidades. Luego, creo wireframes y prototipos, refino el diseño basado en tu feedback, y finalmente desarrollo un producto pulido con pruebas exhaustivas antes de la entrega."
          />

          <FAQItem
            question="¿Cuál es tu tiempo típico para un proyecto?"
            answer="Los plazos varían según la complejidad del proyecto. Los sitios web simples suelen tardar de 2 a 4 semanas, mientras que las aplicaciones más complejas pueden requerir de 1 a 3 meses. Proporcionaré un cronograma detallado durante nuestra consulta inicial basado en tus requisitos específicos."
          />

          <FAQItem
            question="¿Puedes trabajar con pautas de marca y activos existentes?"
            answer="Sí, tengo experiencia trabajando con pautas de marca establecidas y puedo integrar perfectamente los activos existentes en nuevos diseños, manteniendo la consistencia de la marca en todos los entregables."
          />

          <FAQItem
            question="¿Puedes trabajar dentro de un presupuesto fijo?"
            answer="Sí, soy flexible y puedo adaptar mis servicios para trabajar dentro de tus restricciones presupuestarias. Te ayudaré a priorizar características y entregables para asegurar que obtengas el máximo valor mientras te mantienes dentro de tus parámetros financieros."
          />
        </div>
      </section>

   
      <section
        id="contact"
        className="container mx-auto px-4 py-16 text-center border-t border-gray-200 dark:border-gray-800 scroll-mt-24"
      >
        <AnimatedSection>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Tienes un proyecto en mente?</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
            Transformemos tus ideas en realidades digitales impresionantes. Contáctame hoy y comencemos el viaje hacia
            una presencia en línea memorable.
          </p>
        </AnimatedSection>

        <AnimatedSection>
          <ContactForm />
        </AnimatedSection>
      </section>

     
      <footer className="container mx-auto px-4 py-8 border-t border-gray-200 dark:border-gray-800 text-sm text-gray-600 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <div>© 2025 Cristian Nahuel Davila Echavarria · Diseñado y desarrollado con pasión</div>
        <div className="flex gap-4 mt-4 md:mt-0">
          <a
            href="https://github.com/nahudavila12"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/nahuel-davila-8a317627b"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-600"
          >
            LinkedIn
          </a>
          <a href="mailto:nahu.davila@gmail.com" className="hover:text-purple-600">
            Email
          </a>
        </div>
      </footer>
    </div>
  )
}

