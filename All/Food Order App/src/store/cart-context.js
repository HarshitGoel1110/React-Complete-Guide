import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount : 0,
  addItem : (item) => {},
  removeItem : (id) => {}
});
// this we are using for better auto-complete feature, nothing else.

export default CartContext;