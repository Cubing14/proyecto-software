// product.js

"use client";

// Importa los estilos necesarios
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import ProductInfo from "/components/ProductInfo";
const Product = () => {
  const [product, setProduct] = useState(null);
  const [imageData, setImageData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener la información del producto por ID
        const productResponse = await fetch(
          `https://cdn.contentful.com/spaces/lxi3viv4d7l6/environments/master/entries/${id}?access_token=Ad0lhglKQJbTUcgHqvh9cuN0NxXI-GteoE6Q1oZf5Is`
        );
        const productData = await productResponse.json();
        setProduct(productData);

        // Obtener la información de la imagen por ID
        const imageId = productData.fields.productImage.sys.id;
        const imageResponse = await fetch(
          `https://cdn.contentful.com/spaces/lxi3viv4d7l6/environments/master/assets/${imageId}?access_token=Ad0lhglKQJbTUcgHqvh9cuN0NxXI-GteoE6Q1oZf5Is`
        );
        const imageData = await imageResponse.json();
        setImageData(imageData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className={`container mt-4`}>
      <h1 className="mb-4">Detalles del Producto</h1>
      {product && imageData && (
        <ProductInfo product={product} imageData={imageData} />
      )}
    </div>
  );
};

export default Product;
