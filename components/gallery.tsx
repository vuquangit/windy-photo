const galleryImages = [
  {
    id: 1,
    title: "Sunset Portraits",
    category: "Outdoor",
    image: "/sunset-golden-hour-outdoor-portrait.jpg",
  },
  {
    id: 2,
    title: "Beach Wedding",
    category: "Wedding",
    image: "/beautiful-beach-wedding-ceremony.jpg",
  },
  {
    id: 3,
    title: "Mountain Adventure",
    category: "Outdoor",
    image: "/couple-hiking-mountain-landscape.jpg",
  },
  {
    id: 4,
    title: "Photobooth Fun",
    category: "Photobooth",
    image: "/wedding-photobooth-fun-people-smiling.jpg",
  },
  {
    id: 5,
    title: "Engagement Photos",
    category: "Wedding",
    image: "/engagement-photos-couple-romantic.jpg",
  },
  {
    id: 6,
    title: "Studio Session",
    category: "Outdoor",
    image: "/professional-studio-portrait-session.jpg",
  },
]

export default function Gallery() {
  return (
    <section id="gallery" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Portfolio</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our recent work and see the magic we create
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((item) => (
            <div key={item.id} className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer">
              <img
                src={item.image || "/placeholder.svg"}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-lg font-semibold">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
