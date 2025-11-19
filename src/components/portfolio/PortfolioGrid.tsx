import { useState } from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

type FilterType = 'All' | 'Sustainable' | 'Cultural' | 'Residential' | 'Commercial';

export function PortfolioGrid() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('All');

  const projects = [
    {
      id: 1,
      title: 'Urban Oasis',
      category: 'Sustainable',
      location: 'New York, USA',
      year: '2024',
      keyFact: 'Net Zero Energy',
      image: 'https://images.unsplash.com/photo-1521708266372-b3547456cc2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGFyY2hpdGVjdHVyZSUyMGRlc2lnbnxlbnwxfHx8fDE3NjM1ODIyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      title: 'Heritage Center',
      category: 'Cultural',
      location: 'London, UK',
      year: '2023',
      keyFact: 'Cultural Landmark',
      image: 'https://images.unsplash.com/photo-1762780087351-703502cdb85a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWx0dXJhbCUyMGFyY2hpdGVjdHVyZSUyMGJ1aWxkaW5nfGVufDF8fHx8MTc2MzU5MzI5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      title: 'Skyline Residence',
      category: 'Residential',
      location: 'Singapore',
      year: '2024',
      keyFact: 'Contemporary Living',
      image: 'https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjM1OTMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      title: 'Crystal Tower',
      category: 'Commercial',
      location: 'Dubai, UAE',
      year: '2023',
      keyFact: 'LEED Platinum Certified',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZ2xhc3N8ZW58MXx8fHwxNzYzNTkzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      title: 'Concrete Canvas',
      category: 'Cultural',
      location: 'Sydney, Australia',
      year: '2024',
      keyFact: 'Material Innovation Award',
      image: 'https://images.unsplash.com/photo-1744148621897-5fb0b6323543?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jcmV0ZSUyMGFyY2hpdGVjdHVyZSUyMG1pbmltYWxpc3R8ZW58MXx8fHwxNjM1OTMyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      title: 'Shadow Play Pavilion',
      category: 'Cultural',
      location: 'Tokyo, Japan',
      year: '2023',
      keyFact: 'Architectural Excellence',
      image: 'https://images.unsplash.com/photo-1744139519471-ce32827f14e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcmNoaXRlY3R1cmUlMjBzaGFkb3clMjBsaWdodHxlbnwxfHx8fDE3NjM1OTMyOTN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 7,
      title: 'Green Horizon',
      category: 'Sustainable',
      location: 'Toronto, Canada',
      year: '2024',
      keyFact: 'Carbon Negative',
      image: 'https://images.unsplash.com/photo-1695067440629-b5e513976100?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBidWlsZGluZ3xlbnwxfHx8fDE3NjM1MDUzMTV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 8,
      title: 'Lakeside Villa',
      category: 'Residential',
      location: 'Geneva, Switzerland',
      year: '2023',
      keyFact: 'Luxury Redefined',
      image: 'https://images.unsplash.com/photo-1667375721269-448f78e68022?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNpZGVudGlhbCUyMGFyY2hpdGVjdHVyZSUyMG1vZGVybnxlbnwxfHx8fDE3NjM1OTMyOTJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 9,
      title: 'Innovation Hub',
      category: 'Commercial',
      location: 'San Francisco, USA',
      year: '2024',
      keyFact: 'Tech-Forward Design',
      image: 'https://images.unsplash.com/photo-1580741990231-4aa1c1d9a76a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tZXJjaWFsJTIwYXJjaGl0ZWN0dXJlJTIwZ2xhc3N8ZW58MXx8fHwxNzYzNTkzMjkzfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  const filters: FilterType[] = ['All', 'Sustainable', 'Cultural', 'Residential', 'Commercial'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div>
      {/* Filter Bar */}
      <div className="mb-12 flex flex-wrap gap-4 justify-center">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`px-6 py-3 tracking-wide transition-all duration-150 ${
              activeFilter === filter
                ? 'bg-[var(--color-charcoal)] text-white'
                : 'bg-white text-[var(--color-charcoal)] border border-[var(--color-concrete)] hover:border-[var(--color-charcoal)]'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="group relative bg-white overflow-hidden"
          >
            <div className="relative h-[400px] overflow-hidden">
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[var(--color-charcoal)]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-150 flex items-center justify-center p-6">
                <div className="text-center text-white">
                  <p className="text-sm tracking-wider text-[var(--color-copper)] mb-3">KEY FACT</p>
                  <p className="text-xl">{project.keyFact}</p>
                </div>
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6 bg-white">
              <span className="text-xs tracking-wider text-[var(--color-copper)] mb-2 block">
                {project.category}
              </span>
              <h4 className="text-[var(--color-charcoal)] mb-2">{project.title}</h4>
              <div className="flex justify-between text-sm text-gray-600">
                <span>{project.location}</span>
                <span>{project.year}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-gray-600">No projects found in this category.</p>
        </div>
      )}
    </div>
  );
}
