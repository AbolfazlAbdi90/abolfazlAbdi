
"use client";

import React from "react";
import { motion } from "framer-motion";

interface AboutMeProps {
  introText: string;
  detailText: string;
}

const skills = [
  { name: "HTML", percent: 90, category: "Frontend" },
  { name: "CSS", percent: 85, category: "Frontend" },
  { name: "JavaScript", percent: 80, category: "Language" },
  { name: "Tailwind CSS", percent: 80, category: "Styling" },
  { name: "React", percent: 85, category: "Framework" },
  { name: "Next.js", percent: 75, category: "Framework" },
  { name: "Node.js", percent: 70, category: "Backend" },
  { name: "Vue.js", percent: 70, category: "Framework" },
  { name: "TypeScript", percent: 65, category: "Language" },
  { name: "GitHub", percent: 75, category: "Tools" },
  { name: "GitLab", percent: 70, category: "Tools" },
  { name: "Git", percent: 80, category: "Tools" },
];

const experiences = [
  {
    company: "Abalon",
    position: "Front-End Developer",
    duration: "2025 — Present",
    status: "Full Time",
    logo: "/image/image copy.png",
    duties: [
      "Responsive User Interfaces",
      "Modern Web Applications",
      "Clean & Maintainable Code",
      "UI/UX Improvements",
      "Modern Front-End Technologies",
      "Team Collaboration",
    ],
  },
];

