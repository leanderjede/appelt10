"use client";
import Link from "next/link";
import { FaEnvelope, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="bg-[#22150b] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start">
        {/* Left Section */}
        <div className="md:w-1/2">
          <div className="relative"></div>
          <h3 className="uppercase text-sm tracking-wider mt-10">
            {/* Let us talk about  */}
     
            
           
          </h3>
          <h2 className="text-4xl font-bold mt-2">
            Kontaktieren Sie uns jetzt!
            </h2>

          {/* Contact Details */}
          <div className="mt-8 space-y-6">
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-[#f8f5f0]0 text-xl" />
              <div>
                <p className="font-bold uppercase text-sm">
                
                  Unsere E -Mail
                  </p>
                  <a href="mailto:appeltbauservice@gmail.com" className="text-gray-300">
  appeltbauservice@gmail.com
</a>

              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaPhoneAlt className="text-[#f8f5f0]0 text-xl" />
              <div>
                <p className="font-bold uppercase text-sm">
                  {/* Telephone Number
                   */}
                   Telefonnummer
                  </p>
                
                  <a href="tel:017624194649" className="text-gray-300">
  0176 24194649
</a>

              </div>
            </div>

            <div className="flex items-center space-x-3">
              <FaCalendarAlt className="text-[#f8f5f0]0 text-xl" />
              <div>
                <p className="font-bold uppercase text-sm">
                  {/* Address */}
                  Adresse
                  </p>
               
                <p className="text-gray-300">Karlstraße 5,  </p>
                <p className="text-gray-300"> 16540 Hohen Neuendorf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="md:w-1/2 bg-white p-8 -mt-22 rounded-lg shadow-lg border border-x-2 border-y-2 border-black relative">
          <h3 className="text-xl font-bold text-black uppercase mb-4">
            {/* SEND US A MESSAGE */}
         Sende uns eine Nachricht
          </h3>

          <form
           action="send_email.php" method="POST"
            className="space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border text-black  border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="E-Mail Adresse"
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <input
              type="tel"
              name="telephone"
              placeholder="Telefonnummer"
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
            <textarea
              name="message"
              placeholder="Nachricht"
              className="w-full p-3 border text-black border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 h-28"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-black  text-white py-3 font-bold text-lg rounded-md hover:bg-gray-800 transition"
            >
              {/* SUBMIT */}
              EINREICHEN
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center text-sm text-gray-400 mt-10">
       
        Copyrights © 2025 - Alle Rechte vorbehalten | <span className = "unterstreichen"><Link href="/impressum">
         Impressum
        </Link>
          </span> | {""}
 <span className = "unterstreichen" >
  <Link href="/datenschutz">
  Datenschutz
  </Link>
    </span>
      </div>
    </section>
  );
};

export default ContactUs;