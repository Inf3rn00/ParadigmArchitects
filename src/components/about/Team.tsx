import { Linkedin } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: "Adebayo Adewale",
      role: "Principal Architect",
      bio: "Leading sustainable design initiatives across Nigeria with 20+ years of architectural excellence.",
      image:
        "",
    },
    {
      id: 2,
      name: "Chiamaka Nwosu",
      role: "Design Director",
      bio: "Specializing in cultural preservation and public space architecture throughout West Africa.",
      image:
        "",
    },
    {
      id: 3,
      name: "Emeka Okoro",
      role: "Sustainability Lead",
      bio: "Pioneering net-zero energy solutions and sustainable building practices in Nigerian architecture.",
      image:
        "",
    },
    {
      id: 4,
      name: "Zainab Bello",
      role: "Senior Architect",
      bio: "Expert in commercial and residential high-rise development across Nigerian urban centers.",
      image:
        "",
    },
    {
      id: 5,
      name: "Oluwaseun Adeyemi",
      role: "Innovation Architect",
      bio: "Integrating cutting-edge technology with traditional Nigerian design principles and aesthetics.",
      image:
        "",
    },
    {
      id: 6,
      name: "Fatima Ibrahim",
      role: "Project Director",
      bio: "Overseeing national and international projects with Nigerian precision and architectural excellence.",
      image:
        "",
    },
  ];

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-20 fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-light text-charcoal mb-6">
            Our Architectural Leadership
          </h2>
          <div className="w-24 h-0.5 bg-copper mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed font-sans">
            A diverse group of talented Nigerian professionals united by a passion for 
            architectural excellence and a commitment to creating meaningful, lasting impact 
            across our communities.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {teamMembers.map((member) => (
            <div 
              key={member.id} 
              className="group bg-white rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 fade-in overflow-hidden"
            >
              {/* Image Container */}
              <div className="relative h-80 overflow-hidden bg-concrete">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-offwhite text-sm leading-relaxed font-sans mb-4">
                      {member.bio}
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm text-copper hover:text-copper-light transition-colors duration-300 font-sans"
                    >
                      <Linkedin size={18} />
                      <span>Connect on LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Info Section */}
              <div className="p-6 border-t border-concrete group-hover:border-copper/30 transition-colors duration-300">
                <h5 className="text-xl font-display font-medium text-charcoal mb-2 group-hover:text-copper transition-colors duration-300">
                  {member.name}
                </h5>
                <p className="text-sm text-copper font-sans tracking-wider uppercase mb-3">
                  {member.role}
                </p>
                
                {/* Bio for mobile */}
                <p className="text-charcoal/70 text-sm leading-relaxed font-sans md:hidden">
                  {member.bio}
                </p>
                
                {/* LinkedIn for mobile */}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-charcoal/60 hover:text-copper transition-colors duration-300 md:hidden mt-3 font-sans"
                >
                  <Linkedin size={16} />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Values Footer */}
        <div className="mt-20 pt-12 border-t border-concrete">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="fade-in">
              <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-display text-charcoal mb-3">Expert Leadership</h4>
              <p className="text-sm text-charcoal/70 font-sans">
                20+ years of combined experience in Nigerian architecture
              </p>
            </div>
            <div className="fade-in" style={{ animationDelay: "100ms" }}>
              <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9m0 9c-5 0-9-4-9-9s4-9 9-9" />
                </svg>
              </div>
              <h4 className="font-display text-charcoal mb-3">Sustainable Focus</h4>
              <p className="text-sm text-charcoal/70 font-sans">
                Innovative solutions tailored for Nigerian climate and communities
              </p>
            </div>
            <div className="fade-in" style={{ animationDelay: "200ms" }}>
              <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-display text-charcoal mb-3">Cultural Excellence</h4>
              <p className="text-sm text-charcoal/70 font-sans">
                Deep understanding of Nigerian heritage and contemporary design needs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}