import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navbar.css";
import { useCart } from "../context/cartContext";

const Navbar = () => {
  const { cartCount } = useCart();
  const navigate = useNavigate();

  return (
    <div>
      <nav className="nav">
        <ul className="nav-links">
          <li>
            <Link to="/menu" className="nav-item">
              Menu
            </Link>
          </li>
          <li>
            <Link to="/orders" className="nav-item">
              Orders
            </Link>
          </li>
          <li>
            <Link to="/cart" className="nav-item">
              Cart{" "}
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </Link>
          </li>

          <li>
            <button onClick={() => navigate("/")} className="bttn">
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
