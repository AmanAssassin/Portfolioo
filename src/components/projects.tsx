import { motion } from "framer-motion";
import { Globe2, Github } from "lucide-react";
import meshoImg from "../asset/meshop.png";
import portfolioImg from "../asset/portfolio.png";
import qtripImg from "../asset/qtrip.png";

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

const cardVariants = {
  initial: { 
    scale: 1, 
    opacity: 1,
    filter: "blur(0px)"
  },
  hover: { 
    scale: 0.9, 
    opacity: 0,
    filter: "blur(4px)",
    transition: { 
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
};

const buttonContainerVariants = {
  initial: { opacity: 0 },
  hover: { 
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.15
    }
  }
};

const buttonVariants = {
  initial: { 
    scale: 0, 
    y: 20,
    opacity: 0 
  },
  hover: {
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 15,
      mass: 0.5
    }
  }
};

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My <span className="text-indigo-500">Projects</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              className="relative h-[380px] w-full flex items-center justify-center"
              whileHover="hover"
              initial="initial"
            >
              {/* Project Card - Fades out smoothly */}
              <motion.div
                className="absolute inset-0 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-xl p-6 shadow-xl flex flex-col"
                variants={cardVariants}
              >
                <div className="h-48 mb-4 rounded-lg overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Action Buttons - Appear with perfect timing */}
              <motion.div
                className="absolute flex gap-6 z-10"
                variants={buttonContainerVariants}
              >
                {/* Live Demo Button */}
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl flex items-center justify-center"
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(99, 102, 241, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Globe2 className="text-white w-6 h-6 z-10" />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 0.7,
                      transition: { duration: 0.4 }
                    }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      transition: { 
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.a>

                {/* GitHub Button */}
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative p-4 rounded-full bg-gradient-to-br from-gray-200 to-gray-400 shadow-2xl flex items-center justify-center"
                  variants={buttonVariants}
                  whileHover={{
                    scale: 1.1,
                    boxShadow: "0 0 25px rgba(156, 163, 175, 0.8)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github className="text-gray-900 w-6 h-6 z-10" />
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-500 rounded-full"
                    initial={{ opacity: 0 }}
                    whileHover={{ 
                      opacity: 0.7,
                      transition: { duration: 0.4 }
                    }}
                    animate={{
                      opacity: [0, 0.4, 0],
                      transition: { 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }
                    }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}