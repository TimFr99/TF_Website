import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Terms() {
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

        <h1 className="text-4xl font-bold text-slate-900 mb-8">Allgemeine Geschäftsbedingungen</h1>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">Anbieter und Vertragspartner</h2>
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
              1.1 Diese Allgemeinen Geschäftsbedingungen gelten für sämtliche Verträge, Angebote,
              Beratungsleistungen, Projektbegleitungen, Coachings, Workshops, sonstige Dienstleistungen sowie die
              Zurverfügungstellung von Unterlagen und Konzepten der Tim Freitag Holding UG
              (haftungsbeschränkt), nachfolgend Beraterin, gegenüber ihren Auftraggebern, nachfolgend Kunde.
            </p>
            <p className="text-slate-600 leading-relaxed">
              1.2 Die Leistungen richten sich ausschließlich an Unternehmer im Sinne des § 14 BGB. Ein
              Vertragsschluss mit Verbrauchern im Sinne des § 13 BGB ist ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              1.3 Entgegenstehende, abweichende oder ergänzende Geschäftsbedingungen des Kunden werden nicht
              Vertragsbestandteil, auch wenn die Beraterin ihnen nicht ausdrücklich widerspricht. Eine Anerkennung
              erfolgt nur, wenn die Beraterin der Geltung ausdrücklich in Textform zustimmt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              1.4 Soweit in diesen AGB von Textform die Rede ist, genügt E-Mail. Soweit Schriftform verwendet
              wird, ist eine handschriftliche Unterzeichnung oder eine qualifizierte elektronische Signatur
              gemeint, sofern nicht ausdrücklich etwas anderes geregelt ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">2. Vertragsgegenstand und Vertragsart</h2>
            <p className="text-slate-600 leading-relaxed">
              2.1 Gegenstand des Vertrages sind Beratungs- und Dienstleistungen, insbesondere in den Bereichen
              Unternehmensberatung, Vertriebsberatung (online und offline), Unternehmerisches Denken und Handeln,
              Geschäftsmodellentwicklung, Online-Marketing und Plattformstrategien, digitale Infrastruktur und
              Drittanbieter-Software, KI-Tools und Automatisierung sowie Performance-, Trainings- und
              ernährungsphysiologische Beratung.
            </p>
            <p className="text-slate-600 leading-relaxed">
              2.2 Die Beraterin schuldet keinen bestimmten wirtschaftlichen, technischen, organisatorischen oder
              gesundheitlichen Erfolg. Insbesondere werden keine Garantien für Umsatz, Gewinn, Abschlüsse,
              Lead-Qualität, Reichweite, Einstellungsquoten oder sonstige Resultate übernommen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              2.3 Sofern nicht ausdrücklich schriftlich anders vereinbart, handelt es sich um Dienstleistungen im
              Sinne der §§ 611 ff. BGB. Werkvertragliche Erfolge, Abnahmen oder Erfolgshaftung sind nicht
              geschuldet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              2.4 Empfehlungen und Konzepte der Beraterin sind Handlungsvorschläge auf Basis der mitgeteilten
              Informationen und Erfahrungswerte. Die abschließende unternehmerische Entscheidung und Umsetzung
              liegt allein beim Kunden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              3. Art der Leistung – Individualberatung, Abgrenzung Fernunterricht
            </h2>
            <p className="text-slate-600 leading-relaxed">
              3.1 Die Leistungen erfolgen ausschließlich als individuell auf den jeweiligen Kunden zugeschnittene
              Unternehmensberatung. Inhalte, Reihenfolge, Schwerpunkte und Maßnahmen richten sich nach der
              individuellen Ausgangslage, Zielsetzung und Umsetzungssituation des Kunden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              3.2 Gegenstand des Vertrages ist keine standardisierte Wissensvermittlung, kein Lehrgang, keine
              schulische Ausbildung und kein Fernunterricht im Sinne des Fernunterrichtsschutzgesetzes.
            </p>
            <p className="text-slate-600 leading-relaxed">
              3.3 Es erfolgen keine verbindlichen Lernzielkontrollen, keine Prüfungen, keine Zertifizierungen und
              keine systematisch strukturierten Unterrichtseinheiten mit Erfolgskontrolle.
            </p>
            <p className="text-slate-600 leading-relaxed">
              3.4 Etwaig zur Verfügung gestellte Unterlagen, Konzepte, Impulse oder Vorlagen dienen ausschließlich
              der individuellen unternehmerischen Umsetzung im konkreten Kundenfall und stellen kein allgemeines
              Schulungsprogramm dar.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              4. Vertragsschluss, Angebotsannahme, Vorrangdokumente
            </h2>
            <p className="text-slate-600 leading-relaxed">
              4.1 Angebote der Beraterin sind freibleibend, sofern sie nicht ausdrücklich als verbindlich
              bezeichnet sind.
            </p>
            <p className="text-slate-600 leading-relaxed">4.2 Ein Vertrag kommt zustande durch:</p>
            <ul className="list-disc pl-6 text-slate-600 leading-relaxed space-y-2">
              <li>schriftliche oder digitale Annahme eines Angebots, oder</li>
              <li>Bestätigung in Textform (insbesondere per E-Mail), oder</li>
              <li>tatsächliche Leistungsaufnahme durch die Beraterin auf Veranlassung des Kunden, oder</li>
              <li>Zahlung der im Angebot ausgewiesenen Vergütung oder eines vereinbarten Vorschusses durch den Kunden.</li>
            </ul>
            <p className="text-slate-600 leading-relaxed">
              4.3 Maßgeblich für Inhalt, Umfang, Vergütung, Mindestlaufzeiten, Projektphasen, Definitionen
              (insbesondere Qualifikationskriterien) und Leistungsparameter ist vorrangig das jeweilige Angebot
              beziehungsweise der Einzelvertrag. Diese AGB gelten ergänzend.
            </p>
            <p className="text-slate-600 leading-relaxed">
              4.4 Mündliche Nebenabreden bestehen nicht. Abweichungen oder Ergänzungen bedürfen mindestens der
              Textform, sofern nicht im Angebot strengere Form vereinbart ist.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              5. Leistungsumfang, Durchführung, Subunternehmer, Kommunikation
            </h2>
            <p className="text-slate-600 leading-relaxed">
              5.1 Der konkrete Leistungsumfang ergibt sich ausschließlich aus dem Angebot beziehungsweise
              Einzelvertrag. Nicht ausdrücklich vereinbarte Leistungen sind nicht geschuldet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              5.2 Die Beraterin ist in der Ausgestaltung der Leistungserbringung grundsätzlich frei, insbesondere
              hinsichtlich Methode, Vorgehen, Zeiteinteilung und Reihenfolge, soweit dies dem Vertragszweck
              entspricht.
            </p>
            <p className="text-slate-600 leading-relaxed">
              5.3 Die Beraterin ist berechtigt, zur Leistungserbringung Erfüllungsgehilfen und qualifizierte
              Subunternehmer einzusetzen. Ein Anspruch auf Leistungserbringung durch eine bestimmte Person besteht
              nicht, sofern nicht ausdrücklich vereinbart.
            </p>
            <p className="text-slate-600 leading-relaxed">
              5.4 Termine, Fristen und Zeitpläne sind nur verbindlich, wenn sie ausdrücklich als verbindlich
              vereinbart wurden. Im Übrigen handelt es sich um Planwerte.
            </p>
            <p className="text-slate-600 leading-relaxed">
              5.5 Der Kunde stellt sicher, dass Ansprechpartner mit Entscheidungs- und Mitwirkungsbefugnis
              erreichbar sind und notwendige Freigaben ohne schuldhaftes Zögern erteilen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">6. Mitwirkungspflichten des Kunden</h2>
            <p className="text-slate-600 leading-relaxed">
              6.1 Der Kunde ist verpflichtet, sämtliche für die Leistungserbringung erforderlichen Informationen,
              Zugänge, Inhalte und Daten vollständig, richtig und rechtzeitig bereitzustellen. Dies umfasst
              insbesondere Informationen zur Ausgangslage, zum Geschäftsmodell, zu Produkten, Zielgruppen,
              Kapazitäten, Compliance-Vorgaben sowie etwaige interne Richtlinien.
            </p>
            <p className="text-slate-600 leading-relaxed">
              6.2 Der Kunde ist verantwortlich für die Rechtmäßigkeit seiner Inhalte, Aussagen, Angebote und
              Prozesse sowie für deren tatsächliche Umsetzung. Die Beraterin führt keine Rechts- oder Steuerprüfung
              durch.
            </p>
            <p className="text-slate-600 leading-relaxed">
              6.3 Verzögerungen, Mehrkosten oder Qualitätsbeeinträchtigungen, die auf fehlender, verspäteter oder
              fehlerhafter Mitwirkung beruhen, gehen nicht zulasten der Beraterin. Vereinbarte Zeitpläne
              verlängern sich angemessen; zusätzliche Aufwände sind gesondert zu vergüten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              6.4 Der Kunde hat interne Entscheidungen, Freigaben und Ressourcenbereitstellung so zu organisieren,
              dass die Zusammenarbeit ordnungsgemäß durchgeführt werden kann.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              7. Vergütung, Abrechnung, Zahlungsverzug
            </h2>
            <p className="text-slate-600 leading-relaxed">
              7.1 Die Vergütung richtet sich nach dem Angebot beziehungsweise Einzelvertrag. Alle Preise verstehen
              sich zuzüglich gesetzlicher Umsatzsteuer.
            </p>
            <p className="text-slate-600 leading-relaxed">
              7.2 Rechnungen sind sofort ohne Abzug zur Zahlung fällig, sofern im Angebot nichts Abweichendes
              geregelt ist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              7.3 Der Kunde kommt spätestens 7 Kalendertage nach Fälligkeit und Zugang der Rechnung in Verzug,
              ohne dass es einer Mahnung bedarf, sofern nicht gesetzlich eine abweichende Regelung greift.
            </p>
            <p className="text-slate-600 leading-relaxed">
              7.4 Bei Zahlungsverzug ist die Beraterin berechtigt, weitere Leistungen bis zum vollständigen
              Ausgleich aller fälligen Forderungen auszusetzen. Gesetzliche Ansprüche (insbesondere
              Verzugszinsen und Verzugsschaden) bleiben unberührt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              7.5 Sofern Ratenzahlung vereinbart ist, führt der Verzug mit einer Rate zur Fälligkeit der gesamten
              Restforderung, sofern dies im Angebot ausdrücklich vorgesehen ist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              7.6 Werbe-, Media- oder Plattformbudgets sowie sonstige Kosten für Drittanbieter (insbesondere
              Anzeigenkosten, Kampagnenbudgets, Plattformgebühren oder vergleichbare Aufwendungen) sind vom Kunden
              gesondert zu tragen, sofern nicht ausdrücklich schriftlich etwas anderes vereinbart wurde. Solche
              Budgets sind nicht Bestandteil der Vergütung der Beraterin, auch nicht im Rahmen erfolgsabhängiger
              Vergütungsmodelle. Die Verpflichtung zur Tragung dieser Budgets besteht unabhängig vom Eintritt eines
              wirtschaftlichen Erfolges oder vom Entstehen vergütungspflichtiger Zielereignisse.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              8. Mindestlaufzeit, Mindestprojektphase, Fortführung und Beendigung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              8.1 Bei fortlaufenden Projekten, Retainerleistungen oder erfolgsabhängigen Vergütungsmodellen gilt
              die im Angebot festgelegte Mindestlaufzeit oder Mindestprojektphase als verbindlich vereinbart.
            </p>
            <p className="text-slate-600 leading-relaxed">
              8.2 Eine Mindestprojektphase kann insbesondere als Zielkorridor oder Mindestumfang definiert sein,
              zum Beispiel die gemeinsame Akquise bis zu einer festgelegten Anzahl qualifizierter neuer Mitarbeiter
              oder Kunden. Die konkrete Definition ergibt sich aus dem Angebot.
            </p>
            <p className="text-slate-600 leading-relaxed">
              8.3 Während der Mindestlaufzeit oder Mindestprojektphase ist eine ordentliche Kündigung
              ausgeschlossen. Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              8.4 Nach Abschluss der Mindestprojektphase kann die Zusammenarbeit durch Erklärung in Textform
              beendet oder fortgeführt werden. Eine Fortführung bedarf entweder einer neuen Vereinbarung oder einer
              Fortsetzungsbestätigung in Textform, sofern das Angebot eine automatische Verlängerung nicht
              ausdrücklich vorsieht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              9. Erfolgsabhängige Vergütung, Qualifikationskriterien, Nachweis
            </h2>
            <p className="text-slate-600 leading-relaxed">
              9.1 Ist eine Vergütung pro qualifiziertem Neukunden, Mitarbeiter oder sonstigem Zielereignis
              vereinbart, richtet sich die Vergütung ausschließlich nach den im Angebot festgelegten
              Qualifikationskriterien und Nachweisregeln.
            </p>
            <p className="text-slate-600 leading-relaxed">
              9.2 Qualifikationskriterien können insbesondere Mindestanforderungen an Profil, Bedarf, Budget,
              Entscheidungsbefugnis, Eintrittsdatum, Vertragsabschluss, Probezeit oder andere Parameter umfassen.
              Maßgeblich ist allein die Angebotsdefinition.
            </p>
            <p className="text-slate-600 leading-relaxed">
              9.3 Der Kunde ist verpflichtet, qualifizierende Ereignisse, die nach dem Angebot vergütungspflichtig
              sind, unverzüglich mitzuteilen und die erforderlichen Nachweise zu liefern, soweit diese in seiner
              Sphäre liegen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              9.4 Soweit der Kunde die zur Prüfung erforderlichen Informationen trotz angemessener Aufforderung
              nicht bereitstellt, gilt die Qualifikation nach Maßgabe der im Angebot vereinbarten Fiktionen
              beziehungsweise, sofern dort nicht geregelt, nach der plausiblen Dokumentation der Beraterin als
              erbracht.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              10. Leistungsänderungen und Zusatzleistungen (Change Requests)
            </h2>
            <p className="text-slate-600 leading-relaxed">
              10.1 Änderungen, Erweiterungen oder Zusatzwünsche des Kunden, die über den vereinbarten
              Leistungsumfang hinausgehen, stellen Zusatzleistungen dar und sind gesondert zu vereinbaren und zu
              vergüten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              10.2 Eine Vergütungspflicht besteht insbesondere dann, wenn der Kunde zusätzliche Kanäle, zusätzliche
              Zielgruppen, zusätzliche Funnel, zusätzliche Kampagnen, zusätzliche Standorte oder weitere
              Verantwortungsbereiche einbeziehen möchte.
            </p>
            <p className="text-slate-600 leading-relaxed">
              10.3 Die Beraterin ist berechtigt, Zusatzleistungen bis zur schriftlichen Einigung über Umfang und
              Vergütung zurückzustellen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              11. Nutzungsrechte, Eigentum an Konzepten, Nutzung nach Vertragsende
            </h2>
            <p className="text-slate-600 leading-relaxed">
              11.1 Sämtliche von der Beraterin erstellten Konzepte, Strategien, Prozesse, Vorlagen, Inhalte,
              Unterlagen, Präsentationen, Analysen und sonstigen Arbeitsergebnisse bleiben geistiges Eigentum der
              Beraterin, soweit nicht zwingendes Recht entgegensteht.
            </p>
            <p className="text-slate-600 leading-relaxed">
              11.2 Der Kunde erhält für die Dauer des jeweiligen Vertrags ein einfaches, nicht ausschließliches,
              nicht übertragbares und zeitlich auf die Vertragslaufzeit beschränktes Nutzungsrecht zur eigenen
              betrieblichen Verwendung der im Rahmen des Vertrages überlassenen Arbeitsergebnisse.
            </p>
            <p className="text-slate-600 leading-relaxed">
              11.3 Eine Weitergabe an Dritte, Vervielfältigung, Veröffentlichung oder Bearbeitung über den
              vertragsgemäßen Zweck hinaus bedarf der vorherigen Zustimmung in Textform.
            </p>
            <p className="text-slate-600 leading-relaxed">
              11.4 Nutzung nach Vertragsbeendigung: Nach Beendigung des Vertrages endet das eingeräumte
              Nutzungsrecht automatisch. Eine weitere Nutzung der entwickelten Strategien, Systeme oder Konzepte ist
              nur aufgrund einer gesonderten schriftlichen Vereinbarung zulässig.
            </p>
            <p className="text-slate-600 leading-relaxed">
              11.5 Bei Zahlungsverzug oder offenen Forderungen ist die Beraterin berechtigt, die eingeräumten
              Nutzungsrechte bis zur vollständigen Zahlung zu widerrufen beziehungsweise zu suspendieren, soweit
              rechtlich zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">12. Vertraulichkeit</h2>
            <p className="text-slate-600 leading-relaxed">
              12.1 Beide Parteien verpflichten sich, alle nicht öffentlich bekannten Informationen der jeweils
              anderen Partei vertraulich zu behandeln. Dies gilt insbesondere für Geschäftsgeheimnisse, Strategien,
              Zahlen, Kunden- und Mitarbeiterdaten, Kalkulationen, Prozesse und Unterlagen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              12.2 Die Vertraulichkeitspflicht gilt über die Beendigung des Vertrages hinaus.
            </p>
            <p className="text-slate-600 leading-relaxed">
              12.3 Gesetzliche Offenlegungspflichten bleiben unberührt. In diesem Fall ist die andere Partei,
              soweit rechtlich zulässig, vorab zu informieren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              13. Plattformen, Online-Marketing, Drittanbieter
            </h2>
            <p className="text-slate-600 leading-relaxed">
              13.1 Die Beraterin übernimmt keine Haftung für Maßnahmen von Plattformbetreibern, insbesondere nicht
              für Kontosperrungen, Werbekontosperrungen, Anzeigenablehnungen, Reichweitenverluste, Shadowbans,
              Profil- oder Seitenlöschungen, algorithmische Einschränkungen oder Richtlinienänderungen. Dies gilt
              insbesondere für META (Facebook, Instagram), Google, YouTube, TikTok, LinkedIn und vergleichbare
              Plattformen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              13.2 Soweit Drittanbieter-Software, Apps, CRM-Systeme, Tracking-Systeme, Hostinganbieter,
              Zahlungsdienstleister, Automatisierungssoftware oder Cloud-Dienste eingesetzt oder empfohlen werden,
              haftet die Beraterin nicht für technische Störungen, Datenverluste, Sicherheitslücken,
              Hackerangriffe, API-Änderungen, Funktionsänderungen, Systemupdates, Preisanpassungen oder die
              Einstellung von Diensten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              13.3 Die Auswahl, Konfiguration, rechtliche Prüfung und vertragskonforme Nutzung solcher Systeme
              liegt beim Kunden, sofern nicht ausdrücklich anders vereinbart.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">14. KI-Tools</h2>
            <p className="text-slate-600 leading-relaxed">
              14.1 Bei der Nutzung von KI-Tools und automatisierten Systemen kann es zu fehlerhaften,
              unvollständigen, missverständlichen oder veralteten Ergebnissen kommen. Technologische Entwicklungen
              können Empfehlungen kurzfristig überholen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              14.2 Die Beraterin übernimmt keine Haftung für inhaltliche Fehler KI-generierter Inhalte, für
              rechtliche Verstöße durch KI-Nutzung oder für wirtschaftliche Folgen, soweit rechtlich zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              15. Performance-, Trainings- und Ernährungsberatung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              15.1 Leistungen im Bereich Performance, Training oder Ernährung stellen keine medizinische
              Behandlung, Diagnose, Therapie oder Heilbehandlung dar. Es werden keine Heil- oder Wirkversprechen
              abgegeben.
            </p>
            <p className="text-slate-600 leading-relaxed">
              15.2 Der Kunde ist verpflichtet, vor Beginn sowie während der Zusammenarbeit alle relevanten
              Vorerkrankungen, Verletzungen, Einschränkungen, Risikofaktoren, Allergien/Unverträglichkeiten und
              Medikamenteneinnahmen vollständig und wahrheitsgemäß schriftlich offenzulegen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              15.3 Der Kunde verpflichtet sich, sämtliche besprochenen Trainings-, Leistungs- und
              Ernährungsempfehlungen vor Umsetzung eigenverantwortlich ärztlich abklären zu lassen und nur
              umzusetzen, sofern aus ärztlicher Sicht keine Bedenken bestehen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              15.4 Der Kunde verpflichtet sich, bei Beschwerden, Schmerzen, Schwindel, Unwohlsein oder sonstigen
              Auffälligkeiten die Maßnahmen unverzüglich abzubrechen und ärztlichen Rat einzuholen. Der Kunde
              informiert die Beraterin zeitnah über relevante Vorfälle, soweit dies für die weitere Beratung
              erforderlich ist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              15.5 Die Beraterin haftet nicht für gesundheitliche Schäden, Verletzungen, Trainingsfolgen,
              Unverträglichkeiten oder sonstige körperliche Auswirkungen, soweit diese nicht auf vorsätzlichem oder
              grob fahrlässigem Verhalten beruhen. Eine Haftung ist insbesondere ausgeschlossen, wenn der Kunde
              Pflichten nach Ziffer 15.2 bis 15.4 verletzt oder Empfehlungen eigenmächtig abändert.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              16. Kooperationspartner und abgestimmte Angebote
            </h2>
            <p className="text-slate-600 leading-relaxed">
              16.1 Die Beraterin kann zur Erbringung abgestimmter Leistungen mit Kooperationspartnern oder
              Drittunternehmen zusammenarbeiten oder solche empfehlen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              16.2 Kommt zwischen dem Kunden und einem Kooperationspartner ein eigenständiger Vertrag zustande,
              betrifft dieser ausschließlich das jeweilige Drittunternehmen. Die Beraterin wird nicht
              Vertragspartei dieses Drittvertrages.
            </p>
            <p className="text-slate-600 leading-relaxed">
              16.3 Die Beraterin übernimmt keinerlei Haftung für Leistungen, Inhalte, Beratungsergebnisse, Zusagen,
              Verfügbarkeit, Preise oder sonstige Handlungen des Kooperationspartners. Eine gesamtschuldnerische
              Haftung zwischen der Beraterin und dem Kooperationspartner besteht nicht.
            </p>
            <p className="text-slate-600 leading-relaxed">
              16.4 Etwaige Ansprüche des Kunden im Zusammenhang mit Leistungen des Kooperationspartners sind
              ausschließlich gegenüber dem Kooperationspartner geltend zu machen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              17. Leistungen im Rahmen von Drittveranstaltungen und Strategietagen
            </h2>
            <p className="text-slate-600 leading-relaxed">
              17.1 Erbringt die Beraterin Leistungen im Auftrag eines Unternehmens gegenüber dessen Kunden,
              Teilnehmern oder sonstigen Dritten, erfolgt die Leistungserbringung ausschließlich auf Grundlage des
              Vertrages mit dem jeweiligen Auftraggeber.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Ein unmittelbares Vertragsverhältnis zwischen der Beraterin und den Endkunden oder Teilnehmern wird
              nicht begründet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Die Beraterin wird weder Mitveranstalter noch Mitunternehmer noch Gesamtschuldner im Verhältnis zu
              den Endkunden oder sonstigen Dritten.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Etwaige Ansprüche von Endkunden oder Teilnehmern sind ausschließlich gegenüber dem jeweiligen
              Auftraggeber geltend zu machen. Eine Haftung der Beraterin gegenüber Dritten ist, soweit gesetzlich
              zulässig, ausgeschlossen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Auftraggeber stellt sicher, dass seine Endkunden oder Teilnehmer hierüber informiert sind und
              stellt die Beraterin von entsprechenden Ansprüchen Dritter frei, sofern diese aus der
              Vertragsbeziehung zwischen Auftraggeber und Endkunde resultieren.
            </p>

            <p className="text-slate-600 leading-relaxed mt-4">
              17.2 Der Auftraggeber ist für die inhaltliche Einbindung der Leistungen der Beraterin in sein eigenes
              Leistungsangebot, für die Kommunikation gegenüber seinen Kunden sowie für die rechtliche Zulässigkeit
              der gegenüber seinen Kunden abgegebenen Aussagen, Angebote und Leistungsversprechen allein
              verantwortlich.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Auftraggeber prüft eigenverantwortlich, ob und in welcher Form die Inhalte, Impulse oder
              Empfehlungen der Beraterin in seinem Geschäftsmodell, seinen Verträgen oder seinen Kundenbeziehungen
              verwendet werden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              Der Auftraggeber stellt die Beraterin von sämtlichen Ansprüchen Dritter frei, die daraus resultieren,
              dass Inhalte oder Empfehlungen der Beraterin durch den Auftraggeber gegenüber dessen Kunden
              verwendet, abgeändert, erweitert oder in ein eigenes Leistungsversprechen eingebunden wurden.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">18. Haftung</h2>
            <p className="text-slate-600 leading-relaxed">
              18.1 Die Haftung der Beraterin richtet sich ergänzend nach der gesonderten Haftungsregelung, die dem
              jeweiligen Angebot als Anlage beigefügt wird und Vertragsbestandteil ist.
            </p>
            <p className="text-slate-600 leading-relaxed">
              18.2 Die Beraterin haftet nach den gesetzlichen Vorschriften bei Vorsatz und grober Fahrlässigkeit.
            </p>
            <p className="text-slate-600 leading-relaxed">
              18.3 Bei einfacher Fahrlässigkeit haftet die Beraterin nur bei Verletzung wesentlicher
              Vertragspflichten. In diesem Fall ist die Haftung begrenzt auf den vertragstypisch vorhersehbaren
              Schaden.
            </p>
            <p className="text-slate-600 leading-relaxed">
              18.4 Die Haftung ist, außer bei Vorsatz, grober Fahrlässigkeit oder bei Schäden aus der Verletzung
              von Leben, Körper oder Gesundheit, der Höhe nach auf das im jeweiligen Einzelvertrag vereinbarte
              Netto-Gesamthonorar des betroffenen Auftrags begrenzt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              18.5 Eine Haftung für entgangenen Gewinn, Umsatzausfälle, mittelbare Schäden, Folgeschäden,
              Reputationsschäden oder sonstige reine Vermögensschäden ist ausgeschlossen, soweit rechtlich
              zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">19. Verjährung</h2>
            <p className="text-slate-600 leading-relaxed">
              Schadensersatzansprüche des Kunden verjähren innerhalb von zwölf Monaten ab gesetzlichem
              Verjährungsbeginn, sofern sie nicht auf vorsätzlichem oder grob fahrlässigem Verhalten beruhen oder
              zwingende gesetzliche Vorschriften entgegenstehen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">20. Freistellung</h2>
            <p className="text-slate-600 leading-relaxed">
              Der Kunde stellt die Beraterin von sämtlichen Ansprüchen Dritter frei, die aus rechtswidrigen
              Inhalten, unzulässiger Werbung, Wettbewerbsverstößen, Datenschutzverstößen, Marken- oder
              Urheberrechtsverletzungen, Plattformverstößen oder sonstigen Rechtsverletzungen resultieren, sofern
              diese auf Vorgaben, Inhalten, Geschäftsmodellen oder Handlungen des Kunden beruhen. Die Freistellung
              umfasst auch angemessene Rechtsverteidigungskosten.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              21. Aufrechnung und Zurückbehaltungsrecht
            </h2>
            <p className="text-slate-600 leading-relaxed">
              Eine Aufrechnung oder die Geltendmachung eines Zurückbehaltungsrechts ist nur mit rechtskräftig
              festgestellten oder unbestrittenen Forderungen zulässig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              22. Zahlungsausfall, Unsicherheitseinrede, Insolvenz
            </h2>
            <p className="text-slate-600 leading-relaxed">
              22.1 Wird nach Vertragsschluss erkennbar, dass der Anspruch der Beraterin auf Vergütung durch
              mangelnde Leistungsfähigkeit des Kunden gefährdet ist, ist die Beraterin berechtigt, weitere
              Leistungen zu verweigern, bis der Kunde die Vergütung im Voraus zahlt oder eine angemessene
              Sicherheit leistet.
            </p>
            <p className="text-slate-600 leading-relaxed">
              22.2 Dies gilt insbesondere bei Antrag auf Eröffnung eines Insolvenzverfahrens, Eröffnung eines
              Insolvenzverfahrens, Ablehnung der Verfahrenseröffnung mangels Masse, Zahlungseinstellung oder
              wesentlicher Verschlechterung der Vermögensverhältnisse.
            </p>
            <p className="text-slate-600 leading-relaxed">
              22.3 Bereits erbrachte Leistungen bleiben vergütungspflichtig.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">23. Höhere Gewalt</h2>
            <p className="text-slate-600 leading-relaxed">
              Bei Ereignissen höherer Gewalt, die außerhalb des Einflussbereichs der Beraterin liegen, ist die
              Beraterin für die Dauer und im Umfang der Störung von der Leistungspflicht befreit. Hierzu zählen
              insbesondere behördliche Maßnahmen, Gesetzesänderungen, Cyberangriffe, Strom- oder Serverausfälle,
              Pandemien, Naturereignisse sowie sonstige unvorhersehbare Ereignisse. Die Parteien werden sich in
              diesem Fall über angemessene Anpassungen abstimmen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              24. Einbeziehung der gesonderten Haftungsregelung
            </h2>
            <p className="text-slate-600 leading-relaxed">
              24.1 Die Beraterin verwendet ergänzend zu diesen AGB eine gesonderte Haftungsregelung.
            </p>
            <p className="text-slate-600 leading-relaxed">
              24.2 Diese Haftungsregelung ist Bestandteil jedes Angebots und wird dem Kunden bei Angebotsübermittlung
              als Anlage beigefügt.
            </p>
            <p className="text-slate-600 leading-relaxed">
              24.3 Mit Annahme des Angebots bestätigt der Kunde, die beigefügte Haftungsregelung zur Kenntnis
              genommen zu haben und ihrer Geltung ausdrücklich zuzustimmen sowie diese AGB als Vertragsbestandteil
              anzuerkennen.
            </p>
            <p className="text-slate-600 leading-relaxed">
              24.4 Die Haftungsregelung ergänzt und konkretisiert die in diesen AGB enthaltenen
              Haftungsbestimmungen. Im Falle von Widersprüchen gehen die spezielleren Regelungen der gesonderten
              Haftungsregelung vor.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">
              25. Gerichtsstand, anwendbares Recht
            </h2>
            <p className="text-slate-600 leading-relaxed">
              25.1 Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.
            </p>
            <p className="text-slate-600 leading-relaxed">
              25.2 Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz der Beraterin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900 mb-4">26. Salvatorische Klausel</h2>
            <p className="text-slate-600 leading-relaxed">
              Sollte eine Bestimmung dieser AGB ganz oder teilweise unwirksam sein oder werden, bleibt die
              Wirksamkeit der übrigen Bestimmungen unberührt. An die Stelle der unwirksamen Bestimmung tritt die
              gesetzliche Regelung.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}