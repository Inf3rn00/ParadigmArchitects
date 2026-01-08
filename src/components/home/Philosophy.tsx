import { Lightbulb, Leaf, Building2 } from 'lucide-react';

export function Philosophy() {
  const pillars = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Pioneering new approaches to design challenges, we blend cutting-edge technology with timeless architectural principles.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Every project is crafted with environmental stewardship in mind, ensuring minimal impact and maximum efficiency.',
    },
    {
      icon: Building2,
      title: 'Tradition',
      description: 'Honoring architectural heritage while pushing boundaries, we create spaces that respect the past and embrace the future.',
    },
  ];

  

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-20 fade-in">
          <h2 className="text-charcoal mb-6 text-4xl md:text-5xl font-light tracking-tight">
            The Paradigm Philosophy
          </h2>
          <div className="w-24 h-0.5 bg-copper mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Three core principles that guide every project we undertake
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="group p-12 bg-white hover:bg-offwhite border border-concrete rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl focus-within:scale-105 focus-within:shadow-xl focus-within:outline-none focus-within:ring-2 focus-within:ring-copper focus-within:ring-offset-2"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-20 h-20 flex items-center justify-center mb-8 bg-copper/10 rounded-full group-hover:bg-copper/20 group-hover:scale-110 transition-all duration-300">
                    <Icon
                      size={40}
                      className="text-copper group-hover:text-copper-light transition-colors duration-300"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h4 className="text-charcoal mb-6 text-2xl font-semibold tracking-tight group-hover:text-copper transition-colors duration-300">
                    {pillar.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}