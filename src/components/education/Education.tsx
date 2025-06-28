import React, { useRef } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaBriefcase, FaCode } from "react-icons/fa";
import "./Education.css";

const timelineData = [
  {
    date: "2024 - Present",
    title: "Network Engineer at NTT Data",
    subtitle: "Gurugram, India",
    icon: <FaBriefcase />,
  },
  {
    date: "2019 - 2023",
    title: "B.Tech - CSE, 8.3 CGPA",
    subtitle: "School of Management Sciences, Lucknow, Uttar Pradesh",
    icon: <FaGraduationCap />,
  },
  {
    date: "2022",
    title: "Hacktoberfest 2022 - Open Source Contributor",
    subtitle: "Contribution - Remote",
    icon: <FaCode />,
  },
  {
    date: "2021",
    title: "Hacktoberfest 2021 - Open Source Contributor",
    subtitle: "Contribution - Remote",
    icon: <FaCode />,
  },
  {
    date: "2021",
    title: "LetsGrowMore - Open Source Contributor",
    subtitle: "Internship (June – August)",
    icon: <FaCode />,
  },
  {
    date: "2021",
    title: "NeoDocto Web Development Internship",
    subtitle: "Internship",
    icon: <FaBriefcase />,
  },
];

const Education: React.FC = () => {
  return (
    <section id="education" className="timeline-section">
      <h2 className="timeline-heading">Timeline</h2>
      <div className="timeline-wrapper">
        <VerticalTimeline lineColor="#4f46e5">
          {timelineData.map((item, index) => {
            const ref = useRef(null);
            const isInView = useInView(ref, {
              once: false,
              margin: "-100px",
            });

            const isEven = index % 2 === 0;
            const slideDirection = isEven ? -100 : 100;

            return (
              <motion.div
                key={index}
                ref={ref}
                initial={{ opacity: 0, x: slideDirection }}
                animate={
                  isInView
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: slideDirection }
                }
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <VerticalTimelineElement
                style={{ marginBottom: "60px" }}
                  position={isEven ? "left" : "right"}
                  contentStyle={{
                    background: "#1e293b",
                    color: "#fff",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                  contentArrowStyle={{ borderRight: "7px solid #4f46e5" }}
                  date={<div style={{ color: "#94a3b8" }}>{item.date}</div>}
                  iconStyle={{
                    background: "#0d1117",
                    color: "#38bdf8",
                    fontSize: "1.5rem",
                    boxShadow: "0 0 12px #38bdf8",
                  }}
                  icon={item.icon}
                >
                  <div>
                    <h3 className="vertical-timeline-element-title">
                      {item.title}
                    </h3>
                    <h4
                      className="vertical-timeline-element-subtitle"
                      style={{ color: "#94a3b8" }}
                    >
                      {item.subtitle}
                    </h4>
                  </div>
                </VerticalTimelineElement>
              </motion.div>
            );
          })}
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Education;
