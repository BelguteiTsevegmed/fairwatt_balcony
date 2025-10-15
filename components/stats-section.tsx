export function StatsSection() {
  const stats = [
    { value: "Do 800 zł", label: "Oszczędności rocznie" },
    { value: "Do 300 kg", label: "Redukcji CO2 rocznie" },
    { value: "30 minut", label: "Czas montażu" },
    { value: "100%", label: "Zadowolonych klientów" },
  ]

  return (
    <section className="py-16 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
