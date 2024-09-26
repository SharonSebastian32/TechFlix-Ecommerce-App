import React from "react";

const ProductDetails = () => {
  return (
    <div className="p-container">
      <img src="" alt="not-found" className="p-img" />
      <div className="p-info">
        <h2 className="p-title">sample text</h2>
        <p className="p-description">Lorem ipsum dolor sit amet.</p>
        <p className="p-price">10</p>
        <button className="buy-btn">Buy Now</button>
        <button className="redirect-btn">Redirect Home</button>
      </div>
    </div>
  );
};

export default ProductDetails;
