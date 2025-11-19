import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-medium mb-6">
              Building the Future, 
              <br />
              <span className="italic text-muted-foreground">One Design at a Time</span>
            </h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Founded in 2010, Axiom Architecture has been at the forefront of innovative design, 
              creating spaces that harmonize functionality with aesthetic excellence. Our team of 
              award-winning architects and designers brings over 50 years of combined experience 
              to every project.
            </p>
            <p className="text-lg mb-8 text-muted-foreground">
              We believe architecture should not just shelter, but inspire. Each project is an 
              opportunity to push boundaries, challenge conventions, and create environments that 
              enhance the human experience.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <h3 className="text-3xl font-medium text-primary mb-2">150+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-medium text-primary mb-2">25+</h3>
                <p className="text-muted-foreground">Awards Won</p>
              </div>
              <div>
                <h3 className="text-3xl font-medium text-primary mb-2">12</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?auto=format&fit=crop&w=800&q=80"
              alt="Modern office interior"
              className="w-full h-[600px] object-cover rounded-lg"
            />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
}