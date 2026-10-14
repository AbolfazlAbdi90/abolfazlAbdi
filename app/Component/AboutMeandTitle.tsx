
const AboutMeandTitle = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fffaf3] via-[#fff7ed] to-[#fef3e2] px-6 py-20">
      <div
        className="
          relative mx-auto max-w-[1200px] overflow-hidden
          rounded-[32px] border border-[#f3dce2]
          bg-white/50 text-[#3d2933]
          shadow-[0_20px_70px_rgba(190,120,150,0.12)]
          backdrop-blur-sm
        "
      >
        {/* Background Decorations */}
        <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-pink-300/25 blur-[100px]" />

        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-purple-300/20 blur-[100px]" />

        <div className="relative grid items-center gap-12 p-7 md:grid-cols-5 md:gap-10 md:p-12 lg:p-16">
          {/* Profile Image */}
          <div className="mx-auto w-full max-w-[340px] md:col-span-2">
            <div className="group relative">
              <div className="absolute -inset-[2px] rounded-[26px] bg-gradient-to-br from-pink-400 via-rose-300 to-purple-400 opacity-70 blur-sm transition duration-500 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-[24px] border-4 border-white bg-[#fff7ed] shadow-xl">
                <img
                  src="/image/AboutMe/AboutMe.png"
                  alt="About me profile"
                  className="
                    aspect-[4/5] w-full object-cover
                    transition duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Floating Label */}
              <div className="absolute -bottom-5 left-1/2 w-max max-w-[95%] -translate-x-1/2 rounded-2xl border border-[#f3dce2] bg-white/95 px-5 py-3 shadow-lg backdrop-blur-xl sm:left-5 sm:translate-x-0">
                <p className="text-sm font-semibold tracking-wide text-[#9d5577]">
                  Front-End Developer
                </p>

                <p className="mt-1 text-xs text-[#927c89]">
                  Building modern web experiences
                </p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {/* Small Title */}
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-pink-200/80 bg-pink-100/60 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#b6537e]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e879a9]" />
              Get to know me
            </span>

            {/* Main Title */}
            <h2 className="text-center text-4xl font-bold tracking-tight text-[#3d2933] sm:text-5xl md:text-left lg:text-6xl">
              About
              <span className="bg-gradient-to-r from-[#e879a9] to-[#b38add] bg-clip-text text-transparent">
                {" "}Me.
              </span>
            </h2>

            {/* Accent Line */}
            <div className="mx-auto my-6 h-1 w-16 rounded-full bg-gradient-to-r from-[#e879a9] to-[#b38add] md:mx-0" />

            {/* Description */}
            <p className="max-w-2xl text-center text-[15px] leading-8 text-[#796773] sm:text-base md:text-left">
              I'm a passionate Front-End Developer who enjoys turning ideas
              into clean, interactive, and user-friendly web experiences.

              <br />
              <br />

              I work with modern technologies to build responsive interfaces
              with a strong focus on design, performance, and usability.

              <br />
              <br />

              I'm always learning, exploring new ideas, and improving my skills
              to create better digital products.

              <br />
              <br />

              I also value teamwork, creativity, and sharing knowledge because
              great products are built through collaboration.
            </p>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              {[
                "React",
                "Next.js",
                "Vue.js",
                "TypeScript",
                "Tailwind CSS",
              ].map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-lg border border-[#efdce5]
                    bg-white/60 px-3 py-2
                    text-xs font-medium text-[#79586b]
                    shadow-sm transition duration-300
                    hover:-translate-y-1
                    hover:border-pink-300
                    hover:bg-pink-100/70
                    hover:text-[#b6537e]
                  "
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeandTitle;
