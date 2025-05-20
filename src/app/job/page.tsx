import Link from 'next/link';
import React from 'react';

const JobsPage = () => {
  const positions = [
    'Fliesenleger',
    'Bodenleger',
    'Maurer',
    'Zimmerer',
    'Dachdecker',
    'Maler',
    'Tischler',
    'Pflasterer/Garten-Landschaftsbauer'
  ];

  const benefits = [
    'familienfreundliche Arbeitszeiten',
    'leistungsgerechte Bezahlung',
    'Fort-und Weiterbildung',
    'innovative abwechselnde Arbeiten',
    'klare Strukturen und Kommunikation',
    'freundliches Team',
    'evtl. Firmenwagen (nach Absprache)',
    'individuelle Förderung'
  ];

  return (
    <div className="min-h-screen  bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      
      <div className="max-w-4xl mt-20 mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Wir suchen Verstärkung!
          </h1>
          <p className="mt-3 text-xl text-gray-500">
            Werden Sie Teil unseres Teams und gestalten Sie mit uns die Zukunft.
          </p>
        </div>

        <div className="bg-white shadow rounded-lg overflow-hidden">
          {/* Positions Section */}
          <div className="px-6 py-8 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Aktuelle Stellenangebote</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {positions.map((position, index) => (
                <Link key={index} className="flex items-center p-4 bg-[#f8f5f0] rounded-lg" href={`/job/${position.toLowerCase()}`}>
                  <svg className="h-6 w-6 text-[#f8f5f0]0 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  <span className="text-lg font-medium text-gray-700">{position}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="px-6 py-8 border-b border-gray-200 bg-gray-50">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Das bieten wir Ihnen</h2>
            <ul className="space-y-4">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-lg text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA Section */}
         
        </div>
      </div>
    </div>
  );
};

export default JobsPage;