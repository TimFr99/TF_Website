import { ArrowLeft } from 'lucide-react';

interface PrivacyProps {
  onNavigate: (page: string) => void;
}

export default function Privacy({ onNavigate }: PrivacyProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2 text-emerald-600 hover:text-emerald-700 font-medium mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Zurück zur Startseite
        </button>

        <h1 className="text-4xl font-bold text-slate-900 mb-8">
          Datenschutzerklärung der Tim Freitag Holding UG (haftungsbeschränkt)
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Verantwortlicher</h2>
            <p className="text-slate-600 leading-relaxed">
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <p className="text-slate-600 leading-relaxed">
              Tim Freitag Holding UG (haftungsbeschränkt)
              <br />
              Sitz/Adresse: Ermlandweg 11a
              <br />
              Postleitzahl: 59558 Lippstadt (Deutschland)
              <br />
              Vertreten durch Geschäftsführer: Tim Freitag
              <br />
              Email-Kontakt:{' '}
              <a href="mailto:tim@t-freitag.de" className="text-emerald-600 hover:text-emerald-700">
                info@tim-freitag.de
              </a>
              <br />
              Eingetragen im Handelsregister des Amtsgerichts Paderborn unter der HRB 16602
            </p>
            <p className="text-slate-600 leading-relaxed">
              Für datenschutzrechtliche Anliegen können Sie sich jederzeit an die oben genannten Kontaktdaten wenden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Anwendungsbereich</h2>
            <p className="text-slate-600 leading-relaxed">
              Diese Datenschutzerklärung gilt für die Verarbeitung personenbezogener Daten im Rahmen der
              geschäftlichen Tätigkeit der Tim Freitag Holding UG (haftungsbeschränkt).
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Verarbeitung erfolgt insbesondere im Zusammenhang mit:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Kontaktaufnahme per E-Mail, Telefon oder Messaging-Diensten</li>
              <li>Angebots- und Vertragsabwicklung</li>
              <li>Durchführung individueller Beratungsleistungen</li>
              <li>Kommunikation über Videokonferenz- und Kollaborationstools</li>
              <li>Nutzung von Cloud- und Speicherdiensten</li>
              <li>Zusammenarbeit im Rahmen von Vertriebs-, Recruiting- und Marketingprojekten</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-medium text-slate-800 mb-3">2.1 Website und Online-Präsenz</h3>
            <p className="text-slate-600 leading-relaxed">
              Die Tim Freitag Holding UG (haftungsbeschränkt) betreibt eine öffentlich zugängliche Website als
              digitale Visitenkarte zur Darstellung des Unternehmens und seiner Leistungen.
            </p>

            <h4 className="text-lg font-medium text-slate-800 mb-3 mt-6">Hosting</h4>
            <p className="text-slate-600 leading-relaxed">
           Die Website wird bei dem Anbieter Netlify, Inc., 2325 3rd Street, Suite 296, San Francisco, CA 94107, USA gehostet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Beim Aufruf der Website werden durch den Hostinganbieter automatisch Informationen erfasst
              (sogenannte Server-Logfiles). Dies sind insbesondere:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>IP-Adresse</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>aufgerufene Seiten / Dateien</li>
              <li>übertragene Datenmenge</li>
              <li>Browsertyp und Betriebssystem</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Diese Daten sind technisch erforderlich, um die Website bereitzustellen und die Stabilität sowie
              Sicherheit zu gewährleisten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an
              einer sicheren und stabilen Bereitstellung der Website).
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen erfolgt nicht.
            </p>

            <h4 className="text-lg font-medium text-slate-800 mb-3 mt-6">Domainverwaltung</h4>
            <p className="text-slate-600 leading-relaxed">
              Die Domain wird über den Anbieter IONOS SE, Elgendorfer Str. 57, 56410 Montabaur, Deutschland
              verwaltet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Im Rahmen der technischen Bereitstellung der Domain können ebenfalls personenbezogene Daten
              verarbeitet werden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Kategorien personenbezogener Daten
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Im Rahmen der Geschäftstätigkeit können insbesondere folgende personenbezogene Daten verarbeitet
              werden:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Stammdaten</li>
              <li>Kontaktdaten</li>
              <li>Vertrags- und Angebotsdaten</li>
              <li>Abrechnungs- und Zahlungsdaten</li>
              <li>Kommunikationsinhalte</li>
              <li>Login- und Zugangsdaten</li>
              <li>Projekt- und Leistungsdaten</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Besondere Kategorien personenbezogener Daten im Sinne des Art. 9 DSGVO werden nur verarbeitet,
              sofern hierfür eine rechtmäßige Grundlage besteht und eine entsprechende ausdrückliche vertragliche
              Grundlage oder Weisung vorliegt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">4. Zwecke der Verarbeitung</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Verarbeitung personenbezogener Daten erfolgt zu folgenden Zwecken:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Vertragsanbahnung und Vertragserfüllung</li>
              <li>Durchführung individueller Beratungsleistungen</li>
              <li>Kommunikation mit Geschäftspartnern</li>
              <li>Projektkoordination</li>
              <li>Abrechnung und Buchhaltung</li>
              <li>Dokumentation von Geschäftsvorgängen</li>
              <li>Durchsetzung oder Abwehr rechtlicher Ansprüche</li>
              <li>Sicherstellung der IT-Sicherheit und Systemstabilität</li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-medium text-slate-800 mb-3">
              4.1 Teilnahme an Veranstaltungen und Strategietagen
            </h3>
            <p className="text-slate-600 leading-relaxed">
              Soweit die Tim Freitag Holding UG (haftungsbeschränkt) im Rahmen von Veranstaltungen,
              Strategietagen oder Schulungsformaten personenbezogene Daten von Teilnehmern erhält,
              beispielsweise durch Visitenkarten, direkte Kommunikation oder Gesprächsnotizen, erfolgt die
              Verarbeitung ausschließlich zur Durchführung der jeweiligen Beratungsleistung sowie zur
              geschäftlichen Kontaktpflege im Rahmen der bestehenden oder angebahnten Geschäftsbeziehung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">5. Rechtsgrundlagen</h2>
            <p className="text-slate-600 leading-relaxed">Die Verarbeitung erfolgt auf Grundlage von:</p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Art. 6 Abs. 1 lit. b DSGVO zur Vertragserfüllung oder Durchführung vorvertraglicher Maßnahmen</li>
              <li>Art. 6 Abs. 1 lit. c DSGVO zur Erfüllung gesetzlicher Verpflichtungen</li>
              <li>Art. 6 Abs. 1 lit. f DSGVO auf Grundlage berechtigter Interessen</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">Berechtigte Interessen sind insbesondere:</p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>ordnungsgemäße Geschäftstätigkeit</li>
              <li>IT- und Datensicherheit</li>
              <li>Verhinderung von Missbrauch</li>
              <li>Geltendmachung und Verteidigung von Rechtsansprüchen</li>
              <li>effiziente interne Organisation und Kommunikation</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              6. Verarbeitung im Auftrag von Kunden
            </h2>

            <h3 className="text-xl font-medium text-slate-800 mb-3">6.1</h3>
            <p className="text-slate-600 leading-relaxed">
              Soweit die Tim Freitag Holding UG (haftungsbeschränkt) im Rahmen ihrer Tätigkeit Zugriff auf
              personenbezogene Daten erhält, die im Verantwortungsbereich eines Kunden liegen, erfolgt die
              Verarbeitung ausschließlich im Auftrag und nach Weisung des jeweiligen Kunden gemäß Art. 28 DSGVO.
            </p>
            <p className="text-slate-600 leading-relaxed">
              In diesen Fällen handelt das Unternehmen als Auftragsverarbeiter.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dies betrifft insbesondere die Betreuung von CRM-Systemen, Recruiting-Prozessen,
              Marketingplattformen, Eventmanagementsystemen oder sonstigen Kundensystemen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Erhebung von Leads oder Teilnehmerdaten erfolgt ausschließlich durch die Systeme und unter der
              datenschutzrechtlichen Verantwortung des jeweiligen Kunden.
            </p>

            <h3 className="text-xl font-medium text-slate-800 mb-3 mt-6">6.2</h3>
            <p className="text-slate-600 leading-relaxed">
              Soweit personenbezogene Daten nicht unmittelbar bei der betroffenen Person erhoben werden, sondern
              über einen Vertragspartner, Kunden oder sonstige Dritte übermittelt werden, erfolgt die Verarbeitung
              im Rahmen der gesetzlichen Vorgaben des Art. 14 DSGVO. Die Daten werden ausschließlich zu den in
              dieser Datenschutzerklärung genannten Zwecken verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Kommunikations- und Kollaborationstools
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Zur Durchführung von Beratungsleistungen können Videokonferenz- und Kommunikationstools wie Zoom,
              Microsoft Teams, Google Meet oder WhatsApp Business eingesetzt werden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Nutzung erfolgt ausschließlich zur Durchführung vertraglicher Leistungen und auf Grundlage der
              jeweiligen datenschutzrechtlichen Bestimmungen der Anbieter.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              8. Cloud- und Speicherdienste
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Zur internen Organisation und Dokumentation können Cloud- und Speicherdienste genutzt werden,
              beispielsweise iCloud, Google Drive, Notion oder vergleichbare Dienste.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Verarbeitung erfolgt unter Beachtung der gesetzlichen Vorgaben und geeigneter technischer und
              organisatorischer Schutzmaßnahmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Weitergabe an Dritte</h2>
            <p className="text-slate-600 leading-relaxed">
              Eine Weitergabe personenbezogener Daten erfolgt nur, wenn:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>dies zur Vertragserfüllung erforderlich ist</li>
              <li>eine gesetzliche Verpflichtung besteht</li>
              <li>ein berechtigtes Interesse vorliegt</li>
              <li>eine Einwilligung erteilt wurde</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Externe Dienstleister werden nur im Rahmen der gesetzlichen Vorgaben eingesetzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              10. Datenübermittlung in Drittstaaten
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Eine Übermittlung personenbezogener Daten in Staaten außerhalb der Europäischen Union oder des
              Europäischen Wirtschaftsraums erfolgt nur unter Einhaltung der gesetzlichen Voraussetzungen der Art.
              44 ff. DSGVO.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Soweit Anbieter mit Sitz in Drittstaaten eingesetzt werden, erfolgt die Übermittlung
              personenbezogener Daten auf Grundlage eines Angemessenheitsbeschlusses der Europäischen Kommission
              oder unter Verwendung von Standardvertragsklauseln gemäß Art. 46 DSGVO.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">11. Speicherdauer</h2>
            <p className="text-slate-600 leading-relaxed">
              Personenbezogene Daten werden nur so lange gespeichert, wie dies zur Erfüllung der jeweiligen Zwecke
              erforderlich ist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Gesetzliche Aufbewahrungsfristen, insbesondere nach Handels- und Steuerrecht, bleiben unberührt und
              betragen regelmäßig sechs bis zehn Jahre.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Nach Wegfall des Zwecks und Ablauf gesetzlicher Fristen werden die Daten gelöscht oder gesperrt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              12. Rechte betroffener Personen
            </h2>
            <p className="text-slate-600 leading-relaxed">Betroffene Personen haben das Recht auf:</p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Auskunft gemäß Art. 15 DSGVO</li>
              <li>Berichtigung gemäß Art. 16 DSGVO</li>
              <li>Löschung gemäß Art. 17 DSGVO</li>
              <li>Einschränkung der Verarbeitung gemäß Art. 18 DSGVO</li>
              <li>Datenübertragbarkeit gemäß Art. 20 DSGVO</li>
              <li>Widerspruch gemäß Art. 21 DSGVO</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Zudem besteht das Recht, sich bei einer zuständigen Datenschutzaufsichtsbehörde zu beschweren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              13. Pflicht zur Bereitstellung von Daten
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Die Bereitstellung personenbezogener Daten ist für den Abschluss und die Durchführung von Verträgen
              erforderlich. Ohne diese Daten kann eine Zusammenarbeit nicht erfolgen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              14. Automatisierte Entscheidungsfindung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Eine automatisierte Entscheidungsfindung oder Profiling im Sinne des Art. 22 DSGVO findet nicht
              statt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. Datensicherheit</h2>
            <p className="text-slate-600 leading-relaxed">
              Es werden angemessene technische und organisatorische Maßnahmen getroffen, um personenbezogene Daten
              vor Verlust, Manipulation oder unbefugtem Zugriff zu schützen. Diese Maßnahmen werden regelmäßig
              überprüft und an den Stand der Technik angepasst.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              16. Änderungen dieser Datenschutzerklärung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Diese Datenschutzerklärung kann angepasst werden, um rechtlichen Anforderungen oder Änderungen der
              Geschäftstätigkeit Rechnung zu tragen.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
