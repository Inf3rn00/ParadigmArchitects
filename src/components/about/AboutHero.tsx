export function AboutHero() {
  return (
    <section className="py-32 bg-[var(--color-charcoal)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl">
          <h1 className="mb-6">
            Grounded in Professionalism.<br />
            Driven by Innovation.
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            For over two decades, Paradigm Architects has been at the forefront of architectural 
            innovation, transforming bold visions into enduring realities. Our commitment to excellence, 
            sustainability, and human-centric design has established us as a trusted partner for clients 
            seeking transformative architectural solutions.
          </p>
        </div>

        {/* Key Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="border-l-2 border-[var(--color-copper)] pl-6">
            <h5 className="text-[var(--color-copper)] mb-3">Our Vision</h5>
            <p className="text-gray-300">
              To redefine architectural excellence globally, creating spaces that inspire and endure.
            </p>
          </div>
          <div className="border-l-2 border-[var(--color-copper)] pl-6">
            <h5 className="text-[var(--color-copper)] mb-3">Our Approach</h5>
            <p className="text-gray-300">
              Blending innovation with tradition, we craft solutions that respect heritage while embracing the future.
            </p>
          </div>
          <div className="border-l-2 border-[var(--color-copper)] pl-6">
            <h5 className="text-[var(--color-copper)] mb-3">Our Impact</h5>
            <p className="text-gray-300">
              Transforming communities through sustainable, culturally-responsive design that stands the test of time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
