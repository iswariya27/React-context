import React from "react";
import "../style/navbar.css";
import { Link } from "react-router-dom";

const Navbar = ({ setShow, size }) => {
  return (
    <nav>
      <div className="nav_box">
      <Link className="my_shop" to="/">Home</Link>
        <Link className="my_shop" to="/shoping" onClick={() => setShow(true)}>
          My Shoping
        </Link>
        <div className="carts" onClick={() => setShow(false)}>
          <span>
          <Link id="shops" className="bi bi-cart" to="/cart" >🛒</Link>
          </span>
          <span>{size}</span>
        </div>
      </div>
    </nav>
  );    
};

export default Navbar;
 