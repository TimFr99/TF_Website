import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

interface HeaderProps {
  isLegalPage?: boolean;
}

export default function Header({ isLegalPage = false }: HeaderProps) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLegalDropdownOpen, setIsLegalDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLegalDropdownOpen(false);
      }
    };

    if (isLegalDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isLegalDropdownOpen]);

  const getHeaderClasses = () => {
    if (isLegalPage) {
      return 'bg-gradient-to-r from-emerald-600 to-green-600 shadow-lg';
    }
    return isScrolled
      ? 'bg-white/95 backdrop-blur-md shadow-lg'
      : 'bg-transparent';
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${getHeaderClasses()}`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className={`text-2xl font-bold hover:opacity-80 transition-opacity ${
              isLegalPage
                ? 'text-white'
                : 'bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent'
            }`}
          >
            Tim Freitag Consulting
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#services"
              className={`font-medium transition-colors ${
                isLegalPage
                  ? 'text-white hover:text-emerald-100'
                  : isScrolled
                    ? 'text-slate-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-200'
              }`}
            >
              Leistungen
            </a>
            <a
              href="#process"
              className={`font-medium transition-colors ${
                isLegalPage
                  ? 'text-white hover:text-emerald-100'
                  : isScrolled
                    ? 'text-slate-700 hover:text-emerald-600'
                    : 'text-white hover:text-emerald-200'
              }`}
            >
              Ablauf
            </a>
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsLegalDropdownOpen(!isLegalDropdownOpen)}
                className={`font-medium transition-colors flex items-center gap-1 ${
                  isLegalPage
                    ? 'text-white hover:text-emerald-100'
                    : isScrolled
                      ? 'text-slate-700 hover:text-emerald-600'
                      : 'text-white hover:text-emerald-200'
                }`}
              >
                Rechtliches
                <ChevronDown size={16} className={`transition-transform ${isLegalDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              {isLegalDropdownOpen && (
                <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 z-50">
                  <Link
                    to="/impressum"
                    onClick={() => setIsLegalDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    Impressum
                  </Link>
                  <Link
                    to="/datenschutz"
                    onClick={() => setIsLegalDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    Datenschutz
                  </Link>
                  <Link
                    to="/agb"
                    onClick={() => setIsLegalDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    AGB
                  </Link>
                  <Link
                    to="/haftungsausschluss"
                    onClick={() => setIsLegalDropdownOpen(false)}
                    className="block w-full text-left px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
                  >
                    Gesonderte Haftungsregelung
                  </Link>
                </div>
              )}
            </div>
            <a
              href="https://calendly.com/tim-t-freitag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              Termin buchen
            </a>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${
              isLegalPage ? 'text-white' : isScrolled ? 'text-slate-900' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-xl">
            <a
              href="#services"
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Leistungen
            </a>
            <a
              href="#process"
              className="block px-4 py-3 text-slate-700 hover:bg-slate-50 font-medium"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Ablauf
            </a>
            <div className="px-4 py-2">
              <div className="text-slate-900 font-semibold mb-2">Rechtliches</div>
              <Link
                to="/impressum"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-2 text-slate-700 hover:bg-slate-50 font-medium rounded"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-2 text-slate-700 hover:bg-slate-50 font-medium rounded"
              >
                Datenschutz
              </Link>
              <Link
                to="/agb"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-2 text-slate-700 hover:bg-slate-50 font-medium rounded"
              >
                AGB
              </Link>
              <Link
                to="/haftungsausschluss"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left px-2 py-2 text-slate-700 hover:bg-slate-50 font-medium rounded"
              >
                Gesonderte Haftungsregelung
              </Link>
            </div>
            <a
              href="https://calendly.com/tim-t-freitag/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left px-4 py-3 text-emerald-600 hover:bg-slate-50 font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Termin buchen
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
