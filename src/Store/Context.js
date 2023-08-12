import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { Reducer } from "./Reducers";
import ShoeData from "../Data/ShoeData";
const Cart = createContext();
const Context = (props) => {
  const Products = ShoeData.map((item) => ({
    id: item.id,
    des: item.description,
    title: item.title,
    url: item.imageUrl,
    price: item.price,
    small: item.smallquantity,
    medium: item.mediumquantity,
    large: item.largequantity,
  }));
  const [state, dispatch] = useReducer(Reducer, {
    products: Products,
    cart: [],
  });
  return (
    <Cart.Provider value={{ state, dispatch }}>{props.children}</Cart.Provider>
  );
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};
