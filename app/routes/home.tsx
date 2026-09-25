import Header from "../components/Header";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import "../styles/portfolio.css";

export default function Home() {
  return (
    <div className="portfolio">
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}