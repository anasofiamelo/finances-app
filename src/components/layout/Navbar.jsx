import { Finance } from "../index";

const Navbar = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <a>Transactions</a>
        </li>
        <li>
          <a>Incomes</a>
        </li>
        <li>
          <a>Expenses</a>
        </li>
        <li>
          <Finance />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
