import { DollarSign, TrendingUp, Users, Target } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Results() {
  useScrollReveal();
  const results = [
    {
      icon: DollarSign,
      title: 'Planbare Umsätze',
      description: 'Statt Zufallstreffer: Ein systematischer Vertriebsprozess, der Monat für Monat vorhersagbare Ergebnisse liefert.'
    },
    {
      icon: TrendingUp,
      title: 'Höhere Conversion-Raten',
      description: 'Durch gezielte Optimierung Ihrer Funnel und Kampagnen holen Sie mehr aus jedem Interessenten heraus.'
    },
    {
      icon: Users,
      title: 'Effizientere Teams',
      description: 'Klare Prozesse, strukturierte Abläufe und messbare KPIs machen Ihr Team produktiver und erfolgreicher.'
    },
    {
      icon: Target,
      title: 'Skalierbare Systeme',
      description: 'Marketing- und Sales-Prozesse, die mit Ihrem Wachstum mitwachsen – ohne Chaos und Überlastung.'
    }
  ];


  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Das bekommen Sie als{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Ergebnis
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Messbare Verbesserungen, die sich direkt auf Ihren Unternehmenserfolg auswirken
          </p>
        </div>
      </div>
    </section>
  );
}