const AboutMe: React.FC<AboutMeProps> = ({ introText, detailText }) => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#faf7f2] px-5 py-24 text-[#30251f] sm:px-8 lg:py-32"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-52 top-20 h-[450px] w-[450px] rounded-full bg-[#d7a77b]/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-52 top-[45%] h-[500px] w-[500px] rounded-full bg-[#bd8256]/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= ABOUT ================= */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="grid gap-12 lg:grid-cols-[0.8fr_1.5fr] lg:gap-24"
        >
          {/* Section Heading */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-[#b77b51]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a16e4b]">
                Get to know me
              </span>
            </div>

            <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
              About
              <br />
              <span className="font-serif font-normal italic text-[#b77b51]">
                Me.
              </span>
            </h2>

            <p className="mt-7 max-w-xs text-sm leading-8 text-[#88796e]">
              A little introduction about who I am, what I do, and what drives
              me to create better digital experiences.
            </p>

            <div className="mt-10 hidden h-28 w-28 items-center justify-center rounded-full border border-[#dfc8b4] lg:flex">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#30251f] text-2xl font-serif italic text-[#f5dfca]">
                A.
              </div>
            </div>
          </div>

          {/* Introduction */}
          <div className="relative border-l border-[#dfc8b4] pl-7 sm:pl-12">
            <span className="absolute -left-3 -top-5 font-serif text-6xl text-[#c99a72]/50">
              “
            </span>

            <div className="relative">
              <p className="text-xl font-semibold leading-[1.9] text-[#403129] sm:text-2xl lg:text-[28px]">
                {introText}
              </p>

              <div className="my-9 h-px w-full bg-gradient-to-r from-[#d8b89d] to-transparent" />

              <p className="whitespace-pre-line text-sm leading-9 text-[#817267] sm:text-base">
                {detailText}
              </p>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="h-10 w-10 rounded-full border border-[#dfc8b4] bg-[#f2e7dc] p-1">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#b77b51] text-xs font-bold text-white">
                  A
                </div>
              </div>

              <div>
                <p className="text-sm font-bold text-[#403129]">
                  Abolfazl Abdi
                </p>
                <p className="mt-1 text-[10px] uppercase tracking-[0.2em] text-[#a18a79]">
                  Front-End Developer
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ================= SKILLS ================= */}

        <div className="mt-32 lg:mt-40">

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          >
            <div>
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b77b51]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a16e4b]">
                  My Expertise
                </span>
              </div>

              <h2 className="text-4xl font-black tracking-tight sm:text-5xl">
                Skills &
                <span className="font-serif font-normal italic text-[#b77b51]">
                  {" "}Technologies.
                </span>
              </h2>
            </div>

            <p className="max-w-xs text-sm leading-7 text-[#88796e]">
              Technologies and tools I use to bring ideas to life.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ name, percent, category }, index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.55,
                  delay: (index % 6) * 0.07,
                }}
                className="group rounded-2xl border border-[#e9ded3] bg-white/60 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#c49a76] hover:bg-white hover:shadow-[0_15px_35px_rgba(82,52,32,0.07)] sm:p-6"
              >
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-base font-bold text-[#44342a] transition-colors group-hover:text-[#a16e4b]">
                      {name}
                    </p>
                    <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.18em] text-[#ad9989]">
                      {category}
                    </p>
                  </div>

                  <span className="font-serif text-2xl font-bold text-[#b77b51]">
                    {percent}
                    <span className="text-sm">%</span>
                  </span>
                </div>

                <div className="h-[5px] overflow-hidden rounded-full bg-[#eee6de]">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percent}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1.2,
                      delay: 0.2 + (index % 6) * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-[#a96d45] to-[#d5a77e]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= EXPERIENCE ================= */}

        <div className="mt-32 lg:mt-40">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-[#b77b51]" />
                <span className="text-[11px] font-bold uppercase tracking-[0.3em] text-[#a16e4b]">
                  Career & Experience
                </span>
              </div>

              <h2 className="text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
                My Journey
                <span className="font-serif font-normal italic text-[#b77b51]">
                  .
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-8 text-[#88796e]">
                Every experience is an opportunity to learn, grow, and build
                something meaningful.
              </p>
            </div>

            <div className="flex items-center gap-5 border-l border-[#dfc8b4] pl-6">
              <span className="font-serif text-6xl font-bold text-[#b77b51]">
                {String(experiences.length).padStart(2, "0")}
              </span>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#403129]">
                  Experiences
                </p>
                <p className="mt-2 text-xs text-[#a18a79]">
                  Professional Journey
                </p>
              </div>
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            <div className="absolute bottom-12 left-[19px] top-8 hidden w-px bg-gradient-to-b from-[#b77b51] via-[#dfc8b4] to-transparent sm:block" />

            <div className="space-y-8">
              {experiences.map(
                ({ company, position, duration, status, logo, duties }, index) => (
                  <motion.article
                    key={company}
                    initial={{ opacity: 0, x: 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.15 }}
                    transition={{ duration: 0.7 }}
                    className="relative sm:pl-16"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-[12px] top-10 z-10 hidden h-[15px] w-[15px] rounded-full border-[4px] border-[#b77b51] bg-[#faf7f2] shadow-[0_0_0_6px_rgba(183,123,81,0.10)] sm:block" />

                    <div className="group relative overflow-hidden rounded-[28px] border border-[#e8ddd2] bg-white/65 p-6 shadow-[0_10px_35px_rgba(70,45,29,0.035)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-[#c49a76] hover:shadow-[0_20px_50px_rgba(70,45,29,0.08)] sm:p-9 lg:p-11">

                      {/* Decorative Glow */}
                      <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[#c49a76]/10 blur-[90px] transition-all duration-700 group-hover:bg-[#c49a76]/20" />

                      <div className="relative">

                        {/* Card Top */}
                        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                          <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#ad9989]">
                            EXPERIENCE / 0{index + 1}
                          </span>

                          <span className="flex items-center gap-2 rounded-full border border-[#d8c3b0] bg-[#f7efe7] px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#80583f]">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-[#b77b51]" />
                            {status}
                          </span>
                        </div>

                        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">

                          {/* Company Info */}
                          <div className="flex flex-col justify-between gap-9">
                            <div className="flex items-center gap-5">
                              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-[#e9ded3] bg-[#faf7f2] p-3 transition-transform duration-500 group-hover:rotate-[-3deg] group-hover:scale-105 sm:h-24 sm:w-24">
                                <img
                                  src={logo}
                                  alt={`${company} Logo`}
                                  className="max-h-full max-w-full object-contain"
                                />
                              </div>

                              <div className="min-w-0">
                                <h3 className="break-words text-2xl font-black tracking-tight text-[#352820] sm:text-3xl">
                                  {company}
                                </h3>
                                <p className="mt-2 text-sm font-medium text-[#987d69]">
                                  {position}
                                </p>
                              </div>
                            </div>

                            {/* Duration */}
                            <div className="flex flex-wrap gap-3">
                              <div className="rounded-2xl border border-[#e8ddd2] bg-[#faf7f2] px-5 py-4">
                                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ad9989]">
                                  Duration
                                </p>
                                <p className="text-xs font-bold text-[#704e38]">
                                  {duration}
                                </p>
                              </div>

                              <div className="flex items-center gap-3 rounded-2xl border border-[#e8ddd2] bg-[#faf7f2] px-5 py-4">
                                <span className="text-xl text-[#b77b51]">
                                  ✳
                                </span>
                                <span className="text-xs font-semibold text-[#704e38]">
                                  Career Growth
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Responsibilities */}
                          <div className="border-t border-[#e8ddd2] pt-8 lg:border-l lg:border-t-0 lg:pl-9 lg:pt-0">
                            <div className="mb-7 flex items-center justify-between">
                              <div>
                                <h4 className="text-sm font-black text-[#49372b]">
                                  Skills & Responsibilities
                                </h4>
                                <p className="mt-2 text-xs text-[#ad9989]">
                                  Areas of contribution
                                </p>
                              </div>

                              <span className="font-serif text-3xl font-bold text-[#b77b51]/50">
                                {String(duties.length).padStart(2, "0")}
                              </span>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2">
                              {duties.map((duty, i) => (
                                <motion.div
                                  key={duty}
                                  initial={{ opacity: 0, y: 10 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: i * 0.06 }}
                                  className="flex items-center gap-3 rounded-xl border border-[#eae0d6] bg-[#faf7f2]/80 px-3 py-3 transition-all duration-300 hover:border-[#c49a76] hover:bg-[#f4e9de]"
                                >
                                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#efe1d3] text-[10px] font-bold text-[#a16e4b]">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>

                                  <span className="text-[11px] font-semibold leading-5 text-[#69564b]">
                                    {duty}
                                  </span>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Footer */}
                        <div className="mt-10 flex items-center justify-between border-t border-[#e8ddd2] pt-6">
                          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#ad9989] sm:text-[10px]">
                            Building · Learning · Growing
                          </span>

                          <span className="font-serif text-sm font-bold text-[#b77b51]">
                            0{index + 1}
                          </span>
                        </div>
                      </div>

                      {/* Bottom Accent */}
                      <div className="absolute bottom-0 left-0 h-[3px] w-0 bg-gradient-to-r from-[#80583f] via-[#b77b51] to-[#e3c29e] transition-all duration-700 group-hover:w-full" />
                    </div>
                  </motion.article>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
