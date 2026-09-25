type Project = {
  title: string;
  image: string;
  github: string;
};


const projects: Project[] = [
  {
    title: "Web art project",
    image: "/projects/artlife1.png",
    github: "https://github.com/RagnarOige/chadcn-design",
  },
  {
    title: "Web art project",
    image: "/projects/artlife2.png",
    github: "https://github.com/RagnarOige/chadcn-design",
  },
  {
    title: "Web art project",
    image: "/projects/artlife3.png",
    github: "https://github.com/RagnarOige/chadcn-design",
  },
  {
    title: "Web art project",
    image: "/projects/artlife4.png",
    github: "https://github.com/RagnarOige/chadcn-design",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <h2 className="section-title">My projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <article className="project-card" key={i}>
            <h3 className="project-title">{project.title}</h3>
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              Visit github→
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}