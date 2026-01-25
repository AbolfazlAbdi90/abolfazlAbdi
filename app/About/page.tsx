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
];

const experiences = [
  {
    company: "Beautyland",
    position: "front-end,backend",
    duration: "2024 - ...",
    status: "remote",
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
    position: "front-end",
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
    <section className="max-w-6xl mx-auto px-6 py-12 bg-white">
      {/* بخش معرفی */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-12"
      >
        <div className="text-2xl md:text-3xl font-extrabold text-blue-900 flex-shrink-0">
          {introText}
        </div>
        <div className="border-l-4 border-blue-300 pl-6 flex-1">
          <div className="text-7xl text-black leading-none -mt-6 -mb-6 select-none">
            &#8220;&#8220;
          </div>
          <div className="text-gray-700 space-y-6 text-sm md:text-base leading-relaxed whitespace-pre-line">
            <p>{introText}</p>
            <p>{detailText}</p>
          </div>
        </div>
      </motion.div>

      {/* بخش مهارت‌ها */}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-blue-900 text-xl font-bold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {skills.map(({ name, percent }) => (
            <div key={name}>
              <div className="flex justify-between mb-1 font-semibold text-gray-800">
                <span>{name}</span>
                <span>{percent}%</span>
              </div>
              <div className="w-full bg-gray-300 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="h-4 bg-blue-600 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* بخش تجربه کاری مطابق عکس */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 relative"
      >
        {/* هدر */}
        <div className="flex items-center gap-6 mb-14">
          <h2 className="text-3xl font-extrabold text-blue-900 tracking-wide">
            Experience
          </h2>

          <div className="flex items-center gap-2 border-b-2 border-black pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 20v-2a4 4 0 014-4h6M7 4v16M7 4a4 4 0 014 4v0a4 4 0 004 4h2"
              />
            </svg>
            <span className="font-semibold text-gray-700">Career</span>
          </div>
        </div>

        {/* کارت‌ها */}
        <div className="grid md:grid-cols-2 gap-12">
          {experiences.map(
            ({ company, position, duration, status, duties }, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-blue-900/30 p-8 shadow-lg hover:shadow-2xl"
              >
                {/* هدر کارت */}
                <div className="flex items-center gap-6 mb-6">
                  {/* لوگو */}
                  <div className="w-24 h-24 rounded-xl bg-gradient-to-br from-purple-200 to-blue-200 flex items-center justify-center shadow-inner">
                    {company === "Beautyland" ? (
                      <img
                        src="/image/ChatGPT Image Sep 28, 2025, 05_03_22 AM.png"
                        alt="Beautyland Logo"
                        className="max-w-[80%] max-h-[80%] object-contain"
                      />
                    ) : company === "Abalon" ? (
                      <img
                        src="/image/image copy.png"
                        alt="Abalon Logo"
                        className="max-w-[80%] max-h-[80%] object-contain"
                      />
                    ) : (
                      <span className="text-gray-500 text-sm">Logo</span>
                    )}
                  </div>

                  {/* اطلاعات */}
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      {company}
                    </h3>
                    <p className="text-gray-500 italic text-sm">{position}</p>
                    <p className="text-purple-700 font-semibold mt-1">
                      {duration}
                    </p>

                    <span className="inline-block mt-3 px-4 py-1 rounded-full text-xs font-semibold bg-purple-100 text-purple-800">
                      {status}
                    </span>
                  </div>
                </div>

                {/* وظایف */}
                <ul className="space-y-2 text-gray-700 text-sm leading-relaxed">
                  {duties.map((duty, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="text-purple-600">▹</span>
                      <span>{duty}</span>
                    </li>
                  ))}
                </ul>

                {/* افکت گوشه */}
                <div className="absolute -top-2 -right-2 w-16 h-16 bg-purple-300/20 rounded-full blur-2xl" />
              </motion.div>
            )
          )}
        </div>
      </motion.section>
    </section>
  );
};

export default AboutMe;
