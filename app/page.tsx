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

        {/* بخش تصویر دایره‌ای */}
        <motion.div
          className="relative w-52 h-52 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-black shadow-lg z-20 flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/image/image.png"
            alt="Faramarz"
            className="object-cover w-full h-full"
          />
          {/* حلقه مشکی دایره */}
          <svg
            className="absolute bottom-0 left-0 w-full"
            viewBox="0 0 200 200"
            preserveAspectRatio="none"
          >
            <circle
              cx="100"
              cy="100"
              r="100"
              stroke="black"
              strokeWidth={1}
              fill="none"
            />
          </svg>
        </motion.div>

        {/* متن معرفی و آیکون ها */}
        <motion.div
          className="flex-1 text-center md:text-left mt-10 md:mt-0 md:ml-16 z-20 max-w-xl"
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
          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-black text-2xl">
            <a
              href="https://t.me/AbolfazlAbdi9"
              aria-label="Telegram"
              className="hover:text-purple-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M22 2L11 13" />
                <path d="M22 2L15 22L11 13L2 9L22 2Z" />
              </svg>
            </a>
            <a
              href="https://wa.me/989378546568"
              aria-label="WhatsApp"
              className="hover:text-green-600 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M20.52 3.48A11.88 11.88 0 0012 0C5.372 0 0 5.372 0 12c0 2.112.55 4.167 1.598 5.995L0 24l6.23-1.626A11.927 11.927 0 0012 24c6.628 0 12-5.372 12-12a11.88 11.88 0 00-3.48-8.52zM12 21.6a9.5 9.5 0 01-5.117-1.526l-.366-.22-3.7.967 1-3.59-.238-.374A9.6 9.6 0 012.4 12c0-5.327 4.274-9.6 9.6-9.6 2.562 0 4.97 1 6.773 2.802a9.46 9.46 0 012.826 6.798c0 5.327-4.274 9.6-9.6 9.6zm5.252-7.23c-.285-.142-1.685-.83-1.946-.925-.26-.096-.45-.142-.64.143-.19.285-.73.924-.895 1.11-.165.19-.33.214-.615.072-.285-.142-1.204-.444-2.29-1.41-.847-.754-1.418-1.683-1.585-1.97-.165-.285-.018-.44.124-.583.127-.127.285-.33.427-.495.142-.165.19-.285.285-.475.095-.19.047-.356-.023-.497-.07-.142-.64-1.54-.875-2.105-.23-.55-.465-.476-.64-.485-.165-.01-.356-.012-.544-.012-.19 0-.497.07-.757.356-.26.285-.994.97-.994 2.36 0 1.39 1.018 2.733 1.16 2.922.142.19 2.002 3.06 4.848 4.287.678.292 1.205.466 1.618.596.68.215 1.3.185 1.79.112.546-.085 1.685-.69 1.923-1.358.237-.665.237-1.235.165-1.357-.07-.12-.26-.19-.544-.332z" />
              </svg>
            </a>

            <a
              href="https://instagram.com/abolfazlabdi418"
              aria-label="Instagram"
              className="hover:text-purple-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8a4 4 0 0 1 3.37 3.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://github.com/AbolfazlAbdi90"
              aria-label="GitHub"
              className="hover:text-purple-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M12 2a10 10 0 0 0-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1 1.53 1 .9 1.53 2.36 1.1 2.94.83.1-.64.35-1.1.63-1.36-2.21-.25-4.54-1.1-4.54-4.91 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.76 1.02a9.48 9.48 0 0 1 5.04 0c1.92-1.29 2.76-1.02 2.76-1.02.55 1.4.2 2.44.1 2.7.64.7 1.02 1.6 1.02 2.7 0 3.81-2.34 4.66-4.56 4.91.36.3.68.9.68 1.82v2.7c0 .27.18.58.68.48A10 10 0 0 0 12 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/abolfazl-abdi"
              aria-label="LinkedIn"
              className="hover:text-purple-700 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-8 h-8"
              >
                <path d="M4.98 3.5A2.5 2.5 0 1 1 0 3.5a2.5 2.5 0 0 1 4.98 0zM.5 8.98H4.9V22H.5zM8.98 8.98h4.18v1.78h.06a4.6 4.6 0 0 1 4.13-2.27c4.42 0 5.24 2.91 5.24 6.69V22H17v-7.59c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.91 1.97-2.91 4.01V22H8.98z" />
              </svg>
            </a>
          </div>

          <Typewriter />
        </motion.div>
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
