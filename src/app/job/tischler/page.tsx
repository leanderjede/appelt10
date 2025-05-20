
const JobDescription = () => {
  return (
    <>
   

      <div className="min-h-screen bg-[#f8f5f0]">
        {/* Hero Section */}
        <div className="relative bg-red-900 text-white">
          <div className="container mx-auto px-6 py-24 md:py-32 lg:py-40 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">TISCHLER<span className="text-yellow-400">(M/W/D)</span></h1>
           
            
            <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
          </div>
        </div>

        {/* Job Details */}
        <div className="container mx-auto px-6 py-12 md:py-16 lg:py-20 -mt-16 md:-mt-24 lg:-mt-32 relative z-10">
          <div className="bg-white rounded-xl shadow-2xl p-8 md:p-12 lg:p-16">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Benefits Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Deine Vorteile</h2>
                <ul className="space-y-6">
                  <li className="flex items-start">
                    <div className="bg-yellow-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Attraktive Bezahlung</h3>
                      <p className="text-gray-600">Branchengerechte Bezahlung</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-blue-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Hochwertige Ausstattung</h3>
                      <p className="text-gray-600">Modernstes Werkzeug & beste Materialien</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-green-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Optimale Arbeitsbedingungen</h3>
                      <p className="text-gray-600">Klare Strukturen & durchdachte Abläufe</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="bg-purple-100 p-2 rounded-full mr-4">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800">Teamgeist</h3>
                      <p className="text-gray-600">Regelmäßige Team-Events & gute Stimmung</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Application Column */}
              <div>
  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Deine Aufgaben</h2>
  <ul className="space-y-4 mb-8">
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Anfertigung von Möbeln, Türen, Fenstern und Inneneinrichtungen aus Holz und Holzwerkstoffen</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Montage und Einbau der gefertigten Werkstücke beim Kunden oder auf der Baustelle</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Bearbeitung von Holz mittels Maschinen und Handwerkzeugen (z. B. Sägen, Hobeln, Schleifen)</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Reparatur- und Restaurierungsarbeiten an Holzelementen</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Arbeiten nach technischen Zeichnungen und Kundenwünschen</p>
    </li>
  </ul>

  <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">Dein Profil</h2>
  <ul className="space-y-4 mb-8">
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Abgeschlossene Ausbildung als Tischler/Schreiner oder vergleichbare Qualifikation</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Gutes technisches Verständnis und handwerkliches Geschick</p>
    </li>
    <li className="flex items-start">
      <div className="flex-shrink-0 h-6 w-6 text-yellow-500 mr-3">•</div>
      <p className="text-gray-700">Zuverlässige, sorgfältige und selbstständige Arbeitsweise</p>
    </li>
  </ul>

  <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
    <h3 className="text-xl font-bold text-gray-800 mb-4">Jetzt in 30 Sekunden bewerben</h3>
    <p className="text-gray-600 mb-6">Sende uns deine Bewerbung oder rufe uns direkt an!</p>
    <div className="flex flex-col sm:flex-row gap-4">
      <a href="mailto:appeltbauservice@gmail.com">
        <button className="bg-[#8E7444] cursor-pointer hover:bg-[#5d5442] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center w-full">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Per E-Mail bewerben
        </button>
      </a>

      <a href="tel:+4917624194649">
        <button className="bg-red-600 cursor-pointer hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center w-full">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Rückruf anfordern
        </button>
      </a>
    </div>
  </div>
</div>





            </div>
          </div>
        </div>

        {/* Company Branding */}
        <div className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">APPELT BAUSERVICE</h2>
            <p className="text-xl md:text-2xl text-yellow-400 font-medium">ALLES AUS EINER HAND</p>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;