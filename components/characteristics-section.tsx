"use client"

import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  MapPin,
  Utensils,
  Ruler,
  ShieldAlert,
  Baby,
  Eye,
  ChevronDown,
} from "lucide-react"

const characteristics = [
  {
    icon: MapPin,
    title: "Habitat",
    summary: "Selvas tropicales, humedales y bosques densos.",
    detail:
      "Se distribuye desde el sur de Mexico hasta el norte de Argentina. Prefiere zonas con abundante cobertura vegetal y acceso a cuerpos de agua. Las selvas tropicales humedas son su habitat principal, pero tambien se adapta a bosques secos, matorrales y pastizales.",
  },
  {
    icon: Utensils,
    title: "Alimentacion",
    summary: "Carnivoro: caimanes, pecaríes, venados, tortugas.",
    detail:
      "Su dieta incluye mas de 85 especies diferentes. Caza pecaríes, venados, capibaras, tapires, caimanes, tortugas e incluso peces. Su poderosa mordida le permite romper caparazones y craneos, una tecnica unica entre los grandes felinos.",
  },
  {
    icon: Ruler,
    title: "Dimensiones",
    summary: "Hasta 1.85 m de largo y 120 kg de peso.",
    detail:
      "Los machos miden entre 1.12 y 1.85 metros de largo corporal, mas una cola de 45-75 cm. Las hembras son un 10-20% mas pequenas. Su altura al hombro es de 63-76 cm. Los ejemplares mas grandes se encuentran en el Pantanal brasileno.",
  },
  {
    icon: ShieldAlert,
    title: "Estado de conservacion",
    summary: "Casi amenazado (NT) segun la UICN.",
    detail:
      "La deforestacion, la caza furtiva y la fragmentacion de su habitat son las principales amenazas. Se estima que ha perdido el 50% de su rango historico. Organizaciones como WWF y Panthera trabajan en corredores biologicos para conectar poblaciones aisladas.",
  },
  {
    icon: Baby,
    title: "Reproduccion",
    summary: "Gestacion de 93-105 días, 1 a 4 cachorros.",
    detail:
      "Las hembras alcanzan la madurez sexual a los 2 años y los machos a los 3-4 años. La gestacion dura entre 93 y 105 días. Las camadas tienen entre 1 y 4 cachorros, que permanecen con la madre hasta los 2 años aprendiendo a cazar.",
  },
  {
    icon: Eye,
    title: "Comportamiento",
    summary: "Solitario, territorial y principalmente nocturno.",
    detail:
      "Es un animal solitario que marca su territorio con orina y rasgunos en los arboles. Su territorio puede abarcar entre 25 y 150 km². Tiene habitos principalmente nocturnos y crepusculares, aunque tambien puede estar activo durante el día.",
  },
]

export function CharacteristicsSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section id="caracteristicas" className="bg-secondary px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Ficha tecnica
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Caracteristicas principales
          </h2>
          <p className="mt-2 max-w-lg text-muted-foreground">
            Descubre los datos mas relevantes sobre el jaguar. Haz clic en cada
            tarjeta para ver informacion detallada.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {characteristics.map((item, index) => {
            const Icon = item.icon
            const isExpanded = expandedIndex === index
            return (
              <Card
                key={item.title}
                className="cursor-pointer border-border bg-card transition-shadow hover:shadow-md"
                onClick={() =>
                  setExpandedIndex(isExpanded ? null : index)
                }
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault()
                    setExpandedIndex(isExpanded ? null : index)
                  }
                }}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-base text-card-foreground">
                        {item.title}
                      </CardTitle>
                      <CardDescription>{item.summary}</CardDescription>
                    </div>
                    <ChevronDown
                      className={`size-4 shrink-0 text-muted-foreground transition-transform duration-300 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </CardHeader>
                <div
                  className={`grid transition-all duration-300 ${
                    isExpanded
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <CardContent>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {item.detail}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        <div className="mt-8 flex justify-center">
          <Button
            variant="outline"
            onClick={() =>
              setExpandedIndex(expandedIndex === -1 ? null : -1)
            }
            className="gap-2"
          >
            {expandedIndex !== null ? "Cerrar todas" : "Ver resumen"}
          </Button>
        </div>
      </div>
    </section>
  )
}
