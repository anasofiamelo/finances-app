import { NavLink } from "react-router-dom";
import { Button, AddTransactionDropdown } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Transactions", link: "/transactions" },
  { title: "Credit Card", link: "/credit-card" },
  { title: "Metas", link: "/metas" },
  { title: "Orçamento", link: "/orcamento" },
];

const Navbar = (props) => {
  const mappedNavlinks = navlinks.map((navlink) => (
    <li className="navlink" key={navlink.title}>
      <NavLink to={navlink.link}>{navlink.title}</NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className="navbar_links">{mappedNavlinks}</ul>

      <ul className="navbar_buttons">
        <li
          style={{
            position: "relative",
          }}
        >
          <Button
            onClick={props.onToggleAddTransaction}
            buttonText="Add Transaction"
            buttonIcon={
              <FiPlusCircle style={{ fontSize: "2rem", margin: "0" }} />
            }
          />
          {props.showAddTransaction && <AddTransactionDropdown />}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
