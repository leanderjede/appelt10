'use client';
import Link from "next/link";
import { useState, useEffect } from "react";
import Modal from "react-modal";

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  // Set the app element after the component mounts
  useEffect(() => {
    if (typeof window !== "undefined") {
      Modal.setAppElement("#root");
    }
  }, []);

  const images = [
    "/img/2.webp",
    "/img/3.webp",
    "/img/4.webp",
    "/img/5.webp",
    "/img/6.webp",
    "/img/7.webp",
    "/img/8.webp",
    "/img/9.webp",
    "/img/10.webp",
    "/img/11.webp",
    "/img/12.webp",
    "/img/13.webp",
    "/img/14.webp",
    "/img/15.webp",
    "/img/16.webp",
    "/img/17.webp",
    "/img/18.webp",
    "/img/19.webp",
    "/img/20.webp",
    "/img/21.webp",
    "/img/22.webp",
    "/img/23.webp",




  ];

  const openModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* Middle Section */}
      <section className={`w-full flex items-center justify-center h-screen rounded-b-2xl overflow-hidden bg-gradient-to-b from-[#121212] to-gray-800 ${isModalOpen ? "hidden" :""}`}>
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-[#00000025]" />
        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1
            className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ lineHeight: "1.2" }}
          >
            Unsere &apos;s{" "}
            <span className="relative whitespace-nowrap text-[#c1a777] dark:text-[#c1a777]">
              <svg
                aria-hidden="true"
                viewBox="0 0 418 42"
                className="absolute top-2/3 left-0 h-[0.58em] w-full fill-[#c1a777]/70 dark:fill-[#d1bd99]/60"
                preserveAspectRatio="none"
              >
                <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.780 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.540-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.810 23.239-7.825 27.934-10.149 28.304-14.005 .417-4.348-3.529-6-16.878-7.066Z" />
              </svg>
              <span className="relative">Projekte</span>
            </span>{" "}
            im Überblick
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg">
          Lassen Sie sich von unseren erfolgreich abgeschlossenen Projekten inspirieren. Jedes Bild erzählt eine Geschichte von Präzision, Qualität und Leidenschaft für das Bauhandwerk.
          </p>
          {/* CTA Button */}
          <div
            className="flex justify-center items-center mt-8"
            data-aos="fade-up"
            data-aos-delay={400}
          >
            <Link
              href={'/contact'}
              rel="noopener noreferrer"
              className="relative flex items-center justify-center px-6 py-3 bg-[#8e7444] hover:bg-[#782b3a] text-white text-lg font-semibold rounded-full shadow-lg transform hover:scale-105 transition-transform duration-200"
            >
              <span className="absolute inset-0 rounded-full bg-[#8e7444] opacity-50 animate-ping" />
              <span className="relative z-10 pr-2">
             Jetzt anfragen 
                </span>
            </Link>
          </div>
        
        </div>
                  {/* icon */}
                  <div
  onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
  className="absolute sm:bottom-14 bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
>
  
</div>


      </section>

      {/* Gallery Section */}
      <div id="root" className="p-4 -m-2">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-20">
          {images.map((image, index) => (
            <div
              key={index}
              className="group cursor-pointer relative"
              onClick={() => openModal(image)}
            >
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg transition-transform transform scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                 
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Full-Screen Image */}
      {/* Modal for Full-Screen Image */}
<Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Full-Screen Image"
  className="fixed inset-0 py-22 flex z-50 items-center justify-center bg-[#f8f5f0] "
  overlayClassName="fixed inset-0"
>
  <div className="relative">
    <button
      onClick={closeModal}
      className="absolute top-4 right-4 bg-white text-black rounded-full px-3 py-1 text-sm font-semibold hover:bg-gray-200 transition"
    >
      ✕
    </button>
    <img
      src={selectedImage}
      alt="Full-Screen"
      className="max-w-full max-h-screen rounded-lg"
    />
  </div>
</Modal>

      </div>
    </>
  );
};

export default Gallery;