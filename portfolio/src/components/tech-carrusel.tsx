"use client"

import React, { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const technologies = [
  { image: "/logos/node-js-icon.svg", name: "Node.js" },
  { image: "/logos/NestJS.svg", name: "NestJS" },
  { image: "/logos/expres.svg", name: "Express" },
  { image: "/logos/mongodb.svg", name: "MongoDB" },
  { image: "/logos/redux-logo.svg", name: "Redux" },
  { image: "/logos/typescript.svg", name: "TypeScript" },
  { image: "/logos/react.svg", name: "React" },
  { image: "/logos/bootstrap.svg", name: "Bootstrap" },
  { image: "/logos/next.svg", name: "Next.js" },
  { image: "/logos/tailwind.svg", name: "Tailwind CSS" },
  { image: "/logos/Postgres.svg", name: "PostgreSQL" },
  { image: "/logos/Git_icon.svg", name: "Git" },
]

export default function TechCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === technologies.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex justify-center items-center h-20">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <img
            src={technologies[currentIndex].image}
            alt={technologies[currentIndex].name}
            className="w-12 h-12"
          />
          <span className="mt-2 text-sm text-gray-400">
            {technologies[currentIndex].name}
          </span>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
