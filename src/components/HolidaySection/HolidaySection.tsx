import React from "react";
import "./HolidaySection.css";

const images = [
  "/images/holiday1-bg.jpg",
  "/images/holiday2-bg.jpg",
  "/images/holiday3-bg.jpg",
];

export default function HolidaySection() {
  return (
    <div className="customer-collection">
      <h2 className="collection-heading">Customer Collection</h2>

      <div className="image-grid">
        {images.map((img, index) => (
          <div key={index} className="image-card">
            <img src={img} alt={`collection-${index}`} />
            <button className="collection-button">Shop Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
