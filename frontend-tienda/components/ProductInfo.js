// ProductInfo.js

import React from "react";

const ProductInfo = ({ product, imageData }) => {
  const imageUrl = imageData.fields.file.url || "https://via.placeholder.com/150";

  return (
    <div className="row">
      <div className="col-md-6">
        <img
          src={imageUrl}
          className="img-fluid"
          alt={product.fields.productTitle}
        />
      </div>
      <div className="col-md-6">
        <div className="card-body">
          <h5 className="card-title">{product.fields.productTitle}</h5>
          <p className="card-text">{product.fields.productDescription}</p>
          <p className="card-text">Precio: ${product.fields.productPrice}</p>
          <p className="card-text">Categoría: {product.fields.productCategory}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;