import React, { createContext, useState } from "react";
import Header from "../layout/header/Header";
import ListProducts from "../components/productsPage/ListProducts";
import ProductsJSON from "../data.json";
import CartList from "../components/cart/CartList";
export const GlobalProductContext = createContext();
function Global() {
  const [toggleCart, setToggleCart] = useState(false);
  const handleToggle = () => {
    setToggleCart(!toggleCart);
  };
  const [cart, setCart] = useState(() => {
    const cartLocals = JSON.parse(localStorage.getItem("carts")) || [];
    return cartLocals;
  });
  const cartLength = cart.reduce((total, cItem) => total + cItem.quantity, 0);

  const handleAddToCart = (product) => {
    const findProExist = cart.findIndex(
      (cItem) => cItem.product.id === product.id
    );

    if (findProExist === -1) {
      const newItem = {
        id: Math.random() * 10000000,
        product: product,
        quantity: 1,
      };
      const newCart = [...cart, newItem];
      setCart(newCart);
      localStorage.setItem("carts", JSON.stringify(newCart));
    } else {
      const newCartUpdate = [...cart];
      // Increase quantity
      newCartUpdate[findProExist].quantity += 1;

      // Update state
      setCart(newCartUpdate);

      // Save to local storage
      localStorage.setItem("carts", JSON.stringify(newCartUpdate));
    }
  };
  const handleMoney = (money) => {
    return money.toLocaleString("vi", { style: "currency", currency: "VND" });
  };
  const updateCartItemQuantity = (id, quantity) => {
    const findProExist = cart.findIndex((cItem) => cItem.product.id === id);
    const newCartUpdate = [...cart];
    // Increase quantity
    if (quantity >= 1) {
      newCartUpdate[findProExist].quantity = quantity;
      localStorage.setItem("carts", JSON.stringify(newCartUpdate));
      setCart(newCartUpdate);
    } else {
      deleteItem(id);
    }
  };
  const deleteItem = (id) => {
    const cartDeleted = cart.filter((item) => item.product.id !== id);
    setCart(cartDeleted);
    localStorage.setItem("carts", JSON.stringify(cartDeleted));
  };

  const dataGlobal = {
    deleteItem,
    products: ProductsJSON.products,
    cart,
    cartLength: cartLength,
    handleAddToCart,
    handleMoney,
    updateCartItemQuantity,
    toggleCart,
    handleToggle,
  };
  return (
    <>
      <GlobalProductContext.Provider value={dataGlobal}>
        <Header />
        <CartList />
        <ListProducts />
      </GlobalProductContext.Provider>
    </>
  );
}

export default Global;
