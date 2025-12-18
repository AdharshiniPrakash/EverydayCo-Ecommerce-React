import React from 'react'
import ProductCard from './ProductCard'

function CategorySection({ catKey, title, products }) {
    console.log(products);
  return (
    <section className="category" key={catKey}>
      <div className="category-head container">
        <h2>{title}</h2>
        <div className="category-controls">
          <div className="results">Showing 1-3 of 5 results</div>
          <select className="sort">
            <option>Sort by newest</option>
            <option>Sort by price</option>
          </select>
        </div>
      </div>

      <div className="container">
        <div className="product-grid">
          {products.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategorySection;