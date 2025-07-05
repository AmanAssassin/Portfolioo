import { ButtonGlow } from "@/components/ui/button-glow";
import { Squares } from "@/components/ui/squares-background";
import { GradientTracing } from "@/components/ui/gradient-tracing";
import AnimatedTextCycle from "@/components/ui/animated-text-cycle";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import main from "../asset/main.png";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060606]"
    >
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares
          direction="diagonal"
          speed={0.3}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">

          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <span className="text-gray-300 font-medium text-base sm:text-lg">
              Hi, I'm Aman Maurya
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white">
              <AnimatedTextCycle
                words={[
                  "Full Stack Developer",
                  "UI Enthusiast",
                  "React Developer",
                  "Problem Solver",
                ]}
                interval={3000}
                className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-600"
              />
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl">
              I craft accessible digital experiences with modern web technologies.
              Passionate about performant, accessible, and visually stunning apps.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center sm:justify-start justify-center gap-4 pt-2">
              <ButtonGlow className="min-w-[150px] py-3 px-6 text-sm sm:text-base">
                <a href="#projects">View My Work</a>
              </ButtonGlow>
              <ButtonGlow className="bg-black text-white hover:bg-gray-800 transition min-w-[150px] py-3 px-6 text-sm sm:text-base">
                <a
                  href="https://drive.google.com/file/d/1fAyOFkD2eL5eOXhyXRcNjKexaLrSk3oh/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </ButtonGlow>
            </div>

            {/* Gradient Line */}
            <div className="mt-10 hidden md:block">
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

          {/* Image Without Shape */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <div className="relative group transition-all duration-500 ease-in-out">
              <img
                src={main}
                alt="Aman Maurya"
                className="w-[220px] sm:w-[260px] md:w-[300px] h-auto object-contain transition-all duration-500 ease-in-out group-hover:shadow-[0_0_50px_5px_rgba(139,92,246,0.4)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer z-20"
        initial={{ y: 0 }}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.6,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
        onClick={() => {
          const section = document.querySelector("#about");
          section?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <ChevronDown className="w-6 h-6 text-violet-400 opacity-70 hover:opacity-100 transition-all duration-300" />
      </motion.div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#060606] to-transparent"></div>
    </section>
  );
}
