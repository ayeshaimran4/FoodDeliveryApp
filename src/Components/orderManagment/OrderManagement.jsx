import React from "react";
import "./ordermanagemnet.css"
import useAdminPanel from "../../hooks/useAdminPanel";

const OrdersManagement = () => {
  const { orders, updateOrderStatus } = useAdminPanel();

  return (
    <div className="orders-sectionn">
      <h2>Orders</h2>
      {orders.map((order) => (
        <div key={order.id} className="order-itemm">
          <div>
            <p>Order ID: {order.id}</p>
            <p>Total: Rs. {order.totalAmount}</p>
            <p>
              Status:{" "}
              <select
                className="dropdown"
                value={order.status}
                onChange={(e) => updateOrderStatus(order.id, e.target.value)}
              >
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Delivered">Delivered</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersManagement;