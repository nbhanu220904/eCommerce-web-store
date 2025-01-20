import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { useLocation, useSearchParams } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);

  const [visible, setVisible] = useState(false);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("collection") && showSearch) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);

  return showSearch && visible ? (
    <div className="border-t border-b bg-gray-50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-400 px-5 py-2 m-8 rounded-full w-3/4 sm:w-1/2 ">
        <input
          className="flex-1 outline-none bg-inherit text-sm"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
          type="text"
          placeholder="Search"
        />
        <img className="w-4" src={assets.search_icon} alt="Search Icon" />
      </div>
      <img
        className="inline w-3 cursor-pointer"
        onClick={() => {
          setShowSearch(false);
        }}
        src={assets.cross_icon}
        alt="cross-icon"
      />
    </div>
  ) : null;
};

export default SearchBar;
