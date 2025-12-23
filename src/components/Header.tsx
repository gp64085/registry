import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function Header() {
  return (
    <div className="flex items-center justify-between px-4 border-b h-14 top-0 sticky z-50 bg-amber-100">
      <div className="flex items-center space-x-2">
        <Link to="/" className="text-lg font-bold">
          NPM Registry
        </Link>
      </div>
      <div className="w-100 max-w-3xl">
        <SearchInput />
      </div>
    </div>
  );
}

export default Header;
