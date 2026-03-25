import { ArrowRight, CheckCircle, Mail, Phone } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import Button from '../ui/Button';

export default function CTA() {
  useScrollReveal();

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Bereit für{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Wachstum?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Vereinbaren Sie jetzt ein unverbindliches Erstgespräch und erfahren Sie,
            wie ich Ihr Unternehmen beim Wachstum unterstützen kann
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="scroll-reveal">
            <div className="bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 rounded-2xl p-8 md:p-12 text-white shadow-2xl mb-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">Was Sie erwarten können</h3>
              <ul className="space-y-6 mb-10">
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">
                    <strong className="text-white">Kostenlose Erstberatung</strong> –
                    30 Minuten intensiver Austausch über Ihre aktuelle Situation
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">
                    <strong className="text-white">Konkrete Quick Wins</strong> –
                    Sie bekommen bereits im Erstgespräch erste umsetzbare Impulse
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">
                    <strong className="text-white">Ehrliche Einschätzung</strong> –
                    Ob und wie eine Zusammenarbeit Sinn macht
                  </span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle className="text-emerald-400 flex-shrink-0 mt-1" size={24} />
                  <span className="text-slate-200">
                    <strong className="text-white">Keine Verkaufstaktiken</strong> –
                    Nur ein offenes Gespräch über Ihre Herausforderungen
                  </span>
                </li>
              </ul>

              <div className="text-center">
                <a href="https://calendly.com/tim-t-freitag/30min" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 group">
                    <span className="flex items-center justify-center">
                      Jetzt Termin buchen
                      <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
