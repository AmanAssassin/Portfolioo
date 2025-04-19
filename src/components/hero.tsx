
import { ButtonGlow } from "@/components/ui/button-glow"
import { Squares } from "@/components/ui/squares-background"
import { GradientTracing } from "@/components/ui/gradient-tracing"
import AnimatedTextCycle from "@/components/ui/animated-text-cycle"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606]">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <Squares 
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#333" 
          hoverFillColor="#222"
        />
      </div>
      
      {/* Content */}
      <div className="container mx-auto z-10 px-6 md:px-12 mt-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left">
            <span className="inline-block text-gray-300 font-medium mb-4">
              Hi, I'm Aman Maurya
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              <AnimatedTextCycle 
                words={[
                  "Full Stack Developer",
                  "UI Enthusiast",
                  "React Developer",
                  "Problem Solver"
                ]}
                interval={3000}
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600"
              />
            </h1>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto md:mx-0">
              I craft accessible digital experiences with modern web technologies.
              <br className="hidden md:block" />
              Passionate about performant, accessible, and visually stunning apps.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
              <ButtonGlow variant="primary">
                <a href="#projects">View My Work</a>
              </ButtonGlow>
            <ButtonGlow className="bg-black text-white hover:bg-gray-800 transition duration-300">
  <a href="https://drive.google.com/file/d/1fAyOFkD2eL5eOXhyXRcNjKexaLrSk3oh/view?usp=sharing" target="blank" className="text-white hover:text-gray-300">Resume</a>
</ButtonGlow>
            </div>
            
            <div className="mt-8 hidden md:block">
              <GradientTracing 
                width={300}
                height={40}
                path="M0,20 L300,20"
                gradientColors={["#6366F1", "#8B5CF6", "#D946EF"]}
                baseColor="#333"
                strokeWidth={2}
                animationDuration={3}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060606] to-transparent"></div>
    </section>
  )
}
