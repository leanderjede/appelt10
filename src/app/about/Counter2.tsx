"use client";
import React, { useEffect, useState, useRef } from "react";

const CounterSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
  });
  console.log(counts)
  const targetCounts = {
    experience: 33,
    projects: 125,
    clients: 52,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const startValues = { experience: 0, projects: 0, clients: 0 };
      const duration = 2000; // 2 seconds
      const stepTime = Math.floor(duration / targetCounts.experience);

      const timer = setInterval(() => {
        setCounts((prev) => ({
          experience:
            prev.experience < targetCounts.experience
              ? prev.experience + 1
              : targetCounts.experience,
          projects:
            prev.projects < targetCounts.projects
              ? prev.projects + 2
              : targetCounts.projects,
          clients:
            prev.clients < targetCounts.clients
              ? prev.clients + 1
              : targetCounts.clients,
        }));

        if (
          startValues.experience >= targetCounts.experience &&
          startValues.projects >= targetCounts.projects &&
          startValues.clients >= targetCounts.clients
        ) {
          clearInterval(timer);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-24 relative">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center gap-12 grid lg:grid-cols-2 grid-cols-1">
          {/* Left Section - Images */}
          <div className="w-full justify-center items-start gap-6 grid sm:grid-cols-2 grid-cols-1 lg:order-first order-last">
            <div className="pt-24 lg:justify-center sm:justify-end justify-start items-start gap-2.5 flex">
              <img
                className="rounded-xl object-cover"
                src="https://images.pexels.com/photos/585419/pexels-photo-585419.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="about Us image"
              />
            </div>
            <img
              className="sm:ml-0 ml-auto rounded-xl object-cover"
              src="https://images.pexels.com/photos/53176/architecture-iron-steel-building-53176.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="about Us image"
            />
          </div>

          {/* Right Section - Text & Counters */}
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex">
              <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                Unser Versprechen

                </h2>
                <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                Transparenz, Zuverlässigkeit und Vertrauen bilden die Grundlage unseres Unternehmens. Wir legen großen Wert auf offene Kommunikation mit unseren Kunden, verstehen ihre Visionen und setzen sie in die Realität um. Bei Appelt-Bauservice bauen wir nicht nur – wir schaffen dauerhafte Beziehungen und beständige Räume.
                </p>
              </div>

              {/* Counter Section */}
              <div className="w-full lg:justify-start justify-center items-center sm:gap-10 gap-5 inline-flex">
                <div className="flex-col justify-start items-start inline-flex">
                  <h3 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                 8+
                  </h3>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                 Jahre Erfahrung
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                 270+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Erfolgreiche Projekte
                  </h6>
                </div>
                <div className="flex-col justify-start items-start inline-flex">
                  <h4 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                   117+
                  </h4>
                  <h6 className="text-gray-500 text-base font-normal leading-relaxed">
                  Glückliche Kunden
                  </h6>
                </div>
              </div>
            </div>

            {/* Button */}
      
          </div>
        </div>
      </div>
    </section>
  );
};

export default CounterSection;
