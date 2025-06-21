
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
// import Education from "@/components/education/Education"
import React, { Suspense } from "react";
// ✅ Lazy load Education section to reduce initial bundle size
const Education = React.lazy(() => import("@/components/education/Education"));


const Index = () => {
  return (
    <div className="min-h-screen bg-[#060606] text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      {/* <Education/> */}
      {/* Wrap lazy components with Suspense */}
      <Suspense fallback={<div className="text-center py-10 text-[#94a3b8]">Loading Education...</div>}>
        <Education />
      </Suspense>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
