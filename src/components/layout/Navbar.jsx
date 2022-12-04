import { NavLink } from "react-router-dom";
import { ButtonWithIcon, AddTransactionDropdown } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Dashboard", link: "/" },
  { title: "Credit Card", link: "/credit-card" },
  { title: "Goals", link: "/goals" },
  { title: "Budget", link: "/budget" },
];

const Navbar = (props) => {
  const mappedNavlinks = navlinks.map((navlink) => (
    <li
      onClick={props.onHideAddTransaction}
      className="navlink"
      key={navlink.title}
    >
      <NavLink to={navlink.link}>{navlink.title}</NavLink>
    </li>
  ));
  return (
    <div className="navbar_container">
      <nav>
        <ul className="navbar_links">
          {mappedNavlinks}
          <li>
            <ButtonWithIcon
              onClick={props.onToggleShowAddTransaction}
              buttonIcon={<FiPlusCircle className="button-icon" />}
            >
              New Transaction
            </ButtonWithIcon>
            {props.showAddTransaction && <AddTransactionDropdown />}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
