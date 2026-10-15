
const AboutMeandTitle = () => {
  const technologies = [
    "React",
    "Next.js",
    "Vue.js",
    "TypeScript",
    "Tailwind CSS",
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#fff8ef] via-[#ffeedf] to-[#f8dfc8] px-6 py-20">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#bd8968]/20 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#d6a078]/25 blur-[100px]" />

      <div className="pointer-events-none absolute left-0 top-0 h-40 w-40 rounded-full border border-[#9a6245]/20" />

      {/* Main Card */}
      <div
        className="
          relative mx-auto max-w-[1440px] overflow-hidden
          rounded-[32px] border border-[#d9bba4]/70
          bg-white/35 text-[#38271f]
          shadow-[0_20px_70px_rgba(110,65,40,0.12)]
          backdrop-blur-sm
        "
      >
        <div className="relative grid items-center gap-14 p-7 md:grid-cols-5 md:gap-12 md:p-12 lg:p-16">
          {/* Profile Image */}
          <div className="mx-auto w-full max-w-[340px] md:col-span-2">
            <div className="group relative pb-5">
              {/* Brown and Gold Gradient Border */}
              <div
                className="
                  absolute -inset-[3px] rounded-[38px]
                  bg-gradient-to-br
                  from-[#603923]
                  via-[#bd8256]
                  to-[#f4c779]
                  opacity-90 blur-[1px]
                  transition-all duration-500
                  group-hover:opacity-100
                  group-hover:shadow-[0_0_30px_rgba(189,130,86,0.35)]
                "
              />

              {/* Image Frame */}
              <div className="relative overflow-hidden rounded-[34px] border-[6px] border-[#fff5e9] bg-[#ead2bd] shadow-[0_20px_45px_rgba(83,48,30,0.25)]">
                <img
                  src="/image/AboutMe/AboutMe.png"
                  alt="About me profile"
                  className="
                    aspect-[4/5] w-full object-cover
                    transition-transform duration-700
                    group-hover:scale-105
                  "
                />
              </div>

              {/* Floating Profile Label */}
              <div
                className="
                  absolute -bottom-1 left-1/2 z-10
                  w-max max-w-[95%] -translate-x-1/2
                  rounded-[22px] border border-[#d8b69b]
                  bg-gradient-to-br from-[#fffaf3] to-[#f8e4d1]
                  px-5 py-3 shadow-[0_10px_30px_rgba(83,48,30,0.18)]
                  sm:left-5 sm:translate-x-0
                "
              >
                <div className="flex items-center gap-3">
                  <span className="h-8 w-1 rounded-full bg-gradient-to-b from-[#70452e] to-[#d39a68]" />

                  <div>
                    <p className="text-sm font-bold tracking-wide text-[#603923]">
                      Front-End Developer
                    </p>

                    <p className="mt-1 text-xs text-[#927361]">
                      Building modern web experiences
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="md:col-span-3">
            {/* Small Title */}
            <span
              className="
                mb-5 inline-flex items-center gap-3
                rounded-full border border-[#d9b79c]
                bg-[#f5e1cf]/70 px-4 py-2
                text-xs font-bold uppercase tracking-[0.22em]
                text-[#70452e]
              "
            >
              <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#75472e] to-[#c28b60]" />
              Get to know me
            </span>

            {/* Main Title */}
            <h2 className="text-center text-4xl font-extrabold tracking-tight text-[#35241e] sm:text-5xl md:text-left lg:text-6xl">
              About{" "}
              <span className="bg-gradient-to-r from-[#8a5436] via-[#bd8256] to-[#9c6245] bg-clip-text text-transparent">
                Me.
              </span>
            </h2>

            {/* Accent Line */}
            <div className="mx-auto my-7 h-[5px] w-24 rounded-full bg-gradient-to-r from-[#603923] via-[#bd8256] to-[#e7bd83] md:mx-0" />

            {/* Description */}
            <div className="max-w-2xl space-y-5 text-center text-[15px] leading-8 text-[#69564b] sm:text-base md:text-left">
              <p>
                I'm a passionate Front-End Developer who enjoys turning ideas
                into clean, interactive, and user-friendly web experiences.
              </p>

              <p>
                I work with modern technologies to build responsive interfaces
                with a strong focus on design, performance, and usability.
              </p>

              <p>
                I'm always learning, exploring new ideas, and improving my
                skills to create better digital products.
              </p>

              <p>
                I also value teamwork, creativity, and sharing knowledge
                because great products are built through collaboration.
              </p>
            </div>

            {/* Tech Stack */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 md:justify-start">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="
                    rounded-xl border border-[#e3c8b2]
                    bg-white/45 px-4 py-2.5
                    text-xs font-semibold text-[#704b37]
                    shadow-sm transition-all duration-300
                    hover:-translate-y-1
                    hover:border-[#b98762]
                    hover:bg-[#f1ddca]
                    hover:text-[#4e2e1e]
                    hover:shadow-md
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
