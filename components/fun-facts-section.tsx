"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const facts = [
  {
    number: "01",
    title: "Mordida mas poderosa",
    text: "El jaguar tiene la mordida mas fuerte de todos los felinos en proporcion a su tamano. Puede ejercer hasta 700 kg de fuerza, suficiente para perforar caparazones de tortugas.",
  },
  {
    number: "02",
    title: "Jaguares negros",
    text: "Los jaguares melanicos (negros) no son una especie separada. Su pelaje oscuro se debe a un exceso de melanina, pero si miras de cerca, aun puedes ver las rosetas.",
  },
  {
    number: "03",
    title: "Nadador experto",
    text: "A diferencia de la mayoria de los gatos, el jaguar ama el agua. Es un nadador excepcional y frecuentemente cruza rios anchos, caza peces y atrapa caimanes en el agua.",
  },
  {
    number: "04",
    title: "Simbolo sagrado",
    text: "Para los mayas y aztecas, el jaguar era un animal sagrado asociado con el inframundo, la noche y el poder. La palabra 'Balam' (jaguar en maya) aparece en nombres de reyes y ciudades.",
  },
  {
    number: "05",
    title: "Rosetas unicas",
    text: "Al igual que las huellas dactilares humanas, las rosetas de cada jaguar son unicas. Los investigadores las usan para identificar individuos con trampas de camaras fotograficas.",
  },
]

export function FunFactsSection() {
  const [currentFact, setCurrentFact] = useState(0)

  const goTo = (index: number) => {
    if (index < 0) setCurrentFact(facts.length - 1)
    else if (index >= facts.length) setCurrentFact(0)
    else setCurrentFact(index)
  }

  return (
    <section id="datos" className="bg-background px-6 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 flex flex-col items-center gap-2 text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">
            Sabias que...
          </span>
          <h2 className="text-balance font-serif text-3xl font-bold text-foreground md:text-4xl">
            Datos curiosos
          </h2>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-border bg-card p-8 md:p-12">
          <span className="font-serif text-6xl font-bold text-primary/15 md:text-8xl">
            {facts[currentFact].number}
          </span>

          <div className="mt-2 flex flex-col gap-3">
            <h3 className="font-serif text-2xl font-bold text-card-foreground">
              {facts[currentFact].title}
            </h3>
            <p className="leading-relaxed text-muted-foreground">
              {facts[currentFact].text}
            </p>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <div className="flex gap-2">
              {facts.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentFact(i)}
                  aria-label={`Dato curioso ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentFact
                      ? "w-8 bg-primary"
                      : "w-2 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => goTo(currentFact - 1)}
                aria-label="Dato anterior"
              >
                <ChevronLeft className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="icon-sm"
                onClick={() => goTo(currentFact + 1)}
                aria-label="Dato siguiente"
              >
                <ChevronRight className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
