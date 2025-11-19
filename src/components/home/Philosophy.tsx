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
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-charcoal)] mb-4">The Paradigm Philosophy</h2>
          <div className="w-24 h-[2px] bg-[var(--color-copper)] mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`p-12 bg-white hover:bg-[var(--color-silver)] transition-colors duration-150 ${
                  index !== pillars.length - 1 ? 'border-r border-[var(--color-concrete)]' : ''
                }`}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 flex items-center justify-center mb-6">
                    <Icon size={48} className="text-[var(--color-copper)]" strokeWidth={1.5} />
                  </div>
                  <h4 className="text-[var(--color-charcoal)] mb-4">{pillar.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
