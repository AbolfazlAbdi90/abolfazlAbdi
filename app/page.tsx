"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AboutMe from "./About/page";
import AbalonTeam from "./Component/AbalonTeam";
import AboutMeandTitle from "./Component/AboutMeandTitle";
import Projects from "./Component/MyProject";
import { sendTelegramMessage } from "./Services/telegram";

const sentences: string[] = [
  "I have 1.5 years of experience in Frontend Development👩‍💻",
  "i love programing ❤️",
  "I work at the Abalon❤️",
  "im computer engineer👩‍💻",
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
          prev ? prev + " " + words[wordIndex] : words[wordIndex],
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

const AutumnLeaves: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
     const canvas = canvasRef.current;

  if (!canvas) return;

  const context = canvas.getContext("2d");

  if (!context) return;

  const ctx: CanvasRenderingContext2D = context;

  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

    interface LeafType {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      swing: number;
      swingSpeed: number;
      color: string;
      update: () => void;
      draw: () => void;
    }

    const leaves: LeafType[] = [];

    class Leaf implements LeafType {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      rotation: number;
      rotationSpeed: number;
      swing: number;
      swingSpeed: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;

        // اندازه برگ
        this.size = Math.random() * 9 + 7;

        // سرعت پایین آمدن
        this.speedY = Math.random() * 1.2 + 0.6;

        // سرعت اولیه افقی
        this.speedX = (Math.random() - 0.5) * 0.8;

        // زاویه اولیه
        this.rotation = Math.random() * Math.PI * 2;

        // سرعت چرخش
        this.rotationSpeed = (Math.random() - 0.5) * 0.04;

        // برای حرکت موجی برگ
        this.swing = Math.random() * Math.PI * 2;
        this.swingSpeed = Math.random() * 0.02 + 0.01;

        // رنگ‌های پاییزی
        const colors = [
          "#FACC15", // زرد
          "#EAB308", // زرد طلایی
          "#F59E0B", // طلایی
          "#D97706", // نارنجی
          "#EA580C", // نارنجی تیره
          "#DC2626", // قرمز
          "#B91C1C", // قرمز تیره
        ];

        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // حرکت رو به پایین
        this.y += this.speedY;

        // حرکت موجی چپ و راست مثل باد
        this.swing += this.swingSpeed;

        this.x += this.speedX + Math.sin(this.swing) * 0.5;

        // چرخش
        this.rotation += this.rotationSpeed;

        // اگر برگ از پایین خارج شد
        if (this.y > height + this.size) {
          this.y = -this.size;
          this.x = Math.random() * width;
        }

        // اگر از سمت راست خارج شد
        if (this.x > width + this.size) {
          this.x = -this.size;
        }

        // اگر از سمت چپ خارج شد
        if (this.x < -this.size) {
          this.x = width + this.size;
        }
      }

      draw() {
        ctx.save();

        // محل برگ
        ctx.translate(this.x, this.y);

        // چرخش برگ
        ctx.rotate(this.rotation);

        const s = this.size;

        /*
         * برگ افرا
         */
        ctx.beginPath();

        // نوک بالایی
        ctx.moveTo(0, -s);

        // سمت راست بالا
        ctx.lineTo(s * 0.18, -s * 0.48);
        ctx.lineTo(s * 0.65, -s * 0.68);

        // نوک سمت راست
        ctx.lineTo(s * 0.48, -s * 0.15);
        ctx.lineTo(s, -s * 0.05);

        // پایین سمت راست
        ctx.lineTo(s * 0.42, s * 0.25);
        ctx.lineTo(s * 0.58, s * 0.72);

        // پایین برگ
        ctx.lineTo(0, s * 0.48);

        // پایین سمت چپ
        ctx.lineTo(-s * 0.58, s * 0.72);
        ctx.lineTo(-s * 0.42, s * 0.25);

        // سمت چپ
        ctx.lineTo(-s, -s * 0.05);
        ctx.lineTo(-s * 0.48, -s * 0.15);

        // بالا سمت چپ
        ctx.lineTo(-s * 0.65, -s * 0.68);
        ctx.lineTo(-s * 0.18, -s * 0.48);

        ctx.closePath();

        // رنگ برگ
        ctx.fillStyle = this.color;
        ctx.fill();

        /*
         * ساقه برگ
         */
        ctx.beginPath();

        ctx.moveTo(0, s * 0.45);
        ctx.lineTo(0, s * 0.9);

        ctx.strokeStyle = "rgba(100, 60, 20, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();

        /*
         * رگبرگ اصلی
         */
        ctx.beginPath();

        ctx.moveTo(0, s * 0.4);
        ctx.lineTo(0, -s * 0.7);

        ctx.strokeStyle = "rgba(120, 70, 20, 0.45)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        /*
         * رگبرگ‌های فرعی
         */

        ctx.beginPath();

        // راست بالا
        ctx.moveTo(0, -s * 0.15);
        ctx.lineTo(s * 0.45, -s * 0.45);

        // چپ بالا
        ctx.moveTo(0, -s * 0.15);
        ctx.lineTo(-s * 0.45, -s * 0.45);

        // راست پایین
        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(s * 0.35, s * 0.05);

        // چپ پایین
        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(-s * 0.35, s * 0.05);

        ctx.strokeStyle = "rgba(120, 70, 20, 0.35)";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.restore();
      }
    }

    /*
     * ساخت برگ‌ها
     */
    function createLeaves(num: number) {
      leaves.length = 0;

      for (let i = 0; i < num; i++) {
        leaves.push(new Leaf());
      }
    }

    let animationId: number;

    /*
     * انیمیشن
     */
    function animate() {
      ctx.clearRect(0, 0, width, height);

      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    /*
     * تعداد برگ‌ها
     */
    createLeaves(70);

    animate();

    /*
     * Responsive
     */
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    /*
     * Cleanup
     */
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationId);
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
      }}
    />
  );
};

