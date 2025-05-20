// import TestimonialSlider from '@/app/component/Ui/ReviewSlider';
import React from 'react';

const Page = () => (
  <div>
  
    <hr className='w-2 bg-[#8e7444] text-[#8e7444]' />
    <section className="bg-gray-100 py-16 px-6" style={{ paddingTop: '200px' }}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl">
          Kostenlose Erstberatung und Vor-Ort-Inspektion
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Holen Sie sich fachkundige Beratung und eine detaillierte Bewertung für Ihr Projekt - komplett kostenlos!
        </p>
        <button className="mt-6 px-6 py-3 bg-[#8e7444] text-white rounded-lg shadow-md hover:bg-[#473a22'] transition">
          Buchen Sie eine kostenlose Beratung
        </button>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          {title: "Keine Verpflichtungen", desc: "Sie können fachkundige Ratschläge ohne Druck oder Verpflichtung einholen. Wir geben ehrliche und berufliche Anleitung und ermöglichen es Ihnen, Ihre Optionen frei zu erforschen, bevor wir eine Entscheidung treffen. Unser Ziel ist es, Sie mit dem richtigen Wissen zu befähigen, keinen Verkauf zu erzwingen." },
          {title: "Genaue Schätzungen", desc: "Wir glauben an Transparenz. Unsere Preisgestaltung ist klar, wettbewerbsfähig und frei von versteckten Gebühren oder unerwarteten Kosten. "},
          {title: "Personalisierte Lösungen", desc: "Jeder Einzelne hat einzigartige Bedürfnisse, und wir stellen unsere Empfehlungen entsprechend zu. Ob Sie einen benutzerdefinierten Plan, spezialisierte Dienste oder fachkundige Erkenntnisse suchen, stellen wir sicher, dass unsere Lösungen perfekt mit Ihren Zielen und Vorlieben übereinstimmen."},
          {title: "Frühere Probleme identifizieren", desc: "Proaktive Bewertung hilft, kostspielige Fehler zu verhindern. Unsere Experten analysieren Ihre Situation gründlich, um potenzielle Herausforderungen zu erkennen, bevor sie zu wichtigen Problemen werden. Dies spart Ihnen Zeit, Geld und unnötigen Stress, indem Sie in einem frühen Stadium Bedenken ausgehen." }
        ].map((item, index) => (

          <div key={index}>
            <div className="border-t-8 border-red-900 border-sol border-brand-secondary shadow-card m-auto flex min-h-fit md:min-h-[290px] max-w-[300px] rounded-xl  p-5 w-full h-full">
              <div className="flex flex-col">
                <div>
                  <h4 className="text-lg pb-4 md:pb-5 font-semibold md:text-xl xl:text-xl 2xl:text-2xl leading-tight text-light-title">
                    {item.title}
                  </h4>
                </div>
                <p className="text-base leading-normal text-light-content text-sm font-normal not-italic">
                  {item.desc}
                </p>
              </div>
            </div>


          </div>
        ))}
      </div>

      {/* How It Works */}
      <div className="p-4 max-w-xl mx-auto">
        <h2 className="font-heading mb-8 text-3xl font-bold lg:text-4xl">
          {/* How It Works – Free Initial Consultation & On-Site Inspection */}
          Wie es funktioniert-KOSTENLOSE Erstberatung und Vor-Ort-Inspektion
                  </h2>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#473a22'] "
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 " />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 ">
              {/* Step 1: Schedule Your Free Consultation */}
              Schritt 1: Planen Sie Ihre kostenlose Beratung


            </p>
            <p className="text-gray-600 ">
              
              {/* Get in touch with us via phone or email to book a free consultation at your convenience. We will arrange a time that works best for you. */}
              Wenden Sie sich telefonisch mit uns in Verbindung, um eine kostenlose Beratung nach Belieben zu buchen. Wir werden eine Zeit arrangieren, die für Sie am besten geeignet ist.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#473a22'] "
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 " />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 ">
              {/* Step 2: On-Site Inspection & Assessment */}
              Schritt 2: Inspektion und Bewertung vor Ort

            </p>
            <p className="text-gray-600 ">
              {/* Our experts will visit your location to assess the project requirements, evaluate the space, and understand your specific needs. */}
              Unsere Experten besuchen Ihren Standort, um die Projektanforderungen zu bewerten, den Raum zu bewerten und Ihre spezifischen Anforderungen zu verstehen.

            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-[#473a22'] "
                >
                  <path d="M12 5l0 14" />
                  <path d="M18 13l-6 6" />
                  <path d="M6 13l6 6" />
                </svg>
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 " />
          </div>
          <div className="pt-1 pb-8">
            <p className="mb-2 text-xl font-bold text-gray-900 ">
              {/* Step 3: Receive Expert Recommendations */}
              Schritt 3: Erhalten Sie Expertenempfehlungen
            </p>
            <p className="text-gray-600 ">
              {/* After the inspection, we will provide you with a detailed overview of potential solutions, estimated costs, and expert advice to help you make an informed decision.. */}
              Nach der Inspektion geben wir Ihnen einen detaillierten Überblick über potenzielle Lösungen, geschätzte Kosten und fachkundige Beratung, um eine fundierte Entscheidung zu treffen.
            </p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-red-900 bg-red-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-white "
                >
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          </div>
          <div className="pt-1 ">
            <p className="mb-2 text-xl font-bold text-gray-900 ">
              {/* Ready! */}
              Bereit!
            </p>
          </div>
        </div>
      </div>



      {/* CTA Section */}
      {/* <TestimonialSlider /> */}
    </section>
  </div>
)

export default Page;
