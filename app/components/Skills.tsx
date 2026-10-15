import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiPython,
  SiPhp,
  SiMysql,
} from "react-icons/si";

const skills = [
  { icon: SiHtml5, color: "#e34f26", label: "HTML" },
  { icon: SiCss, color: "#1572b6", label: "CSS" },
  { icon: SiJavascript, color: "#f7df1e", label: "JavaScript" },
  { icon: SiReact, color: "#61dafb", label: "React" },
  { icon: SiPython, color: "#3776ab", label: "Python" },
  { icon: SiPhp, color: "#777bb4", label: "PHP" },
  { icon: SiMysql, color: "#4479a1", label: "MySQL" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">My skills</h2>
      <div className="skills-grid">
        {skills.map(({ icon: Icon, color, label }) => (
          <div className="skill-card" key={label}>
            <Icon size={40} color={color} />
            <span className="skill-label">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}