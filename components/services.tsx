"use client"

import { useLanguage } from "@/context/language-context"

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      id: 1,
      titleKey: "portraitPhotography",
      descKey: "portraitPhotographyDesc",
      features: ["natural_light", "scenic_locations", "professional_editing", "digital_gallery"],
    },
    {
      id: 2,
      titleKey: "weddingPhotography",
      descKey: "weddingPhotographyDesc",
      features: ["full_day_coverage", "cinematic_videos", "same_day_edits", "luxury_albums"],
    },
    {
      id: 3,
      titleKey: "photobooth",
      descKey: "photoboothDesc",
      features: ["instant_prints", "custom_backdrops", "props_included", "digital_copies"],
    },
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">{t("ourServices")}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t("ourServicesDesc")}</p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group p-8 rounded-2xl bg-background border border-border hover:border-accent hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{t(service.titleKey as keyof ReturnType<typeof t>)}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t(service.descKey as keyof ReturnType<typeof t>)}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {feature.replace(/_/g, " ")}
                  </li>
                ))}
              </ul>

              <button className="w-full py-2.5 border border-border rounded-lg hover:bg-muted transition-colors text-sm font-medium">
                {t("getInTouch")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
