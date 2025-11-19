import { ImageWithFallback } from "./figma/ImageWithFallback";

const team = [
  {
    name: "Sarah Chen",
    role: "Founding Principal",
    bio: "With over 15 years of experience, Sarah leads our design vision and client relationships.",
    image: "https://images.unsplash.com/photo-1494790108755-2616b60b8c1b?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Marcus Rodriguez",
    role: "Design Director",
    bio: "Marcus specializes in sustainable architecture and innovative building technologies.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Emily Thompson",
    role: "Project Manager",
    bio: "Emily ensures every project runs smoothly from conception to completion.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Kim",
    role: "Senior Architect",
    bio: "David brings expertise in commercial and mixed-use development projects.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
  }
];

export function Team() {
  return (
    <section id="team" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Our Team</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented professionals who bring creativity, expertise, and passion 
            to every project we undertake.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{member.name}</h3>
              <p className="text-primary mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}