"use client";

import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Beauty Salon Website",
    description:
      "A modern beauty salon website showcasing services, design, and user-friendly interactions.",
    url: "https://beuty-salon-abdi-topaz.vercel.app/",
  },
  {
    id: 2,
    title: "Mobile Store",
    description:
      "An online mobile store with user authentication, product management, shopping cart, and modern UI.",
    url: "https://mobile-shoping-abdi.vercel.app/",
  },
  {
    id: 3,
    title: "Beauty Land Website",
    description:
      "A beauty-focused website designed to showcase services, products, and attract customers.",
    url: "https://beuty-land2025.vercel.app/",
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A simple and practical task management application for organizing daily activities efficiently.",
    url: "https://todolist-abdi-nine.vercel.app/",
  },
  {
    id: 5,
    title: "Abalon",
    description:
      "cloud Company",
    url: "https://panel.abalon.cloud/",
  },
];

const Projects = () => {
  return (
    <section
      id="portfolio"
      className="
        relative
        overflow-hidden
        bg-gradient-to-b
        from-[#fef3e2]
        via-[#fff7ed]
        to-[#fffaf3]
        px-6
        py-24
      "
    >
      {/* Background Decorations */}

      <div
        className="
          absolute
          -top-32
          -left-32
          h-80
          w-80
          rounded-full
          bg-orange-300/20
          blur-3xl
        "
      />

      <div
        className="
          absolute
          top-1/2
          -right-32
          h-96
          w-96
          rounded-full
          bg-red-300/10
          blur-3xl
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-1/3
          h-72
          w-72
          rounded-full
          bg-amber-300/10
          blur-3xl
        "
      />

      <div className="relative mx-auto max-w-7xl">
        {/* ================= HEADER ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span
            className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.35em]
              text-orange-700
            "
          >
            My Work
          </span>

          <h1
            className="
              mt-3
              text-5xl
              font-extrabold
              tracking-tight
              text-stone-900
              md:text-6xl
            "
          >
            My Projects
          </h1>

          <div
            className="
              mx-auto
              mt-5
              h-1.5
              w-24
              rounded-full
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-red-600
            "
          />

          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-sm
              leading-7
              text-stone-600
              md:text-base
            "
          >
            A collection of projects I have built while learning, experimenting,
            and improving my development skills.
          </p>
        </motion.div>

        {/* ================= PROJECTS ================= */}

        <div
          className="
            grid
            grid-cols-1
            gap-8
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {projects.map(({ id, title, description, url }, index) => (
            <motion.div
              key={id}
              initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="
                  group
                  relative
                  flex
                  min-h-[390px]
                  cursor-pointer
                  flex-col
                  overflow-hidden
                  rounded-3xl
                  border
                  border-orange-200
                  bg-white/80
                  p-7
                  shadow-lg
                  backdrop-blur-xl
                  transition-shadow
                  duration-300
                  hover:shadow-2xl
                "
              onClick={() => window.open(url, "_blank")}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  window.open(url, "_blank");
                }
              }}
              role="link"
              tabIndex={0}
            >
              {/* Decorative Circle */}

              <div
                className="
                    absolute
                    -right-16
                    -top-16
                    h-40
                    w-40
                    rounded-full
                    bg-orange-300/20
                    blur-2xl
                    transition
                    duration-500
                    group-hover:bg-orange-400/30
                  "
              />

              {/* Project Number */}

              <div
                className="
                    relative
                    mb-8
                    flex
                    items-center
                    justify-between
                  "
              >
                <span
                  className="
                      flex
                      h-12
                      w-12
                      items-center
                      justify-center
                      rounded-2xl
                      bg-orange-100
                      text-lg
                      font-extrabold
                      text-orange-700
                    "
                >
                  0{id}
                </span>

                <span
                  className="
                      text-5xl
                      font-black
                      text-orange-100
                    "
                >
                  {id}
                </span>
              </div>

              {/* Project Content */}

              <div className="relative flex-1">
                <h2
                  className="
                      mb-4
                      border-b-4
                      border-orange-300
                      pb-3
                      text-2xl
                      font-extrabold
                      tracking-tight
                      text-stone-900
                      transition-colors
                      duration-300
                      group-hover:text-orange-700
                      group-hover:border-orange-500
                    "
                >
                  {title}
                </h2>

                <p
                  className="
                      text-sm
                      leading-7
                      text-stone-600
                    "
                >
                  {description}
                </p>
              </div>

              {/* Button */}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(url, "_blank");
                }}
                className="
                    relative
                    mt-8
                    w-full
                    rounded-full
                    bg-gradient-to-r
                    from-orange-500
                    via-amber-500
                    to-red-600
                    px-6
                    py-3
                    font-semibold
                    text-white
                    shadow-lg
                    transition-all
                    duration-300
                    hover:scale-105
                    hover:shadow-xl
                  "
              >
                Visit Project
              </button>

              {/* Bottom Accent */}

              <div
                className="
                    absolute
                    bottom-0
                    left-0
                    h-1
                    w-full
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-orange-500
                    via-amber-500
                    to-red-600
                    transition-transform
                    duration-500
                    group-hover:scale-x-100
                  "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
