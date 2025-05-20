'use client'
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Only import Autoplay

const testimonials = [
  {
    id: 1,
    name: "Frank Paweski, Berlin",
    text: "Dach: 3 Fenster; Neueinbau; Dachfenster, Oberlicht, Dachluke, SonneLösungsorientiert und schnell, Kann ich nur weiterempfehlen ",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    id: 2,
    name: "MyHammer-Kunde aus Hohen Neuendorf",
    text: "Bodenbelag reparieren: Holzdielen, Anbringen neuer Fußbodenleisen u...Sehr freundlicher Kontakt, ordentliche Abwicklung und zeitnahe Kommunikation.",
    image: "https://randomuser.me/api/portraits/men/21.jpg",
  },
  {
    id: 3,
    name: "Uwe, Berlin",
    text: "Sonnenschutz: Terrassen-Überdachung; Installieren Keine langen Wartezeiten schnell und effizient immer wieder",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    id: 4,
    name: "Unbekannter Kunde",
    text: "Innentür: 2 Türen; Nach Rücksprache; Neue Tür und neuen Türrahmen e... Top Firma",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    id: 5,
    name: "Regina, Berlin",
    text: "Fenstereinbau: 1 Fenster; Kaufen, Installieren; Balkontür Schnelle Terminvereinbarung, schnelle und saubere Auftragsabwicklung. Wir sind sehr zufrieden mit der ausgeführten Arbeit. Vielen DANK",
    image: "https://randomuser.me/api/portraits/women/24.jpg",
  },
  {
    id: 6,
    name: "MyHammer-Kunde aus Wandlitz",
    text: "Innentür: 4 Türen; Einfache Tür; Türen kürzen Kommunikation lief gut, zuverlässig und schnell. Ergebnis ist top!",
    image: "https://randomuser.me/api/portraits/men/25.jpg",
  },
];

const TestimonialsSlider = () => {
  return (
    <section id="testimonials" aria-label="What our customers are saying" className="0 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
            {/* What Our Customers Are Saying */}
            Was unsere Kunden sagen
          </h2>
        </div>

        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay]} // Only Autoplay is used
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-16 lg:mt-20"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
       <figure className="relative rounded-2xl bg-white p-6 shadow-xl shadow-slate-900/10">
  <svg
    aria-hidden="true"
    width="105"
    height="78"
    className="absolute left-6 top-6 fill-slate-100"
  >
    <path d="..." />
  </svg>
  <blockquote className="relative">
    <p className="text-lg tracking-tight text-slate-900">{testimonial.text}</p>
  </blockquote>
  <figcaption className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
    <div>
      <div className="flex items-center mb-1">
        {/* Example: render 5 filled stars */}
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className="h-4 w-4 text-yellow-500 mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.01 3.114a1 1 0 00.95.69h3.283c.969 0 1.371 1.24.588 1.81l-2.659 1.932a1 1 0 00-.364 1.118l1.01 3.114c.3.921-.755 1.688-1.538 1.118l-2.659-1.932a1 1 0 00-1.175 0l-2.659 1.932c-.783.57-1.838-.197-1.538-1.118l1.01-3.114a1 1 0 00-.364-1.118L2.22 8.541c-.783-.57-.38-1.81.588-1.81h3.283a1 1 0 00.95-.69l1.01-3.114z" />
          </svg>
        ))}
      </div>
      <div className="font-display text-base text-slate-900">{testimonial.name}</div>
    </div>
  
  </figcaption>
</figure>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSlider;