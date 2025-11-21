import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', value: 'home' },
    { label: 'Portfolio', value: 'portfolio' },
    { label: 'About', value: 'about' },
    { label: 'Contact', value: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-concrete backdrop-blur-sm bg-white/95">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group focus:outline-none  "
          >
            <div className="w-10 h-10 bg-charcoal flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="./logo.jpg" alt="" />
            </div>
            <span className="tracking-tight text-charcoal font-display font-semibold text-lg group-hover:text-copper transition-colors duration-300">
              THE PARADIGM ARCHITECTS
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="relative group focus:outline-none px-2 py-1 cursor-pointer"
              >
                <span
                  className={`tracking-wide transition-colors duration-300 font-medium ${
                    currentPage === item.value
                      ? 'text-charcoal'
                      : 'text-gray-600 hover:text-charcoal'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-copper transition-transform duration-300 origin-left ${
                    currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-copper hover:text-copper-light transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:rounded-sm"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-concrete animate-fade-in">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`py-4 text-left tracking-wide transition-all duration-300 font-medium border-l-4 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:rounded-sm px-4 -mx-4 ${
                  currentPage === item.value
                    ? 'text-charcoal border-copper bg-copper/5'
                    : 'text-gray-600 border-transparent hover:text-charcoal hover:border-copper/30 hover:bg-copper/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}