const Home: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  useEffect(() => {
    sendTelegramMessage(
      `🔔 بازدید جدید از Portfolio!\n\n🌐 سایت: Abolfazl Abdi\n🕐 زمان: ${new Date().toLocaleString()}`,
    );
  }, []);
  return (
    <>
      <AutumnLeaves />
      <header className="bg-orange-200 min-h-[500px] relative flex flex-col md:flex-row items-center justify-center p-8 md:p-16">
        {/* logo*/}
        <motion.div
          className="absolute top-6 left-6 text-3xl font-bold text-red-800 select-none z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          AB
        </motion.div>

        {/* meno in mobile*/}
        <button
          className="absolute top-6 right-6 md:hidden z-40 p-2 rounded-md text-black hover:text-purple-700 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {/* meno*/}
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

        {/* meno mobile*/}
        {menuOpen && (
          <nav className="absolute top-16 right-6 bg-white rounded-md  shadow-lg py-4 px-6 space-y-4 z-40 md:hidden">
            <a
              href="#home"
              className="block font-bold text-red-800  hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#About"
              className="block font-bold text-red-800  hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              About Me
            </a>
            <a
              href="#portfolio"
              className="block font-bold text-red-800  hover:text-purple-700"
              onClick={() => setMenuOpen(false)}
            >
              Profile
            </a>
          </nav>
        )}

        {/* meno Desktop*/}
        <nav className="hidden md:flex absolute top-6 right-6 space-x-8 font-bold text-red-800  text-lg z-30">
          <a href="#home" className="hover:underline">
            Home
          </a>
          <a href="#about" className="hover:underline">
            About Me
          </a>
          <a href="#profile" className="hover:underline">
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
          {/* profile*/}
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

            {/* ring*/}
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

          {/* text myself*/}
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
            <h3 className="text-red-800 text-xl md:text-2xl font-semibold mb-2">
              Hi There I'm
            </h3>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">
              Abolfazl <br />
              <span className="text-black">Abdi</span>
            </h1>

            {/* آicon social media */}
            <div className="flex justify-center md:justify-start space-x-6 mt-6 ">
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
                  {/* ring*/}
                  <path d="M12 2a9.93 9.93 0 0 0-8.56 14.96L2 22l5.2-1.36A10 10 0 1 0 12 2z" />

                  {/* phone*/}
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
      <div id="About">
        <AboutMe
          introText="I love being a developer!"
          detailText={`Hello, I’m Abolfazl Abdi, a Front-End Developer passionate about creating modern, responsive, and user-friendly web experiences. I started my programming journey in 2024 and have been continuously improving my skills and exploring new technologies ever since. My main focus is building clean, efficient, and maintainable applications using technologies such as JavaScript, TypeScript, React, Next.js, Vue.js, and Tailwind CSS. I enjoy turning ideas into real-world products and solving problems through code. Beyond development, I’m interested in startups, business ideas, and the process of turning technology into meaningful products. I also enjoy learning, sharing knowledge, and working with others to grow both personally and professionally. I believe that consistency, creativity, and continuous learning are the key to becoming a better developer. My goal is to keep challenging myself, build impactful projects, and grow into a strong Full-Stack Developer.`}
        />
      </div>
      {/* <AbalonTeam /> */}

      <AboutMeandTitle />
      <Projects />
    </>
  );
};

export default Home;
