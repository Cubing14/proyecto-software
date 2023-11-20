// ProductCard.js
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import StarRating from './StarRating';
import '../app/page.module.css';

const ProductCard = ({ product, data, onAddToCart }) => {
  const router = useRouter();
  const imageId = product.fields.productImage.sys.id;
  const imageUrl =
    data.Asset.find((asset) => asset.sys.id === imageId)?.fields.file.url ||
    'https://via.placeholder.com/150';

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    const confirmAddToCart = window.confirm('¿Quieres agregar este producto al carrito?');
    if (confirmAddToCart) {
      onAddToCart(product, quantity);
      setQuantity(1);
    }
  };

  return (
    <div className="card mb-3" style={{ maxWidth: '18rem' }}>
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={product.fields.productTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{product.fields.productTitle}</h5>
        <p className="card-text">Precio: ${product.fields.productPrice}</p>
        <p className="card-text">
          Calificación: <StarRating rating={product.fields.productCalification} />
        </p>
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10) || 1)}
              min="1"
              max="10"
            />
            <span className="ml-2">unidades</span>
          </div>
          <div>
            <button className="btn btn-primary mr-2" onClick={handleAddToCart}>
              Agregar al Carrito
            </button>
            <button
              className="btn btn-success"
              onClick={() => router.push(`/product/${product.sys.id}`)}
            >
              Ver el producto
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
