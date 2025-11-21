import { ArrowRight } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface FeaturedWorksProps {
  onViewAll: () => void;
}

export function FeaturedWorks({ onViewAll }: FeaturedWorksProps) {
  const projects = [
    {
      id: 1,
      title: "Urban Oasis",
      category: "Sustainable",
      impact: "Net Zero Energy",
      image:
        "/projectImage1.jpg",
      height: "tall",
    },
    {
      id: 2,
      title: "Heritage Center",
      category: "Cultural",
      impact: "Enhancing Community Experiences",
      image:
        "./projectImage2.jpg",
      height: "short",
    },
    {
      id: 3,
      title: "Skyline Residence",
      category: "Residential",
      impact: "Contemporary Living",
      image:
        "./heroBg.jpg",
      height: "short",
    },
    {
      id: 4,
      title: "Crystal Tower",
      category: "Commercial",
      impact: "Redefining Urban Skylines",
       image:
        "/projectImage1.jpg",
      height: "tall",
    },
    {
      id: 5,
      title: "Concrete Canvas",
      category: "Cultural",
      impact: "Material Innovation",
      image:
        "/projectImage2.jpg",
      height: "short",
    },
    {
      id: 6,
      title: "Shadow Play Pavilion",
      category: "Cultural",
      impact: "Light & Form Mastery",
    image:
        "/heroBg.jpg",
      height: "short",
    },
  ];

  return (
    <section className="py-24 bg-silver">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-16 fade-in">
          <div>
            <h2 className="text-charcoal mb-4 text-4xl lg:text-5xl font-display font-bold tracking-tight">
              Featured Works
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
              Showcasing excellence in architectural design
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:flex items-center gap-3 group bg-copper hover:bg-copper-light text-white px-8 py-4 transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-copper-light focus:ring-offset-2 cursor-pointer rounded-md"
          >
            <span className="tracking-wide font-semibold">View All Projects</span>
            <ArrowRight 
              size={20} 
              className="transition-transform duration-300 group-hover:translate-x-1 group-focus:translate-x-1" 
            />
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-white rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02] focus-within:scale-[1.02] focus-within:shadow-2xl focus-within:outline-none focus-within:ring-2 focus-within:ring-copper focus-within:ring-offset-2 ${
                project.height === "tall" ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  project.height === "tall" ? "h-[672px]" : "h-[320px]"
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <span className="text-sm tracking-wider text-copper font-semibold mb-3 block opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {project.category}
                  </span>
                  <h4 className="mb-4 text-2xl font-display font-semibold tracking-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                    {project.title}
                  </h4>
                  <p className="text-concrete leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Button - Fixed with cursor-pointer */}
        <button
          onClick={onViewAll}
          className="md:hidden flex items-center gap-3 justify-center bg-copper hover:bg-copper-light text-white px-8 py-4 mx-auto mt-12 transition-all duration-300 ease-out hover:scale-105 focus:scale-105 focus:outline-none focus:ring-2 focus:ring-copper-light focus:ring-offset-2 cursor-pointer"
        >
          <span className="tracking-wide font-semibold">View All Projects</span>
          <ArrowRight 
            size={20} 
            className="transition-transform duration-300 group-hover:translate-x-1" 
          />
        </button>
      </div>
    </section>
  );
}