import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useOrders = () => {
  const [orders, setOrders] = useState([]);
  const[loading,setLoading] = useState(true);

  // Fetch orders when component mounts
  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:5000/orders');
        console.log('Fetched orders:', response.data);
        setOrders(response.data);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching orders:', error);
      }finally {
        setLoading(false);  
      }
    };
    fetchOrders();
  }, []);

//   // Handle status update (from Pending to Delivered)
//   const updateStatus = async (orderId, newStatus) => {
//     try {
//       await axios.patch(`http://localhost:5000/orders/${orderId}`, { status: newStatus });
//       setOrders(orders.map(order => 
//         order.id === orderId ? { ...order, status: newStatus } : order
//       ));
//     } catch (error) {
//       console.error('Error updating order status:', error);
//     }
//  }

// const markAsDelivered = async (orderId) => {
//   try {
//     await axios.patch(`http://localhost:5000/orders/${orderId}`, {
//       status: "Delivered",
//     });
//     alert("Order marked as Delivered!");
//   } catch (error) {
//     console.error("Error updating order status:", error);
//   }
// };
return {
    orders,
    loading,
    // updateStatus,
    // markAsDelivered
}

};

export default useOrders;