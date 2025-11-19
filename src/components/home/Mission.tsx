export function Mission() {
  return (
    <section className="py-24 bg-[var(--color-silver)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-12 lg:p-16 border-l-4 border-[var(--color-copper)]">
            <h3 className="text-[var(--color-charcoal)] mb-8">Our Mission</h3>
            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p>
                We do not merely build spaces; we cultivate legacies that stand the test of time. 
                Our approach transcends conventional architectural practice, weaving together innovation, 
                sustainability, and timeless design principles.
              </p>
              <p>
                Each project represents a paradigm shift in how we perceive and interact with our built 
                environment. Through meticulous attention to detail and unwavering commitment to excellence, 
                we create structures that inspire, endure, and enhance the human experience.
              </p>
              <p>
                From sustainable urban developments to cultural landmarks, our portfolio reflects a 
                dedication to architectural integrity and environmental responsibility. We believe that 
                great architecture should serve both present needs and future generations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-[var(--color-concrete)]">
              <div className="text-center">
                <div className="text-[var(--color-copper)] mb-2">150+</div>
                <p className="text-sm text-gray-600 tracking-wide">Projects Completed</p>
              </div>
              <div className="text-center">
                <div className="text-[var(--color-copper)] mb-2">25+</div>
                <p className="text-sm text-gray-600 tracking-wide">Years Experience</p>
              </div>
              <div className="text-center">
                <div className="text-[var(--color-copper)] mb-2">40+</div>
                <p className="text-sm text-gray-600 tracking-wide">Awards Won</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
