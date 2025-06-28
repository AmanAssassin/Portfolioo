import { useState } from "react";
import { Globe2, Github } from "lucide-react";
import meshoImg from "../asset/meshop.png";
import portfolioImg from "../asset/portfolio.png";
import qtripImg from "../asset/qtrip.png";
import cryptoImg from "../asset/crypto_img.png";

const projects = [
  {
    title: "Portfolio",
    description: "A modern portfolio built with React and Next.js",
    tags: ["React", "Next.js", "Tailwind CSS"],
    image: portfolioImg,
    link: "https://amanmdev.vercel.app/",
    github: "https://github.com/AmanAssassin/Portfolioo.git",
  },
  {
    title: "Crypto Market",
    description: "Crypto dashboard with graph",
    tags: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
    image: cryptoImg,
    link: "https://crypto-market-rho.vercel.app/",
    github: "https://github.com/AmanAssassin/Crypto-Market",
  },
  {
    title: "Mesho App",
    description: "E-commerce platform with cart functionality",
    tags: ["React", "Context API", "Styled Components"],
    image: meshoImg,
    link: "https://shop-cart-hazel-one.vercel.app/",
    github: "https://github.com/AmanAssassin/Shop-cart.git",
  },
  {
    title: "Q-trip",
    description: "Travel booking application with filters",
    tags: ["React", "Bootstrap", "JavaScript"],
    image: qtripImg,
    link: "https://qtrips-dynamic.netlify.app/",
    github: "https://github.com/aman-webdev/qtrip-dynamic",
  },
];

export function Projects() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filteredProjects = activeTag
    ? projects.filter((project) => project.tags.includes(activeTag))
    : projects;

  const uniqueTags = Array.from(new Set(projects.flatMap((p) => p.tags)));

  return (
    <section id="projects" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() =>
                setActiveTag((prev) => (prev === tag ? null : tag))
              }
              className={`px-4 py-1 rounded-full text-sm transition-all duration-300 border ${
                activeTag === tag
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "border-indigo-700 text-indigo-300 hover:bg-indigo-700 hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="flex flex-col justify-between h-full rounded-2xl overflow-hidden backdrop-blur-md border border-white/10 bg-[#1e293b]/70 shadow-[0_6px_18px_rgba(79,70,229,0.15),_0_4px_12px_rgba(56,189,248,0.08)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_10px_24px_rgba(79,70,229,0.4),_0_6px_16px_rgba(56,189,248,0.4)]"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-xl"
              />

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-indigo-900/30 text-indigo-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Bottom Links */}
                <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-indigo-400 hover:text-white transition text-sm"
                  >
                    <Globe2 className="w-5 h-5" /> Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-white transition text-sm"
                  >
                    <Github className="w-5 h-5" /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
