import { div } from "framer-motion/client";
import { useEffect, useState } from "react";

const images = [
  "/image/AbalonTeam/IMG_20260124_213944_363.jpg",
  "/image/AbalonTeam/TeamInCafe.jpg",
  "/image/AbalonTeam/TeamInOffice.jpg",
];

export default function AbalonTeam() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % images.length);
    }, 7000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 mt-5 mb-15 text-center via-purple-500 ">
        Abalon Team
      </h2>
      <div className="relative w-full max-w-6xl h-[450px] mx-auto overflow-hidden rounded-3xl shadow-2xl">
        {/* Slides */}
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`slide-${index}`}
            className={`
            absolute inset-0 w-full h-full
            object-cover
            transition-all duration-[1600ms]
            ease-[cubic-bezier(.4,0,.2,1)]
            will-change-transform
            ${
              index === active
                ? "opacity-100 scale-100 z-10"
                : "opacity-0 scale-110 z-0"
            }
          `}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />

        {/* Text */}
        <div className="absolute bottom-8 left-8 z-30 text-white">
          <h2 className="text-3xl font-bold">Abalon Team</h2>
          <p className="mt-2 text-sm opacity-80">Building ideas together</p>
        </div>
      </div>
    </div>
  );
}
