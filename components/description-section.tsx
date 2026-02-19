export function DescriptionSection() {
  return (
    <section id="descripcion" className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-square overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1602491453631-e2a5ad90a131?q=80&w=1000&auto=format&fit=crop"
            alt="Retrato de Jaguar"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-serif font-bold md:text-4xl">Descripción General</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            El jaguar es un cazador solitario y oportunista, fundamental para el equilibrio
            de los ecosistemas que habita desde el sur de Estados Unidos hasta el norte de Argentina.
          </p>
        </div>
      </div>
    </section>
  )
}