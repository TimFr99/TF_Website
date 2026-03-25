import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              Tim Freitag Consulting
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Ihr Partner für strategisches Wachstum und nachhaltige Umsatzsysteme
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('services');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Leistungen
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      const element = document.getElementById('process');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Ablauf
                </button>
              </li>
              <li>
                <a href="https://calendly.com/tim-t-freitag/30min" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
                  Termin buchen
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/datenschutz"
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Datenschutzerklärung
                </Link>
              </li>
              <li>
                <Link
                  to="/impressum"
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Impressum
                </Link>
              </li>
              <li>
                <Link
                  to="/agb"
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  AGB
                </Link>
              </li>
              <li>
                <Link
                  to="/haftungsausschluss"
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Gesonderte Haftungsregelung
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Tim Freitag Consulting. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
