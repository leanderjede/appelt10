import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Image */}
               <Image
                src={'/service-img/r-2.jpg'}
                alt="Holzboden verlegen"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Holzboden verlegen – Natürlich. Edel. Zeitlos.
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
                <li>Große Auswahl an Holzarten & Verlegemustern

.</li>
                <li>Fachgerechte Untergrundvorbereitung.</li>
                <li>Verlegung schwimmend oder verklebt</li>
                <li>Auf Wunsch inkl. Schleifen & Versiegeln</li>
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
            Individuelle Beratung & Holzvielfalt
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Jede Holzart hat ihren eigenen Charakter – wir helfen Ihnen, den perfekten Boden für Ihre Räume zu finden. Ob klassisches Eichenparkett, edler Nussbaum oder lebhafte Lärche: Gemeinsam wählen wir das passende Material, Verlegemuster und die Oberflächenbehandlung aus.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/1249611/pexels-photo-1249611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
            Professionelle Verlegung mit System
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Ein schöner Holzboden braucht die richtige Technik. Unsere Bodenleger prüfen den Untergrund, gleichen Unebenheiten aus und verlegen das Holz fachgerecht – schwimmend, vollflächig verklebt oder auf Trägersystemen. Das Ergebnis: Ein langlebiger, stabiler Boden mit perfektem Finish.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/ap-10.jpeg"
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
            Nachhaltig & pflegeleicht
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Holzböden stammen aus nachhaltiger Forstwirtschaft und werden mit natürlichen Ölen oder Lacken versiegelt. Sie sind leicht zu reinigen, langlebig und sorgen für ein angenehmes Raumklima. Auch bei Renovierungen bieten wir Schleif- und Pflegearbeiten für bestehenden Holzboden an.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/ap-11.jpeg"
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