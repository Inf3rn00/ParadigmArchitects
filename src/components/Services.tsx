import { Card, CardContent } from "./ui/card";

const services = [
  {
    title: "Residential Design",
    description: "Custom homes and residential developments that prioritize comfort, sustainability, and innovation.",
    icon: "🏠"
  },
  {
    title: "Commercial Architecture",
    description: "Office buildings, retail spaces, and mixed-use developments that drive business success.",
    icon: "🏢"
  },
  {
    title: "Urban Planning",
    description: "Community-centered urban design that creates vibrant, sustainable neighborhoods.",
    icon: "🌆"
  },
  {
    title: "Interior Design",
    description: "Thoughtful interior spaces that seamlessly blend form and function.",
    icon: "🛋️"
  },
  {
    title: "Sustainable Design",
    description: "Eco-friendly solutions that minimize environmental impact while maximizing efficiency.",
    icon: "🌱"
  },
  {
    title: "Renovation & Restoration",
    description: "Breathing new life into existing structures while preserving their historical significance.",
    icon: "🔨"
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From initial concept to final construction, we provide comprehensive architectural 
            services tailored to your vision and needs.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-medium mb-4">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}