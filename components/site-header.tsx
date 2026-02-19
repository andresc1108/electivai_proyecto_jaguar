"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, PawPrint } from "lucide-react"

export function SiteHeader() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <PawPrint className="size-6 text-primary" />
          <span className="font-serif text-lg font-bold text-foreground">
            El Jaguar
          </span>
        </div>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navegacion principal">
          <a href="#inicio" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Inicio
          </a>
          <a href="#descripcion" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Descripcion
          </a>
          <a href="#caracteristicas" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Caracteristicas
          </a>
          <a href="#datos" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Datos Curiosos
          </a>
        </nav>

        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label="Cambiar tema claro/oscuro"
        >
          {mounted ? (
            theme === "dark" ? (
              <Sun className="size-4" />
            ) : (
              <Moon className="size-4" />
            )
          ) : (
            <Sun className="size-4" />
          )}
        </Button>
      </div>
    </header>
  )
}
