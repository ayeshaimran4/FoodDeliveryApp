import React, { createContext, useState, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast"


const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    // Load cart items from localStorage if available
    const storedItems = localStorage.getItem("cartItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  const [cartCount, setCartCount] = useState(cartItems.length);

  // 3. Add item to cart
  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
    if (existingItem) {
      setCartItems((prevItems) =>
        prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...item, quantity: 1 }]);
    }

    setCartCount(cartItems.length + 1); 
  };

  // 4. Remove item from cart
  const removeFromCart = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
    setCartCount(updatedItems.length); 
  };

  // 5. Update quantity of item in cart
  const updateQuantity = (id, action) => {
    setCartItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          if (action === "increase") {
            return { ...item, quantity: item.quantity + 1 };
          } else if (action === "decrease" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      })
    );
  };
  const placeOrder = async () => {
    try {
      const orderData = {
        items: cartItems,
        totalAmount: cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
        status: "Pending",
      };
      await axios.post("http://localhost:5000/orders", orderData);
      console.log("Order placed successfully:", orderData);
      const cartItemIds = cartItems.map((item) => item.id); 
      setCartItems([]); 
      setCartCount(0);
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order!");
    }
  };

  // Save cart items to localStorage whenever cartItems change
  React.useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartCount,
        addToCart,
        removeFromCart,
        updateQuantity,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 6. Custom hook for accessing CartContext
export const useCart = () => {
  return useContext(CartContext);
};
