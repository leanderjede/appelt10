import React from 'react';
import Image from 'next/image';
const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image 
               fill={true}
                src={'/n1.jpg'}
                alt="Deckenbalkensanierung"
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Deckenbalkensanierung – Sicherheit & Stabilität für alte Bausubstanz
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li>Analyse des Zustands Ihrer Holzbalken.</li>
                <li>Fachgerechte Reparatur oder Verstärkung.</li>
                <li>Schutz vor Holzschäden, Feuchtigkeit & Schädlingsbefall

.</li>
                <li>Auf Wunsch inklusive Brandschutz- & Schallschutzmaßnahmen

.</li>
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
            Substanz erhalten – Schäden frühzeitig erkennen
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Risse, Durchbiegungen oder modriger Geruch sind Warnzeichen für beschädigte Deckenbalken. Wir prüfen die Tragfähigkeit Ihrer Balken, entdecken versteckte Schäden und beraten Sie zu den besten Sanierungsmaßnahmen – individuell und nachhaltig.

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
            src="https://images.unsplash.com/photo-1542081403278-ba5973c25c7a?q=80&w=2054&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
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
            Sanierung mit System & Fachkenntnis
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Je nach Zustand sanieren wir Balken durch Teilersatz, Verstärkungen mit Stahlträgern oder Holzlamellen oder durch komplette Erneuerung. Dabei achten wir auf statische Anforderungen, den Erhalt historischer Bausubstanz und moderne Anforderungen wie Wärmedämmung oder Brandschutz.

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
            src="https://images.unsplash.com/photo-1733049874026-d7319a348727?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
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
            Sicher, sauber & optisch abgestimmt
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere erfahrenen Handwerker arbeiten präzise, sauber und mit Respekt für die bestehende Bausubstanz. Auf Wunsch restaurieren wir sichtbare Balken in traditionellem Stil oder integrieren moderne Elemente für ein harmonisches Gesamtbild – funktional und ästhetisch zugleich.

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
            src="https://images.unsplash.com/photo-1606383446705-bf4d88a741fd?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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