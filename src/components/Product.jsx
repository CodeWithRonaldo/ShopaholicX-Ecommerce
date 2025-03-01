import React, { useEffect, useState } from "react";
import Loading from "../assets/loading.gif";
import "./Product.css";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [modal, setModal] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    image: null,
  });

  const toggleModal = () => {
    setModal(!modal);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productToAdd = {
      id: products.length + 1,
      name: newProduct.name,
      price: parseFloat(newProduct.price),
      description: newProduct.description,
      image: newProduct.image ? URL.createObjectURL(newProduct.image):""
    };
    setProducts([...products, productToAdd]);
    setNewProduct({ name: "", price: "", description: "", image: null });
    toggleModal();
  };

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://fakestoreapi.com/products?limit=40"
  //       );
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  // if (loading) {
  //   return <img src={Loading} alt="loading" />;
  // }

  return (
      <div>

      <h1 className="product-heading">Products Catalogue</h1>

      <button onClick={toggleModal} className="add-new-product-btn">
        Add New Product
      </button>
    <div>
      </div>
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2 className="modal-title">Add New Product</h2>
              <form onSubmit={handleSubmit}>
                <label>Product Name:</label>
                <input
                  type="text"
                  name="name"
                  value={newProduct.name}
                  onChange={handleInputChange}
                  placeholder="Enter product name"
                />
                <label>Product Price:</label>
                <input
                  type="number"
                  name="price"
                  value={newProduct.price}
                  onChange={handleInputChange}
                  placeholder="Price"
                />
                <label>Product Description:</label>
                <textarea
                  name="description"
                  value={newProduct.description}
                  onChange={handleInputChange}
                />
                <label>Product Image:</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                <button type="submit">Add Product</button>

                <button type="button" onClick={toggleModal} className="close-modal">
                  CLOSE
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
      <div className="product-container">
        {products.map((prod) => (
          <div key={prod.id} className="product-card">
            <img src={prod.image} alt={prod.title} className="product-image" />
            <h3 className="product-title">{prod.name}</h3>

            <p className="product-price">${prod.price}</p>
            <button className="add-to-cart-btn">Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
