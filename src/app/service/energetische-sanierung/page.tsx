import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/9-1.jpg'}
                alt="Energetische Sanierung"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Unsere Dienstleistungen für energetische Sanierung umfassen:
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li><strong>Energieberatung:</strong> Ganzheitliche Analyse Ihres Gebäudes und Einsparpotenziale</li>
                <li><strong>Fassadendämmung:</strong> Modernste Wärmedämm-Systeme für Außenwände</li>
                <li><strong>Dachsanierung:</strong> Energetische Optimierung Ihrer Dachflächen</li>
                <li><strong>Fenstererneuerung:</strong> Einbau wärmedämmender Fenster und Türen</li>
                <li><strong>Heizungssanierung:</strong> Effiziente Heizsysteme und erneuerbare Energien</li>
                <li><strong>Förderberatung:</strong> Unterstützung bei der Beantragung von Zuschüssen</li>
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
            Ganzheitliche Energieberatung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Professionelle Energieeffizienz-Analyse mit Thermografie und detailliertem Sanierungsfahrplan. 
            Identifikation der wirtschaftlichsten Maßnahmen für Ihr Gebäude.
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
            Fassadendämmung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Hochwertige Wärmedämmverbundsysteme (WDVS) oder vorgehängte hinterlüftete Fassaden. 
            Reduzierung von Wärmeverlusten und Verbesserung des Wohnkomforts.
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
            Heizungssanierung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Modernisierung Ihrer Heizungsanlage mit effizienten Wärmepumpen, Brennwerttechnik oder 
            Anbindung an erneuerbare Energien für maximale Einsparungen.
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