export function AboutHero() {
  return (
    <section className="py-32 bg-charcoal text-offwhite relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-transparent to-charcoal"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Main Content */}
        <div className="fade-in flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
          {/* Heading Section */}
          <div className="lg:flex-1">
            <h1 className="mb-8 text-5xl lg:text-6xl font-light leading-tight tracking-tight">
              <span className="block">Grounded in</span>
              <span className="block text-copper mt-2">Professionalism.</span>
              <span className="block mt-4">Driven by</span>
              <span className="block text-copper-light mt-2">Innovation.</span>
            </h1>
            <div className="w-20 h-1 bg-copper mb-8"></div>
          </div>

          {/* Paragraph Section */}
          <div className="lg:flex-1 lg:max-w-2xl">
            <p className="text-xl lg:text-2xl text-concrete leading-relaxed font-light">
              For over two decades, Paradigm Architects has been at the
              forefront of architectural innovation, transforming bold visions
              into enduring realities. Our commitment to excellence,
              sustainability, and human-centric design has established us as a
              trusted partner for clients seeking transformative architectural
              solutions.
            </p>
          </div>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-24 fade-in">
          <div className="group">
            <div className="border-l-2 border-copper pl-8 py-2 transition-all duration-300 group-hover:border-copper-light group-hover:pl-10">
              <h5 className="text-copper text-lg font-medium mb-4 tracking-wider group-hover:text-copper-light transition-colors duration-300">
                OUR VISION
              </h5>
              <p className="text-concrete leading-relaxed text-base">
                To redefine architectural excellence globally, creating spaces
                that inspire and endure through innovative, minimalist designs
                that prioritize sustainability and user needs.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="border-l-2 border-copper pl-8 py-2 transition-all duration-300 group-hover:border-copper-light group-hover:pl-10">
              <h5 className="text-copper text-lg font-medium mb-4 tracking-wider group-hover:text-copper-light transition-colors duration-300">
                OUR APPROACH
              </h5>
              <p className="text-concrete leading-relaxed text-base">
                Blending cutting-edge technology with deep cultural respect, we
                craft solutions that honor heritage while embracing the future
                through collaborative, user-centric design.
              </p>
            </div>
          </div>

          <div className="group">
            <div className="border-l-2 border-copper pl-8 py-2 transition-all duration-300 group-hover:border-copper-light group-hover:pl-10">
              <h5 className="text-copper text-lg font-medium mb-4 tracking-wider group-hover:text-copper-light transition-colors duration-300">
                OUR IMPACT
              </h5>
              <p className="text-concrete leading-relaxed text-base">
                Transforming Nigerian communities through sustainable,
                culturally-responsive design that stands the test of time and
                leaves a lasting legacy of excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
