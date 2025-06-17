import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    link: "https://portfolio-xi-sooty-88.vercel.app/",
    github: "https://github.com/aman-webdev/portfolio",
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
    github: "https://github.com/aman-webdev/shop-cart",
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            return (
              <div
                key={index}
                className="relative h-[380px] w-full flex items-center justify-center cursor-pointer"
                onMouseEnter={() => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
              >
                <motion.div
                  className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl flex flex-col transition-all duration-300"
                  animate={{
                    scale: isActive ? 0.9 : 1,
                    opacity: isActive ? 0 : 1,
                    filter: isActive ? "blur(4px)" : "blur(0px)",
                  }}
                >
                  <div className="h-48 mb-4 rounded-lg overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="absolute flex gap-6 z-10"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Globe2 className="text-white w-6 h-6 z-10" />
                      </motion.a>

                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative p-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github className="text-gray-900 w-6 h-6 z-10" />
                      </motion.a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
