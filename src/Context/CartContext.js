import React, { useState, createContext, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  // calculate total
  useEffect(() => {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.price * item.amount,
      0
    );
    setTotal(totalPrice);
  }, [cart]);

  // calculate item amount
  useEffect(() => {
    const amount = cart.reduce((acc, item) => acc + item.amount, 0);
    setItemAmount(amount);
  }, [cart]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      const newCart = cart.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const increaceAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) addToCart(cartItem, id);
  };

  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    if (cartItem) {
      if (cartItem.amount > 1) {
        const newCart = cart.map((item) =>
          item.id === id ? { ...item, amount: item.amount - 1 } : item
        );
        setCart(newCart);
      } else {
        removeFromCart(id);
      }
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaceAmount,
        decreaseAmount,
        itemAmount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
