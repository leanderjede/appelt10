import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/r-1.jpg'}
                alt="painting services"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Professionelle Malerarbeiten für Innen- und Außenbereiche
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
    <li>Innen- und Außenanstriche aller Art</li>
    <li>Kreative Wandgestaltung & moderne Techniken.</li>
    <li>Fachgerechte Vorbereitung aller Oberflächen</li>
    <li>Verwendung hochwertiger und umweltfreundlicher Farben.</li>
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
            Individuelle Beratung und Farbkonzepte
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Jeder Raum hat seinen eigenen Charakter – wir helfen Ihnen dabei, das passende Farbkonzept zu finden. Ob klassisch, modern oder kreativ – gemeinsam entwickeln wir die perfekte Lösung für Ihre Wünsche. Bei der Farbwahl berücksichtigen wir Lichtverhältnisse, Raumgröße und Ihre individuellen Vorstellungen.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/7509752/pexels-photo-7509752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Service"
    style={{ color: "transparent" }}
    className="w-full h-full object-cover"
  />
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
            Sorgfältige Ausführung & höchste Qualität
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Maler arbeiten präzise, sauber und mit größtem Respekt für Ihr Eigentum. Wir schützen Möbel und Böden, bereiten die Wände sorgfältig vor und sorgen für ein perfektes Endergebnis. Qualität und Kundenzufriedenheit stehen bei uns an erster Stelle.

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
    src="https://plus.unsplash.com/premium_photo-1681486466119-5b9e213a610c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            Malerarbeiten vom Profi – alles aus einer Hand
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Von der ersten Beratung bis zum letzten Pinselstrich begleiten wir Sie durch das gesamte Projekt. Wir koordinieren alle Arbeitsschritte effizient und transparent, damit Sie sich um nichts kümmern müssen. Auch Sonderwünsche oder kurzfristige Termine setzen wir flexibel um.

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
    src="https://images.pexels.com/photos/1669754/pexels-photo-1669754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
