const AboutMeandTitle = () => {
  return (
    <div className="max-w-[1200px] mx-auto my-16 p-8 mt-30 rounded-xl shadow-lg flex flex-col md:flex-row items-center animate-fadeInUp">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src="./image/AboutMe/AboutMe.png"
          alt="Profile"
          className="rounded-xl shadow-xl w-full object-cover animate-float"
        />
      </div>
      <div className="md:w-2/3 md:pl-10 font-sans text-gray-900 dark:text-gray-100">
        <h2 className="text-4xl text-center font-extrabold mb-6 tracking-wide text-purple-700 dark:text-purple-400">
          About Me
        </h2>
        <p className="text-lg leading-relaxed space-y-4">
          I am a passionate and driven individual, constantly seeking growth and knowledge.  
          Programming is not just a skill for me; it's a creative outlet and a pathway to solve real-world problems.  
          I firmly believe that dedication and resilience are the keys to turning dreams into reality.  
          Beyond technology, I find inspiration in art and nature, which fuel my creativity and balance.  
          Every day, I strive to refine my skills and push the boundaries of what I can achieve.  
          I envision a future filled with success, innovation, and meaningful collaborations.  
          Teamwork is at the core of my values—I believe that the best results come from working together, supporting and learning from each other.
        </p>
      </div>
    </div>
  );
};

export default AboutMeandTitle;
