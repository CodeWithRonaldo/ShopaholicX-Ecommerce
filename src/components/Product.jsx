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
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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

      <button onClick={toggleModal} className="add-new-product-btn">
        Add New Product
      </button>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add New Product</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <label>Product Name:</label>
                <input type="text" name="name" placeholder="Enter product name" />
                <label>Product Price:</label>
                <input type="number" name="price" placeholder="Price"/>
                <label>Product Description:</label>
                <textarea name="description" />
                <button type="submit">Add Product</button>

                <button onClick={toggleModal} className="close-modal">
                  CLOSE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
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
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
