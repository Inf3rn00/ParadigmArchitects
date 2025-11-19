import { Linkedin, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[var(--color-slate)] text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-[var(--color-copper)]"></div>
              </div>
              <span className="tracking-tight">
                PARADIGM<br />ARCHITECTS
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Cultivating legacies that stand the test of time through innovation and minimalist design.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-[var(--color-copper)] mb-4 tracking-wide">Quick Links</h6>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Portfolio</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-150">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-[var(--color-copper)] mb-4 tracking-wide">Services</h6>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Sustainable Design</span></li>
              <li><span className="text-gray-400">Cultural Spaces</span></li>
              <li><span className="text-gray-400">Residential Projects</span></li>
              <li><span className="text-gray-400">Commercial Architecture</span></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-[var(--color-copper)] mb-4 tracking-wide">Contact</h6>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[var(--color-copper)] mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Design Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[var(--color-copper)] flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[var(--color-copper)] flex-shrink-0" />
                <span className="text-gray-400">info@paradigmarch.com</span>
              </li>
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-[var(--color-copper)] transition-colors duration-150">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-copper)] transition-colors duration-150">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-[var(--color-copper)] transition-colors duration-150">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © 2025 Paradigm Architects. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-150">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-150">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
