import CartContext from "./CartContext";
import { useState, useEffect } from "react";

export default function CartProvider({ children }) {
    const [cart, setCart] = useState(
      localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
    )
  
    const addToCart = (product, quantity) => {
        const itemInCart = cart.find((item) => item.product.id === product.id);
    
        if (itemInCart) {
          const updatedCart = cart.map((item) => {
            if (item.product.id === product.id) {
              return { product, quantity: item.quantity + quantity };
            }
            return item;
          });
          setCart(updatedCart);
        } else {
          setCart([...cart, { product, quantity }]);
        }
      }
  
    useEffect(() => {
      localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
  
    const removeFromCart = (productId, quantity) => {
      const itemInCart = cart.find((item) => item.perfume.id === productId);
      if (itemInCart) {
        const updatedCart = cart.map((item) => {
          if (item.perfume.id === productId) {
            return { perfume: item.perfume, quantity: item.quantity - quantity };
          }
          return item;
        });
  
        const filteredCart = updatedCart.filter((item) => item.quantity > 0);
  
        setCart(filteredCart);
      }
    };
  
    const clearCart = () => {
      setCart([]);
    };
  
    const cartTotal = cart
      .reduce((acc, item) => {
        return acc + item.perfume.price * item.quantity;
      }, 0)
      .toFixed(2);
  
    return (
      <CartContext.Provider
        value={{ cart, addToCart, removeFromCart, clearCart, cartTotal }}
      >
        {children}
      </CartContext.Provider>
    );
  }