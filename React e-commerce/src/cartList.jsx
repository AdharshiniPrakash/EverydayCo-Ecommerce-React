import { useState } from "react";
import close from './assets/close.svg';

function CartList({product}) {
    const [quantity, setQuantity] = useState(product.quantity);

  return (
    <div className="cart-item" key={product.id}>
      <div className="item-remove"><img src={close} /></div>

      <div className="item-details">
        <img src={product.image} alt={product.title} className="item-image" />
        <div className="item-info">
          <h4>{product.title}</h4>
          <p>{product.description.substring(0, 100) + "..."}</p>
        </div>
      </div>

      <div className="item-price">₹{product.price.toLocaleString()}</div>

      <div className="item-quantity-control">
        <button className="quantity-btn" onClick={() => setQuantity(quantity-1)}>-</button>
        <div className="quantity-box">{quantity}</div>
        <button className="quantity-btn" onClick={() => setQuantity(quantity+1)}>+</button>
      </div>

      <div className="item-total-price">
        ₹{(product.price * quantity).toLocaleString()}
        <div style={{ fontSize: "12px", color: "#777", fontWeight: "normal" }}>
          ₹{product.price.toLocaleString()}
        </div>
      </div>
    </div>
  );
}

export default CartList;
