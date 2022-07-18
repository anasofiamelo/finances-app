import "./Body.css";
import { About, Skills, Projects, Contact } from "../index";
function Body() {
  return (
    <div className="body-container">
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default Body;
