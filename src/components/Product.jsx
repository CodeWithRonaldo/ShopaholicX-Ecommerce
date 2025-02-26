// Build Product Catalog
// - Create product cards and listing pages.
// - Fetch product data from an API (use Axios or Fetch API).
// - Use React state (or Context API/Redux for more complex state) to manage product data.

import React, { useEffect, useState } from "react";
import Loading from "../assets/loading.gif";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products?limit=40"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <img src={Loading} alt="loading" />;
  }

  return (
    <div>
      <h1 className="product-heading">Products Catalogue</h1>
      <div className="product-container">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title}</h3>
            <p className="product-price">${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
