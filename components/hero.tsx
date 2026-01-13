export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-balance">
                Capture Your Most Precious Moments
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-lg">
                Premium photography services for outdoor shoots, destination weddings, and unforgettable photobooth
                experiences.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors">
                Explore Services
              </button>
              <button className="px-8 py-3 border border-border rounded-full font-medium hover:bg-muted transition-colors">
                View Portfolio
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted">
            <img
              src="/professional-photographer-with-camera-outdoor-natu.jpg"
              alt="Professional photographer"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
