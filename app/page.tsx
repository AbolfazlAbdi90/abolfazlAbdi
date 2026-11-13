"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import AboutMe from "./About/page";
import AboutMeandTitle from "./Component/AboutMeandTitle";
import Projects from "./Component/MyProject";
import { sendTelegramMessage } from "./Services/telegram";
import SpotifyPlayer from "./Component/SpotifyPlayer";

const sentences: string[] = [
  "i love programing",
  "I work at the Abalon",
  "im computer engineer",
];

const Typewriter: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const [sentenceIndex, setSentenceIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentSentence.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentSentence.slice(0, displayText.length + 1));
      }, 55);
    } else if (!isDeleting && displayText.length === currentSentence.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 1800);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(displayText.slice(0, -1));
      }, 25);
    } else {
      setIsDeleting(false);
      setSentenceIndex((prev) => (prev + 1) % sentences.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, sentenceIndex]);

  return (
    <motion.p
      className="mt-6 text-sm md:text-base text-black min-h-[1.5rem]"
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {displayText}
      <span className="inline-block ml-1 text-red-800 animate-blink">|</span>

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
          animation: blink 0.8s ease-in-out infinite;
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

        this.size = Math.random() * 9 + 7;

        this.speedY = Math.random() * 1.2 + 0.6;

        this.speedX = (Math.random() - 0.5) * 0.8;

        this.rotation = Math.random() * Math.PI * 2;

        this.rotationSpeed = (Math.random() - 0.5) * 0.04;

        this.swing = Math.random() * Math.PI * 2;
        this.swingSpeed = Math.random() * 0.02 + 0.01;

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
        this.y += this.speedY;

        this.swing += this.swingSpeed;

        this.x += this.speedX + Math.sin(this.swing) * 0.5;

        this.rotation += this.rotationSpeed;

        if (this.y > height + this.size) {
          this.y = -this.size;
          this.x = Math.random() * width;
        }

        if (this.x > width + this.size) {
          this.x = -this.size;
        }

        if (this.x < -this.size) {
          this.x = width + this.size;
        }
      }

      draw() {
        ctx.save();

        ctx.translate(this.x, this.y);

        ctx.rotate(this.rotation);

        const s = this.size;

        ctx.beginPath();

        ctx.moveTo(0, -s);

        ctx.lineTo(s * 0.18, -s * 0.48);
        ctx.lineTo(s * 0.65, -s * 0.68);

        ctx.lineTo(s * 0.48, -s * 0.15);
        ctx.lineTo(s, -s * 0.05);

        ctx.lineTo(s * 0.42, s * 0.25);
        ctx.lineTo(s * 0.58, s * 0.72);

        ctx.lineTo(0, s * 0.48);

        ctx.lineTo(-s * 0.58, s * 0.72);
        ctx.lineTo(-s * 0.42, s * 0.25);

        ctx.lineTo(-s, -s * 0.05);
        ctx.lineTo(-s * 0.48, -s * 0.15);

        ctx.lineTo(-s * 0.65, -s * 0.68);
        ctx.lineTo(-s * 0.18, -s * 0.48);

        ctx.closePath();

        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.beginPath();

        ctx.moveTo(0, s * 0.45);
        ctx.lineTo(0, s * 0.9);

        ctx.strokeStyle = "rgba(100, 60, 20, 0.7)";
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(0, s * 0.4);
        ctx.lineTo(0, -s * 0.7);

        ctx.strokeStyle = "rgba(120, 70, 20, 0.45)";
        ctx.lineWidth = 0.8;
        ctx.stroke();

        ctx.beginPath();

        ctx.moveTo(0, -s * 0.15);
        ctx.lineTo(s * 0.45, -s * 0.45);

        ctx.moveTo(0, -s * 0.15);
        ctx.lineTo(-s * 0.45, -s * 0.45);

        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(s * 0.35, s * 0.05);

        ctx.moveTo(0, s * 0.15);
        ctx.lineTo(-s * 0.35, s * 0.05);

        ctx.strokeStyle = "rgba(120, 70, 20, 0.35)";
        ctx.lineWidth = 0.6;
        ctx.stroke();

        ctx.restore();
      }
    }

    function createLeaves(num: number) {
      leaves.length = 0;

      for (let i = 0; i < num; i++) {
        leaves.push(new Leaf());
      }
    }

    let animationId: number;

    function animate() {
      ctx.clearRect(0, 0, width, height);

      leaves.forEach((leaf) => {
        leaf.update();
        leaf.draw();
      });

      animationId = requestAnimationFrame(animate);
    }

    createLeaves(70);

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

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
      <header
        id="home"
        className="relative isolate min-h-[680px] overflow-hidden bg-[#F7F0E6] px-6 pb-20 pt-28 sm:px-10 md:min-h-[720px] md:px-16 md:pt-36"
      >
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-[#E8D7C2]/60 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-[#D8BFA6]/30 blur-3xl" />

        {/* Logo */}
        <motion.div
          className="absolute left-6 top-6 z-50 flex items-center gap-3 sm:left-10 sm:top-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#38251C] text-xl font-black tracking-tighter text-[#F7F0E6] shadow-lg shadow-[#38251C]/15">
            AB
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-extrabold tracking-widest text-[#38251C]">
              ABOLF AZL ABDI
            </p>
            <p className="mt-0.5 text-[10px] tracking-[3px] text-[#96765C]">
              FRONT-END DEVELOPER
            </p>
          </div>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          className="absolute right-6 top-6 z-[60] flex h-12 w-12 items-center justify-center rounded-2xl border border-[#DCC9B4] bg-[#FFFDF9]/90 text-[#38251C] shadow-lg shadow-[#38251C]/10 backdrop-blur-xl transition-all duration-300 hover:bg-[#38251C] hover:text-[#F7F0E6] md:hidden"
        >
          <div className="relative flex h-5 w-6 flex-col justify-between">
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "scale-0 opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${
                menuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu */}
        <div
          className={`fixed inset-0 z-50 transition-all duration-300 md:hidden ${
            menuOpen
              ? "visible opacity-100"
              : "invisible pointer-events-none opacity-0"
          }`}
        >
          <div
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-[#241710]/55 backdrop-blur-sm"
          />

          <nav
            className={`absolute left-5 right-5 top-20 rounded-[28px] border border-[#E8D7C2] bg-[#FFFDF9] p-6 shadow-2xl shadow-[#241710]/20 transition-all duration-300 ${
              menuOpen ? "translate-y-0 scale-100" : "-translate-y-5 scale-95"
            }`}
          >
            <div className="mb-6 flex items-center justify-between border-b border-[#EDE1D3] pb-5">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[3px] text-[#A17B5C]">
                  Navigation
                </span>
                <h3 className="mt-1 text-xl font-extrabold text-[#38251C]">
                  Explore My Website
                </h3>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F1E4D5] text-xl text-[#80583D]">
                ✦
              </div>
            </div>

            <div className="space-y-2">
              {[
                { name: "Home", href: "#home", number: "01" },
                { name: "About Me", href: "#about", number: "02" },
                { name: "Projects", href: "#Projects", number: "03" },
              ].map((item) => (
                <a
                  key={item.number}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex items-center justify-between rounded-2xl border border-transparent px-4 py-4 transition-all duration-300 hover:border-[#E8D7C2] hover:bg-[#F7F0E6]"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-xs font-bold text-[#B18C6B]">
                      {item.number}
                    </span>
                    <span className="font-bold text-[#38251C] transition-colors group-hover:text-[#9A6D4D]">
                      {item.name}
                    </span>
                  </div>
                  <span className="text-xl text-[#B18C6B] transition-transform group-hover:-translate-x-1">
                    ←
                  </span>
                </a>
              ))}
            </div>

            <div className="mt-6 rounded-2xl bg-[#38251C] p-4 text-center">
              <p className="text-xs tracking-widest text-[#DCC9B4]">
                CREATIVE DEVELOPER
              </p>
              <p className="mt-1 text-sm font-semibold text-[#FFF8EF]">
                Turning Ideas Into Reality.
              </p>
            </div>
          </nav>
        </div>

        {/* Desktop Navigation */}
        <nav className="absolute right-10 top-8 z-40 hidden items-center gap-1 rounded-full border border-[#E5D5C2] bg-[#FFFDF9]/80 p-2 shadow-lg shadow-[#38251C]/5 backdrop-blur-xl md:flex">
          {[
            { name: "Home", href: "#home" },
            { name: "About Me", href: "#about" },
            { name: "Projects", href: "#Projects" },
          ].map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="rounded-full px-6 py-3 text-sm font-semibold text-[#654936] transition-all duration-300 hover:bg-[#38251C] hover:text-[#FFF8EF]"
            >
              {item.name}
            </a>
          ))}
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-12 md:flex-row md:justify-between md:gap-16">
          {/* Profile Image */}
          <motion.div
            className="relative flex-shrink-0"
            initial={{ opacity: 0, scale: 0.8, y: 25 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            {/* Decorative Circle */}
            <div className="absolute -inset-5 rounded-full border border-[#C9A989]/60" />
            <div className="absolute -inset-10 rounded-full border border-[#DCC9B4]/40" />

            {/* Image Background */}
            <div className="relative h-60 w-60 overflow-hidden rounded-full border-[7px] border-[#FFFDF9] bg-[#E8D7C2] shadow-2xl shadow-[#38251C]/20 sm:h-72 sm:w-72 lg:h-[360px] lg:w-[360px]">
              <img
                src="/image/AboutMe/AboutMe.png"
                alt="Abolfazl Abdi"
                className="h-full w-full object-contain"
              />

              <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-[#A17B5C]/20" />
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-3 -right-3 flex items-center gap-2 rounded-2xl border border-[#E8D7C2] bg-[#FFFDF9] px-4 py-3 shadow-xl shadow-[#38251C]/10 sm:-right-8"
            >
              <span className="flex h-3 w-3 rounded-full bg-[#8B9B70] ring-4 ring-[#8B9B70]/15" />
              <span className="text-xs font-bold text-[#654936]">
                Available for Work
              </span>
            </motion.div>

            {/* Decorative Star */}
            <div className="absolute -left-5 top-8 text-3xl text-[#A17B5C]">
              ✦
            </div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="w-full max-w-xl text-center md:text-left"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#E4D2BE] bg-[#FFFDF9]/80 px-5 py-2.5 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-[#A17B5C]" />
              <span className="text-xs font-bold uppercase tracking-[3px] text-[#8B6348]">
                Welcome To My Portfolio
              </span>
            </div>

            <p className="mb-3 text-lg font-semibold text-[#96765C] sm:text-xl">
              Hi There, I'm
            </p>

            <h1 className="text-5xl font-black leading-[1.15] tracking-tight text-[#38251C] sm:text-6xl lg:text-7xl">
              Abolfazl
              <br />
              <span className="text-[#9A6D4D]">Abdi.</span>
            </h1>

            <div className="my-6 flex items-center justify-center gap-3 md:justify-start">
              <span className="h-[2px] w-12 rounded-full bg-[#A17B5C]" />
              <span className="text-xs font-bold uppercase tracking-[4px] text-[#A17B5C]">
                Front-End Developer
              </span>
            </div>

            <p className="mx-auto max-w-lg text-sm leading-8 text-[#78604E] sm:text-base md:mx-0">
              I build modern, responsive and user-friendly web experiences with
              passion for clean code, creative design and innovative ideas.
            </p>

            {/* Social Media */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {/* Telegram */}
              <a
                href="https://t.me/Abolfazl_dev_1386"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5D5C2] bg-[#FFFDF9] text-[#654936] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#229ED9] hover:bg-[#229ED9] hover:text-white hover:shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M21.5 3.5L3 11l6.5 2.2L18.5 7l-7 7.5v3.8l2.9-2.8 3.7 2.7c.5.3 1.1 0 1.3-.6l3.1-13.3c.2-.7-.4-1.2-1-.8z" />
                </svg>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/989378546568"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5D5C2] bg-[#FFFDF9] text-[#654936] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 2a9.93 9.93 0 00-8.56 14.96L2 22l5.2-1.36A10 10 0 1012 2z" />
                  <path d="M16.1 13.6c-.2-.1-1.2-.6-1.4-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.8.8-.1.1-.3.1-.5 0-.2-.1-.9-.3-1.7-1.1-.6-.5-1-1.1-1.1-1.4-.1-.2 0-.3.1-.4l.4-.4.2-.4c.1-.2 0-.3 0-.4l-.6-1.5c-.2-.4-.4-.4-.5-.4h-.4c-.1 0-.3 0-.5.2-.2.2-.6.6-.6 1.4 0 .8.6 1.6.7 1.8.1.2 1.2 2 3 2.7.4.2.7.3 1 .3.4.1.8.1 1.1.1.3 0 1-.4 1.2-.8.2-.4.2-.8.1-.9 0-.1-.2-.2-.4-.3z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/abolfazlabdi418"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5D5C2] bg-[#FFFDF9] text-[#654936] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="h-5 w-5"
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
                aria-label="GitHub"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5D5C2] bg-[#FFFDF9] text-[#654936] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#38251C] hover:bg-[#38251C] hover:text-white hover:shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M12 2a10 10 0 00-3.16 19.5c.5.1.68-.22.68-.48v-1.7c-2.77.6-3.36-1.34-3.36-1.34-.46-1.18-1.12-1.5-1.12-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1 1.53 1 .9 1.53 2.36 1.1 2.94.83.1-.64.35-1.1.63-1.36-2.21-.25-4.54-1.1-4.54-4.91 0-1.1.39-2 1.03-2.7-.1-.26-.45-1.3.1-2.7 0 0 .84-.27 2.76 1.02a9.48 9.48 0 015.04 0c1.92-1.29 2.76-1.02 2.76-1.02.55 1.4.2 2.44.1 2.7.64.7 1.02 1.6 1.02 2.7 0 3.81-2.34 4.66-4.56 4.91.36.3.68.9.68 1.82v2.7c0 .27.18.58.68.48A10 10 0 0012 2z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/abolfazl-abdi-7062773a0/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#E5D5C2] bg-[#FFFDF9] text-[#654936] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white hover:shadow-lg"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M4.98 3.5A2.5 2.5 0 110 3.5a2.5 2.5 0 014.98 0zM.5 8.98H4.9V22H.5zM8.98 8.98h4.18v1.78h.06a4.6 4.6 0 014.13-2.27c4.42 0 5.24 2.91 5.24 6.69V22H17v-7.59c0-1.81-.03-4.14-2.53-4.14-2.53 0-2.91 1.97-2.91 4.01V22H8.98z" />
                </svg>
              </a>
            </div>

            {/* Typewriter */}
            <div className="mt-8 text-[#654936]">
              <Typewriter />
            </div>
          </motion.div>
        </div>

        {/* Bottom Decoration */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[#A17B5C]/70 md:flex">
          <span className="h-px w-12 bg-[#C9A989]" />
          <span className="text-[10px] font-bold uppercase tracking-[4px]">
            Scroll To Explore
          </span>
          <span className="h-px w-12 bg-[#C9A989]" />
        </div>
      </header>

      <div id="About">
        <AboutMe
          introText="I love being a developer!"
          detailText="I'm a Front-End Developer focused on building modern, responsive, and high-performance web applications. I combine clean code, thoughtful design, and a user-centered approach to create digital experiences that are both functional and visually engaging.

My expertise includes JavaScript, TypeScript, React, Next.js, Vue.js, and Tailwind CSS. I value scalable architecture, maintainable code, and efficient development practices, always aiming to deliver reliable and polished solutions.

Beyond coding, I'm passionate about technology, product development, and startup ideas. I enjoy exploring new approaches, solving complex problems, and collaborating with others to transform ideas into meaningful digital products.

I'm continuously expanding my technical knowledge with a clear goal: to become a well-rounded Full-Stack Developer capable of building complete, scalable, and impactful applications."
        />
      </div>
      {/* <AbalonTeam /> */}

      <AboutMeandTitle />
      <div id="Projects">
        <Projects />
      </div>
    </>
  );
};

export default Home;
