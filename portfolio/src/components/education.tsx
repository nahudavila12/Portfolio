"use client"

import { CalendarDays } from "lucide-react"
import { motion } from "framer-motion"

interface EducationItemProps {
  title: string
  institution: string
  year: string
  description: string
}

export default function EducationItem({ title, institution, year, description }: EducationItemProps) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-2">{institution}</p>
      <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>{year}</span>
      </div>
      <p className="text-gray-700 dark:text-gray-300">{description}</p>
    </motion.div>
  )
}

