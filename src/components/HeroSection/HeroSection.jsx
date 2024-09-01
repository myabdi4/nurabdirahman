// import React from "react";
import "./Herosection.css";
import hero_banner from "../../assets/hero_banner.jpg";

// COMPONENTS

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={hero_banner} alt="" className="hero_img" />
    </div>
  );
};

export default HeroSection;
