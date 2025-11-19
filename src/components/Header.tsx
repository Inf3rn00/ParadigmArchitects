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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[var(--color-concrete)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 bg-[var(--color-charcoal)] flex items-center justify-center">
              <div className="w-6 h-6 border-2 border-[var(--color-copper)]"></div>
            </div>
            <span className="tracking-tight text-[var(--color-charcoal)]">
              PARADIGM ARCHITECTS
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-12">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => onNavigate(item.value)}
                className="relative group"
              >
                <span
                  className={`tracking-wide transition-colors duration-150 ${
                    currentPage === item.value
                      ? 'text-[var(--color-charcoal)]'
                      : 'text-gray-600 hover:text-[var(--color-charcoal)]'
                  }`}
                >
                  {item.label}
                </span>
                <span
                  className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[var(--color-copper)] transition-transform duration-150 origin-left ${
                    currentPage === item.value ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                ></span>
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[var(--color-copper)]"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-[var(--color-concrete)]">
          <nav className="flex flex-col px-6 py-4">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => {
                  onNavigate(item.value);
                  setMobileMenuOpen(false);
                }}
                className={`py-4 text-left tracking-wide transition-colors duration-150 ${
                  currentPage === item.value
                    ? 'text-[var(--color-charcoal)]'
                    : 'text-gray-600'
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
