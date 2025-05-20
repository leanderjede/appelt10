"use client";

const Counter = () => {
 

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section */}
          <div className="w-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-start lg:items-start items-center gap-4 flex">
              <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
              Unsere Erfahrung

              </h2>
              <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
              Mit jahrzehntelanger Erfahrung in einer Vielzahl von Bausektoren haben wir unsere Fähigkeiten kontinuierlich weiterentwickelt und verfeinert, um zuverlässige, effiziente und innovative Dienstleistungen anzubieten. Unser umfangreiches Wissen und unsere tiefgehende Fachkompetenz ermöglichen es uns, komplexe Projekte präzise und termingerecht umzusetzen. Von der ersten ausführlichen Beratung über die sorgfältige Planung bis hin zur finalen Umsetzung legen wir größten Wert auf eine transparente Kommunikation und enge Zusammenarbeit mit unseren Kunden. Unser engagiertes Team verpflichtet sich zur Exzellenz, achtet auf jedes Detail und stellt sicher, dass sämtliche Arbeiten höchsten Qualitätsstandards entsprechen. Wir streben stets danach, nicht nur die Erwartungen zu erfüllen, sondern sie zu übertreffen — für nachhaltige, funktionale und ästhetisch ansprechende Ergebnisse, auf die Sie sich verlassen können.





              </p>
            </div>
            {/* Counter Display */}
          
          </div>
          {/* Right Section - Image */}
          <img
            className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
            src="https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="about Us image"
          />
        </div>
      </div>
    </section>
  );
};

export default Counter;
