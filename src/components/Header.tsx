import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname === path;
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-concrete backdrop-blur-sm bg-white/95">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 bg-charcoal flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <img src="./logo.jpg" alt="" />
            </div>
            <span className="tracking-tight text-charcoal font-display font-semibold text-lg group-hover:text-copper transition-colors duration-300">
              THE PARADIGM ARCHITECTS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative group focus:outline-none px-2 py-1 cursor-pointer"
              >
                <span
                  className={`tracking-wide transition-colors duration-300 font-medium ${isActive(item.path)
                      ? 'text-charcoal'
                      : 'text-gray-600 hover:text-charcoal'
                    }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-copper transition-transform duration-300 origin-left ${isActive(item.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100 group-focus:scale-x-100'
                    }`}
                ></span>
              </Link>
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
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-4 text-left tracking-wide transition-all duration-300 font-medium border-l-4 focus:outline-none focus:ring-2 focus:ring-copper focus:ring-offset-2 focus:rounded-sm px-4 -mx-4 ${isActive(item.path)
                    ? 'text-charcoal border-copper bg-copper/5'
                    : 'text-gray-600 border-transparent hover:text-charcoal hover:border-copper/30 hover:bg-copper/5'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}