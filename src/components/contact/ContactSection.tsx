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
    <section className="py-24 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="text-[var(--color-charcoal)] mb-6">Let's Build Together</h2>
            <p className="text-gray-600 mb-12 leading-relaxed">
              Whether you're envisioning a sustainable residential project, a cultural landmark, 
              or a commercial development, we're here to bring your architectural vision to life. 
              Reach out to discuss how we can collaborate.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--color-silver)]">
                  <MapPin size={24} className="text-[var(--color-copper)]" />
                </div>
                <div>
                  <h6 className="text-[var(--color-charcoal)] mb-2">Visit Us</h6>
                  <p className="text-gray-600">
                    123 Design Avenue<br />
                    New York, NY 10001<br />
                    United States
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--color-silver)]">
                  <Phone size={24} className="text-[var(--color-copper)]" />
                </div>
                <div>
                  <h6 className="text-[var(--color-charcoal)] mb-2">Call Us</h6>
                  <p className="text-gray-600">
                    +1 (555) 123-4567<br />
                    Mon-Fri, 9:00 AM - 6:00 PM EST
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-4 bg-[var(--color-silver)]">
                  <Mail size={24} className="text-[var(--color-copper)]" />
                </div>
                <div>
                  <h6 className="text-[var(--color-charcoal)] mb-2">Email Us</h6>
                  <p className="text-gray-600">
                    info@paradigmarch.com<br />
                    careers@paradigmarch.com
                  </p>
                </div>
              </div>
            </div>

            {/* Office Hours */}
            <div className="mt-12 p-6 bg-[var(--color-silver)]">
              <h6 className="text-[var(--color-charcoal)] mb-3">Office Hours</h6>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm tracking-wide text-[var(--color-charcoal)] mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--color-concrete)] focus:border-[var(--color-copper)] focus:outline-none transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm tracking-wide text-[var(--color-charcoal)] mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-[var(--color-concrete)] focus:border-[var(--color-copper)] focus:outline-none transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm tracking-wide text-[var(--color-charcoal)] mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--color-concrete)] focus:border-[var(--color-copper)] focus:outline-none transition-colors duration-150"
                />
              </div>

              <div>
                <label htmlFor="projectType" className="block text-sm tracking-wide text-[var(--color-charcoal)] mb-2">
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[var(--color-concrete)] focus:border-[var(--color-copper)] focus:outline-none transition-colors duration-150 bg-white"
                >
                  <option value="">Select a project type</option>
                  <option value="sustainable">Sustainable Design</option>
                  <option value="cultural">Cultural Spaces</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm tracking-wide text-[var(--color-charcoal)] mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-[var(--color-concrete)] focus:border-[var(--color-copper)] focus:outline-none transition-colors duration-150 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full relative inline-flex items-center justify-center gap-3 bg-[var(--color-copper)] text-white px-8 py-4 overflow-hidden"
              >
                <span className="relative z-10 tracking-wide">Send Message</span>
                <Send size={20} className="relative z-10 transition-transform duration-150 group-hover:translate-x-1" />
                <span className="absolute inset-0 bg-[var(--color-bronze)] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-150 origin-left"></span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
