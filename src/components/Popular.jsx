import React from "react";
import "./Popular.css";
import popularData from "../assets/popularproduct.js";
import { FaArrowRight } from "react-icons/fa";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="popular-text">
        SHOP BEST SELLERS <FaArrowRight />
      </h1>

      <div className="popular-products">
        {popularData.map((popular) => (
          <div key={popular.id} className="popular-card">
            <img src={popular.img} alt={popular.name} />
            <h2>{popular.name}</h2>
            <p>Price: ${popular.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
