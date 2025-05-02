"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { motion } from "framer-motion"

interface SkillCardProps {
  number: string
  title: string
  description: string
}

export default function SkillCard({ number, title, description }: SkillCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="bg-gray-100 dark:bg-purple-900/20 p-6 rounded-xl border border-gray-200 dark:border-purple-900/50 transition-all duration-300"
      style={{
        boxShadow: isHovered ? "0 0 20px rgba(168, 85, 247, 0.2)" : "none",
      }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="flex items-center gap-2 mb-4">
        <span className="bg-purple-600 text-white px-2 py-1 rounded-md text-sm">{number}</span>
        <h3 className="font-bold">{title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
      <Link href="#" className="text-purple-600 dark:text-purple-400 text-sm flex items-center gap-1 group">
        <motion.div animate={{ x: isHovered ? 5 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronRight className="w-4 h-4" />
        </motion.div>
      </Link>
    </motion.div>
  )
}

