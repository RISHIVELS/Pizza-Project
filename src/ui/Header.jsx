import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import Username from "../features/user/Username";

function Header() {
  return (
    <header className="bg-yellow-500 uppercase px-4 py-3 border-b border-stone-500 sm:px-6 flex items-center justify-between font-pizza">
      <Link to="/" className="tracking-widest font-semibold">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <Username />
    </header>
  );
}

export default Header;
