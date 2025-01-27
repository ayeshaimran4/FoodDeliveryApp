import React, { useState, useEffect } from "react";
import "./adminPanel.css";
import MenuManagement from "../MenuManagement/MenuManagemnet";
import Reviews from "../reviews/Reviews";
import useReviews from "../../hooks/useReview";
import OrdersManagement from "../orderManagment/OrderManagement";

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const { reviews } = useReviews();

  useEffect(() => {
    const savedTab = localStorage.getItem("activeTab");
    if (savedTab) setActiveTab(savedTab);
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    localStorage.setItem("activeTab", tab);
  };

  return (
    <div className="admin-panel">
      <h1>Admin Panel</h1>

      {/* Navigation Tabs */}
      <div className="admin-tabs">
        <button
          className={activeTab === "orders" ? "active-tab" : ""}
          onClick={() => handleTabChange("orders")}
        >
          Orders
        </button>
        <button
          className={activeTab === "menu" ? "active-tab" : ""}
          onClick={() => handleTabChange("menu")}
        >
          Menu Management
        </button>
        <button
          className={activeTab === "reviews" ? "active-tab" : ""}
          onClick={() => handleTabChange("reviews")}
        >
          Reviews & Complaints
        </button>
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === "orders" && <OrdersManagement/>}
        {activeTab === "menu" && <MenuManagement />}
        {activeTab === "reviews" && <Reviews reviews={reviews} />}
      </div>
    </div>
  );
};

export default AdminPanel;
