import { createContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { products } from "./../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

// Define PropTypes for the component
ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, // Validate the children prop
};

export default ShopContextProvider;
