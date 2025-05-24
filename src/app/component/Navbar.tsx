'use client';
import React, { useState, useRef } from 'react';


 
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const services = [
  {
    title: "Kostenlose Erstberatung und Besichtigung vor Ort",
    link: "/service/Kostenlose",
    description: "Wir bieten Ihnen eine kostenlose Erstberatung und Besichtigung vor Ort, um Ihre Anforderungen genau zu verstehen und maßgeschneiderte Lösungen zu entwickeln.",
    imageUrl: "/navimg/download.jpg"
  },
  {
    title: "Trockenbau- und Putzarbeiten",
    link: "/service/trockenbau-putzarbeiten",
    description: "Professionelle Trockenbau- und Putzarbeiten zur Gestaltung und Renovierung Ihrer Räume mit hochwertigen Materialien.",
    imageUrl: "/navimg/2.jpg"
  },
  {
    title: "Malerarbeiten",
    link: "/service/malerarbeiten",
    description: "Fachgerechte Malerarbeiten für Innen- und Außenbereiche, die Ihrem Raum neues Leben verleihen.",
    imageUrl: "/navimg/3.jpg"
  },
  {
    title: "Verlegen von medizinischen PVC-Böden",
    link: "/service/medizinische-pvc-boeden",
    description: "Spezialisierte Verlegung von medizinischen PVC-Böden für sterile und hygienische Umgebungen.",
    imageUrl: "/navimg/4.jpg"
  },
  {
    title: "Verlegen von Bodenfliesen",
    link: "/service/bodenfliesen",
    description: "Präzises Verlegen von Bodenfliesen für eine langlebige und ästhetische Bodenlösung.",
    imageUrl: "/navimg/5.jpg"
  },
  {
    title: "Gießen von Estrichböden sowie Ausgleichsmasse",
    link: "/service/estrichboeden-ausgleichsmasse",
    description: "Fachgerechtes Gießen von Estrichböden und Ausgleichsmasse für ebene und belastbare Untergründe.",
    imageUrl: "/navimg/6.jpg"
  },
  {
    title: "Verlegen von Holzböden (Dielen, Parkett)",
    link: "/service/holzboden-verlegen",
    description: "Verlegung hochwertiger Holzböden wie Dielen und Parkett für ein edles Ambiente.",
    imageUrl: "/navimg/7.jpg"
  },
  {
    title: "Verlegen von Laminat- und Vinylböden",
    link: "/service/laminat-vinylboden",
    description: "Robuste Laminat- und Vinylböden für eine strapazierfähige und pflegeleichte Lösung.",
    imageUrl: "/navimg/8.jpg"
  },
  {
    title: "Verlegen von PVC-Böden",
    link: "/service/pvc-boeden",
    description: "Kostengünstige und praktische PVC-Böden für verschiedene Anwendungsbereiche.",
    imageUrl: "/navimg/9.jpg"
  },
  {
    title: "Mauerwerkstrockenlegung",
    link: "/service/mauerwerkstrockenlegung",
    description: "Effiziente Trockenlegung von feuchtem Mauerwerk zur Vermeidung von Feuchtigkeitsschäden.",
    imageUrl: "/navimg/10.jpg"
  },
  {
    title: "Deckenbalkensanierung",
    link: "/service/deckenbalkensanierung",
    description: "Sanierung und Instandsetzung beschädigter Deckenbalken für stabile und sichere Strukturen."
  },
  {
    title: "Bekämpfung von Pilz- und Schädlingsbefall",
    link: "/service/pilz-schaedlingsbekaempfung",
    description: "Spezialisierte Bekämpfung von Pilz- und Schädlingsbefall zur Erhaltung der Bausubstanz."
  },
  
  
];
/**
 * 
 * @returns 
 * 
 * {
    title: "Deckenbalkensanierung",
    link: "/service/deckenbalkensanierung",
    description: "Sanierung und Instandsetzung beschädigter Deckenbalken für stabile und sichere Strukturen."
  },
  {
    title: "Bekämpfung von Pilz- und Schädlingsbefall",
    link: "/service/pilz-schaedlingsbekaempfung",
    description: "Spezialisierte Bekämpfung von Pilz- und Schädlingsbefall zur Erhaltung der Bausubstanz."
  },
  {
    title: "Einbau von Fenster- und Türenelementen",
    link: "/service/fenster-tueren-einbau",
    description: "Montage hochwertiger Fenster- und Türenelemente für optimale Isolation und Sicherheit."
  },
  {
    title: "Einbau von Dachfenstern",
    link: "/service/dachfenster-einbau",
    description: "Installation moderner Dachfenster für verbesserten Lichteinfall und Belüftung."
  },
  {
    title: "Wechsel von Fensterglas",
    link: "/service/fensterglas-wechsel",
    description: "Schneller und präziser Austausch von Fensterglas bei Beschädigung oder zur Energieeinsparung."
  },
  {
    title: "Aufbereitung von Kastendoppelfenstern",
    link: "/service/kastendoppelfenster-aufbereitung",
    description: "Renovierung und Aufbereitung von Kastendoppelfenstern zur Erhaltung des historischen Charakters."
  },
  {
    title: "Einfräsen von Fenster-Dichtungen",
    link: "/service/fenster-dichtungen-einfraesen",
    description: "Nachträgliches Einfräsen von Fenster-Dichtungen zur Verbesserung der Wärmedämmung."
  },
  {
    title: "Montage von Markisen und Rollladen",
    link: "/service/markisen-rollladen-montage",
    description: "Montage von Markisen und Rollläden für Sonnenschutz und Sichtschutz."
  },
  {
    title: "Aufbereitung von Holzböden",
    link: "/service/holzboden-aufbereitung",
    description: "Professionelle Aufbereitung von Holzböden zur Verlängerung der Lebensdauer und Erneuerung des Erscheinungsbildes."
  },
  {
    title: "Terrassenbau",
    link: "/service/terrassenbau",
    description: "Individueller Terrassenbau für Ihren Garten oder Außenbereich."
  },
  {
    title: "Pflasterarbeiten / Garten- und Landschaftsbau",
    link: "/service/pflasterarbeiten-gartenbau",
    description: "Professionelle Pflasterarbeiten und Gestaltung im Garten- und Landschaftsbau."
  },
  {
    title: "Terrassenüberdachungen",
    link: "/service/terrassenueberdachungen",
    description: "Montage robuster Terrassenüberdachungen für Wetterschutz und Komfort."
  },
  {
    title: "Montage von Carports",
    link: "/service/carports-montage",
    description: "Montage von Carports für den Schutz Ihrer Fahrzeuge vor Witterungseinflüssen."
  },
  {
    title: "Dachabdichtungen sowie Entwässerung",
    link: "/service/dachabdichtungen-entwaesserung",
    description: "Dachabdichtungen und Entwässerungssysteme zum Schutz vor Feuchtigkeitsschäden."
  },
  {
    title: "Montage von Solaranlagen",
    link: "/service/solaranlagen-montage",
    description: "Installation von Solaranlagen zur Nutzung erneuerbarer Energien."
  },
  {
    title: "Energetische Sanierung",
    link: "/service/energetische-sanierung",
    description: "Energetische Sanierung für eine nachhaltige Reduzierung des Energieverbrauchs."
  },
  {
    title: "Baubetreuung",
    link: "/service/baubetreuung",
    description: "Umfassende Baubetreuung für eine reibungslose Abwicklung Ihres Bauvorhabens."
  }
 */
