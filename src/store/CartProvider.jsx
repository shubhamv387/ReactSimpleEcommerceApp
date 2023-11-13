import { useContext, useEffect, useReducer } from 'react';
import CartContext from './cart-context';
import {
  addToCart,
  deleteFromCart,
  getUserCart,
  orderFromCart,
} from '../services/cartServices';
import AuthContext from '../store/auth-context';
import { toast } from 'react-toastify';

let initialCartState = { items: [], totalAmount: 0 };

const cartReducer = (state, action) => {
  if (action.type === 'GET_CART') {
    const initialTotalAmount = action.cartItems.reduce(
      (accPrice, item) => accPrice + item.price,
      0
    );

    return { items: action.cartItems, totalAmount: initialTotalAmount };
  }

  if (action.type === 'ADD_TO_CART') {
    const updatedTotalAmount = state.totalAmount + action.item.price;

    const updatedItems = state.items.concat(action.item);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'REMOVE_FROM_CART') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => action.id === item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalAmount = state.totalAmount - existingCartItem.price;

    const updatedItems = state.items.filter((item) => item.id !== action.id);

    return { items: updatedItems, totalAmount: updatedTotalAmount };
  }

  if (action.type === 'ORDER') {
    return { items: [], totalAmount: 0 };
  }

  return state;
};

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  let { isLoggedIn, userEmail } = authCtx;

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    initialCartState
  );

  useEffect(() => {
    isLoggedIn &&
      getUserCart(userEmail)
        .then((data) => {
          dispatchCartAction({ type: 'GET_CART', cartItems: data });
        })
        .catch((err) => console.log(err.message));

    dispatchCartAction({ type: 'GET_CART', cartItems: [] });
  }, [isLoggedIn, userEmail]);

  const addToCartHandler = (item) => {
    addToCart(authCtx.userEmail, item)
      .then((data) => {
        // console.log(data);
        dispatchCartAction({ type: 'ADD_TO_CART', item: data });
        toast.success('Item added to the cart!', { position: 'bottom-right' });
      })
      .catch((err) => console.log(err.message));
  };

  const removeFromCart = (id, _id) => {
    deleteFromCart(authCtx.userEmail, _id)
      .then((data) => {
        // console.log(data);
        dispatchCartAction({ type: 'REMOVE_FROM_CART', id: id });
        toast.success('item removed from cart!', { position: 'bottom-right' });
      })
      .catch((err) => console.log(err.message));
  };

  const order = (items) => {
    orderFromCart(authCtx.userEmail, items)
      .then((data) => {
        // console.log(data);
        dispatchCartAction({ type: 'ORDER' });
        toast.success('Order placed. Enjoy!', { position: 'top-center' });
      })
      .catch((err) => console.log(err.message));
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
