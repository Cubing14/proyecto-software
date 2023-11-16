import React from "react";

const ProductCard = ({ product, data }) => {
  const imageId = product.fields.productImage.sys.id;
  const imageUrl =
    data.Asset.find((asset) => asset.sys.id === imageId)?.fields.file.url ||
    "https://via.placeholder.com/150";

  return (
    <div className="card mb-3" style={{ maxWidth: "18rem" }}>
      <img
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={product.fields.productTitle}
      />
      <div className="card-body">
        <h5 className="card-title">{product.fields.productTitle}</h5>
        <p className="card-text">{product.fields.productDescription}</p>
        <p className="card-text">Price: ${product.fields.productPrice}</p>
        <p className="card-text">Category: {product.fields.productCategory}</p>
      </div>
    </div>
  );
};

export default ProductCard;