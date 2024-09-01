import React from "react";
import "./HeroSection.CSS";
import hero_banner from "../../assets/hero_banner.jpg";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <img src={hero_banner} alt="" className="hero_img" />
      <websiteUnderMaintance/>
    </div>
  );
};

export default HeroSection;
