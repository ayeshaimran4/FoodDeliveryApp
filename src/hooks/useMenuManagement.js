import { useState, useEffect } from "react";
import axios from "axios";

const useMenuManagement = () => {
  const [menu, setMenu] = useState([]);
  const [menuForm, setMenuForm] = useState({ name: "", price: "", image: "" });

  const fetchMenu = async () => {
    try {
      const response = await axios.get("http://localhost:5000/menu");
      setMenu(response.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  const addMenuItem = async (newItem) => {
    try {
      await axios.post("http://localhost:5000/menu", newItem);
      fetchMenu();
    } catch (error) {
      console.error("Error adding menu item:", error);
    }
  };

  const editMenuItem = async (id, updatedItem) => {
    try {
      await axios.put(`http://localhost:5000/menu/${id}`, updatedItem);
      fetchMenu();
    } catch (error) {
      console.error("Error editing menu item:", error);
    }
  };

  const deleteMenuItem = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/menu/${id}`);
      fetchMenu();
    } catch (error) {
      console.error("Error deleting menu item:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, []);

  return {
    menu,
    menuForm,
    setMenuForm,
    addMenuItem,
    editMenuItem,
    deleteMenuItem,
  };
};

export default useMenuManagement;
