// ProductInfo.js
import React from "react";
import StarRating from './StarRating';

const ProductInfo = ({ product, imageData }) => {
  const imageUrl = imageData.fields.file.url || "https://via.placeholder.com/150";

  return (
    <div className="row" style={{ backgroundColor: "#aaf0c8", padding: "10px", borderRadius: "10px" }}>
      <div className="col-md-6">
        <img
          src={imageUrl}
          className="img-fluid rounded"
          alt={product.fields.productTitle}
        />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h1 className="card-title mb-3" style={{ fontSize: "2.5rem" }}>{product.fields.productTitle}</h1>
          <p className="card-text">{product.fields.productDescription}</p>
          <p className="card-text font-weight-bold">Precio: ${product.fields.productPrice}</p>
          <p className="card-text">Categoría: {product.fields.productCategory}</p>
          <p className="card-text">
            Calificación: <StarRating rating={product.fields.productCalification} />
          </p>
          <a
            href={`https://wa.me/+573222133890?text=¡Hola! Estoy interesado en comprar el producto *${product.fields.productTitle}* por: $${product.fields.productPrice}. ¿Podrías proporcionarme información más detallada?`}
            className="btn btn-success"
            target="_blank"
            rel="noopener noreferrer"
            style={{ transition: "transform 0.3s ease", ":hover": { transform: "scale(1.1)" } }}
          >
            Comprar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