const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isServicesDropdownOpen, setServicesDropdownOpen] = useState(false);
   
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleServicesDropdown = () => {
    console.log('asd')

      setServicesDropdownOpen(!isServicesDropdownOpen);

  };

 
  

  const closeMobileMenu = (link?: string) => {
    console.log('asds')
    if (link) {
      console.log("Navigating to:", link); // Debugging

      router.push(link);
    }
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav
  id="navbar"
  className="fixed w-full z-50 bg-white shadow-md transition-all duration-300"
>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold text-black">
              <Image
                src="/logo.png"
                alt="Logo"
                width={224}
                height={56}
                className="w-68 max-sm:w-58 max-sm:-ml-2 mt-4"
              />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-black hover:bg-white/20 focus:outline-none"
              aria-expanded="false"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4">
           
          <Link
              href="../"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              Start 
            </Link>
           
            <Link
              href="/about"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              Über uns
            </Link>
            <div className="relative group" ref={dropdownRef}>
              <button
                className="text-black cursor-pointer hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium focus:outline-none"
                onClick={toggleServicesDropdown}
              >
                Dienstleistungen
                <svg
                  className="w-4 h-4 inline ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div
                className={`absolute ${
                  isServicesDropdownOpen ? "block" : "hidden"
                } -mt-2 h-64 overflow-y-auto -left-[400px] bg-white rounded-md shadow-lg mt-1 w-[950px] scrollbar-hide`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 max-w-5xl bg-white rounded-lg shadow-lg">
                {services.map((item, index) => (
       <Link 
       key={index}
       href={item.link}
       onClick={(e) => {
         e.stopPropagation(); // Prevents the dropdown from toggling
         closeMobileMenu();   // Close the menu after clicking
       }}
       className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
     >
       {item.title}
     </Link>
  ))}
                </div>
              </div>
            </div>
        
          
            <Link
              href="/gallery"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              Galerie
            </Link>
         
            <Link
              href="/Faq"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              FAQ
            </Link>
            <Link
              href="/job"
              className="text-black hover:bg-white/20 px-3 py-2 rounded-md text-sm font-medium"
            >
              Jobs
            </Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex md:items-center">
            <Link
              href="/contact"
              className="bg-[#782b3a] text-white px-4 py-2 rounded-md hover:bg-[#8e7444] transition duration-300"
            >
              Kontakt
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"}`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/about"
            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
            onClick={() => closeMobileMenu()}
          >
            Über uns
          </Link>
         <Link
  href="/job"
  className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
  onClick={() => closeMobileMenu()} // <--- FEHLTE!
>
  Jobangebote
</Link>

      
          <div>
            <button
              className="w-full text-left text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium focus:outline-none"
                onClick={toggleServicesDropdown}
                >
              Dienstleistungen
              <svg
                className="w-4 h-4 inline ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          
          </div>
          <div
              className={`pl-4 space-y-1 h-60 overflow-y-auto ${
                isServicesDropdownOpen ? "block" : "hidden"
              }`}
            >
              {services.map((item, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation(); // Prevents triggering the toggleServicesDropdown function
                    closeMobileMenu(item.link);
                  }}                  className="block w-full  text-black px-2 py-2 border-black border-2 hover:bg-white/20"
                >
                  {item.title}
                </button>
              ))}
            </div>
          <Link
            href="/gallery"
            onClick={() => closeMobileMenu()}
            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            Galerie
          </Link>
          <Link
            href="/Faq"
            onClick={() => closeMobileMenu()}
            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            FAQ
          </Link>
          <Link
            href="/contact"
            onClick={() => closeMobileMenu()}
            className="block text-black hover:bg-white/20 px-3 py-2 rounded-md text-base font-medium"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;