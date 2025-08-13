import React from "react";
import "./ProductSection.css";

const desserts = [
  {
    title: "Custom Cakes",
    image: "/images/cake-bg.jpg",
    description:
      "Custom cakes made with premium ingredients and beautifully decorated.",
    button: "Order Today",
  },
  {
    title: "Macarons",
    image: "/images/cake1-bg.jpg",
    description:
      "Delicate, colorful macarons in a variety of flavors and fillings.Baked to perfection.",
    button: "Order Online",
  },
  {
    title: "Cupcake Collections",
    image: "/images/cake2-bg.jpg",
    description:
      "Cupcake collections for every occasion, baked fresh and decorated.",
    button: "Get It Today!",
  },
];

export default function ProductSection() {
  return (
    <div className="dessert-showcase">
      {/* Pink section */}
      <div className="dessert-top">
        <h2>Delight in every Bite!</h2>
        <div className="dessert-images">
          {desserts.map((dessert, index) => (
            <div key={index} className="dessert-card">
              <img src={dessert.image} alt={dessert.title} />
            </div>
          ))}
        </div>
      </div>

      {/* Gray section */}
      <div className="dessert-bottom">
        {desserts.map((dessert, index) => (
          <div key={index} className="dessert-info">
            <h3>{dessert.title}</h3>
            <p>{dessert.description}</p>
            <button className={index === desserts.length - 1 ? "special-btn" : ""}>
              {dessert.button}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
