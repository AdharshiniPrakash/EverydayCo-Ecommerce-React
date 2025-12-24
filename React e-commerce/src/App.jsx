import { useEffect, useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import CategorySection from './CategorySection';
import Popup from './Popup';

function App() {
  const [categories, setCategories] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [showPopUp, setShowPopup] = useState(false);
  const togglePopup = () => setShowPopup(!showPopUp);

  console.log(cartItems)

  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();

        // 1. Efficiently group products by category using modern JS
        const grouped = Object.groupBy(data, (product) => product.category);
        console.log(grouped)

        // 2. Transform into an array format for easy rendering
        const formattedCategories = Object.entries(grouped).map(([name, items]) => ({
          name,
          items
        }));

        setCategories(formattedCategories);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    }
    getData();
  }, []);

  const addCartItem = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeCartItem = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  return (
    <div className="app-root">
      <Header count={cartItems.length} togglePopup={togglePopup} />
      <Hero />
      <main className="container">
        {categories.map((cat, index) => (
          <CategorySection key={index} catKey={cat.category} title={cat.category} products={cat.items} addToCart={addCartItem} removeFromCart={removeCartItem} />
        ))}
      </main>
      {
        cartItems.length > 0 &&
        <Popup showPopUp={showPopUp} closePopUp={togglePopup} cartItems={cartItems} ></Popup>
      }
    </div>
  );
}

export default App;
