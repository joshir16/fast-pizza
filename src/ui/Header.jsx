import { NavLink } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";

function Header() {
  return (
    <header>
      <NavLink to="/">Fast Pizza Co.</NavLink>

      <SearchOrder />

      <p>Rishabh</p>
    </header>
  );
}

export default Header;
