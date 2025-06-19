import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./Education.css";

const timelineData = [
  {
    year: "2021",
    education: "B.Tech CSE - RLB Tech College",
    internship: "Frontend Intern at XYZ Pvt Ltd",
  },
  {
    year: "2022",
    education: "React Course & Projects",
    internship: "Intern at ABC Web Solutions",
  },
  {
    year: "2023",
    education: "Open Source Contributions",
    internship: "Frontend Developer - Remote",
  },
  {
    year: "2024",
    education: "Learning TypeScript & Next.js",
    internship: "Intern at The Internet Folks",
  },
  {
    year: "2025",
    education: "Freelance Projects",
    internship: "Developer at CryptoMarket",
  },
];

const Education: React.FC = () => {
  const verticalLineRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState<string>(timelineData[0].year);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".timeline-row");
    let closestIndex = 0;
    let closestDistance = Infinity;

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const distance = Math.abs(rect.top);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveYear(timelineData[closestIndex].year);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="timeline-section">
      <h2 className="timeline-heading">Timeline</h2>
      <div className="sticky-year">{activeYear}</div>
      <div className="timeline-wrapper">
        <div className="vertical-line" ref={verticalLineRef} />
        {timelineData.map((item, index) => {
          const eduRef = useRef(null);
          const internRef = useRef(null);
          const eduInView = useInView(eduRef, { margin: "-100px 0px -100px 0px" });
const internInView = useInView(internRef, { margin: "-100px 0px -100px 0px" });


          return (
            <div className="timeline-row" key={index} id={`year-${item.year}`}>
              <motion.div
                ref={eduRef}
                className="card left"
                initial={{ opacity: 0, x: -100 }}
                animate={eduInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 40 }}
              >
                <FaGraduationCap className="card-icon" />
                <p>{item.education}</p>
                <p className="year">{item.year}</p>
              </motion.div>

              <span
                className="dot"
                title={`Year: ${item.year}`}
                style={{ backgroundColor: `hsl(${index * 72}, 80%, 60%)` }}
              />

              <motion.div
                ref={internRef}
                className="card right"
                initial={{ opacity: 0, x: 100 }}
                animate={internInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 40 }}
              >
                <FaBriefcase className="card-icon" />
                <p>{item.internship}</p>
                <p className="year">{item.year}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
