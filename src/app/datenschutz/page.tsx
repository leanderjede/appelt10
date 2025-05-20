// app/datenschutz/page.tsx
"use client";

import React from "react";

const page = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-bold text-[#782b3a] mb-6">Datenschutzerklärung</h1>

        <div className="space-y-6 text-gray-700 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold">1. Datenschutz auf einen Blick</h2>
            <p>
              Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Nachfolgend informieren wir Sie darüber, welche Daten wir erheben und wie wir sie verwenden.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">2. Verantwortlicher für die Datenverarbeitung</h2>
            <p>
              Appelt Bauservice<br />
              Inhaber: Niklas Appelt<br />
              Karlstraße 5<br />
              16540 Hohen Neuendorf<br />
              Telefon: 0176 24194649<br />
              E-Mail: appeltbauservice@gmail.com
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">3. Erhebung und Speicherung personenbezogener Daten</h2>
            <p>
              Wir erheben personenbezogene Daten nur dann, wenn Sie uns diese im Rahmen einer Kontaktaufnahme (z. B. per E-Mail oder Telefon) freiwillig mitteilen. Dies können z. B. Name, Adresse, Telefonnummer oder E-Mail-Adresse sein. Diese Daten werden ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und ohne Ihre ausdrückliche Zustimmung nicht an Dritte weitergegeben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">4. Zweck der Datenverarbeitung</h2>
            <p>
              Die Verarbeitung erfolgt ausschließlich zur Kontaktaufnahme, Angebotserstellung, Vertragsabwicklung sowie zur Erfüllung gesetzlicher Verpflichtungen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">5. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie es für die oben genannten Zwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen dies vorschreiben.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">6. Ihre Rechte</h2>
            <p>
              Sie haben das Recht:
            </p>
            <ul className="list-disc list-inside pl-4">
              <li>gemäß Art. 15 DSGVO Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten,</li>
              <li>gemäß Art. 16 DSGVO die Berichtigung unrichtiger oder Vervollständigung Ihrer bei uns gespeicherten Daten zu verlangen,</li>
              <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten Daten zu verlangen, soweit keine gesetzlichen Aufbewahrungspflichten entgegenstehen,</li>
              <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer Daten zu verlangen,</li>
              <li>gemäß Art. 20 DSGVO Ihre Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten,</li>
              <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold">7. Widerspruchsrecht</h2>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO verarbeitet werden, haben Sie das Recht, Widerspruch gegen die Verarbeitung einzulegen.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">8. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand April 2025. Wir behalten uns vor, sie bei Bedarf anzupassen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
