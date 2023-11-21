// ShoppingCart.js
import React from 'react';

const ShoppingCart = ({ cartItems }) => {
  return (
    <div className="shopping-cart">
      <h2>Lista de</h2>
      {cartItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Individual</th>
              <th>Precio Total</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.product.sys.id}>
                <td>{item.product.fields.productTitle}</td>
                <td>{item.quantity}</td>
                <td>${item.product.fields.productPrice}</td>
                <td>${item.totalPrice}</td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="3">Precio Final:</td>
              <td>${cartItems.reduce((total, item) => total + item.totalPrice, 0)}</td>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>No hay productos en el carrito.</p>
      )}
    </div>
  );
};

export default ShoppingCart;
