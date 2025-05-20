'use client'; // Mark this as a Client Component
import { useState } from "react";

const FAQ = () => {
  // State to manage the open/close state of each FAQ item
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle the FAQ item
  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null); // Close the FAQ if it's already open
    } else {
      setOpenIndex(index); // Open the clicked FAQ
    }
  };

  // FAQ data
  const faqs = [
    {
      question: "Bieten Sie eine kostenlose Erstberatung an?  ",
      answer:
        "Ja, wir bieten eine kostenlose Erstberatung und Besichtigung vor Ort an, um Ihre Bedürfnisse und Anforderungen genau zu verstehen.",
    },
    {
      question: "Welche Art von Bauleistungen bieten Sie an?",
      answer:
        "Wir bieten ein breites Spektrum an Bauleistungen, darunter Trockenbau, Malerarbeiten, Bodenverlegung, Dacharbeiten, energetische Sanierung und vieles mehr.",
    },
    {
      question: "Arbeiten Sie auch mit privaten Kunden oder nur mit Unternehmen?",
      answer:
        "Wir arbeiten sowohl mit privaten Kunden als auch mit gewerblichen Kunden zusammen. Unser Ziel ist es, maßgeschneiderte Lösungen für jeden Bedarf zu bieten.",
    },
    {
      question: "Wie lange dauert es, bis mein Projekt abgeschlossen ist?",
      answer:
        "Die Dauer eines Projekts hängt vom Umfang und der Komplexität der Arbeit ab. Nach der kostenlosen Erstberatung können wir Ihnen eine realistische Zeitschätzung geben.",
    },
    {
      question: "Übernehmen Sie auch kleine Reparaturarbeiten?",
      answer:
        "Ja, wir übernehmen auch kleinere Reparaturen und Instandhaltungsarbeiten. Kontaktieren Sie uns einfach für eine individuelle Beratung.",
    },
    {
      question: "Bieten Sie auch energetische Sanierungen an?",
      answer:
        "Ja, wir sind spezialisiert auf energetische Sanierungen, um die Energieeffizienz Ihres Gebäudes zu verbessern und langfristig Energiekosten zu sparen.",
    },
    {
      question: "Arbeiten Sie auch an historischen Gebäuden oder Altbausanierungen?",
      answer:
        "Ja, wir haben Erfahrung in der Sanierung historischer Gebäude und der Aufbereitung von Kastendoppelfenstern. Unser Team arbeitet sorgfältig, um den Charme und die Authentizität solcher Gebäude zu erhalten.",
    },
    {
      question: "Kann ich während der Bauphase Änderungen vornehmen?",
      answer:
        "Selbstverständlich! Wir legen großen Wert auf Transparenz und offene Kommunikation. Änderungen während der Bauphase sind möglich, sofern sie technisch umsetzbar sind.",
    },
    {
      question: " Welche Materialien verwenden Sie bei der Bodenverlegung?",
      answer:
        "Wir verwenden hochwertige Materialien wie medizinische PVC-Böden, Laminat, Vinyl, Parkett, Fliesen und Estrich, je nach Ihren Wünschen und Anforderungen.",
    },
    {
      question: "Wie kann ich ein Angebot anfordern?",
      answer:
        "Kontaktieren Sie uns einfach telefonisch, per E-Mail oder über unser Kontaktformular. Wir vereinbaren gerne einen Termin zur kostenlosen Erstberatung.",
    },
  ];

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Title */}
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            {/* Explore Common Questions */}
            Erforschen Sie allgemeine Fragen
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50"
              onClick={() => toggleFAQ(index)}
            >
              <button
                type="button"
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
              >
                <span className="flex text-lg font-semibold text-black">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-gray-400 transition-transform ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {/* Answer */}
              <div
                className={`px-4 pb-5 sm:px-6 sm:pb-6 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <p className="text-center text-gray-600 text-base mt-9">
        Haben Sie noch Fragen?
          <span className="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">
            Wenden Sie sich an unsere Unterstützung
          </span>
        </p>
      </div>
    </section>
  );
};

export default FAQ;