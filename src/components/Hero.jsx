import React from "react";
import HeroImg from "../assets/heroimg.png";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <p className="quality">100% QUALITY GUARANTEED</p>
          <h1>FIND YOUR PERFECT STREETWEAR</h1>
          <p>
            We help you find the best streetwear brands and products that fit
            your style and budget.
          </p>
          <div className="hero-btns">
            {/* button section */}
            <button className="hero-btn">Get Started</button>
            <button className="hero-btn-play">
              <span className="hero-btn-span">
                <FaPlay className="btn-icon" />
              </span>
              See how it works
            </button>
          </div>
        </div>
        {/* Image Section */}
        <div className="hero-image">
          <img src={HeroImg} />
        </div>
      </div>
    </>
  );
};

export default Hero;
