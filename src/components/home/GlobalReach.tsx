import { MapPin } from "lucide-react";

export function GlobalReach() {
  const locations = [
    { city: "Kano", country: "Government House", projects: 3 },
    { city: "Abuja", country: "Hush Apartments", projects: 1 },
    { city: "Kano", country: "Government House", projects: 3 },
    { city: "Abuja", country: "Hush Apartments", projects: 1 },
    { city: "Kano", country: "Government House", projects: 3 },
    { city: "Abuja", country: "Hush Apartments", projects: 1 },
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 text-sm text-copper font-medium mb-3 uppercase tracking-wider">
            <div className="w-2 h-2 bg-current rounded-full"></div>
            National Presence
          </div>
          <h2 className="text-4xl lg:text-5xl font-light text-charcoal mb-6 leading-tight">
            Nationwide <span className="font-semibold">Reach</span>
          </h2>
          <p className="text-charcoal/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Operating across the country, we bring architectural excellence to
            communities everywhere, transforming skylines and enriching lives
            through innovative design.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {locations.map((location, index) => (
            <div
              key={`${location.city}-${location.country}`}
              className="group relative p-8 bg-offwhite rounded-2xl border border-gray-100 hover:border-[var(--color-copper)]/20 transition-all duration-500 hover:shadow-2xl hover:shadow-[var(--color-copper)]/5 hover:-translate-y-2"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-offwhite to-gray-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative flex items-start gap-6">
                {/* Icon Container */}
                <div className="relative">
                  <div className="p-4 bg-gradient-to-br from-[var(--color-silver)] to-gray-100 group-hover:from-[var(--color-copper)] group-hover:to-[var(--color-copper)]/80 rounded-xl transition-all duration-500 shadow-lg group-hover:shadow-xl group-hover:shadow-[var(--color-copper)]/20">
                    <MapPin
                      size={24}
                      className="text-[var(--color-charcoal)] group-hover:text-white transition-colors duration-500"
                    />
                  </div>
                  {/* Pulse Animation on Hover */}
                  <div className="absolute inset-0 rounded-xl bg-[var(--color-copper)] opacity-0 group-hover:opacity-20 group-hover:animate-pulse transition-all duration-500"></div>
                </div>

                {/* Content */}
                <div className="flex-1 pt-1">
                  <div className="flex items-baseline gap-3 mb-2">
                    <h5 className="text-xl font-semibold text-[var(--color-charcoal)] group-hover:text-[var(--color-copper)] transition-colors duration-300">
                      {location.city}
                    </h5>
                    <span className="text-xs text-charcoal/40 font-medium px-2 py-1 bg-gray-100 rounded-full">
                      {location.country}
                    </span>
                  </div>
                  <p className="text-2xl font-bold text-[var(--color-copper)] mb-1">
                    {location.projects}
                  </p>
                  <p className="text-sm text-charcoal/50 font-medium">
                    {location.projects === 1
                      ? "Completed Project"
                      : "Completed Projects"}
                  </p>
                </div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--color-copper)] to-transparent group-hover:w-4/5 group-hover:left-1/10 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Stats Footer */}
        <div className="text-center">
          {/* CTA Badge */}
          <div className="mt-12 inline-flex items-center gap-3 px-8 py-4 border-2 border-[var(--color-copper)]/20 bg-offwhite/50 backdrop-blur-sm rounded-full group hover:border-[var(--color-copper)] hover:bg-[var(--color-copper)]/5 transition-all duration-300">
            <div className="w-2 h-2 bg-[var(--color-copper)] rounded-full animate-pulse"></div>
            <span className="text-[var(--color-charcoal)] font-semibold tracking-wide group-hover:text-[var(--color-copper)] transition-colors duration-300">
              Nationwide & International Presence
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
