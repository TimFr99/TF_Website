import { ArrowRight, TrendingUp } from 'lucide-react';
import Button from '../ui/Button';
import AnimatedText from '../animations/AnimatedText';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 text-white">
            <div className="hidden md:inline-flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 animate-fade-in" style={{ animationDelay: '0.2s', opacity: 0 }}>
              <TrendingUp size={16} className="text-emerald-400" />
              <span className="text-sm font-medium">Strategisches Wachstum durch bewährte Systeme</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <AnimatedText text="Erfolgsbasiert zum" delay={0.5} />{' '}
              <span className="text-emerald-400">
                <AnimatedText text="skalierbaren Umsatzsystem" delay={0.8} />
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 leading-relaxed animate-fade-in-up" style={{ animationDelay: '1.5s', opacity: 0 }}>
              Sales- und Marketing-Strategien, die tatsächlich funktionieren. Keine Theorie –
              nur praxiserprobte Umsetzung aus jahrelanger Erfahrung.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '1.8s', opacity: 0 }}>
              <a href="https://calendly.com/tim-t-freitag/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <Button size="lg" className="w-full group">
                  <span className="flex items-center justify-center">
                    Beratungsgespräch vereinbaren
                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </a>
              <a href="#services">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Leistungen entdecken
                </Button>
              </a>
            </div>
          </div>

          <div className="hidden lg:flex justify-center items-center animate-fade-in" style={{ animationDelay: '1s', opacity: 0 }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl blur-2xl opacity-50"></div>
              <div className="relative w-[480px] h-[480px] rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
                <img
                  src="/IMG_8514.jpeg"
                  alt="Tim Freitag"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#trust" className="text-white/60 hover:text-white transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
