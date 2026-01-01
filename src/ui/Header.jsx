import { NavLink } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="flex justify-between items-center bg-yellow-500 px-4 py-3 uppercase border-b border-b-stone-500 sm:px-6">
      <NavLink to="/" className="tracking-widest text-lg">
        Fast Pizza Co.
      </NavLink>

      <SearchOrder />

      <Username />
    </header>
  );
}

export default Header;
