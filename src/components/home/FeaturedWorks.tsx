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
        "https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1ODIyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "tall",
    },
    {
      id: 2,
      title: "Heritage Center",
      category: "Cultural",
      impact: "Enhancing Community Experiences",
      image:
        "https://images.unsplash.com/photo-1762780087351-703502cdb85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzU5MzI5Mnww&ixlib=rb-4.1.0&q=80&w=1080",
      height: "short",
    },
    {
      id: 3,
      title: "Skyline Residence",
      category: "Residential",
      impact: "Contemporary Living",
      image:
        "https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjM1OTMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "short",
    },
    {
      id: 4,
      title: "Crystal Tower",
      category: "Commercial",
      impact: "Redefining Urban Skylines",
      image:
        "https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZ2xhc3N8ZW58MXx8fHwxNzYzNTkzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "tall",
    },
    {
      id: 5,
      title: "Concrete Canvas",
      category: "Cultural",
      impact: "Material Innovation",
      image:
        "https://images.unsplash.com/photo-1744148621897-5fb0b6323543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNzYzNTkzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "short",
    },
    {
      id: 6,
      title: "Shadow Play Pavilion",
      category: "Cultural",
      impact: "Light & Form Mastery",
      image:
        "https://images.unsplash.com/photo-1744139519471-ce32827f14e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzaGFkb3clMjBsaWdodHxlbnwxfHx8fDE3NjM1OTMyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      height: "short",
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-silver)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[var(--color-charcoal)] mb-2">
              Featured Works
            </h2>
            <p className="text-gray-600">
              Showcasing excellence in architectural design
            </p>
          </div>
          <button
            onClick={onViewAll}
            className="hidden md:flex items-center gap-2 text-[var(--color-copper)] hover:gap-3 transition-all duration-150"
          >
            <span className="tracking-wide">View All Projects</span>
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`group relative overflow-hidden bg-white ${
                project.height === "tall" ? "md:row-span-2" : ""
              }`}
            >
              <div
                className={`relative overflow-hidden ${
                  project.height === "tall" ? "h-[600px]" : "h-[290px]"
                }`}
              >
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-150">
                  <span className="text-sm tracking-wider text-[var(--color-copper)] mb-2 block opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {project.category}
                  </span>
                  <h4 className="mb-2">{project.title}</h4>
                  <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    {project.impact}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={onViewAll}
          className="md:hidden flex items-center gap-2 text-[var(--color-copper)] mx-auto mt-8"
        >
          <span className="tracking-wide">View All Projects</span>
          <ArrowRight size={20} />
        </button>
      </div>
    </section>
  );
}
