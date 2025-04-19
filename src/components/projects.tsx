
import { ButtonGlow } from "@/components/ui/button-glow"
import { PinContainer } from "@/components/ui/3d-pin"

const projects = [
  {
    title: "Porfolio",
    description: "A modern e-commerce platform built with React, Node.js, and MongoDB.",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    image: "https://drive.google.com/file/d/1SdPLJtvYglbqEG5_-tEIL3EHlXitwEp5/view?usp=drive_link",
  },
  {
    title: "Mesho App",
    description: "A real-time weather dashboard with interactive maps and forecasts.",
    tags: ["React", "OpenWeather API", "Chart.js", "Tailwind CSS"],
    image: "https://drive.google.com/file/d/1ekhcYm32OJwn66AWYb7a1kH3MiGkB0UI/view?usp=drive_link",
  },
  {
    title: "Q-trip",
    description: "A collaborative task management application with real-time updates.",
    tags: ["React", "Firebase", "Redux", "Material UI"],
    image: "https://drive.google.com/file/d/11LmxgVIef7WXnxXZhargrhIK66_dUKZI/view?usp=drive_link",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-[#060606]">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          My <span className="text-indigo-500">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="relative h-[450px]">
              <PinContainer 
                title={project.title}
                href="#"
                containerClassName="w-full h-full"
              >
                <div className="w-[300px] h-[350px] p-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden transition-all duration-300">
                  <div className="h-48 overflow-hidden mb-4">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => (
                      <span 
                        key={i} 
                        className="text-xs px-2 py-1 bg-indigo-900/30 text-indigo-300 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <ButtonGlow variant="primary" className="w-full mt-auto">
                    View Project
                  </ButtonGlow>
                </div>
              </PinContainer>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
