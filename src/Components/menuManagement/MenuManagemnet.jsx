
import React, { useState } from "react";
import "./menumanagement.css"
import useMenuManagement from "../../hooks/useMenuManagement";

const MenuManagement = () => {
  const {
    menu,
    menuForm,
    setMenuForm,
    addMenuItem,
    editMenuItem,
    deleteMenuItem,
  } = useMenuManagement();

  const [editMode, setEditMode] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!menuForm.name || !menuForm.price || !menuForm.image) {
      alert("Please fill in all fields.");
      return;
    }
    if (editMode) {
      editMenuItem(editItemId, menuForm);
    } else {
      addMenuItem(menuForm);
    }
    setMenuForm({ name: "", price: "", image: "" });
    setEditMode(false);
    setEditItemId(null);
  };

  const handleEdit = (item) => {
    setMenuForm(item);
    setEditMode(true);
    setEditItemId(item.id);
  };


  return (
    <div className="menu-sectionn">
      <h2>Menu Management</h2>
      <form className="menu-form" onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={menuForm.name}
          onChange={(e) => setMenuForm({ ...menuForm, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Price"
          value={menuForm.price}
          onChange={(e) => setMenuForm({ ...menuForm, price: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          value={menuForm.image}
          onChange={(e) => setMenuForm({ ...menuForm, image: e.target.value })}
          required
        />
        <button type="submit" className="btn-add-menu">
          {editMode ? "Update Item" : "Add Item"}
        </button>
      </form>

      {/* ui Menu Items */}
      <div className="menu-list">
        {menu.length === 0 ? (
          <p>No items available. Add a new item to the menu.</p>
        ) : (
          menu.map((item) => (
            <div key={item.id} className="menu-itemm">
              <div>
                <img src={item.image} alt={item.name} style={{ width: "50px" }} />
                <p>{item.name}</p>
                <p>Rs.{item.price}</p>
              </div>
              <div>
                <button className="btn-edit" onClick={() => handleEdit(item)}>Edit</button>
                <button className="btn-del" onClick={() => deleteMenuItem(item.id)}>Delete</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default MenuManagement;