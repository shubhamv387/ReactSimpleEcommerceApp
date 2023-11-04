import React, { useReducer } from 'react';
import CartContext from './cart-context';

const initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'ADD_TO_CART') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.qty;

    const existingCartItemIndex = state.items.findIndex(
      (item) => action.item.id === item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        qty: existingCartItem.qty + action.item.qty,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }
  if (action.type === 'REMOVE_FROM_CART') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount =
      state.totalAmount - existingCartItem.price * existingCartItem.qty;

    let updatedItems;

    if (existingCartItem) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'ORDER') {
    alert('Order placed. Enjoy!');
    return initialCartState;
  }
  return state;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  const addToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD_TO_CART', item: item });
  };

  const removeFromCart = (id) => {
    dispatchCartAction({ type: 'REMOVE_FROM_CART', id: id });
  };

  const order = () => {
    dispatchCartAction({ type: 'ORDER' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCartHandler,
    removeItem: removeFromCart,
    order: order,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
