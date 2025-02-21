import React from "react";
import HeroImg from "../assets/heroimg.png";
import { FaArrowRight } from "react-icons/fa";
import { color, motion } from "framer-motion";
import { SlideRight } from "../utility/aninamtion";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-content">
          <motion.p
            variants={SlideRight(0.4)}
            initial="hidden"
            animate="visible"
            className="quality"
          >
            100% QUALITY GUARANTEED
          </motion.p>
          <motion.h1
            variants={SlideRight(0.6)}
            initial="hidden"
            animate="visible"
          >
            FIND YOUR PERFECT <span className="hero-span">STREETWEAR</span>
          </motion.h1>
          <motion.p
            variants={SlideRight(0.8)}
            initial="hidden"
            animate="visible"
          >
            We help you find the best streetwear brands and products that fit
            your style and budget.
          </motion.p>
          {/* button section */}
          <motion.div
            variants={SlideRight(1.0)}
            initial="hidden"
            animate="visible"
            className="hero-btns"
          >
            <button className="hero-btn">Shop Now</button>
            <button className="hero-btn-play">
              Learn more 
              <span className="hero-btn-span">
                <FaArrowRight className="btn-icon" />
              </span>
            </button>
          </motion.div>
        </div>
        {/* Image Section */}
        <div className="hero-image">
          <motion.img
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
            src={HeroImg}
            alt="hero-image"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
