import { MapPin } from 'lucide-react';

export function GlobalReach() {
  const locations = [
    { city: 'New York', country: 'USA', projects: 45 },
    { city: 'London', country: 'UK', projects: 28 },
    { city: 'Singapore', country: 'Singapore', projects: 32 },
    { city: 'Dubai', country: 'UAE', projects: 19 },
    { city: 'Sydney', country: 'Australia', projects: 16 },
    { city: 'Toronto', country: 'Canada', projects: 23 },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-charcoal)] mb-4">Global Reach</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Operating across continents, we bring architectural excellence to communities worldwide, 
            transforming skylines and enriching lives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={`${location.city}-${location.country}`}
              className="group p-8 border border-[var(--color-concrete)] hover:border-[var(--color-copper)] transition-colors duration-150"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-silver)] group-hover:bg-[var(--color-copper)] transition-colors duration-150">
                  <MapPin size={24} className="text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-150" />
                </div>
                <div className="flex-1">
                  <h5 className="text-[var(--color-charcoal)] mb-1">{location.city}</h5>
                  <p className="text-gray-600 text-sm mb-3">{location.country}</p>
                  <p className="text-sm text-[var(--color-copper)]">
                    {location.projects} Projects
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Expanding our architectural vision across <span className="text-[var(--color-copper)]">6 continents</span> 
            {' '}and <span className="text-[var(--color-copper)]">20+ countries</span>
          </p>
          <div className="inline-block px-6 py-3 border-2 border-[var(--color-copper)] text-[var(--color-charcoal)]">
            <span className="tracking-wide">Nationwide & International Presence</span>
          </div>
        </div>
      </div>
    </section>
  );
}
