import React from "react";
import {
  SiReact, SiAngular, SiVuedotjs, SiSvelte, SiNextdotjs, SiRedux,
  SiNuxtdotjs, SiLaravel, SiTailwindcss, SiTypescript, SiJavascript,
  SiHtml5, SiCss3, SiFirebase, SiMongodb, SiExpress, SiNodedotjs
} from "react-icons/si";
import { motion } from "framer-motion";

const techStack = [
  { Icon: SiReact, color: "#61DAFB" },
  { Icon: SiAngular, color: "#DD0031" },
  { Icon: SiVuedotjs, color: "#42B883" },
  { Icon: SiSvelte, color: "#FF3E00" },
  { Icon: SiNextdotjs, color: "#ffffff" },
  { Icon: SiRedux, color: "#764ABC" },
  { Icon: SiNuxtdotjs, color: "#00C58E" },
  { Icon: SiLaravel, color: "#FF2D20" },
  { Icon: SiTailwindcss, color: "#38BDF8" },
  { Icon: SiTypescript, color: "#3178C6" },
  { Icon: SiJavascript, color: "#F7DF1E" },
  { Icon: SiHtml5, color: "#E34F26" },
  { Icon: SiCss3, color: "#1572B6" },
  { Icon: SiFirebase, color: "#FFCA28" },
  { Icon: SiMongodb, color: "#47A248" },
  { Icon: SiExpress, color: "#ffffff" },
  { Icon: SiNodedotjs, color: "#68A063" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-[#0a0a0a] text-white overflow-hidden"
    >
      {/* Background Grid/Noise */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-[#8b5cf6] to-[#6366f1] bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-12">
            I craft performant, accessible, and beautiful digital experiences using modern web technologies. Here's my current tech stack:
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3 sm:gap-4 md:gap-5 lg:gap-6">
          {techStack.map(({ Icon, color }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: (index % 6) * 0.04 + Math.floor(index / 6) * 0.1,
              }}
              viewport={{ once: true }}
              className="group aspect-square w-[60px] sm:w-[70px] md:w-[80px] mx-auto flex items-center justify-center rounded-xl bg-[#111]/50 backdrop-blur-md border border-[#1e1e1e] shadow-inner hover:shadow-[0_0_10px] transition-all duration-300"
              style={{
                boxShadow: `inset 0 0 0 1px rgba(255,255,255,0.05)`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 0 12px ${color}55, 0 0 24px ${color}33`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = `inset 0 0 0 1px rgba(255,255,255,0.05)`;
              }}
            >
              <Icon
                className="text-2xl sm:text-3xl md:text-4xl transition duration-300"
                style={{ color }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
