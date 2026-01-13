export default function CTA() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-semibold tracking-tight">Ready to Book Your Session?</h2>
          <p className="text-lg opacity-90 leading-relaxed">
            Let's create beautiful memories together. Get in touch with us to discuss your photography needs.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 bg-primary-foreground text-primary rounded-full font-medium hover:bg-opacity-90 transition-colors">
            Contact Us
          </button>
          <button className="px-8 py-3 border border-primary-foreground rounded-full font-medium hover:bg-white/10 transition-colors">
            View Packages
          </button>
        </div>

        {/* Contact Info */}
        <div className="pt-8 grid md:grid-cols-3 gap-8 border-t border-primary-foreground/20">
          <div>
            <p className="text-sm opacity-75 mb-2">Email</p>
            <p className="font-medium">hello@lens.com</p>
          </div>
          <div>
            <p className="text-sm opacity-75 mb-2">Phone</p>
            <p className="font-medium">+1 (555) 123-4567</p>
          </div>
          <div>
            <p className="text-sm opacity-75 mb-2">Location</p>
            <p className="font-medium">Worldwide Available</p>
          </div>
        </div>
      </div>
    </section>
  )
}
