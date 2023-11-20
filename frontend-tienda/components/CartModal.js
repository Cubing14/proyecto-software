// CartModal.js
import React from "react";

const CartModal = ({ cartItems, onClose }) => {
  return (
    <div className="cart-modal">
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.sys.id}>
            <p>{item.product.fields.productTitle}</p>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio Individual: ${item.product.fields.productPrice}</p>
            <p>Precio Total: ${item.totalPrice}</p>
          </li>
        ))}
      </ul>
      <p>
        Precio Final: $
        {cartItems.reduce((total, item) => total + item.totalPrice, 0)}
      </p>
      <button onClick={onClose}>Cerrar</button>
    </div>
  );
};

export default CartModal;
