import { NavLink } from "react-router-dom";
import { Button, AddTransactionDropdown } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Transactions", link: "/" },
  { title: "Credit Card", link: "/credit-card" },
  { title: "Goals", link: "/goals" },
  { title: "Budget", link: "/budget" },
];

const Navbar = (props) => {
  const mappedNavlinks = navlinks.map((navlink) => (
    <li className="navlink" key={navlink.title}>
      <NavLink to={navlink.link}>{navlink.title}</NavLink>
    </li>
  ));

  return (
    <nav className="space-between">
      <ul className="navbar_links">{mappedNavlinks}</ul>

      <ul className="navbar_buttons">
        <li
          style={{
            position: "relative",
          }}
        >
          <Button
            onClick={props.onToggleAddTransaction}
            buttonIcon={
              <FiPlusCircle style={{ fontSize: "2rem", margin: "0" }} />
            }
          >
            New Transaction
          </Button>
          {props.showAddTransaction && <AddTransactionDropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
