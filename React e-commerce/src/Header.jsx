import React from 'react';
import cartImg from './assets/cart.svg';
import logo from './assets/logo.png';

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner container">
        <div className="brand"><img src={logo} alt="Logo" /></div>

        <nav className="nav">
          <a>Home</a>
          <a>Products</a>
          <a>Contact</a>
        </nav>

        <div className="header-actions">
          <div className="search">
            <input placeholder="Search" />
          </div>
          <button className="icon-btn" aria-label="cart"><img src={cartImg} alt="Cart icon" /></button>
        </div>
      </div>
    </header>
  )
}

export default Header;