"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutMeProps {
  introText: string;
  detailText: string;
}

const skills = [
  { name: "HTML", percent: 90 },
  { name: "CSS", percent: 85 },
  { name: "JavaScript", percent: 80 },
  { name: "TailwindCSS", percent: 80 },
  { name: "React", percent: 85 },
  { name: "Next.js", percent: 75 },
  { name: "Node.js", percent: 70 },
  { name: "Vue.js", percent: 70 },
  { name: "TypeScript", percent: 65 },
  { name: "GitHub", percent: 75 },
  { name: "GitLab", percent: 70 },
  { name: "Git", percent: 80 },
];

const experiences = [
  {
    company: "Beautyland",
    position: "Front-end, Backend",
    duration: "2024 - ...",
    status: "Remote",
    duties: [
      "Team training and structured planning",
      "Content team management for goals achievement",
      "Collaboration with related teams, including sales",
      "Managing content and digital production team",
      "Evaluating team performance and reporting to management",
    ],
  },
  {
    company: "Abalon",
    position: "Front-end",
    duration: "2025 - ...",
    status: "Full Time",
    duties: [
      "Strong Communication Skills",
      "Patience and Composure",
      "Problem-Solving and Analytical Thinking",
      "Teamwork +",
    ],
  },
];

const AboutMe: React.FC<AboutMeProps> = ({ introText, detailText }) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-[#fffaf3] via-[#fff7ed] to-[#fef3e2] px-6 py-20"
    >
      {/* Background Decorations */}

      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-orange-300/20 blur-3xl" />

      <div className="absolute top-1/2 -right-32 h-80 w-80 rounded-full bg-red-300/10 blur-3xl" />

      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-amber-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl">
        {/* ================= ABOUT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid items-start gap-10 md:grid-cols-[220px_1fr]"
        >
          {/* Title */}

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
              About
            </span>

            <h2 className="mt-2 text-4xl font-extrabold text-stone-900 md:text-5xl">
              About Me
            </h2>

            <div className="mt-4 h-1.5 w-20 rounded-full bg-orange-600" />
          </div>

          {/* Text */}

          <div className="relative border-l-4 border-orange-400 pl-7 md:pl-10">
            <div className="absolute -left-2 -top-10 select-none font-serif text-8xl text-orange-300/40">
              “
            </div>

            <p className="relative text-xl font-semibold leading-relaxed text-stone-800 md:text-2xl">
              {introText}
            </p>

            <p className="mt-6 whitespace-pre-line text-sm leading-8 text-stone-600 md:text-base">
              {detailText}
            </p>
          </div>
        </motion.div>

        {/* ================= SKILLS ================= */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-28"
        >
          {/* Section Header */}

          <div className="mb-10 flex items-end justify-between">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
                My abilities
              </span>

              <h2 className="mt-2 text-4xl font-extrabold text-stone-900 md:text-5xl">
                Skills
              </h2>
            </div>

            <span className="hidden text-7xl font-black text-orange-100 md:block">
              01
            </span>
          </div>

          {/* Skills Grid */}

          <div className="grid grid-cols-1 gap-x-14 gap-y-8 md:grid-cols-2">
            {skills.map(({ name, percent }, index) => (
              <motion.div
                key={name}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -30 : 30,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-semibold text-stone-800">{name}</span>

                  <span className="text-sm font-bold text-orange-700">
                    {percent}%
                  </span>
                </div>

                <div className="h-3 w-full overflow-hidden rounded-full bg-stone-200 shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${percent}%`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      ease: "easeOut",
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-red-600"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ================= EXPERIENCE ================= */}

        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-32"
        >
          {/* Header */}

          <div className="mb-14 flex items-center gap-5">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-700">
                My journey
              </span>

              <h2 className="mt-2 text-4xl font-extrabold text-stone-900 md:text-5xl">
                Experience
              </h2>
            </div>

            <div className="hidden h-px flex-1 bg-gradient-to-r from-orange-300 to-transparent md:flex" />
          </div>

          {/* Experience Cards */}

          <div className="grid gap-8 md:grid-cols-2">
            {experiences.map(
              ({ company, position, duration, status, duties }, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -10,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-orange-200 bg-white/80 p-8 shadow-lg backdrop-blur-xl transition-shadow hover:shadow-2xl"
                >
                  {/* Decorative circle */}

                  <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-orange-300/20 blur-2xl transition group-hover:bg-orange-400/30" />

                  {/* Card Header */}

                  <div className="relative mb-8 flex items-center gap-6">
                    {/* Logo */}

                    <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-2xl border border-orange-200 bg-gradient-to-br from-orange-100 to-amber-200 shadow-inner">
                      {company === "Beautyland" ? (
                        <img
                          src="/image/ChatGPT Image Sep 28, 2025, 05_03_22 AM.png"
                          alt="Beautyland Logo"
                          className="max-h-[80%] max-w-[80%] object-contain"
                        />
                      ) : company === "Abalon" ? (
                        <img
                          src="/image/image copy.png"
                          alt="Abalon Logo"
                          className="max-h-[80%] max-w-[80%] object-contain"
                        />
                      ) : (
                        <span className="text-stone-500">Logo</span>
                      )}
                    </div>

                    {/* Information */}

                    <div>
                      <h3 className="text-2xl font-extrabold text-stone-900">
                        {company}
                      </h3>

                      <p className="mt-1 text-sm italic text-stone-500">
                        {position}
                      </p>

                      <p className="mt-2 font-bold text-orange-700">
                        {duration}
                      </p>

                      <span className="mt-3 inline-block rounded-full border border-orange-200 bg-orange-100 px-4 py-1.5 text-xs font-bold text-orange-800">
                        {status}
                      </span>
                    </div>
                  </div>

                  {/* Duties */}

                  <ul className="relative space-y-3 text-sm leading-relaxed text-stone-600">
                    {duties.map((duty, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-orange-100 text-xs font-bold text-orange-700">
                          ✓
                        </span>

                        <span>{duty}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Bottom accent */}

                  <div className="absolute bottom-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-orange-500 via-amber-500 to-red-600 transition-transform duration-500 group-hover:scale-x-100" />
                </motion.div>
              ),
            )}
          </div>
        </motion.section>
      </div>
    </section>
  );
};

export default AboutMe;
