"use client"

import React, { useEffect, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useParams } from "next/navigation";

const Search = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const searchParams = useParams();
  const id = searchParams.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://cdn.contentful.com/spaces/lxi3viv4d7l6/environments/master/entries?access_token=Ad0lhglKQJbTUcgHqvh9cuN0NxXI-GteoE6Q1oZf5Is&content_type=product&fields.productTitle[match]=*${query}*`
        );
        const data = await response.json();
        setProducts(data.items);
        setData(data.includes);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Resultados para {id}</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.sys.id} className="col-md-4 mb-4">
            <ProductCard product={product} data={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;