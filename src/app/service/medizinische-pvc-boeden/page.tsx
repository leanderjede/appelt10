import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/4-4.jpg'}
                alt="painting services"
                fill={true}
                quality={100}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Medizinische PVC-Böden – Hygienisch, langlebig & pflegeleicht
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
    <li>Fugenarm & leicht zu reinigen</li>
    <li>Rutschhemmend und antistatisch</li>
    <li>Beständig gegen Chemikalien und Desinfektionsmittel</li>
    <li>In vielen Farben und Designs verfügbar</li>
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
          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24 mt-10 ">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Hygienische Lösungen für den Gesundheitsbereich
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Medizinische Einrichtungen benötigen spezielle Bodenlösungen, die hygienisch, belastbar und pflegeleicht sind. Unsere PVC-Böden sind nahtlos verlegbar, was das Eindringen von Schmutz und Bakterien verhindert – ideal für OP-Räume, Patientenzimmer und Behandlungsbereiche.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-3.jpeg"
    alt="Service"
    className="w-full h-full object-cover"
    style={{ color: "transparent" }}
  />
</div>

</div>

        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 lg:col-start-2">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Sicherheit und Komfort im Fokus
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Neben der Hygiene ist auch die Sicherheit entscheidend. Unsere Böden sind rutschhemmend, antistatisch und dämpfen Geräusche – das sorgt für ein angenehmes Arbeits- und Pflegeumfeld. Gleichzeitig sind sie äußerst strapazierfähig und langlebig, selbst bei hoher Beanspruchung.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
  <img
    alt="Malerarbeiten"
    loading="lazy"
    src="/service-img/ap-4.jpeg"
    className="w-full h-full object-cover"
  />
</div>

        </div>
      </div>
    </div>
  </div>

  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Individuelle Beratung & fachgerechte Verlegung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Wir beraten Sie umfassend zu Materialwahl, Design und Verlegetechnik – abgestimmt auf Ihre Bedürfnisse und Räumlichkeiten. Unsere geschulten Fachkräfte sorgen für eine präzise und schnelle Verlegung, auch bei laufendem Betrieb. Auf Wunsch übernehmen wir auch die Demontage alter Bodenbeläge.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
      <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">

      <div className="w-[550px] h-[350px] rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 overflow-hidden">
  <img
    alt="Malerarbeiten"
    loading="lazy"
    src="/ap-5.webp"
    className="w-full h-full object-cover"
  />
</div>
</div>

      </div>
    </div>
  </div>
</div>

        </div>
    );
}

export default Page;
