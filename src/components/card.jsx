import React from "react";

const Cards = ({ item, handleClick }) => {
  const { pName, pRam, simType, prating, type, price, img ,star } = item;
  return (
    <div class="row">
    <div class="card col-sm-10 mb-4">
  <div class="card-body">
      <div className="image_box">
        <img src={img} alt="" />
      </div>
      <div className="details">
        <p>{pName}</p>
        <p><b>{pRam}</b> <br /> <i>{simType}</i></p>
        <p>{prating}  <span> {star}</span></p>
        <p>{type}</p>
        <p >Price - Rs {price}</p>
        <button className="btn btn-primary" onClick={() => handleClick(item)}>Add to Cart</button>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Cards;

// id, title, autor, price, img
