import { NavLink } from "react-router-dom";
import { Button, AddTransactionDropdown } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Dashboard", link: "/" },
  { title: "Transactions", link: "/transactions" },
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
    <div className="navbar_container space-between row">
      <nav style={{ width: "100%" }} onClick={props.onHideAddTransaction}>
        <ul className="navbar_links">{mappedNavlinks}</ul>
      </nav>
      <div style={{ position: "relative" }}>
        <Button
          onClick={props.onShowAddTransaction}
          buttonIcon={<FiPlusCircle className="button-icon" />}
        >
          New Transaction
        </Button>
        {props.showAddTransaction && <AddTransactionDropdown />}
      </div>
    </div>
  );
};

export default Navbar;
