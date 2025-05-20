import Image from 'next/image';
import React from 'react';

const Page = () => {
    return (
        <div className='bg-gray-900'>
           <div className="relative w-full h-screen ">
                {/* Background Video */}
               <Image
                src={'/service-img/1.png'}
                alt="construction wensite"
                fill={true}
                className="w-full h-screen object-cover"
                />
          
                {/* Overlay Content */}
                <div className="absolute mt-10 inset-0 flex flex-col justify-center items-start space-y-2 text-white bg-[#01010162] bg-opacity-10 px-4 md:px-12">
            {/* Header */}
            <h1 className="text-2xl  max-sm:text-xl md:text-3xl font-extrabold text-left leading-tight">
            {/* Our Drywall and Plastering Services Include: */}
            Kostenlose Erstberatung & Vor-Ort-BesichtigungNutzen Sie unser kostenloses Angebot, um den ersten Schritt in Richtung Ihres Projekts zu machen.:
            </h1>
          
            {/* Paragraph */}
            <ul className="list-disc list-inside max-sm:text-md space-y-3">
            <li> Persönliche Beratung durch unsere Expert:innen </li>
            <li> Vor-Ort-Analyse Ihrer Anforderungen </li>
 <li> <strong> Ausgezeichnete Isolationswerte: </strong> reduziert die Heizkosten und erhöht den lebenden Komfort. </li>
 <li> Klärung aller offenen Fragen </li>
 <li> Individuelles Angebot im Anschluss</li>
  </ul>
              <button className = "px-5 mt-10 py-5 max-sm:px-3 max-sm:py-3 bg-[#241d11]"> Kontakt </button> 
            {/* Google Rating */}
            <div className="mt-6 text-left">
              <p className="text-lg">
                <span className="text-[#ff9900] font-bold">5.0 ★★★★★</span> 
                <span className="ml-2">29+ </span>
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
          <div>
          
          </div>
          <div className="mt-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#8e7444]">
            Warum eine Erstberatung vor Ort wichtig ist


            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Durch den direkten Kontakt vor Ort können wir Ihre Wünsche und Anforderungen besser verstehen. Das ermöglicht eine präzisere Planung und spart langfristig Zeit und Kosten. Unsere Erfahrung zeigt, dass viele Missverständnisse durch persönliche Gespräche vermieden werden können.



            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
          
            className="w-[550px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full "
            style={{ color: "transparent" }}
            src="/service-img/1.png"
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
            Was Sie bei der Besichtigung erwartet

            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Unsere Fachkräfte nehmen sich Zeit, um Ihre Räumlichkeiten oder das Projektumfeld genau zu begutachten. Dabei achten wir auf alle Details, die für eine erfolgreiche Umsetzung wichtig sind. Selbstverständlich beantworten wir alle Ihre Fragen direkt vor Ort.



            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-ml-48 pr-6 md:-ml-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            alt="Inbox user interface"
            loading="lazy"
          
            className="w-[550px] rounded-xl bg-cover shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full "
            style={{ color: "transparent" }}
            src="https://images.unsplash.com/photo-1693594559531-e057f85f5ff0?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            So einfach vereinbaren Sie einen Termin
            </h2>
            <p className="mt-4 text-lg text-gray-300">
            Sie erreichen uns telefonisch, per E-Mail oder über unser Online-Formular. Wir melden uns innerhalb von 24 Stunden und schlagen Ihnen einen passenden Termin vor. Der gesamte Service ist für Sie völlig kostenlos und unverbindlich.



            </p>
            
          </div>
        </div>
      </div>
      <div className="mt-12 sm:mt-16 lg:mt-0">
        <div className="-mr-48 pl-6 md:-mr-16 lg:relative lg:m-0 lg:h-full lg:px-0">
          <img
            loading="lazy"
            width={646}
            height={485}
            className="w-[550px] rounded-xl shadow-2xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full "
            style={{ color: "transparent" }}
            src="https://images.unsplash.com/photo-1731871688430-a3e509d9227e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhc3RlciUyMHdvcmt8ZW58MHx8MHx8fDA%3D"
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
