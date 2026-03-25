import { ArrowLeft } from 'lucide-react';

interface LiabilityProps {
  onNavigate: (page: string) => void;
}

export default function Liability({ onNavigate }: LiabilityProps) {
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
          Haftungsregelung und Haftungsausschluss
        </h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Haftungsregelung der</h2>
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
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">1. Geltungsbereich</h2>
            <p className="text-slate-600 leading-relaxed">
              Diese Haftungsregelung gilt für sämtliche Verträge, Beratungsleistungen, Coachings,
              Projektbegleitungen und sonstige Dienstleistungen der Tim Freitag Holding UG
              (haftungsbeschränkt), folgend „Beraterin“ genannt, gegenüber ihren Auftraggebern. Die
              Leistungen richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Charakter der Leistungen</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin erbringt ausschließlich Dienstleistungen im Sinne der §§ 611 ff. BGB. Ein
              bestimmter wirtschaftlicher, unternehmerischer, technischer oder gesundheitlicher Erfolg wird
              nicht geschuldet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sämtliche Empfehlungen stellen unverbindliche Handlungsempfehlungen dar. Die Umsetzung
              erfolgt ausschließlich eigenverantwortlich durch den Kunden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt insbesondere keine Garantie für Marktverhalten,
              Branchenentwicklungen, regulatorische Veränderungen, wirtschaftliche Rahmenbedingungen
              oder sonstige externe Einflussfaktoren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">3. Unternehmerisches Risiko</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Haftung für unternehmerische Entscheidungen des Kunden. Dies
              gilt insbesondere für Investitionen, Geschäftsmodellanpassungen, Marketingbudgets,
              Personalentscheidungen, Preisstrategien, Expansionsmaßnahmen oder
              Finanzierungsentscheidungen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde trägt das vollständige wirtschaftliche Risiko seiner Entscheidungen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Haftung ist ferner ausgeschlossen für Schäden, die daraus resultieren, dass der Kunde
              empfohlene Maßnahmen nicht, verspätet oder abweichend umsetzt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Plattformen und Online-Marketing
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Haftung für Maßnahmen von Plattformbetreibern, insbesondere
              nicht für Kontosperrungen, Anzeigenablehnungen, Reichweitenverluste, Profil- oder
              Seitenlöschungen, Algorithmusänderungen oder Richtlinienänderungen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dies gilt insbesondere für META, Facebook, Instagram, Google, YouTube, TikTok, LinkedIn und
              vergleichbare Plattformen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Entscheidungen dieser Anbieter liegen außerhalb des Einflussbereichs der Beraterin.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Haftung für daraus resultierende Folge- oder Kettenreaktionen, insbesondere
              Umsatzverluste, Reputationsschäden oder Geschäftsunterbrechungen, ist ausgeschlossen,
              soweit gesetzlich zulässig.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Sofern Werbe- oder Marketingmaßnahmen über Plattformen oder Anbieter Dritter durchgeführt
              werden, wird ausschließlich der Kunde Vertragspartner des jeweiligen Plattform- oder
              Werbeanbieters, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde. Die
              Beraterin handelt insoweit lediglich unterstützend oder administrativ im Auftrag des Kunden und
              übernimmt keine eigenen vertraglichen Verpflichtungen gegenüber den Plattformbetreibern.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Soweit im Rahmen von Marketing-, Werbe- oder Vertriebsmaßnahmen Werbe-, Media- oder
              Plattformbudgets eingesetzt werden, werden diese ausschließlich vom Kunden getragen. Solche
              Budgets sind nicht Bestandteil der Vergütung der Beraterin, auch nicht im Rahmen
              erfolgsabhängiger Vergütungsmodelle.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Verpflichtung zur Tragung der Werbebudgets besteht unabhängig vom Eintritt eines
              wirtschaftlichen Erfolges oder vom Entstehen vergütungspflichtiger Zielereignisse.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ein Anspruch auf Erstattung oder Rückforderung eingesetzter Werbebudgets gegen die
              Beraterin ist ausgeschlossen, sofern nicht Vorsatz oder grobe Fahrlässigkeit der Beraterin
              vorliegt.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Drittanbieter und digitale Infrastruktur
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin haftet nicht für technische Störungen, Datenverluste, Sicherheitslücken,
              Hackerangriffe, Systemupdates, API-Änderungen, Funktionsänderungen oder die Einstellung von
              Diensten durch Drittanbieter.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Nutzung externer Software erfolgt auf eigenes Risiko des Kunden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Haftung für Produkte, Dienstleistungen oder Inhalte von
              Drittanbietern.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. KI-Tools</h2>
            <p className="text-slate-600 leading-relaxed">
              Bei der Nutzung von KI-Tools kann es zu fehlerhaften oder unvollständigen Ergebnissen kommen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Haftung für inhaltliche Fehler, rechtliche Verstöße oder
              wirtschaftliche Schäden infolge der Nutzung KI-generierter Inhalte oder Automationen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Technologische Entwicklungen können empfohlene Systeme oder Strategien kurzfristig
              überholen. Eine Pflicht zur nachträglichen Markt- oder Technologieüberwachung besteht nicht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Performance-, Trainings- und Ernährungsberatung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Leistungen im Bereich Performance, Training oder Ernährung stellen keine medizinische Beratung,
              Diagnose oder Therapie dar.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Vor Beginn der Umsetzung ist der Kunde verpflichtet, bestehende oder frühere Erkrankungen,
              Verletzungen, körperliche Einschränkungen, Medikamenteneinnahmen sowie sonstige
              gesundheitliche Risiken vollständig und wahrheitsgemäß schriftlich offenzulegen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde ist verpflichtet, sämtliche besprochenen Trainings-, Leistungs- oder
              Ernährungsempfehlungen vor Umsetzung eigenverantwortlich ärztlich prüfen zu lassen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Umsetzung der Empfehlungen erfolgt ausschließlich auf eigene Gefahr.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde verpflichtet sich, bei Auftreten von Beschwerden, Schmerzen, Schwindel, Unwohlsein
              oder sonstigen gesundheitlichen Auffälligkeiten die Maßnahmen unverzüglich abzubrechen und
              ärztlichen Rat einzuholen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Haftung ist ausgeschlossen für Schäden, die entstehen durch:
            </p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>nicht offengelegte Vorerkrankungen</li>
              <li>eigenmächtige Abweichungen von Empfehlungen</li>
              <li>unsachgemäße Durchführung</li>
              <li>Überbelastung</li>
              <li>Missachtung ärztlicher Hinweise</li>
              <li>Nichtbeachtung von Sicherheitshinweisen</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Haftung für gesundheitliche Schäden, Folgeschäden oder
              langfristige körperliche Beeinträchtigungen, soweit diese nicht auf vorsätzlichem oder grob
              fahrlässigem Verhalten beruhen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">8. Mitwirkungspflichten</h2>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde ist verpflichtet, alle für die Leistungserbringung erforderlichen Informationen
              vollständig und korrekt bereitzustellen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beratung erfolgt auf Grundlage der vom Kunden bereitgestellten Informationen. Für Schäden
              aufgrund unrichtiger, unvollständiger oder verspätet bereitgestellter Angaben wird keine Haftung
              übernommen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">9. Kooperationspartner</h2>
            <p className="text-slate-600 leading-relaxed">
              Kommt zwischen dem Kunden und einem mit der Beraterin kooperierenden Drittunternehmen ein
              eigenständiger Vertrag zustande, betrifft dieser ausschließlich das jeweilige Drittunternehmen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin wird in diesem Fall nicht Vertragspartei des Drittvertrages und übernimmt keinerlei
              Haftung für Leistungen, Inhalte, Ergebnisse oder sonstige Handlungen des Drittunternehmens.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine gesamtschuldnerische Haftung zwischen der Beraterin und dem Kooperationspartner
              besteht nicht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              10. Leistungen im Rahmen von Veranstaltungen oder Schulungsformaten Dritter
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Erbringt die Beraterin Leistungen im Rahmen von Veranstaltungen, Strategietagen, Schulungen
              oder sonstigen Formaten eines Auftraggebers gegenüber dessen Kunden oder Teilnehmern,
              erfolgt die Tätigkeit ausschließlich auf Grundlage des Vertrages mit dem jeweiligen Auftraggeber.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ein unmittelbares Vertragsverhältnis zwischen der Beraterin und den Teilnehmern oder Endkunden
              wird nicht begründet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin haftet ausschließlich gegenüber ihrem jeweiligen Vertragspartner. Eine Haftung
              gegenüber Teilnehmern oder sonstigen Dritten ist, soweit gesetzlich zulässig, ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Mitveranstalterstellung, Mitunternehmerschaft oder gesamtschuldnerische Haftung wird
              ausdrücklich nicht begründet.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              11. Haftung bei Umsatzbeteiligung, Drittleistungen und Produkten des Kunden
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Soweit die Beraterin im Rahmen von Veranstaltungen, Vertriebsmaßnahmen, Marketingaktionen
              oder sonstigen Kooperationen eine umsatzabhängige Vergütung oder Beteiligung an durch den
              Kunden generierten Umsätzen erhält, begründet dies keine inhaltliche Mitverantwortung für die
              vom Kunden oder dessen Endkunden erbrachten Beratungs-, Vermittlungs-, Vertriebs- oder
              Produktleistungen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin ist weder Anbieter, Hersteller, Verkäufer noch Vermittler von Produkten oder
              Dienstleistungen des Kunden, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart
              wurde.
            </p>
            <p className="text-slate-600 leading-relaxed">Dies gilt insbesondere, aber nicht abschließend, für:</p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>Finanz- und Versicherungsprodukte</li>
              <li>Vermögens- oder Anlageberatung</li>
              <li>Coaching- oder Trainingsleistungen</li>
              <li>Nahrungsergänzungsmittel</li>
              <li>Gesundheits- oder Medizinprodukte</li>
              <li>physische Waren oder Handelsprodukte</li>
              <li>digitale Produkte oder Software</li>
              <li>strukturvertriebliche Angebote</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              Eine Haftung für Beratungsfehler, Falschberatung, Aufklärungsversäumnisse, Produktmängel,
              fehlerhafte Inhaltsstoffe, Nebenwirkungen, Garantieversprechen, Werbeaussagen,
              Prospektangaben oder sonstige Pflichtverletzungen des Kunden gegenüber dessen Endkunden
              ist ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin übernimmt keine Aufsichts-, Kontroll-, Prüf- oder Überwachungspflichten
              hinsichtlich der vom Kunden oder dessen Mitarbeitern gegenüber Dritten erbrachten Leistungen
              oder vertriebenen Produkte.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine umsatzabhängige Vergütung begründet weder eine Mitveranstalterstellung, noch eine
              Mitunternehmerschaft, noch eine gesamtschuldnerische Haftung gegenüber Dritten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Soweit Inhalte, Empfehlungen oder Konzepte der Beraterin durch den Kunden gegenüber Dritten
              als eigene Leistungsbestandteile, Garantien, Zusagen oder Vertragsinhalte verwendet, abgeändert
              oder erweitert werden, übernimmt die Beraterin hierfür keine Haftung. Die Verantwortung für die
              rechtliche und inhaltliche Ausgestaltung der gegenüber Dritten abgegebenen Erklärungen liegt
              ausschließlich beim Kunden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Haftung</h2>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin haftet nach den gesetzlichen Vorschriften bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Bei einfacher Fahrlässigkeit haftet sie nur bei Verletzung wesentlicher Vertragspflichten und
              begrenzt auf den vertragstypisch vorhersehbaren Schaden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Haftung ist außer bei Vorsatz oder grober Fahrlässigkeit der Höhe nach auf das im jeweiligen
              Vertrag vereinbarte Nettohonorar begrenzt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Eine Haftung für entgangenen Gewinn, Umsatzausfälle, mittelbare Schäden, Folgeschäden,
              Reputationsschäden oder sonstige Vermögensschäden ist ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Haftungsbeschränkungen gelten nicht bei Verletzung von Leben, Körper oder Gesundheit
              oder bei zwingender gesetzlicher Haftung.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">13. Verjährung</h2>
            <p className="text-slate-600 leading-relaxed">
              Schadensersatzansprüche des Kunden verjähren innerhalb von zwölf Monaten ab dem
              gesetzlichen Verjährungsbeginn, sofern sie nicht auf vorsätzlichem oder grob fahrlässigem
              Verhalten beruhen oder zwingende gesetzliche Vorschriften entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. Freistellung</h2>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde stellt die Beraterin von sämtlichen Ansprüchen Dritter frei, die auf Vorgaben, Inhalten,
              Geschäftsmodellen oder Handlungen des Kunden beruhen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Dies umfasst insbesondere Ansprüche aus Wettbewerbsrecht, Markenrecht, Urheberrecht,
              Datenschutzrecht oder sonstigen regulatorischen Verstößen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Freistellung umfasst auch angemessene Rechtsverteidigungskosten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">15. Salvatorische Klausel</h2>
            <p className="text-slate-600 leading-relaxed">
              Sollte eine Bestimmung dieser Haftungsregelung ganz oder teilweise unwirksam sein oder
              werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der
              unwirksamen Bestimmung tritt die gesetzliche Regelung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}