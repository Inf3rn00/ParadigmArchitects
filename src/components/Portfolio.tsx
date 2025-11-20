import { ImageWithFallback } from "./figma/ImageWithFallback";

function FallbackBadge({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`inline-flex items-center rounded-full border border-transparent px-2.5 py-0.5 text-xs font-semibold uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-secondary text-secondary-foreground hover:bg-secondary/80 ${className}`}
    >
      {children}
    </div>
  );
}
// ---------------------------------


const projects = [
  {
    title: "Skyline Residence",
    category: "Residential",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    description: "A luxury penthouse featuring floor-to-ceiling windows and sustainable materials."
  },
  {
    title: "Innovation Hub",
    category: "Commercial",
    location: "San Francisco, CA",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
    description: "A tech company headquarters designed to foster collaboration and creativity."
  },
  {
    title: "Green Valley Community",
    category: "Urban Planning",
    location: "Portland, OR",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    description: "A sustainable residential community with integrated green spaces."
  },
  {
    title: "Cultural Arts Center",
    category: "Public",
    location: "Austin, TX",
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498b?auto=format&fit=crop&w=800&q=80",
    description: "A performing arts venue that celebrates local culture and community."
  },
  {
    title: "Modern Workspace",
    category: "Commercial",
    location: "Chicago, IL",
    image: "https://images.unsplash.com/photo-1600607688960-e095c89532af?auto=format&fit=crop&w=800&q=80",
    description: "An adaptive office space designed for the future of work."
  },
  {
    title: "Riverfront Pavilion",
    category: "Public",
    location: "Seattle, WA",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=800&q=80",
    description: "A waterfront pavilion that connects the city to its natural surroundings."
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative designs that have transformed communities 
            and redefined architectural possibilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-medium">{project.title}</h3>
                  {/* Replaced <Badge variant="secondary"> with <FallbackBadge> */}
                  <FallbackBadge>{project.category}</FallbackBadge> 
                </div>
                <p className="text-sm text-muted-foreground">{project.location}</p>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}