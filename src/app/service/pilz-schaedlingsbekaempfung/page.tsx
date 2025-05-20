import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <img
                src={'https://images.unsplash.com/photo-1573248283101-5fefa4934a9a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt="Bekämpfung von Pilz- und Schädlingsbefall"
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Pilz- & Schädlingsbekämpfung – Effektiv. Nachhaltig. Fachgerecht.
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li>Vor-Ort-Analyse & Schadensdiagnose</li>
                <li>Bekämpfung von echtem Hausschwamm & Holzschädlingen.</li>
                <li>Einsatz geprüfter, umweltverträglicher Mittel.</li>
                <li>Fachgerechte Sanierung geschädigter Bauteile.</li>
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
          <div className="relative overflow-hidden bg-gray-900 pt-16 pb-32 space-y-24  ">
  <div className="relative">
    <div className="lg:mx-auto lg:grid lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-2 lg:gap-24 lg:px-8 ">
      <div className="mx-auto max-w-xl px-6 lg:mx-0 lg:max-w-none lg:py-16 lg:px-0 ">
        <div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Gefahr für Holztragwerke frühzeitig erkennen
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Holzzerstörende Pilze wie der echte Hausschwamm oder Insekten wie der Hausbock können massive strukturelle Schäden verursachen. Wir identifizieren die Ursache, das Ausmaß des Befalls und entwickeln ein gezieltes Bekämpfungs- und Sanierungskonzept – schnell und zuverlässig.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.unsplash.com/photo-1721989095425-5b3e3dd7945e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNwcmF5JTIwYXQlMjAlMjBob21lfGVufDB8fDB8fHww"
    alt="Spray at home"
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
            Geprüfte Verfahren zur dauerhaften Bekämpfung
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Je nach Art des Schädlings oder Pilzes kommen thermische, chemische oder mechanische Verfahren zum Einsatz. Wir verwenden ausschließlich zugelassene Mittel und Methoden, die wir individuell auf die Gebäudesituation abstimmen – selbstverständlich unter Einhaltung aller geltenden Umwelt- und Gesundheitsstandards.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/4176608/pexels-photo-4176608.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Malerarbeiten"
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
            Sanierung & Holzschutz aus einer Hand
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Nach der erfolgreichen Bekämpfung sanieren wir betroffene Holzteile, erneuern tragende Elemente und schützen das Holz langfristig vor erneutem Befall. Dabei achten wir besonders auf statische Sicherheit und optische Harmonie – ideal auch für historische Bauten und Fachwerkhäuser.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/4176550/pexels-photo-4176550.jpeg?auto=compress&cs=tinysrgb&w=600"
    alt="Protective Suit"
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