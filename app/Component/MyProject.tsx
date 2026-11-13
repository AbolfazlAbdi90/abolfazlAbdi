
"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Beauty Salon Website",
    description:
      "A modern beauty salon website featuring elegant design, service presentation, and a smooth user experience.",
    url: "https://beuty-salon-abdi-topaz.vercel.app/",
    category: "Web Development",
  },
  {
    id: 2,
    title: "Mobile Store",
    description:
      "An online mobile store featuring user authentication, product management, and shopping cart functionality.",
    url: "https://mobile-shoping-abdi.vercel.app/",
    category: "E-Commerce",
  },
  {
    id: 3,
    title: "Beauty Land",
    description:
      "A beauty-focused platform designed to showcase services and products through a modern digital experience.",
    url: "https://beuty-land2025.vercel.app/",
    category: "Web Development",
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A practical task management application designed to help users organize and manage their daily activities.",
    url: "https://todolist-abdi-nine.vercel.app/",
    category: "Web Application",
  },
  {
    id: 5,
    title: "Abalon",
    description:
      "A cloud-based platform providing a digital environment for accessing and managing online services.",
    url: "https://panel.abalon.cloud/",
    category: "Cloud Platform",
  },
  {
    id: 6,
    title: "CafeChii",
    description:
      "A modern cafe website with an elegant visual identity and a welcoming digital experience.",
    url: "https://cafechii-one.vercel.app/",
    category: "Landing Page",
  },
  {
    id: 7,
    title: "dentist website",
    description:
      "A modern cafe website with an elegant visual identity and a welcoming digital experience.",
    url: "https://dentistry-sigma-seven.vercel.app/",
    category: "Landing Page",
  },
];

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden bg-[#fffaf3] px-6 py-24 md:py-32"
    >
      {/* Background */}

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-[450px] w-[450px] rounded-full bg-[#e8c5a5]/20 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[450px] w-[450px] rounded-full bg-[#d9ad82]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[#e8d4c0] bg-white/70 px-5 py-2.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#bd8256] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[#bd8256]" />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#9b6847]">
              Selected Works
            </span>
          </div>

          <h2 className="text-4xl font-black tracking-tight text-[#493326] sm:text-5xl md:text-6xl">
            Crafted With
            <span className="block mt-2 bg-gradient-to-r from-[#bd8256] to-[#d9a77d] bg-clip-text text-transparent">
              Passion & Code.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#806b5b] md:text-base">
            A selection of digital experiences, creative ideas,
            and modern solutions built with passion and attention to detail.
          </p>

          <div className="mx-auto mt-9 h-[2px] w-20 rounded-full bg-gradient-to-r from-transparent via-[#bd8256] to-transparent" />
        </motion.div>

        {/* Projects */}

        <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"

              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}

              transition={{
                duration: 0.65,
                delay: index * 0.09,
              }}

              whileHover={{ y: -10 }}

              className="
                group relative flex min-h-[355px] flex-col
                overflow-hidden rounded-[30px]
                border border-[#ead9c8]
                bg-white/65 p-7
                shadow-[0_10px_40px_rgba(96,57,35,0.045)]
                backdrop-blur-xl
                transition-all duration-500
                hover:border-[#c99b76]
                hover:bg-white
                hover:shadow-[0_25px_60px_rgba(96,57,35,0.12)]
                sm:p-8
              "
            >

              {/* Decorative Background */}

              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#bd8256]/[0.04] transition-all duration-700 group-hover:scale-150 group-hover:bg-[#bd8256]/[0.09]" />

              {/* Top */}

              <div className="relative mb-12 flex items-center justify-between">

                <div className="flex items-center gap-3">
                  <span className="text-xs font-black tracking-[0.18em] text-[#bd8256]">
                    0{project.id}
                  </span>

                  <span className="h-px w-9 bg-[#dfc7b2]" />

                  <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#ad9885]">
                    PROJECT
                  </span>
                </div>

                <div className="
                  flex h-11 w-11 items-center justify-center
                  rounded-full border border-[#ead9c8]
                  bg-white text-lg text-[#9b6847]
                  transition-all duration-500
                  group-hover:rotate-45
                  group-hover:border-[#bd8256]
                  group-hover:bg-[#bd8256]
                  group-hover:text-white
                ">
                  ↗
                </div>

              </div>

              {/* Content */}

              <div className="relative flex-1">

                <span className="
                  mb-4 inline-flex rounded-full
                  bg-[#fff3e7] px-3 py-1.5
                  text-[10px] font-bold uppercase
                  tracking-[0.13em] text-[#a87550]
                ">
                  {project.category}
                </span>

                <h3 className="
                  mb-4 text-[23px] font-extrabold
                  leading-tight tracking-tight text-[#493326]
                  transition-colors duration-300
                  group-hover:text-[#a36c43]
                ">
                  {project.title}
                </h3>

                <p className="text-[13px] leading-[2.1] text-[#806b5b]">
                  {project.description}
                </p>

              </div>

              {/* Footer */}

              <div className="relative mt-9 flex items-center justify-between border-t border-[#eee0d3] pt-6">

                <span className="text-xs font-bold tracking-wide text-[#9b6847] transition-all duration-300 group-hover:tracking-widest">
                  Explore Project
                </span>

                <span className="
                  flex h-9 w-9 items-center justify-center
                  rounded-full bg-[#fff2e4]
                  text-[#a36c43]
                  transition-all duration-300
                  group-hover:translate-x-1
                  group-hover:bg-[#bd8256]
                  group-hover:text-white
                ">
                  →
                </span>

              </div>

              {/* Bottom Accent */}

              <div className="
                absolute bottom-0 left-0 h-[3px] w-full
                origin-left scale-x-0
                bg-gradient-to-r from-[#bd8256] via-[#d5a16f] to-[#edc58e]
                transition-transform duration-700
                group-hover:scale-x-100
              " />

            </motion.a>
          ))}

        </div>

        {/* Bottom */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-xs font-medium tracking-[0.12em] text-[#987e6b]">
            MORE IDEAS <span className="mx-2 text-[#bd8256]">✦</span>
            MORE EXPERIENCES <span className="mx-2 text-[#bd8256]">✦</span>
            MORE PROJECTS TO COME
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default Projects;
