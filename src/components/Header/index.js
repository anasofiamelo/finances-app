import "./Header.css";
import { Navbar } from "../index";
function Header() {
  return (
    <div className="header-container">
      <Navbar />
      <section className="main-header">
        {/* <div className="header-text"> */}
        <span id="mini-title">Fullstack Developer</span>
        <h1 id="main-title"> Portfolio </h1>
        <p id="description">
          Portfolio criado para registrar meus conhecimentos e projetos em
          desenvolvimento de software.
        </p>
        <button> Saiba mais </button>
        {/* <img src={}/> */}
        {/* </div> */}
      </section>
    </div>
  );
}

export default Header;
