import React from 'react';

const CartContext = React.createContext({
  cartId: null,
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  order: () => {},
});

export default CartContext;
