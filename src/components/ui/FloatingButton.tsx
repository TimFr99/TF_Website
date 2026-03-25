import { Calendar } from 'lucide-react';

export default function FloatingButton() {
  return (
    <a
      href="https://calendly.com/tim-t-freitag/30min"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
    >
      <span>Zum Termin</span>
      <Calendar size={20} className="group-hover:scale-110 transition-transform" />
    </a>
  );
}
