"use client"

import { useLanguage } from "@/context/language-context"

const images = [
  { id: 1, alt: "Instagram 1" },
  { id: 2, alt: "Instagram 2" },
  { id: 3, alt: "Instagram 3" },
  { id: 4, alt: "Instagram 4" },
  { id: 5, alt: "Instagram 5" },
  { id: 6, alt: "Instagram 6" },
]

export default function Instagram() {
  const { language } = useLanguage()

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h3 className="text-xl tracking-widest font-light uppercase mb-8">
            {language === "en" ? "Follow Along on Instagram" : "Theo dõi trên Instagram"}
          </h3>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
          {images.map((img) => (
            <div key={img.id} className="aspect-square rounded-lg overflow-hidden bg-muted group cursor-pointer">
              <img
                src={`/instagram-photography-.jpg?height=300&width=300&query=instagram-photography-${img.id}`}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://instagram.com"
            className="inline-block px-8 py-3 border border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors"
          >
            @vivian.hoang
          </a>
        </div>
      </div>
    </section>
  )
}
