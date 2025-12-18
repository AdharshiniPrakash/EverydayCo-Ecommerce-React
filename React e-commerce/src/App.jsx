import React, {useEffect, useState} from 'react'
import Header from './Header'
import Hero from './Hero'
import CategorySection from './CategorySection'

function App() {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log(data);
        setCategory([...data]);

        console.log(category);

      } catch (error) {
        console.log(error)
      }
    }
    getData();
  }, [])

  return (
    <div className="app-root">
      <Header />
      <Hero />
      <main className="container">
        {category.map((cat,index) => {
          return <CategorySection key={index} catKey={cat.category} title={cat.category} products={cat.items} />;
        })}
      </main>
    </div>
  )
}

export default App;