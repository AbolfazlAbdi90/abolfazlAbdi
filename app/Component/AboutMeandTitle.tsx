const AboutMeandTitle = () => {
  return (
    <section className="px-6">
      <div
        className="
          relative
          max-w-[1200px]
          mx-auto
          my-16
          mt-30
          p-8
          md:p-12
          rounded-3xl
          overflow-hidden
          flex
          flex-col
          md:flex-row
          items-center
          gap-10
          bg-gradient-to-br
          from-[#fffaf3]
          via-[#fff7ed]
          to-[#fef3e2]
          border
          border-orange-200
          shadow-xl
          animate-fadeInUp
        "
      >
        {/* Background Decorations */}

        <div
          className="
            absolute
            -top-24
            -right-24
            w-64
            h-64
            rounded-full
            bg-orange-300/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -bottom-24
            -left-24
            w-64
            h-64
            rounded-full
            bg-red-300/10
            blur-3xl
          "
        />

        {/* Image */}

        <div className="relative md:w-1/3 mb-8 md:mb-0">
          <div
            className="
              absolute
              -inset-2
              rounded-2xl
              bg-gradient-to-br
              from-orange-400
              via-amber-400
              to-red-500
              opacity-30
              blur-md
            "
          />

          <img
            src="/image/AboutMe/AboutMe.png"
            alt="Profile"
            className="
              relative
              rounded-2xl
              shadow-2xl
              w-full
              object-cover
              border-4
              border-white
              transition-all
              duration-500
              hover:scale-[1.03]
              hover:-rotate-1
            "
          />
        </div>

        {/* Content */}

        <div
          className="
            relative
            md:w-2/3
            md:pl-10
            font-sans
            text-stone-900
          "
        >
          {/* Small title */}

          <span
            className="
              block
              text-center
              md:text-left
              text-sm
              uppercase
              tracking-[0.3em]
              font-semibold
              text-orange-700
              mb-2
            "
          >
            Get to know me
          </span>

          {/* Main title */}

          <h2
            className="
              text-4xl
              md:text-5xl
              text-center
              md:text-left
              font-extrabold
              mb-6
              tracking-wide
              text-stone-900
            "
          >
            About Me
          </h2>

          {/* Orange line */}

          <div
            className="
              w-20
              h-1.5
              rounded-full
              bg-gradient-to-r
              from-orange-500
              to-red-600
              mx-auto
              md:mx-0
              mb-8
            "
          />

          {/* Text */}

          <p
            className="
              text-base
              md:text-lg
              leading-8
              text-stone-600
            "
          >
            I am a passionate and driven individual, constantly seeking growth
            and knowledge.
            <br />
            <br />
            Programming is not just a skill for me; it's a creative outlet and a
            pathway to solve real-world problems.
            <br />
            <br />
            I firmly believe that dedication and resilience are the keys to
            turning dreams into reality.
            <br />
            <br />
            Beyond technology, I find inspiration in art and nature, which fuel
            my creativity and balance.
            <br />
            <br />
            Every day, I strive to refine my skills and push the boundaries of
            what I can achieve.
            <br />
            <br />
            I envision a future filled with success, innovation, and meaningful
            collaborations.
            <br />
            <br />
            Teamwork is at the core of my values—I believe that the best results
            come from working together, supporting and learning from each other.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMeandTitle;
