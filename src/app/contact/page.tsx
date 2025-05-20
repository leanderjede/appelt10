import React from 'react';
 



const Page = () => {
    return (
        <div>
            <>
  {/* source https://tailblocks.cc/ */}
  <section className="text-gray-600 body-font relative">
    <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          frameBorder={0}
          title="map"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Appelt construction service  Karlstrasse 5&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
          <div className="lg:w-1/2 px-6">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            Adresse


            </h2>
            <p className="mt-1">
            <>
  Karlstraße 5<br />
  16540 Hohen Neuendorf
</>

 
            </p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
            E-MAIL
            </h2>
            <a className="text-[#f8f5f0]0 leading-relaxed" href="mailto:appeltbauservice@gmail.com">appeltbauservice@gmail.com

</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
            Telefonnummer


            </h2>
            <p className="leading-relaxed">+4917624194649

</p>
          </div>
        </div>
      </div>
      <form action="send_email.php" method="POST" className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
  <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">
    Kontakt aufnehmen
  </h2>
  <p className="leading-relaxed mb-5 text-gray-600">
    {/* Optionaler Beschreibungstext */}
  </p>

  <div className="relative mb-4">
    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
      Name
    </label>
    <input
      type="text"
      id="name"
      name="name"
      className="w-full bg-white rounded border border-gray-300 focus:border-[#f8f5f0] focus:ring-2 focus:ring-[#e0d3bb] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      required
    />
  </div>

  <div className="relative mb-4">
    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
      Email
    </label>
    <input
      type="email"
      id="email"
      name="email"
      className="w-full bg-white rounded border border-gray-300 focus:border-[#f8f5f0] focus:ring-2 focus:ring-[#e0d3bb] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      required
    />
  </div>

  <div className="relative mb-4">
    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
      Nachricht
    </label>
    <textarea
      id="message"
      name="message"
      className="w-full bg-white rounded border border-gray-300 focus:border-[#f8f5f0] focus:ring-2 focus:ring-[#e0d3bb] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      required
    />
  </div>

  <button
    type="submit"
    className="text-white bg-[#473a22] border-0 py-2 px-6 focus:outline-none hover:bg-[#8e7444] rounded text-lg"
  >
    Senden
  </button>
</form>

    </div>
  </section>
</>

        </div>
    );
}

export default Page;
