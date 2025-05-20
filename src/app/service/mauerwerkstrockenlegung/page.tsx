import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/9-1.jpg'}
                alt="Mauerwerkstrockenlegung"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Mauerwerkstrockenlegung – Feuchtigkeit dauerhaft beseitigen
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li>Analyse der Feuchtigkeitsursache vor Ort

.</li>
                <li>Auswahl der passenden Trockenlegungstechnik.</li>
                <li>Fachgerechte Ausführung mit Qualitätsgarantie.</li>
                <li>Verhinderung von Schimmel- und Bauschäden</li>
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
            Ursachen erkennen & gezielt handeln
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Feuchtes Mauerwerk entsteht durch aufsteigende Feuchtigkeit, undichte Kellerwände oder schlechte Abdichtungen. Wir analysieren die Ursache direkt bei Ihnen vor Ort und erstellen ein maßgeschneidertes Sanierungskonzept – technisch fundiert und wirtschaftlich sinnvoll.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-1.jpg"
    alt="Service"
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
            Effektive Trockenlegungssysteme
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Je nach Schadensbild kommen unterschiedliche Verfahren zum Einsatz: Horizontalsperren (injektiv oder mechanisch), Sanierputzsysteme, Außen- oder Innenabdichtungen. Alle Maßnahmen zielen darauf ab, Feuchtigkeit dauerhaft fernzuhalten und die Bausubstanz langfristig zu schützen.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-2.jpeg"
    alt="Service"
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
            Schnell, sauber & nachhaltig ausgeführt
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Fachkräfte arbeiten effizient und mit Rücksicht auf Ihre Räumlichkeiten. Wir dokumentieren alle Schritte und setzen ausschließlich hochwertige, geprüfte Materialien ein. Auf Wunsch koordinieren wir auch Folgearbeiten wie Putzsanierung oder Malerarbeiten.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/756901/pexels-photo-756901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    alt="Service"
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