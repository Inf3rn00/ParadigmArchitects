import {
  Linkedin,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="fade-in">
            <div className="flex items-center gap-3 mb-6 group">
              <div className="w-10 h-10 bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-105 rounded-lg border border-concrete shadow-lg">
                <img
                  src="./logo.jpg"
                  alt="Paradigm Architects Logo"
                  className="w-full h-full rotate-90"
                />
              </div>
              <span className="tracking-tight font-display font-semibold text-lg group-hover:text-copper transition-colors duration-300">
                THE
                <br />
                PARADIGM
                <br />
                ARCHITECTS
              </span>
            </div>
            <p className="text-silver leading-relaxed text-lg">
              Cultivating legacies that stand the test of time through
              innovation and minimalist design.
            </p>
          </div>

          {/* Quick Links */}
          <div className="fade-in">
            <h6 className="text-copper mb-6 tracking-wide font-display font-semibold text-lg">
              Quick Links
            </h6>
            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="text-silver hover:text-white hover:translate-x-1 transition-all duration-300 ease-out block"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-silver hover:text-white hover:translate-x-1 transition-all duration-300 ease-out block"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-silver hover:text-white hover:translate-x-1 transition-all duration-300 ease-out block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-silver hover:text-white hover:translate-x-1 transition-all duration-300 ease-out block"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="fade-in">
            <h6 className="text-copper mb-6 tracking-wide font-display font-semibold text-lg">
              Services
            </h6>
            <ul className="space-y-4">
              <li>
                <span className="text-silver hover:text-white transition-colors duration-300 cursor-default block">
                  Sustainable Design
                </span>
              </li>
              <li>
                <span className="text-silver hover:text-white transition-colors duration-300 cursor-default block">
                  Cultural Spaces
                </span>
              </li>
              <li>
                <span className="text-silver hover:text-white transition-colors duration-300 cursor-default block">
                  Residential Projects
                </span>
              </li>
              <li>
                <span className="text-silver hover:text-white transition-colors duration-300 cursor-default block">
                  Commercial Architecture
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="fade-in">
            <h6 className="text-copper mb-6 tracking-wide font-display font-semibold text-lg">
              Contact
            </h6>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 group hover:translate-x-1 transition-transform duration-300">
                <MapPin
                  size={20}
                  className="text-copper mt-1 flex-shrink-0 transition-colors duration-300 group-hover:text-copper-light"
                />
                <span className="text-silver leading-relaxed transition-colors duration-300 group-hover:text-white">
                  Plot 1029, Shehu Yar'Adua Way
                  <br />
                  Mabushi, Abuja
                </span>
              </li>
             
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Phone
                  size={20}
                  className="text-copper flex-shrink-0 transition-colors duration-300 group-hover:text-copper-light"
                />
                <span className="text-silver transition-colors duration-300 group-hover:text-white">
                  +234 (0) 809 000 5678
                </span>
              </li>
              <li className="flex items-center gap-3 group hover:translate-x-1 transition-transform duration-300">
                <Mail
                  size={20}
                  className="text-copper flex-shrink-0 transition-colors duration-300 group-hover:text-copper-light"
                />
                <span className="text-silver transition-colors duration-300 group-hover:text-white">
                  info@theparadigmarch.com
                </span>
              </li>
             
            </ul>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://linkedin.com/company/naijarch"
                className="text-silver hover:text-copper hover:scale-110 transition-all duration-300 ease-out"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com/naijarch"
                className="text-silver hover:text-copper hover:scale-110 transition-all duration-300 ease-out"
              >
                <Instagram size={22} />
              </a>
              <a
                href="https://twitter.com/naijarch"
                className="text-silver hover:text-copper hover:scale-110 transition-all duration-300 ease-out"
              >
                <Twitter size={22} />
              </a>
             
              <a
                href="https://wa.me/2349060001234"
                className="text-silver hover:text-copper hover:scale-110 transition-all duration-300 ease-out"
              >
                <MessageCircle size={22} />
              </a>
            </div>

            {/* Business Hours */}
            <div className="mt-8 pt-6 border-t border-gray-600">
              <p className="text-copper font-semibold mb-2">Business Hours</p>
              <p className="text-silver text-sm">
                Monday - Friday: 8:00 AM - 6:00 PM
                <br />
                Saturday: 9:00 AM - 2:00 PM
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-concrete/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 fade-in">
          <p className="text-silver text-base">
            © 2025 Paradigm Architects. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-silver hover:text-white hover:scale-105 transition-all duration-300 ease-out text-base"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-silver hover:text-white hover:scale-105 transition-all duration-300 ease-out text-base"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
