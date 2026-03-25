import { TrendingUp, Target, Zap, BarChart3, Rocket, CheckCircle, Users, Network } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

interface ServicesProps {
  onNavigate?: (page: string) => void;
}

export default function Services({ onNavigate }: ServicesProps) {
  useScrollReveal();
  const services = [
    {
      icon: Target,
      title: 'Vertriebsstrategie & Sales-Optimierung',
      description: 'Aufbau skalierbarer Vertriebsprozesse für nachhaltiges Wachstum',
      benefits: [
        'Strukturierte Sales-Pipeline-Entwicklung',
        'Optimierung der Conversion-Raten',
        'Team-Coaching & Führungskräfte-Training',
      ],
      gradient: 'from-emerald-500 to-green-500',
      offset: false
    },
    {
      icon: Zap,
      title: 'Performance Marketing & Paid Ads',
      description: 'Datengetriebene Werbekampagnen mit messbarem ROI',
      benefits: [
        'Meta Ads & Facebook-Marketing',
        'Kampagnen-Optimierung & A/B-Testing',
        'Conversion-Tracking & Analytics'
      ],
      gradient: 'from-green-500 to-emerald-500',
      offset: false
    },
    {
      icon: Rocket,
      title: 'Praxisnahe Implementierung',
      description: 'Hands-on-Umsetzung für schnelle und nachhaltige Ergebnisse',
      benefits: [
        'Keine Theorie – direkte Umsetzung',
        'Begleitung bis zur erfolgreichen Etablierung',
        'Pragmatische Lösungen für echte Probleme',
        'Kontinuierliche Optimierung & Anpassung'
      ],
      gradient: 'from-green-500 to-blue-500',
      offset: false
    },
    {
      icon: Users,
      title: 'Offline-Vertriebsstrategien für Vertriebsteams',
      description: 'Bewährte Methoden für den Aufbau von Kunden und Vertriebsteams',
      benefits: [
        'Aufbau effizienter Vertriebsteams',
        'Strukturierte Akquise-Prozesse',
        'Performance-Tracking & KPI-Management'
      ],
      gradient: 'from-blue-500 to-emerald-500',
      offset: true
    },
    {
      icon: Network,
      title: 'Kombination Online & Offline-Vertrieb',
      description: 'Empfehlungsfunnels, KI-Tools und hybride Vertriebsstrategien',
      benefits: [
        'Empfehlungsmarketing & Referral-Systeme',
        'Omnichannel-Vertriebsstrategien',
        'Integration digitaler und persönlicher Touchpoints'
      ],
      gradient: 'from-emerald-500 to-green-500',
      offset: true
    }
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Meine{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Leistungen
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Von der Strategie bis zur Umsetzung – ich unterstütze Sie dabei,
            messbare Ergebnisse zu erzielen und Ihr Unternehmen nachhaltig zu skalieren
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 scroll-reveal"
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-200 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-8 md:max-w-[calc(66.666%-1rem)] md:mx-auto lg:max-w-[calc(66.666%-1.33rem)]">
          {services.slice(3).map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index + 3}
                className="group bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 rounded-2xl p-8 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 scroll-reveal"
                style={{ transitionDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>

                <p className="text-slate-200 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="text-emerald-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-slate-200 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-600 mb-6">
            Sie sind sich nicht sicher, welche Leistung für Sie die richtige ist?
          </p>
          <a href="https://calendly.com/tim-t-freitag/30min" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Kostenlose Erstberatung vereinbaren
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
