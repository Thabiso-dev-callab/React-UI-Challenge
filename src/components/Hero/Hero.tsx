import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Delight in</h1>
        <p className="hero-subtitle">PATIICU IN FUERY BITE!</p>
        <button className="order-btn">ORDER NOW</button>
      </div>
    </section>
  );
};

export default Hero;
