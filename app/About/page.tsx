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
  { name: "Vue.js", percent: 60 },
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
      "Strong Communication Skills",
      "Patience and Composure",
      "Problem-Solving and Analytical Thinking",
      "Teamwork +",
      
    ],
  },
  {
    company: "Abalon",
    position: "front-end",
    duration: "2025 - ...",
    status: "Full Time",
    duties: [
      "Team training and structured planning",
      "Content team management for goals achievement",
      "Collaboration with related teams, including sales",
      "Managing content and digital production team",
      "Evaluating team performance and reporting to management",
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
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-20 bg-[#a4a4f5] rounded-lg p-10"
      >
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-blue-900 text-2xl font-extrabold">Experience</h2>
          <div className="flex items-center gap-2 border-b border-black pb-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              viewBox="0 0 24 24"
              className="w-10 h-10 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 20v-2a4 4 0 014-4h6M7 4v16M7 4a4 4 0 014 4v0a4 4 0 004 4h2"
              />
            </svg>
            <span className="text-gray-700 font-semibold">cc</span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map(
            ({ company, position, duration, status, duties }, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-blue-900 p-6 flex"
              >
                {/* جای لوگو خالی */}
               <div className="w-28 h-28 border border-gray-400 rounded-lg mr-6 flex items-center justify-center text-gray-400 text-sm select-none">
  {company === "Beautyland" ? (
    <img src="/image/ChatGPT Image Sep 28, 2025, 05_03_22 AM.png" alt="Beautyland Logo" className="max-w-full max-h-full object-contain" />
  ) : company === "Abalon" ? (
    <img src="/image/image copy.png" alt="Abalon Logo" className="max-w-full max-h-full object-contain" />
  ) : (
    "Logo"
  )}
</div>


                {/* متن‌ها */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-semibold">{company}</h3>
                    <p className="text-gray-500 italic text-sm">{position}</p>
                    <p className="text-purple-700 font-semibold mt-1">{duration}</p>
                    <span className="bg-purple-300 text-purple-900 text-xs rounded-full px-3 py-1 inline-block mt-2">
                      ({status})
                    </span>
                  </div>

                  <ul className="list-disc list-inside mt-4 text-gray-700 text-sm">
                    {duties.map((duty, i) => (
                      <li key={i}>{duty}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
