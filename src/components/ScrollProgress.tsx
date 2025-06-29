import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [scroll, setScroll] = useState(0);
  const [visible, setVisible] = useState(false);
  let timeout: NodeJS.Timeout;

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / docHeight) * 100;
    setScroll(scrolled);
    setVisible(true);

    clearTimeout(timeout);
    timeout = setTimeout(() => setVisible(false), 800);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 h-[4px] z-[9999] transition-opacity duration-300 ease-in-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        width: `${scroll}%`,
        background:
          "linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)",
        boxShadow: "0 0 10px rgba(147, 51, 234, 0.5)",
      }}
    />
  );
}
