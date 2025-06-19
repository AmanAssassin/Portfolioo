
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import Education from "@/components/education/Education"


const Index = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Education/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
