import React from "react";
import { productData } from "../assets/product_data";
import './Denims.css'

const Denims = () => {
  return (
    <div className="denims-container">
      <div >
        <h1>NEW JEANS, JOGGERS, AND SHORTS NOW AVAILABLE.</h1>
        <p>COMPLETE YOUR FIT ON THE LOW</p>
      </div>
      <div className="denims">
        {productData.slice(0,6).map((product)=>(
            <div key="id" className="denims-card" >
                <img src={product.image} alt={product.name} />
                <h2>{product.name}</h2>
                <p>Price: ${product.price}</p>
                <p className="original-price">Original Price: ${product.originalPrice}</p>

            </div>
        ))}
      </div>
    </div>
  );
};

export default Denims;
