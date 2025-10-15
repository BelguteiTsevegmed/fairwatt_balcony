import { ShoppingCart, Truck, Wrench, Sun } from "lucide-react"

export function HowItWorksSection() {
  const steps = [
    {
      icon: ShoppingCart,
      number: "01",
      title: "Wybierz zestaw",
      description: "Wybierz idealny zestaw fotowoltaiczny dla swojego balkonu.",
    },
    {
      icon: Truck,
      number: "02",
      title: "Zamów i odbierz",
      description: "Szybka i bezpieczna dostawa prosto pod Twoje drzwi.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Zainstaluj samodzielnie",
      description: "Prosty montaż, który wykonasz samodzielnie w kilkadziesiąt minut.",
    },
    {
      icon: Sun,
      number: "04",
      title: "Oszczędzaj na rachunkach",
      description: "Zacznij produkować własną energię i obniż swoje rachunki za prąd.",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Jak to działa?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">Prosty proces w 4 krokach</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-primary/20" />
              )}

              <div className="relative bg-muted rounded-xl p-6 hover:bg-primary/5 transition-colors">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4 relative z-10">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <div className="text-primary font-bold text-sm mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
