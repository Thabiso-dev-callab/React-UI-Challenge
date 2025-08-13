import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header__logo">Patisserie</div>

      <nav className="header__nav">
        <ul className="nav__list">
          <li><a href="#">Home</a></li>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Cakes</a></li>
          <li><a href="#">Parties</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>

      <button className="header__order-btn">Order Now</button>
    </header>
  );
};

export default Header;