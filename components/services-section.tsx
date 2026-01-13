"use client"

import { useLanguage } from "@/context/language-context"

export default function ServicesSection() {
  const { t } = useLanguage()

  const services = [
    {
      id: 1,
      titleKey: "portraitPhotography",
      descKey: "portraitPhotographyDesc",
      image: "/portrait-outdoor.jpg",
    },
    {
      id: 2,
      titleKey: "weddingPhotography",
      descKey: "weddingPhotographyDesc",
      image: "/wedding-outdoor.jpg",
    },
    {
      id: 3,
      titleKey: "photobooth",
      descKey: "photoboothDesc",
      image: "/photobooth-wedding.jpg",
    },
  ]

  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl sm:text-6xl font-serif font-light tracking-tight text-balance">{t("ourServices")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">{t("ourServicesDesc")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service) => (
            <div key={service.id} className="group space-y-6 cursor-pointer">
              {/* Image */}
              <div className="aspect-square overflow-hidden rounded-lg bg-muted">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={t(service.titleKey as keyof ReturnType<typeof t>)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-2xl font-serif font-light tracking-tight">
                  {t(service.titleKey as keyof ReturnType<typeof t>)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(service.descKey as keyof ReturnType<typeof t>)}
                </p>
              </div>

              {/* Hover Underline */}
              <div className="h-px bg-foreground w-0 group-hover:w-12 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
