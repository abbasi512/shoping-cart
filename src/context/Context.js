import React, { useState } from "react";
import { createContext, useContext } from "react";
import data from "../data";
import { cartReducer } from "./Reducers";
import { useReducer } from "react";

const Cart = createContext();

const Context = ({ children }) => {
  const [products, setProducts] = useState(data);

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: [],
  });

  return <Cart.Provider value={{ state, dispatch }}> {children}</Cart.Provider>;
};

export default Context;
export const CartState = () => {
  return useContext(Cart);
};

// const products = [...Array(20)].map(() => ({
//   id: faker.datatype.uuid(),
//   name: faker.commerce.productName(),
//   price: faker.commerce.price(),
//   image: faker.random.image(),
//   instock: faker.random.arrayElement([0, 3, 5, 6, 7]),
//   fastDelivery: faker.datatype.boolean(),
//   ratings: faker.random.arrayElement([1, 2, 3, 4, 5]),
// }));
