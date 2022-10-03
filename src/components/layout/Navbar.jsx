import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AddTransaction, ButtonAnimated } from "../../components";

import { FiPlusCircle } from "react-icons/fi";

const navlinks = [
  { title: "Transactions", link: "/transactions" },
  { title: "Credit Card", link: "/credit-card" },
  { title: "Metas", link: "/metas" },
  { title: "Orçamento", link: "/orcamento" },
];

const Navbar = (props) => {
  const [showAddTransaction, setShowAddTransaction] = useState(false);

  const showAddTransactionHandler = () => {
    setShowAddTransaction(true);
  };
  const hideAddTransactionHandler = () => {
    setShowAddTransaction(false);
  };

  const mappedNavlinks = navlinks.map((navlink) => (
    <li className="navlink" key={navlink.title}>
      <NavLink to={navlink.link}>{navlink.title}</NavLink>
    </li>
  ));

  return (
    <nav>
      <ul className="navbar_links">
        {mappedNavlinks}

        {showAddTransaction && (
          <AddTransaction
            transactionType="expense"
            onClose={hideAddTransactionHandler}
          />
        )}
      </ul>

      <ul className="navbar_buttons">
        <li>
          <ButtonAnimated
            onClick={showAddTransactionHandler}
            buttonText="Add Transaction"
            buttonIcon={
              <FiPlusCircle style={{ fontSize: "2rem", margin: "0" }} />
            }
          ></ButtonAnimated>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
