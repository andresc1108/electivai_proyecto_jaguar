import { PawPrint } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card px-6 py-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2">
          <PawPrint className="size-5 text-primary" />
          <span className="font-serif text-lg font-bold text-card-foreground">
            El Jaguar
          </span>
        </div>

        <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
          Pagina creada como parte del taller de Git y GitHub para la materia
          Electiva I - Framework Web. Toda la informacion fue obtenida de
          fuentes como WWF, National Geographic y la UICN.
        </p>

        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a
            href="https://www.worldwildlife.org/species/jaguar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            WWF - Jaguar
          </a>
          <a
            href="https://es.wikipedia.org/wiki/Panthera_onca"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            Wikipedia
          </a>
          <a
            href="https://www.iucnredlist.org/species/15953/123791436"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            UICN Red List
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          {"Electiva I - Framework Web | Taller Git & GitHub"}
        </p>
      </div>
    </footer>
  )
}
