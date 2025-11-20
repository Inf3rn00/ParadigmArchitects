import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Contact us to discuss your project 
            and discover how we can create something extraordinary together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-medium mb-8">Let's Start a Conversation</h3>
            
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Office Location</h4>
                  <p className="text-muted-foreground">
                    123 Design District<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Contact Information</h4>
                  <p className="text-muted-foreground">
                    Phone: (555) 123-4567<br />
                    Email: hello@axiomarch.com<br />
                    Business Hours: Mon-Fri 9AM-6PM EST
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h4 className="font-medium mb-2">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Instagram</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Behance</a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <div>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block mb-2">First Name</label>
                  <input id="firstName" placeholder="John" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2">Last Name</label>
                  <input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2">Email</label>
                <input id="email" type="email" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="projectType" className="block mb-2">Project Type</label>
                <input id="projectType" placeholder="e.g., Residential, Commercial" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2">Message</label>
                <textarea 
                  id="message" 
                  placeholder="Tell us about your project..."
                  className="h-32"
                />
              </div>
              
              <Button className="w-full" size="lg">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}