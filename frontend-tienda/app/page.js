"use client"

// Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from '@/components/ProductCard';
const Home = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://cdn.contentful.com/spaces/lxi3viv4d7l6/environments/master/entries?access_token=Ad0lhglKQJbTUcgHqvh9cuN0NxXI-GteoE6Q1oZf5Is'
        );
        const data = await response.json();
        setProducts(data.items);
        setData(data.includes)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Product List</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.sys.id} className="col-md-4 mb-4">
            <ProductCard product={product} data={data}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;