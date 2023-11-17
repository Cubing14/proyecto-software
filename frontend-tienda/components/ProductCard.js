import React from "react";
import { useRouter } from "next/navigation";

const ProductCard = ({ product, data }) => {
  const router = useRouter();
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
        <p className="card-text">Price: ${product.fields.productPrice}</p>
      </div>
      <button className="btn btn-success" onClick={() => router.push(`/product/${product.sys.id}`)}>Check this post</button>
    </div>
  );
};

export default ProductCard;