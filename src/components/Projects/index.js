import "./Projects.css";
import Project from "./Project";
function Projects() {
  return (
    <section>
      <h1 className="section-title">Projects</h1>
      <p className="description">Projetos que desenvolvi</p>
      <div className="projects-container">
        <Project />
        <Project />
        <Project />
      </div>
    </section>
  );
}

export default Projects;
