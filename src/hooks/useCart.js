/*import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount , setCartCount] = useState(0);
  const [loading, setLoading] = useState(true);
  

  // Fetch cart items on component mount
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axios.get("http://localhost:5000/cart");
        setCartItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching cart items:", error);
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // // Add item to cart
  // const addToCart = async (item) => {
  //   const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  //   if (existingItem) {
  //     updateQuantity(item.id, "increase");
  //   } else {
  //     try {
  //       const response = await axios.post("http://localhost:5000/cart", {
  //         ...item,
  //         quantity: 1,
  //       });
  //       setCartItems((prevItems) => [...prevItems, response.data]);
  //       toast.success("Item added to cart");
  //     } catch (error) {
  //       console.error("Error adding item to cart:", error);
  //       toast.error("Failed to add item to cart!");
  //     }
  //   }
  // };

  const addToCart = async (item) => {
    try {
      const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
      if (existingItem) {
        setCartItems(prevItems =>
          prevItems.map(cartItem =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem
          )
        );
        toast.success("Item quantity increased in cart!");
      } else {
        setCartItems(prevItems => [...prevItems, { ...item, quantity: 1 }]);
        toast.success("Item added to cart!");
      }
    } catch (error) {
      console.error("Error adding item to cart:", error);
      toast.error("Failed to add item to cart!"); 
    }
    setCartCount(prevCount => prevCount + 1);
    console.log(cartItems); 

  };
  
  

  const updateQuantity = (id, action) => {
    setCartItems(
      cartItems.map((item) => {
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

  // Remove item from cart
  const removeFromCart = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cart/${id}`);
      setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
      toast.error("item is removed from cart");
    } catch (error) {
      console.error("Error removing item from cart:", error);
      toast.error("Failed to remove item from cart!");
    }
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
      const cartItemIds = cartItems.map((item) => item.id); // Get all item IDs in the cart
      for (const itemId of cartItemIds) {
        await axios.delete(`http://localhost:5000/cart/${itemId}`);
        console.log(`Cart item with ID ${itemId} deleted.`);
      }
      setCartItems([]); // Clear cart after placing order
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Failed to place order!");
    }
  };

  return {
    cartItems,
    loading,
    addToCart,
    removeFromCart,
    updateQuantity,
    placeOrder,
    cartCount,
  };
};

export default useCart; */
