interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
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
                    onNavigate('home');
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
                    onNavigate('home');
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
                <button
                  onClick={() => onNavigate('privacy')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Datenschutzerklärung
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('imprint')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Impressum
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('terms')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  AGB
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('liability')}
                  className="text-slate-400 hover:text-white transition-colors text-left"
                >
                  Gesonderte Haftungsregelung
                </button>
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
