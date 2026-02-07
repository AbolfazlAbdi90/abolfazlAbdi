const projects = [
  {
    id: 1,
    title: "Beauty Salon Website",
    description:
      "A brief introduction to the first project, showcasing the main features and technologies used.",
    url: "https://beuty-salon-abdi-topaz.vercel.app/",
  },
  {
    id: 2,
    title: "Mobile Store",
    description:
      "An online mobile store with full features including user authentication and product management.",
    url: "https://mobile-shoping-abdi.vercel.app/",
  },
  {
    id: 3,
    title: "Beauty Land Website",
    description:
      "A beauty salon website designed to showcase services and attract customers.",
    url: "https://beuty-land2025.vercel.app/",
  },
  {
    id: 4,
    title: "To-Do List App",
    description:
      "A simple to-do list application to help users manage their daily tasks efficiently.",
    url: "https://todolist-abdi-nine.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-purple-400  to-blue-200  py-16 px-6 flex flex-col items-center">
      <h1 className="text-6xl font-extrabold text-white mb-20 text-center drop-shadow-lg tracking-wide select-none">
        My Projects
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 max-w-7xl w-full">
        {projects.map(({ id, title, description, url }) => (
          <div
            key={id}
            role="link"
            tabIndex={0}
            onClick={() => window.open(url, "_blank")}
            onKeyDown={(e) => {
              if (e.key === "Enter") window.open(url, "_blank");
            }}
            className="group bg-white rounded-3xl shadow-xl p-8 flex flex-col justify-between cursor-pointer
                       transform transition duration-500 ease-in-out
                       hover:scale-[1.07] hover:shadow-2xl
                       ring-1 ring-transparent group-hover:ring-purple-500"
          >
            <div className="mb-6">
              <h2 className="text-3xl font-extrabold text-purple-800 mb-4 border-b-4 border-purple-400 pb-2 tracking-tight
                             transition-colors duration-300 group-hover:text-pink-600 group-hover:border-pink-500">
                {title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed font-light line-clamp-5">
                {description}
              </p>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                window.open(url, "_blank");
              }}
              className="mt-auto py-3 px-6 bg-gradient-to-r from-pink-500 to-purple-700 text-white rounded-full
                         font-semibold shadow-lg
                         hover:from-purple-700 hover:to-pink-500
                         transition-colors duration-300 transform hover:scale-105"
            >
              Visit Project
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
