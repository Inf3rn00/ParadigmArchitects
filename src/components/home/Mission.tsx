export function Mission() {
  return (
    <section className="py-24 bg-silver">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto fade-in">
          <div className="bg-white p-12 lg:p-16 border-l-4 border-copper rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 ease-out">
            <h3 className="text-charcoal mb-8 text-3xl lg:text-4xl font-display font-bold tracking-tight">
              Our Mission
            </h3>
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              <p className="opacity-90">
                We do not merely build spaces; we cultivate legacies that stand the test of time. 
                Our approach transcends conventional architectural practice, weaving together innovation, 
                sustainability, and timeless design principles.
              </p>
              <p className="opacity-90">
                Each project represents a paradigm shift in how we perceive and interact with our built 
                environment. Through meticulous attention to detail and unwavering commitment to excellence, 
                we create structures that inspire, endure, and enhance the human experience.
              </p>
              <p className="opacity-90">
                From sustainable urban developments to cultural landmarks, our portfolio reflects a 
                dedication to architectural integrity and environmental responsibility. We believe that 
                great architecture should serve both present needs and future generations.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 pt-12 border-t border-concrete">
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-copper mb-3 text-4xl lg:text-5xl font-display font-bold tracking-tight group-hover:text-copper-light transition-colors duration-300">
                  10+
                </div>
                <p className="text-gray-600 tracking-wide font-medium">Projects Completed</p>
              </div>
              <div className="text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-copper mb-3 text-4xl lg:text-5xl font-display font-bold tracking-tight group-hover:text-copper-light transition-colors duration-300">
                  5+
                </div>
                <p className="text-gray-600 tracking-wide font-medium">Years Experience</p>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}