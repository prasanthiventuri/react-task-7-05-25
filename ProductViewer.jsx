import React, { useEffect, useState } from 'react';


const ProductViewer = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Replace with your real API URL
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const showPrev = () => {
    setIndex(prev => (prev > 0 ? prev - 1 : prev));
  };

  const showNext = () => {
    setIndex(prev => (prev < products.length - 1 ? prev + 1 : prev));
  };

  if (products.length === 0) return <p>Loading...</p>;

  const product = products[index];

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>{product.title}</h2>
      <img src={product.image} alt={product.title} width="150" />
      <p>{product.description}</p>
      <p><strong>${product.price}</strong></p>

      <div style={{ marginTop: "10px" }}>
        <button onClick={showPrev} disabled={index === 0}>Previous</button>
        <button onClick={showNext} disabled={index === products.length - 1}>Next</button>
      </div>
    </div>
  );
};

export default ProductViewer;