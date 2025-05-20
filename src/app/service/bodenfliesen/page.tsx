import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen">
                {/* Background Video */}
               <Image
                src={'/service-img/5-1.webp'}
                alt="bodenfliesen"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl md:text-3xl font-extrabold text-left leading-tight">
            Hochwertige Bodenfliesen für jedes Einsatzgebiet
            </h1>
          
            {/* Paragraph */}
            <ul className="appletlist-disc list-inside max-sm:text-md space-y-3">
    <li>Große Auswahl an Materialien & Designs

</li>
    <li><strong>Fachgerechte Verlegung:</strong> Unser erfahrenes Team verlegt die Fliesen präzise und sorgt für eine gleichmäßige, langlebige Oberfläche.</li>
    <li>Fachgerechte Verlegung mit Präzision</li>
    <li>Beratung zu Pflege & Langlebigkeit

</li>
    <li>Ideal für Innen- & Außenbereiche</li>
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
            Vielfalt in Design und Material
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Bodenfliesen sind mehr als nur funktional – sie gestalten Räume und setzen Akzente. Wir bieten eine große Auswahl an Fliesen in Steinoptik, Holzoptik, Marmor, Beton und vielen anderen Looks. Ob klassisch oder modern – bei uns finden Sie den passenden Stil für Ihr Zuhause oder Gewerbeobjekt.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/service-img/5-1.webp"
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
            Präzise Verlegung durch Fachpersonal
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Die richtige Verlegung ist entscheidend für ein langlebiges und schönes Ergebnis. Unsere Fliesenleger arbeiten präzise und sauber – von der Untergrundvorbereitung bis zum letzten Fugenschliff. Wir garantieren höchste Verarbeitungsqualität und eine perfekte Optik.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="/ap-6.jpg"
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
            Pflegeleicht & widerstandsfähig
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Bodenfliesen sind besonders pflegeleicht, kratzfest und widerstandsfähig gegenüber Feuchtigkeit, Hitze und Chemikalien. Damit eignen sie sich hervorragend für stark beanspruchte Bereiche – sowohl im Innen- als auch im Außenbereich. Wir beraten Sie gern zur richtigen Pflege und Reinigung.

</p>
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
        <div className="w-[550px] h-[350px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 overflow-hidden">
  <img
    loading="lazy"
    src="https://images.pexels.com/photos/11806490/pexels-photo-11806490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
