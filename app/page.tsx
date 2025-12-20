"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AboutMe from "./About/page";

const sentences: string[] = [
  "I have 2 years of experience in Frontend Development",
  "i love programing",
  "I work at the Abalon",
  "im computer engineer",
];

const Typewriter: React.FC = () => {
  const [displayText, setDisplayText] = useState<string>("");
  const [sentenceIndex, setSentenceIndex] = useState<number>(0);
  const [wordIndex, setWordIndex] = useState<number>(0);

  useEffect(() => {
    const words = sentences[sentenceIndex].split(" ");
    if (wordIndex < words.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) =>
          prev ? prev + " " + words[wordIndex] : words[wordIndex]
        );
        setWordIndex(wordIndex + 1);
      }, 400);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setDisplayText("");
        setWordIndex(0);
        setSentenceIndex((prev) => (prev + 1) % sentences.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [wordIndex, sentenceIndex]);

  return (
    <motion.p
      className="mt-6 text-sm md:text-base text-black min-h-[1.5rem]"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      key={sentenceIndex}
    >
      {displayText}
      <span className="animate-blink">|</span>
      <style jsx>{`
        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
      `}</style>
    </motion.p>
  );
};

const Snowfall: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    interface ParticleType {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;
      update: () => void;
      draw: () => void;
    }

    const particles: ParticleType[] = [];

    class Particle implements ParticleType {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      speedX: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.radius = Math.random() * 3 + 1;
        this.speedY = Math.random() * 1 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
      }

      update() {
        this.y += this.speedY;
        this.x += this.speedX;
        if (this.y > height) {
          this.y = 0;
          this.x = Math.random() * width;
        }
        if (this.x > width) {
          this.x = 0;
        }
        if (this.x < 0) {
          this.x = width;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function createParticles(num: number) {
      particles.length = 0;
      for (let i = 0; i < num; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      requestAnimationFrame(animate);
    }

    createParticles(100);
    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 50,
        width: "100%",
        height: "100%",
      }}
    />
  );
};

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <>
      <Snowfall />
      <header className="bg-purple-300 min-h-[500px] relative flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
        {/* لوگو بالا سمت چپ */}
        <motion.div
          className="absolute top-6 left-6 text-3xl font-bold text-teal-700 select-none z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          AB
        </motion.div>

        {/* منوی همبرگر موبایل */}
        <button
          className="absolute top-6 right-6 md:hidden z-40 p-2 rounded-md text-black hover:text-purple-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* آیکون همبرگر */}
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* منوی موبایل */}
        {menuOpen && (
          <nav className="absolute top-16 right-6 bg-white rounded-md shadow-lg py-4 px-6 space-y-4 z-40 md:hidden">
            <a
              href="#home"
              className="block hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="/About"
              className="block hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#portfolio"
              className="block hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              Portfolio
            </a>
          </nav>
        )}

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex absolute top-6 right-6 space-x-8 text-black text-lg z-30">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#portfolio" className="hover:underline">
            Portfolio
          </a>
        </nav>
        <div
          className="
        flex flex-col md:flex-row
        items-center md:items-start
        space-y-10 md:space-y-0
        md:space-x-40 lg:space-x-32
      "
        >
          {/* تصویر پروفایل */}
          <motion.div
            className="
          relative
          w-52 h-52
          md:w-64 md:h-64
          lg:w-80 lg:h-80
          rounded-full overflow-hidden
          border-4 border-black
          shadow-lg
          z-20
          flex-shrink-0
        "
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="/image/image.png"
              alt="Abolfazl Abdi"
              className="object-cover w-full h-full"
            />

            {/* حلقه دایره‌ای */}
            <svg
              className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
              viewBox="0 0 200 200"
            >
              <circle
                cx="100"
                cy="100"
                r="98"
                stroke="black"
                strokeWidth="1"
                fill="none"
              />
            </svg>
          </motion.div>

          {/* متن معرفی */}
          <motion.div
            className="
          flex-1
          text-center md:text-left
          mt-10 md:mt-0
          z-20
          max-w-xl
        "
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h3 className="text-purple-800 text-xl md:text-2xl font-semibold mb-2">
              Hi There I'm
            </h3>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Abolfazl <br />
              <span className="text-black">Abdi</span>
            </h1>

            {/* آیکون‌های شبکه اجتماعی */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-black">
              {/* Telegram */}
              <a
  href="https://t.me/AbolfazlAbdi9"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Telegram"
  className="hover:text-purple-700 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-black"
  >
    {/* بدنه تلگرام */}
    <path d="M21.5 3.5L3 11l6.5 2.2L18.5 7l-7 7.5v3.8l2.9-2.8 3.7 2.7c.5.3 1.1 0 1.3-.6l3.1-13.3c.2-.7-.4-1.2-1-.8z" />
  </svg>
</a>


              {/* WhatsApp */}
            <a
  href="https://wa.me/989378546568"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="WhatsApp"
  className="hover:text-green-600 transition"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-8 h-8 text-black"
  >
    {/* دایره */}
    <path d="M12 2a9.93 9.93 0 0 0-8.56 14.96L2 22l5.2-1.36A10 10 0 1 0 12 2z" />

    {/* تلفن */}
    <path d="M16.1 13.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1.1-.6-.5-1-1.1-1.1-1.4-.1-.2 0-.3.1-.4l.4-.4.2-.4c.1-.1 0-.3 0-.4l-.6-1.5c-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3 0-.5.2-.2.2-.6.6-.6 1.4 0 .8.6 1.6.7 1.8.1.1 1.2 2 3 2.7.4.2.7.3 1 .3.4.1.8.1 1.1.1.3 0 1-.4 1.2-.8.2-.4.2-.8.1-.9 0-.1-.2-.2-.4-.3z" />
  </svg>
</a>


              {/* Instagram */}
              <a
                href="https://instagram.com/abolfazlabdi418"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.5" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AbolfazlAbdi90"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1 1.53 1 .9 1.53 2.36 1.1 2.94.83.1-.64.35-1.1.63-1.36-2.21-.25-4.54-1.1-4.54-4.91 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.76 1.02a9.48 9.48 0 015.04 0c1.92-1.29 2.76-1.02 2.76-1.02.55 1.4.2 2.44.1 2.7.64.7 1.02 1.6 1.02 2.7 0 3.81-2.34 4.66-4.56 4.91.36.3.68.9.68 1.82v2.7c0 .27.18.58.68.48A10 10 0 0012 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abolfazl-abdi"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-700 transition"
              >
                <svg
                  className="w-8 h-8"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8.98H4.9V22H.5zM8.98 8.98h4.18v1.78h.06a4.6 4.6 0 014.13-2.27c4.42 0 5.24 2.91 5.24 6.69V22H17v-7.59c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.91 1.97-2.91 4.01V22H8.98z" />
                </svg>
              </a>
            </div>

            <Typewriter />
          </motion.div>
        </div>
      </header>
      <AboutMe
        introText="I love being a developer!"
        detailText={`Hello, I am Abolfazl Abdi, Front-End developer with a passion for building efficient solutions and learning new technologies. I started programming in 2024 and have been deepening my expertise since 2025. Alongside coding, I actively study startups and business models, and enjoy following my favorite series.

I have a strong background in computer hardware,  and I am highly interested in teaching and knowledge sharing. My strengths include creativity, adaptability, and a collaborative spirit, which help me thrive in team environments and bring innovative ideas to the table.`}
      />
    </>
  );
};

export default Home;
