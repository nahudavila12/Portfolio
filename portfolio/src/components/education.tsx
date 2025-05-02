"use client"

import { CalendarDays } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface EducationItemProps {
  title: string
  institution: string
  year: string
  description: string
}

export default function EducationItem({ title, institution, year, description }: EducationItemProps) {
  return (
    <Card className="bg-black border-purple-500/20 hover:border-purple-500/50 transition-all">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-purple-400">{title}</CardTitle>
        <CardDescription className="text-gray-400">{institution}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
          <CalendarDays className="w-4 h-4 mr-2 text-purple-400" />
          <span>{year}</span>
        </div>
        <p className="text-gray-400">{description}</p>
      </CardContent>
    </Card>
  )
}