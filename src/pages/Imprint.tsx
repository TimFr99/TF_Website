import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Impressum() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          to="/"
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </Link>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Impressum</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Angaben gemäß § 5 DDG
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Tim Freitag Holding UG (haftungsbeschränkt)
              <br />
              Ermlandweg 11a
              <br />
              59558 Lippstadt
              <br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Vertretungsberechtigung (Geschäftsführung)
            </h2>
            <p className="text-slate-600 leading-relaxed">Tim Freitag</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Kontakt</h2>
            <p className="text-slate-600 leading-relaxed">
              Telefon:{' '}
              <a href="tel:+4925159686802" className="text-emerald-600 hover:text-emerald-700">
                +49 (0) 251 59 6868 02
              </a>
              <br />
              E-Mail:{' '}
              <a href="mailto:tim@t-freitag.de" className="text-emerald-600 hover:text-emerald-700">
                info@tim-freitag.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Registereintrag</h2>
            <p className="text-slate-600 leading-relaxed">
              Handelsregister: Amtsgericht Paderborn
              <br />
              Registernummer: HRB 16602
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Rechtliche Hinweise</h2>

            <h3 className="text-xl font-medium text-slate-800 mb-3">Haftung für Inhalte</h3>
            <p className="text-slate-600 leading-relaxed">
              Wir sind für eigene Inhalte dieser Seiten nach den allgemeinen Gesetzen verantwortlich.
              Eine allgemeine Pflicht zur Überwachung übermittelter oder gespeicherter fremder
              Informationen besteht nicht (Art. 8 DSA; § 7 DDG). Verpflichtungen zur Entfernung oder
              Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben unberührt.
              Bei Bekanntwerden rechtswidriger Inhalte entfernen wir diese umgehend.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Haftung für Links</h3>
            <p className="text-slate-600 leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter; auf deren Inhalte haben wir
              keinen Einfluss. Für die Inhalte der verlinkten Seiten ist stets der jeweilige
              Anbieter/Betreiber verantwortlich. Rechtswidrige Inhalte waren zum Zeitpunkt der
              Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten
              ist ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
              von Rechtsverletzungen entfernen wir derartige Links umgehend.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">Urheberrecht</h3>
            <p className="text-slate-600 leading-relaxed">
              Die auf dieser Website erstellten Inhalte und Werke unterliegen dem deutschen
              Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
              außerhalb der Grenzen des Urheberrechts bedürfen der vorherigen Zustimmung der
              Rechteinhaber. Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit Inhalte nicht von uns erstellt wurden, werden
              Rechte Dritter beachtet und entsprechende Inhalte gekennzeichnet. Bei Hinweisen auf
              Urheberrechtsverletzungen entfernen wir solche Inhalte umgehend.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              Verbraucherstreitbeilegung (§§ 36, 37 VSBG)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Unsere Leistungen richten sich ausschließlich an Unternehmer (§ 14 BGB). Wir sind weder
              verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}