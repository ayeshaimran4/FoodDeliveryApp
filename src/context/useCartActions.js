import React, { useState } from "react";
import { useCart } from "../context/cartContext";
import toast from "react-hot-toast";

const useCartActions = () => {
  const { cartItems, cartCount, addToCart, removeFromCart, updateQuantity , placeOrder } = useCart();
  
  const [loading, setLoading] = useState(false); 

  // Add item to cart
  const handleAddToCart = (item) => {
    setLoading(true); 
    try {
      addToCart(item); 
      toast.success("Item added to cart!");
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart!");
    } finally {
      setLoading(false); 
    }
  };

  // Remove item from cart
  const handleRemoveFromCart = (id) => {
    setLoading(true); 
    try {
      removeFromCart(id); 
      toast.error("Item removed from cart!");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item from cart!");
    } finally {
      setLoading(false);  
    }
  };

  // Update quantity of item in cart
  const handleUpdateQuantity = (id, action) => {
    setLoading(true); 
    try {
      updateQuantity(id, action); 
    } catch (error) {
      console.error("Error updating quantity:", error);
      toast.error("Failed to update quantity!");
    } finally {
      setLoading(false); 
    }
  };

  return {
    cartItems,
    cartCount,
    loading,
    placeOrder,
    handleAddToCart,
    handleRemoveFromCart,
    handleUpdateQuantity, 
  };
};

export default useCartActions;
