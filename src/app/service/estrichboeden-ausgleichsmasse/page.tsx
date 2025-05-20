import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/6-1.jpg'}
                alt="Estrichböden und Ausgleichsmasse"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Estrichböden & Ausgleichsmasse – Der perfekte Untergrund für Ihren Boden
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
    <li>Glatte & ebene Flächen für jeden Bodenbelag</li>
    <li>Schnelltrocknende & selbstverlaufende Ausgleichsmasse

</li>
    <li>Ideal für Fußbodenheizungen geeignet</li>
    <li>Fachgerechte Verarbeitung durch Profis</li>
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
            Warum Estrich so wichtig ist
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Estrich bildet die Grundlage für nahezu jeden Bodenbelag. Eine präzise Ausführung sorgt für Ebenheit, Stabilität und Langlebigkeit des späteren Belags. Wir bieten verschiedene Estricharten – je nach Anforderung: Zementestrich, Fließestrich, Schnellestrich oder Trockenestrich.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/6-1.jpg"
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
            Ausgleichsmasse für perfekte Ebenheit
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unregelmäßige oder schiefe Untergründe können spätere Schäden verursachen. Mit hochwertiger Ausgleichsmasse gleichen wir Höhenunterschiede schnell und effizient aus. Selbstverlaufende Spachtelmassen sorgen für eine glatte und belegreife Oberfläche – ideal für Parkett, Fliesen oder Vinyl.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://media.istockphoto.com/id/1127519366/photo/close-up-of-lever-on-ceramic-tiles-on-cement-floor-tiles-installation-tools-and-home.webp?a=1&b=1&s=612x612&w=0&k=20&c=y8wEPXuON-hDFiPpMJQ5HISXF06fKG6m6s0iIkSsakY="
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
            Schnell, sauber & zuverlässig ausgeführt
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Fachkräfte arbeiten präzise, termingerecht und sauber. Ob Estrichverlegung im Neubau oder Bodenausgleich bei Renovierungen – wir beraten Sie individuell und führen alle Arbeiten mit modernster Technik durch. Auf Wunsch auch mit Feuchteschutz oder Dämmung.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://plus.unsplash.com/premium_photo-1682597000932-d7041f42f669?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
