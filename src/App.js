import React, { useState } from 'react';
import './App.css';
import productsData from './products.json';

const App = () => {
  const [products, setProducts] = useState(productsData); 
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setProducts(productsData);
    } else {
      const filteredProducts = productsData.filter(product => product.category === category);
      setProducts(filteredProducts);
    }
  };

  return (
    <div className="container">
      <h1>Product List</h1>
      
      <div className="filter-section">
        <button onClick={() => handleFilter('All')} className="filter-btn">All</button>
        <button onClick={() => handleFilter('electronics')} className="filter-btn">Electronics</button>
        <button onClick={() => handleFilter('clothing')} className="filter-btn">Clothing</button>
      </div>
      <div className="product-display">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h3>{product.name}</h3>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
