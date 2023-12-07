import React, { useState } from "react";
import list from "../data";
import Cards from "./card";
import "../style/flipkart.css";

const Flipkart = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Cards key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Flipkart;
