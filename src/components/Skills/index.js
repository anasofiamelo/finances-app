import "./Skills.css";
import Skill from "./Skill";

function Skills() {
  return (
    <section className="skills-container">
      <h1 className="section-title">Skills</h1>
      <p className="description">
        Linguagens e habilidades que tenho conhecimento
      </p>
      <Skill />
      <Skill />
      <Skill />
    </section>
  );
}

export default Skills;
