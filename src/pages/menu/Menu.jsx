import React from 'react';
import useMenu from '../../hooks/useMenu';
import './menu.css';
import Loading from '../../Components/Loading/Loading';
import useCartActions from '../../context/useCartActions';

const Menu = () => {
  const { menuItems, loading, error, } = useMenu();
  const {  handleAddToCart } = useCartActions();

  if (loading) {
    return (
      <Loading/>
    );
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (menuItems.length === 0) {
    return <p>No menu items available.</p>;
  }

  return (
    <div className="menu-container">
      <h1 className="heading">MENU</h1>
      <div className="menu-items">
        {menuItems.map(item => {
          const imageUrl = `http://localhost:5000/${item.image}`;
          return (
            <div key={item.id} className="menu-item">
              <img src={imageUrl} alt={item.name} className="menu-image" />
              <h2>{item.name}</h2>
              <p> Rs.{item.price}</p>
              <button onClick={() =>   handleAddToCart(item)}>Add to cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
