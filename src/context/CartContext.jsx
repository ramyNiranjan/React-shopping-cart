import React, { createContext, useState } from "react";
import { useEffect } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalSum, setTotalSum] = useState(0);
  const [itemCount, setItemCount] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const storage = (cartItems) => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  const sumItems = (cartItems) => {
    storage(cartItems);
    let itemCount = cartItems.reduce(
      (total, product) => total + product.quantity,
      0
    );
    setItemCount(itemCount);
    let total = cartItems
      .reduce((total, product) => total + product.price * product.quantity, 0)
      .toFixed(2);
    setTotalSum(total);
  };

  const gettingDataFromStorage = () => {
    const cartDataStorage = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    setCartItems(cartDataStorage);
  };

  useEffect(() => {
    gettingDataFromStorage();
  }, []);

  useEffect(() => {
    sumItems(cartItems);
  }, [totalSum, itemCount, cartItems]);

  const addProduct = (product) => {
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prevItem) => [...prevItem, { ...product, quantity: 1 }]);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const increase = (product) => {
    const newCartItem = [...cartItems];
    newCartItem[newCartItem.findIndex((item) => item.id === product.id)]
      .quantity++;
    setCartItems(newCartItem);
  };

  const decrease = (product) => {
    const newCartItem = [...cartItems];
    newCartItem[newCartItem.findIndex((item) => item.id === product.id)]
      .quantity--;
    setCartItems(newCartItem);
  };

  const removeProduct = (product) => {
    const newCartItem = cartItems.filter((item) => item.id !== product.id);
    setCartItems(newCartItem);
  };

  const isInCart = (product, cartItems) => {
    return cartItems.some((item) => item.id === product.id);
  };

  const toggleCart = (showCart) => {
    return showCart ? setShowCart(false) : setShowCart(true);
  };

  const contextValues = {
    cartItems,
    totalSum,
    itemCount,
    addProduct,
    increase,
    decrease,
    removeProduct,
    clearCart,
    isInCart,
    toggleCart,
    showCart,
  };

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
