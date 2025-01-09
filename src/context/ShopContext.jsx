import { createContext } from "react";

import { products } from "../assets/assets";

export const ShpoContext = createContext();

const ShopContextProvider = (props) => {
  const currency = "₹";
  const delivery_fee = 100;

  const value = { products, currency, delivery_fee };

  return (
    <ShpoContext.Provider value={value}>{props.childern}</ShpoContext.Provider>
  );
};

export default ShopContextProvider;
