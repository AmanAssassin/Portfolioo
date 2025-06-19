import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import Education from "../components/education/Education.css"
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



gsap.registerPlugin(ScrollTrigger);
createRoot(document.getElementById("root")!).render(<App />);
