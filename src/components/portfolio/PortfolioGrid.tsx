import { useState } from "react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

type FilterType =
  | "All"
  | "Sustainable"
  | "Cultural"
  | "Residential"
  | "Commercial";

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("All");

  const projects = [
    {
      id: 1,
      title: "Lagos Eco-Tower",
      category: "Sustainable",
      location: "Victoria Island, Lagos",
      year: "2024",
      keyFact: "Net Zero Energy Design",
      image:
        "./heroBg.jpg",
    },
    {
      id: 2,
      title: "Yoruba Heritage Museum",
      category: "Cultural",
      location: "Ibadan, Oyo State",
      year: "2023",
      keyFact: "Cultural Preservation Hub",
      image:
        "./projectImage1.jpg",
    },
    {
      id: 3,
      title: "Abuja Minimalist Residence",
      category: "Residential",
      location: "Maitama, Abuja",
      year: "2024",
      keyFact: "Contemporary Nigerian Living",
      image:
        "./projectImage2.jpg",
    },
    {
      id: 4,
      title: "Eko Innovation Hub",
      category: "Commercial",
      location: "Lekki, Lagos",
      year: "2023",
      keyFact: "LEED Platinum Certified",
      image:
        "./projectImage3.jpg",
    },
    {
      id: 5,
      title: "Benin Cultural Pavilion",
      category: "Cultural",
      location: "Benin City, Edo State",
      year: "2024",
      keyFact: "Material Innovation Award",
      image:
        "./projectImage4.jpg",
    },
    {
      id: 6,
      title: "Calabar Waterfront Villas",
      category: "Residential",
      location: "Calabar, Cross River",
      year: "2023",
      keyFact: "Architectural Excellence",
      image:
        "./projectImage1.jpg",
    },

  ];

  const filters: FilterType[] = [
    "All",
    "Sustainable",
    "Cultural",
    "Residential",
    "Commercial",
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);



  return (
    <div className="max-w-7xl mx-auto px-4 py-12 fade-in">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
          Our Architectural Legacy
        </h2>
        <div className="w-24 h-0.5 bg-copper mx-auto mb-6"></div>
        <p className="text-lg text-charcoal/70 max-w-3xl mx-auto leading-relaxed">
          Showcasing our commitment to minimalist design, sustainable practices, and cultural
          significance across Nigeria. Each project embodies our mission to create transformative
          spaces that enrich lives and stand as timeless monuments to quality craftsmanship.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-16 flex flex-wrap gap-3 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 tracking-wide transition-all duration-300 ease-out rounded-sm ${activeFilter === filter
              ? "bg-charcoal text-offwhite shadow-md"
              : "bg-offwhite text-charcoal border border-concrete hover:border-charcoal hover:bg-offwhite"
              }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-offwhite overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 fade-in"
          >
            <div className="relative h-80 overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-charcoal/90 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center p-8 cursor-pointer">
                <div className="text-center text-offwhite transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm tracking-wider text-copper mb-3">
                    PARADIGM APPROACH
                  </p>
                  <p className="text-xl">{project.keyFact}</p>
                  <div className="w-12 h-0.5 bg-copper mx-auto mt-4"></div>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-offwhite border-t border-concrete">
              <span className="text-xs tracking-wider text-copper mb-2 block uppercase">
                {project.category}
              </span>
              <h4 className="text-charcoal text-xl mb-3 font-medium">
                {project.title}
              </h4>
              <div className="flex justify-between text-sm text-charcoal/70">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-charcoal/70">No projects found in this category.</p>
        </div>
      )}

      {/* Values Footer */}
      <div className="mt-16 pt-8 border-t border-concrete">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <h4 className="text-charcoal mb-3">Minimalist Excellence</h4>
            <p className="text-sm text-charcoal/70">
              Clean, functional designs that prioritize user experience and timeless aesthetics
            </p>
          </div>
          <div>
            <h4 className="text-charcoal mb-3">Sustainable Legacy</h4>
            <p className="text-sm text-charcoal/70">
              Environmentally conscious architecture that positively impacts communities
            </p>
          </div>
          <div>
            <h4 className="text-charcoal mb-3">Cultural Resonance</h4>
            <p className="text-sm text-charcoal/70">
              Designs that honor Nigerian heritage while embracing innovative technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}