import { Search, Lightbulb, Rocket, TrendingUp } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function Process() {
  useScrollReveal();
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Analyse & Diagnose',
      description: 'Detaillierte Bestandsaufnahme Ihrer aktuellen Situation: Sales-Prozesse, Marketing-Aktivitäten, Team-Performance und bestehende Systeme.',
      details: [
        'IST-Analyse Ihrer Vertriebsstrukturen',
        'Identifikation von Bottlenecks und Quick Wins',
        'Markt- und Wettbewerbsanalyse',
        'Bewertung bestehender Marketing-Maßnahmen'
      ]
    },
    {
      number: '02',
      icon: Lightbulb,
      title: 'Strategie & Konzept',
      description: 'Entwicklung einer maßgeschneiderten Wachstumsstrategie basierend auf bewährten Frameworks und Ihrer individuellen Situation.',
      details: [
        'Klare Zieldefinition und KPI-Framework',
        'Priorisierung nach Impact und Umsetzbarkeit',
        'Ressourcenplanung und Budgetallokation',
        'Roadmap mit konkreten Meilensteinen'
      ]
    },
    {
      number: '03',
      icon: Rocket,
      title: 'Umsetzung & Implementation',
      description: 'Hands-on Begleitung bei der praktischen Umsetzung – von der ersten Kampagne bis zur vollständigen Integration in Ihre Prozesse.',
      details: [
        'Aufbau und Optimierung von Kampagnen',
        'Individuelle Beratung Ihres Teams',
        'Implementierung von Tools und Prozessen',
        'Kontinuierliche Begleitung in der Praxis'
      ]
    },
    {
      number: '04',
      icon: TrendingUp,
      title: 'Optimierung & Skalierung',
      description: 'Laufende Performance-Überwachung, datenbasierte Optimierung und systematische Skalierung erfolgreicher Maßnahmen.',
      details: [
        'Regelmäßiges Performance-Monitoring',
        'A/B-Testing und kontinuierliche Verbesserung',
        'Skalierung erfolgreicher Kampagnen',
        'Anpassung an neue Marktbedingungen'
      ]
    }
  ];

  return (
    <section id="process" className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            So arbeiten wir{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              zusammen
            </span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ein strukturierter Prozess von der Analyse bis zur nachhaltigen Skalierung
          </p>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                } gap-8 items-center scroll-reveal`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <div className="flex-1 w-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 hover:shadow-2xl hover:bg-white/15 transition-all duration-300 relative">
                    <div className="md:hidden absolute top-4 right-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-green-500 rounded-lg flex items-center justify-center shadow-lg">
                        <Icon className="text-white" size={20} />
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="hidden md:block text-6xl font-bold text-white/20">
                        {step.number}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-3 pr-16 md:pr-0">
                          {step.title}
                        </h3>
                        <p className="text-slate-300 leading-relaxed mb-6">
                          {step.description}
                        </p>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-emerald-400 mt-1">•</span>
                              <span className="text-slate-300 text-sm">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="hidden md:flex flex-shrink-0">
                  <div className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center shadow-xl">
                    <Icon className="text-white" size={40} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white text-center border border-white/20 scroll-reveal">
          <h3 className="text-2xl font-bold mb-4">
            Transparent, strukturiert und ergebnisorientiert
          </h3>
          <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-6">
            Sie wissen zu jedem Zeitpunkt, wo Sie stehen, was als nächstes passiert
            und welche Ergebnisse Sie erwarten können. Keine Black Box, sondern
            vollständige Transparenz über alle Schritte.
          </p>
          <a href="https://calendly.com/tim-t-freitag/30min" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Erstgespräch vereinbaren
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
