import { Linkedin } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Team() {
  const teamMembers = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      role: 'Principal Architect',
      bio: 'Leading sustainable design initiatives with 20+ years of experience.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 2,
      name: 'David Chen',
      role: 'Design Director',
      bio: 'Specializing in cultural and public space architecture.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Sustainability Lead',
      bio: 'Pioneering net-zero energy solutions in architectural design.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 4,
      name: 'James Thompson',
      role: 'Senior Architect',
      bio: 'Expert in commercial and residential high-rise development.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 5,
      name: 'Aisha Patel',
      role: 'Innovation Architect',
      bio: 'Integrating cutting-edge technology with timeless design.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      id: 6,
      name: 'Marcus Liu',
      role: 'Project Director',
      bio: 'Overseeing international projects with precision and excellence.',
      image: 'https://images.unsplash.com/photo-1539618450343-13bc2c60ca45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjM1Njg1Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section className="py-24 bg-[var(--color-silver)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <h2 className="text-[var(--color-charcoal)] mb-4">Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A diverse group of talented professionals united by a passion for architectural excellence 
            and a commitment to creating meaningful, lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-[400px] overflow-hidden bg-gray-200">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
              </div>

              {/* Info */}
              <div className="p-6">
                <h5 className="text-[var(--color-charcoal)] mb-1">{member.name}</h5>
                <p className="text-sm text-[var(--color-copper)] mb-3 tracking-wide">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">{member.bio}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm text-[var(--color-charcoal)] hover:text-[var(--color-copper)] transition-colors duration-150"
                >
                  <Linkedin size={18} />
                  <span>Connect</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
