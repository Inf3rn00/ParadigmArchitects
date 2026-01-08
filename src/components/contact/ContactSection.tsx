import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Thank you for your message. We will get back to you shortly.');
    setFormData({
      name: '',
      email: '',
      company: '',
      projectType: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-24 bg-offwhite">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header Section */}
        <div className="text-center mb-16 fade-in">
          <h2 className="text-4xl md:text-5xl font-light text-charcoal mb-6">
            Let's Build Together
          </h2>
          <div className="w-24 h-0.5 bg-copper mx-auto mb-6"></div>
          <p className="text-lg text-charcoal/70 max-w-2xl mx-auto leading-relaxed">
            Whether you're envisioning a sustainable residential project, a cultural landmark,
            or a commercial development, we're here to bring your architectural vision to life
            across Nigeria. Reach out to discuss how we can collaborate.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="fade-in">
            <div className="space-y-8">
              <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-4 bg-concrete rounded-sm group-hover:bg-copper/10 transition-colors duration-300">
                  <MapPin size={24} className="text-copper transition-colors duration-300" />
                </div>
                <div>
                  <h6 className="text-charcoal text-lg mb-3">Visit Our Office</h6>
                  <p className="text-charcoal/70 leading-relaxed">
                    Plot 1029, Shehu Yar'Adua Way<br />
                    Mabushi, Abuja<br />
                    Federal Capital Territory, Nigeria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-4 bg-concrete rounded-sm group-hover:bg-copper/10 transition-colors duration-300">
                  <Phone size={24} className="text-copper transition-colors duration-300" />
                </div>
                <div>
                  <h6 className="text-charcoal text-lg mb-3">Call Us Directly</h6>
                  <p className="text-charcoal/70 leading-relaxed">
                    +234 (0) 809 000 5678<br />
                    <span className="text-sm text-charcoal/50">Monday - Friday: 8:00 AM - 6:00 PM</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6 group hover:translate-x-2 transition-transform duration-300">
                <div className="p-4 bg-concrete rounded-sm group-hover:bg-copper/10 transition-colors duration-300">
                  <Mail size={24} className="text-copper transition-colors duration-300" />
                </div>
                <div>
                  <h6 className="text-charcoal text-lg mb-3">Email Us</h6>
                  <p className="text-charcoal/70 leading-relaxed">
                    info@theparadigmarch.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 p-8 bg-offwhite rounded-sm border border-concrete fade-in">
              <h6 className="text-charcoal text-lg mb-4">Business Hours</h6>
              <div className="space-y-3 text-charcoal/70">
                <div className="flex justify-between items-center py-2 border-b border-concrete/50">
                  <span className="font-medium">Monday - Friday</span>
                  <span className="text-copper">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-concrete/50">
                  <span className="font-medium">Saturday</span>
                  <span className="text-copper">9:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="font-medium">Sunday</span>
                  <span className="text-charcoal/40">Closed</span>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="mt-8 p-8 bg-offwhite rounded-sm border border-concrete fade-in">
              <h6 className="text-charcoal text-lg mb-4">Service Areas</h6>
              <div className="grid grid-cols-2 gap-2 text-sm text-charcoal/70">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Abuja FCT</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Lagos</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Port Harcourt</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Kano</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Ibadan</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-copper rounded-full"></div>
                  <span>Nationwide</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="fade-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-wide text-charcoal mb-3 font-medium">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-concrete focus:border-copper focus:outline-none transition-colors duration-300 bg-offwhite"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-wide text-charcoal mb-3 font-medium">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-concrete focus:border-copper focus:outline-none transition-colors duration-300 bg-offwhite"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm tracking-wide text-charcoal mb-3 font-medium">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-concrete focus:border-copper focus:outline-none transition-colors duration-300 bg-offwhite"
                  placeholder="Your company name (optional)"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm tracking-wide text-charcoal mb-3 font-medium">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border border-concrete focus:border-copper focus:outline-none transition-colors duration-300 bg-offwhite"
                >
                  <option value="">Select your project type</option>
                  <option value="sustainable">Sustainable Design</option>
                  <option value="cultural">Cultural Spaces</option>
                  <option value="residential">Residential Projects</option>
                  <option value="commercial">Commercial Architecture</option>
                  <option value="mixed-use">Mixed-Use Development</option>
                  <option value="other">Other Project Type</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wide text-charcoal mb-3 font-medium">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-4 border border-concrete focus:border-copper focus:outline-none transition-colors duration-300 bg-offwhite resize-none"
                  placeholder="Tell us about your project vision, requirements, timeline, and any specific needs..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full relative inline-flex items-center justify-center gap-3 bg-copper text-offwhite px-8 py-4 overflow-hidden transition-all duration-300 hover:bg-charcoal"
              >
                <span className="relative z-10 tracking-wide font-medium">Send Message</span>
                <Send size={20} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-charcoal transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              <p className="text-sm text-charcoal/50 text-center mt-4">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}