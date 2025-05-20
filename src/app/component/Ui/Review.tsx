"use client";
import { FaStar } from "react-icons/fa";
import Image from "next/image";

const reviews = [
  {
    name: "Mathias Heidemann",
    avatar: "M",
    rating: 5,
    time: "vor 3 Wochen",
    text: "Appelt-Bauservice hat unsere Erwartungen weit übertroffen! Vom ersten Beratungsgespräch bis zur Fertigstellung war alles professionell, pünktlich und hochwertig. Unser neues Wohnzimmer sieht fantastisch aus.",
  },
  {
    name: "Francesco Pellino",
    avatar: "F", // Replace with actual image URL
    rating: 5,
    time: "vor 3 Wochen",
    text: "Wir haben Appelt-Bauservice für eine energetische Sanierung beauftragt und sind begeistert. Die Arbeiten wurden schnell, sauber und zuverlässig erledigt. Unsere Heizkosten sind deutlich gesunken!",
  },
  {
    name: "Thomas ",
    avatar: "T",
    rating: 5,
    time: "vor 3 Wochen",
    text: "Wir haben Appelt-Bauservice für eine energetische Sanierung beauftragt und sind begeistert. Die Arbeiten wurden schnell, sauber und zuverlässig erledigt. Unsere Heizkosten sind deutlich gesunken!",
  },
  {
    name: "Julia ",
    avatar: "J",
    rating: 5,
    time: "vor 3 Wochen",
    text: "Das Team von Appelt-Bauservice ist freundlich, kompetent und hat ein hervorragendes Auge fürs Detail. Unsere Terrasse ist ein echter Hingucker geworden!",
  },
  {
    name: "Michael ",
    avatar: "M",
    rating: 5,
    time: "vor 3 Wochen",
    text: "Ich habe schon mit vielen Handwerksfirmen gearbeitet, aber Appelt-Bauservice sticht wirklich heraus. Transparent, zuverlässig und immer bereit, auf individuelle Wünsche einzugehen.",
  },
  {
    name: "Stefan ",
    avatar: "M",
    rating: 5,
    time: "vor 3 Wochen",
    text: "Vielen Dank an Appelt-Bauservice für die professionelle Trockenlegung unseres Kellers. Keine Feuchtigkeit mehr, und alles wurde ordentlich hinterlassen. Klare Empfehlung!",
  },
];

const GoogleReviews = () => {
  return (
    <section className="bg-white py-10 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Unsere zufriedenen Kunden</h2>
        <div className="w-16 h-1 bg-green-500 mx-auto my-3"></div>
        <p className="text-lg text-gray-700 font-semibold">Appelt-Bauservice- Zimmermann und Zimmerei Berlin</p>

        <div className="mt-4 text-gray-900 flex items-center justify-center space-x-2">
          <span className="text-3xl font-bold">5,0</span>
          <span className="text-xl">Von 5 Sternen</span>
        </div>

        <div className="flex items-center justify-center mt-2">
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className="text-yellow-500 text-2xl" />
          ))}
        </div>

        <p className="text-gray-600 mt-2">Durchschnitt aus 26 Google Bewertungen</p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6">
        {reviews.map((review, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6 max-w-sm">
            <div className="flex items-center space-x-3">
              {review.avatar.startsWith("/") ? (
                <Image
                  src={review.avatar}
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-full"
                  alt={review.name}
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center text-lg font-bold">
                  {review.avatar}
                </div>
              )}

              <div className="flex-1">
                <h4 className="text-lg font-semibold">{review.name}</h4>
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-500 text-sm" />
                  ))}
                </div>
                <p className="text-gray-500 text-sm">{review.time}</p>
              </div>

            </div>

            <p className="mt-4 text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoogleReviews;
