import React from 'react';
import Counter from './Counter';
import CounterSection from './Counter2';

const Page = () => {
    return (
        <>
        <section className="relative  text-white overflow-hidden  ">
          <div className=" " />
          <div
            className="absolute inset-0 bg-cover bg-center "
            style={{
              backgroundImage:
                'url("https://images.pexels.com/photos/176342/pexels-photo-176342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")',
              filter: "brightness(0.5)"
            }}
          />
          <div className="container mx-auto lg:px-12 px-5 py-24 md:py-32 relative z-10 lg:h-[90vh]">
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-1/2 mb-12 md:mb-0 relative">
                <h1 className="text-5xl text-white md:text-8xl font-bold mb-6 leading-tight ">
                  Über uns
                  <span className="bg-gradient-to-r from-gray-700 via-[#c1a777] to-gray-400 inline-block text-transparent bg-clip-text">
                
                  </span>
                </h1>
                <p className="text-xl mb-5 text-gray-300 ">
                  Bei Appelt-Bauservice ist Bauen mehr als nur ein Beruf – es ist
                  unsere Leidenschaft, unser Handwerk und unser Engagement für höchste
                  Qualität. Unser Unternehmen wurde mit einer klaren Vision gegründet:
                  Hochwertige Bauleistungen aus einer Hand anzubieten. Jedes Projekt,
                  das wir umsetzen, basiert auf unserer Hingabe zu exzellenter
                  Handwerkskunst, höchster Präzision und individuellem Service.
                </p>
              </div>
              <div className="w-full md:w-2/5 md:pl-12 ">
                <div className=" text-white bg-[#000] bg-opacity-10 backdrop-filter md:backdrop-blur-lg relative  rounded-xl p-8 shadow-2xl">
                  <h2 className="text-2xl font-semibold mb-6">
                    Warum uns wählen?;
                    <ul className="space-y-4">
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-3 text-yellow-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                        <span>professionelles Team</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-3 text-green-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                          />
                        </svg>
                        <span>überlegene Qualität</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-3 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        <span>erschwingliche Preise</span>
                      </li>
                      <li className="flex items-center">
                        <svg
                          className="w-6 h-6 mr-3 text-purple-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                          />
                        </svg>
                        <span>über 8 Jahre Erfahrung</span>
                      </li>
                    </ul>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="white"
              />
            </svg>
          </div>
        </section>
        <Counter/>


        <CounterSection/>
        <section className="pt-10 overflow-hidden bg-gray-50 dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16">
  <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
    <div className="grid items-center grid-cols-1 md:grid-cols-2">
      <div>
        <h2 className="text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
        Unser Versprechen

         
        </h2>
        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:mt-8">
        Wir sind stolz darauf, bei jedem Projekt, das wir durchführen, eine qualitativ hochwertige Verarbeitung zu liefern. Unser Team ist bestrebt, die Kundenzufriedenheit sicherzustellen, indem es Projekte pünktlich, innerhalb des Budgets und nach den höchsten Standards abschließt. Wir hören auf die Bedürfnisse unserer Kunden und arbeiten eng mit ihnen zusammen, damit ihre Wunschvorstellung verwirklicht wird.


        </p>
     
      </div>
      <div className="relative">
       
        <img
          className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
          src="/owner.webp"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

      </>
      
    );
}

export default Page;
