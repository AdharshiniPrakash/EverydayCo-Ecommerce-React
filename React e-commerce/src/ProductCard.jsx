import React from 'react';
import star from './assets/star.svg';

function ProductCard({ product }) {
  return (
    <article className="card">
      <div className="card-media">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="card-body">
        <h3 className="card-title">{product.title}</h3>
        <div className="card-meta">
          <span className="rating"><img src={star} alt="Rating star" />&nbsp;&nbsp;{product.rating.rate}</span>
          <span className="reviews">({product.rating.count} ratings)</span>
        </div>
        <p className="card-desc">{product.description}</p>
        <div className="card-foot">
          <div className="price">{product.price}</div>
          <button className="add-btn">Add to cart</button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard;