import React, { useEffect, useState } from "react";
import "./productDetails.css";
import { getproductsbyId } from "../../Apis/Api";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const handleBuy = () => {
    alert("Item out of stock");
  };

  useEffect(() => {
    const fetchproductDetails = async () => {
      try {
        const data = await getproductsbyId(id);
        setProductDetails(data);
      } catch (error) {
        console.error("Error fetching product details:", error);
      }
    };
    fetchproductDetails();
  }, [id]);

  return (
    <div className="p-container">
      {productDetails ? (
        <>
          <img
            src={productDetails.thumbnail}
            alt={productDetails.title}
            className="p-img"
          />
          <div className="p-info">
            <h2 className="p-title">{productDetails.title}</h2>
            <p className="p-description">{productDetails.description}</p>
            <p className="p-price">RS {productDetails.price} /-</p>
            <button className="buy-btn" onClick={handleBuy}>
              Buy Now
            </button>
            <Link to={"/"}>
              <button className="redirect-btn">Home</button>
            </Link>
          </div>
        </>
      ) : (
        <p>Loading product details...</p>
      )}
    </div>
  );
};

export default ProductDetails;
