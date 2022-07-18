import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-container">
      <a id="logo" href="/">
        ana-sofia
      </a>
      <nav>
        <ul id="navbar">
          <li>
            <a href="#about">ABOUT</a>
          </li>

          <li>
            <a href="#skills">SKILLS</a>
          </li>

          <li>
            <a href="#projects">PROJECTS</a>
          </li>

          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
