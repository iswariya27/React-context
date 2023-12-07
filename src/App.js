import React, { useState, useEffect } from "react";
import Home from "./components/Home";
import Flipkart from "./components/Flipkart";
import Navbar from "./components/navbar";
import Cart from "./components/cart";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/Usercontext';

const App = () => {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;

    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  // useEffect(() => {
  //   console.log("cart change");
  // }, [cart]);

  return (
    <BrowserRouter>
     <UserProvider>
     <div>
     <Navbar setShow={setShow} size={cart.length} />
      <Routes>
      <Route path="/" element={<Home />} />
      {show ? (
        <Route path="/shoping" element={<Flipkart  handleClick={handleClick}/>} />
        ) : (
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange} />} />
        )}
      </Routes>
     </div>
     </UserProvider>
    </BrowserRouter>
    // <React.Fragment>
    //   <Navbar setShow={setShow} size={cart.length} />
    //   {show ? (
    //     <Amazon handleClick={handleClick} />
    //   ) : (
    //     <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
    //   )}
    // </React.Fragment>
  );
};

export default App;
