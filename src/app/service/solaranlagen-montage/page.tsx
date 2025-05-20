import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/9-1.jpg'}
                alt="Solaranlagen-Montage"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für Solaranlagen-Montage umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li><strong>Photovoltaik-Anlagen:</strong> Professionelle Montage von leistungsstarken Solarpanelen</li>
                <li><strong>Individuelle Planung:</strong> Maßgeschneiderte Lösungen für Ihr Dach und Energiebedarf</li>
                <li><strong>Komplettinstallation:</strong> Von den Modulen bis zum Wechselrichter aus einer Hand</li>
                <li><strong>Balkonkraftwerke:</strong> Mini-PV-Anlagen für Mieter und Eigentümer</li>
                <li><strong>Speicherlösungen:</strong> Batteriesysteme für mehr Unabhängigkeit vom Netz</li>
                <li><strong>Wartung und Service:</strong> Regelmäßige Überprüfung für maximale Effizienz</li>
            </ul>
              <button className="px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]">JETZT KONTAKTIEREN</button>
            {/* Google Rating */}
            <div className="mt-6 text-left">
              <p className="text-lg">
              
                <span className="ml-2"></span>
              </p>
            </div>
          </div>
              </div>  

              {/* sections */}
          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Photovoltaik-Montage
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Fachgerechte Installation von Hochleistungs-Solarmodulen auf Schräg- und Flachdächern. 
            Optimale Ausrichtung für maximale Energieausbeute.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-[550px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full"
            src="/service-img/ap-1.jpg"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Individuelle Planung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Dachanalyse, Ertragsberechnung und maßgeschneiderte Konzepte für Ihren Energiebedarf. 
            Berücksichtigung aller baulichen und rechtlichen Rahmenbedingungen.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-[550px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full"
            src="/service-img/ap-2.jpeg"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Speichersysteme
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Installation moderner Batteriespeicher für mehr Unabhängigkeit. 
            Intelligente Steuerungssysteme für optimalen Eigenverbrauch.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={647}
            height={486}
            className="w-[550px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full"
            src="/service-img/9-4.jpg"
          />
        </div>
      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Page;