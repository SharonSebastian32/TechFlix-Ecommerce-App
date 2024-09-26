import React, { useEffect, useState } from "react";
import "./Home.css";
import { getAllProducts } from "../../Apis/Api";

const Home = () => {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getAllProducts();
        if (data.products && Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          console.error("Data is not an array:", data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="product-grid">
        {products.length > 0 ? (
          products.map((product) => (
            <div className="products" key={product.id}>
              <img src={product.thumbnail} alt="not-found" />
              <h2 className="title1">{product.title}</h2>
              <p>
                <span className="price">${product.price}</span>
              </p>
              <button>Product Details</button>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default Home;
