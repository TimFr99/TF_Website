import { Target, Users, Briefcase, Award } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Trust() {
  useScrollReveal();
  const highlights = [
    {
      icon: Target,
      title: 'Vertriebsleiter mit Führungserfahrung',
      description: 'Aufbau und Leitung erfolgreicher Vertriebsmitarbeiter in wachstumsstarker Branche'
    },
    {
      icon: Briefcase,
      title: 'Unternehmerische Praxis',
      description: 'Operative Erfahrung in der Geschäftsführung und strategischen Unternehmenssteuerung'
    },
    {
      icon: Users,
      title: 'Performance Marketing Experte',
      description: 'Spezialisierung auf bezahlte Werbekampagnen und messbare Conversion-Optimierung'
    },
    {
      icon: Award,
      title: 'Praxisorientierte Umsetzung',
      description: 'Keine Beratertheorie – nur bewährte Strategien aus der echten Business-Welt'
    }
  ];

  return (
    <section id="trust" className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Erfahrung, die{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              zählt
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Über 7 Jahre praktische Erfahrung im Aufbau skalierbarer Vertriebssysteme,
            der Führung im Vertrieb und der strategischen Unternehmenssteuerung
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-slate-100 scroll-reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-100 to-green-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
