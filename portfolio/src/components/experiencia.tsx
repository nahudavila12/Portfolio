"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function Experiencia() {
  return (
    <section className="container mx-auto py-16 px-4" id="experiencia">
      <h2 className="text-3xl font-bold mb-8">Experiencia Profesional</h2>
      <div className="grid gap-6 md:gap-8">
        <Card className="bg-black border-purple-500/20 hover:border-purple-500/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl md:text-2xl">SwaplyAr</CardTitle>
                <CardDescription className="text-purple-400">Fintech | Actual</CardDescription>
              </div>
              <Badge className="bg-purple-600 hover:bg-purple-700">Actual</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Desarrollo y mantenimiento de aplicaciones financieras, implementando soluciones escalables y seguras para
              transacciones digitales y gestión de activos.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2 text-purple-400">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-purple-500/50">
                  React
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  Node.js
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  TypeScript
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  Google Sheets
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  GCP
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  Zustand
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  Express
                </Badge>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-black border-purple-500/20 hover:border-purple-500/50 transition-all">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl md:text-2xl">Ivolution</CardTitle>
                <CardDescription className="text-purple-400">Sportech | Actual</CardDescription>
              </div>
              <Badge className="bg-purple-600 hover:bg-purple-700">Actual</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Desarrollo de soluciones tecnológicas para el sector deportivo, creando plataformas interactivas para
              análisis de rendimiento, gestión de equipos y experiencias para deportistas de elite.
            </p>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2 text-purple-400">Tecnologías utilizadas:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="border-purple-500/50">
                  React Native
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                    Expo
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  PouchDB
                </Badge>
                <Badge variant="outline" className="border-purple-500/50">
                  CouchDB
                </Badge>
            
                <Badge variant="outline" className="border-purple-500/50">
                  GCP
                </Badge>
              </div>
            </div>
            <div className="mt-6 flex items-center text-sm text-purple-400 hover:text-purple-300 cursor-pointer">
              <ChevronRight className="h-4 w-4 ml-1" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-purple-900/40 to-black border-purple-500/20 hover:border-purple-500/50 transition-all">
          <CardContent className="pt-6">
            <h3 className="text-lg font-medium mb-2">Habilidades técnicas destacadas</h3>
            <p className="mb-4 text-gray-400">
              Mi experiencia en ambas empresas me ha permitido desarrollar un conjunto sólido de habilidades técnicas y
              blandas, incluyendo:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              <div>
                <h4 className="text-sm font-medium mb-2 text-purple-400">Desarrollo Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/50">
                    React
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    React Native
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Expo con BLE
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Next.js
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    TypeScript
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Tailwind CSS
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Redux
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-purple-400">Desarrollo Backend</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/50">
                    Node.js
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Express
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    MongoDB
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    PostgreSQL
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    TypeORM
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-purple-400">DevOps & Cloud</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/50">
                    AWS
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Docker
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    CI/CD
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Git
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Google Cloud Plataform
                  </Badge>
                </div>
              </div>
              <div>
                <h4 className="text-sm font-medium mb-2 text-purple-400">Metodologías</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-purple-500/50">
                    Scrum
                  </Badge>
                  <Badge variant="outline" className="border-purple-500/50">
                    Agile
                  </Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
