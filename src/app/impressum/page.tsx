import React from 'react';

const ImpressumPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-[#782b3a] mt-20 px-6 py-4">
          <h1 className="text-2xl font-bold text-white">Impressum</h1>
          <p className="text-blue-100">Angaben gemäß § 5 TMG</p>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <div className="space-y-6">

            {/* Company */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Firma</h2>
              <p className="text-gray-600">Appelt Bauservice</p>
            </div>

            {/* Owner */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Inhaber</h2>
              <p className="text-gray-600">Niklas Appelt</p>
            </div>

            {/* Address */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Anschrift</h2>
              <p className="text-gray-600">Karlstraße 5<br />16540 Hohen Neuendorf</p>
            </div>

            {/* Contact */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Kontakt</h2>
              <div className="space-y-2">
                <p className="text-gray-600">
                  Telefon: <a href="tel:017624194649" className="text-blue-600 hover:underline">0176 24194649</a>
                </p>
                <p className="text-gray-600">
                  E-Mail: <a href="mailto:appeltbauservice@gmail.com" className="text-blue-600 hover:underline">appeltbauservice@gmail.com</a>
                </p>
              </div>
            </div>

            {/* Responsible for Content */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
              <p className="text-gray-600">Niklas Appelt<br />Karlstraße 5<br />16540 Hohen Neuendorf</p>
            </div>

            {/* Professional Designation */}
            <div className="border-b border-gray-200 pb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Berufliche Bezeichnung</h2>
              <p className="text-gray-600">Handwerker</p>
            </div>

            {/* Dispute Resolution */}
            <div className="pb-2">
              <h2 className="text-lg font-medium text-gray-900 mb-3">Hinweis gemäß § 36 Verbraucherstreitbeilegungsgesetz (VSBG)</h2>
              <p className="text-gray-600">
                Wir sind nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4">
          <p className="text-sm text-gray-500">
            Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ImpressumPage;
