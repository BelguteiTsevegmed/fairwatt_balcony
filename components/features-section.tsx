import { Zap, Shield, TrendingDown, Leaf, SlidersHorizontal, Smartphone, CloudDrizzle } from "lucide-react";


export function FeaturesSection() {
  const features = [
    {
      icon: SlidersHorizontal,
      title: "Łatwa instalacja",
      description: "Zainstaluj swój zestaw w kilkadziesiąt minut bez potrzeby wzywania fachowca.",
    },
    {
      icon: Smartphone,
      title: "Inteligentne zarządzanie",
      description: "Monitoruj produkcję i zużycie energii w czasie rzeczywistym dzięki aplikacji mobilnej.",
    },
    {
      icon: CloudDrizzle,
      title: "Odporność na warunki atmosferyczne",
      description: "Nasze panele są odporne na deszcz, wiatr i śnieg, zapewniając niezawodność przez lata.",
    },
    {
      icon: Leaf,
      title: "Niezależność energetyczna",
      description: "Zacznij produkować własną, czystą energię i uniezależnij się od rosnących cen prądu.",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Dlaczego warto wybrać FairWatt?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Twoja mała elektrownia słoneczna na balkonie
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
