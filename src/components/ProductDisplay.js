import React from 'react';
import ProductItem from './ProductItem';

const ProductDisplay = ({ products }) => {
  return (
    <div className="product-display">
      {products.map((product) => (
        <ProductItem key={product.id} name={product.name} />
      ))}
    </div>
  );
};

export default ProductDisplay;
