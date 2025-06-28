import { useState, useRef } from "react";
import { ButtonGlow } from "@/components/ui/button-glow";
import { motion, useInView } from "framer-motion";
import { Github, Twitter, Linkedin } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 bg-[#080808] relative overflow-hidden">
      {/* Effects Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-500/30 to-transparent"></div>
        </div>
        <div className="absolute -left-20 -top-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px]"></div>
        <div className="absolute -right-20 -bottom-20 w-64 h-64 rounded-full bg-indigo-600/10 blur-[80px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <h2 className="text-3xl font-bold mb-12 text-center text-white">
          Get In <span className="text-indigo-500">Touch</span>
        </h2>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {/* Left Panel */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Let's Connect</h3>
            <p className="text-gray-300 mb-6">
              I’m always open to opportunities, collaborations, or a friendly chat about tech. 
              Reach out via form or socials!
            </p>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="text-indigo-400 mt-1">📧</div>
                <div>
                  <h4 className="text-white font-medium">Email</h4>
                  <p className="text-gray-400">aman7work@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="text-indigo-400 mt-1">📍</div>
                <div>
                  <h4 className="text-white font-medium">Location</h4>
                  <p className="text-gray-400">Delhi, India</p>
                </div>
              </div>

              {/* Social Links with Neon Glitch Hover */}
              <div className="pt-6">
                <h4 className="text-white font-medium mb-3">Find me on</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://github.com/AmanAssassin"
                    className="neon-glitch"
                    aria-label="GitHub"
                  >
                    <Github className="w-8 h-8" />
                  </a>
                  <a
                    href="https://x.com/aman_maurya_"
                    className="neon-glitch"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-8 h-8" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/aman-maurya73/"
                    className="neon-glitch"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="relative p-6 rounded-2xl border border-white/10 bg-[#1e293b]/70 backdrop-blur-md shadow-[0_6px_18px_rgba(79,70,229,0.15),_0_4px_12px_rgba(56,189,248,0.08)] transition-all duration-300 hover:shadow-[0_10px_24px_rgba(79,70,229,0.3),_0_6px_16px_rgba(56,189,248,0.3)]"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-white"
                  placeholder="Hello Aman, I'd like to discuss..."
                  required
                ></textarea>
              </div>

              <ButtonGlow type="submit" variant="primary" className="w-full mt-4">
                Send Message
              </ButtonGlow>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Glitch animation styles */}
      <style>
        {`
          @keyframes neonGlitch {
            0% { transform: translate(0); text-shadow: 0 0 0px #6366f1; }
            20% { transform: translate(-1px, 1px); text-shadow: 0 0 4px #6366f1; }
            40% { transform: translate(1px, -1px); text-shadow: 0 0 6px #6366f1; }
            60% { transform: translate(-1px, 1px); text-shadow: 0 0 4px #6366f1; }
            80% { transform: translate(1px, 1px); text-shadow: 0 0 5px #6366f1; }
            100% { transform: translate(0); text-shadow: 0 0 0px #6366f1; }
          }

          .neon-glitch {
            color: #a1a1aa;
            transition: color 0.3s ease;
          }

          .neon-glitch:hover {
            color: #6366f1;
            animation: neonGlitch 0.35s infinite;
          }
        `}
      </style>
    </section>
  );
}
