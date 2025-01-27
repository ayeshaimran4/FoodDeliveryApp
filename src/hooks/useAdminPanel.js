import { useState, useEffect } from "react";
import axios from "axios";

const useAdminPanel = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [orders, setOrders] = useState([]);
  const [reviews, setReviews] = useState([]);

  // Fetch data for menu, orders, and reviews
  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuResponse = await axios.get("http://localhost:5000/menu");
        const ordersResponse = await axios.get("http://localhost:5000/orders");
        const reviewsResponse = await axios.get("http://localhost:5000/reviews");

        setMenuItems(menuResponse.data);
        setOrders(ordersResponse.data);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error("Error fetching admin panel data:", error);
      }
    };

    fetchData();
  }, []);

  // Update order status
  const updateOrderStatus = async (orderId, status) => {
    try {
      await axios.patch(`http://localhost:5000/orders/${orderId}`, { status });
      setOrders((prevOrders) =>
        prevOrders.map((order) =>
          order.id === orderId ? { ...order, status } : order
        )
      );
    } catch (error) {
      console.error("Error updating order status:", error); // Move this to catch block
    }
  };

  // Return state and functions
  return { menuItems, orders, reviews, updateOrderStatus };
};

export default useAdminPanel;
