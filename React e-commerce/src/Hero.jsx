import React from 'react';
import banner from './assets/banner.png';

function Hero() {
  return (
    <section className="hero">
      <img
        className="hero-img"
        alt="promo"
        src={banner}
      />
      <div className="hero-overlay container">
        <h1>12 Days of Deals</h1>
        <p>Make the season merrier with new deals and gifts — now through December 19.</p>
      </div>
    </section>
  )
}

export default Hero;