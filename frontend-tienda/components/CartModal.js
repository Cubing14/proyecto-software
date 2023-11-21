// CartModal.js
import React, { useState } from "react";

const CartModal = ({ cartItems, onClose }) => {
  const [whatsappMessage, setWhatsappMessage] = useState("");

  // Agrupa los elementos del carrito por producto
  const groupedCartItems = cartItems.reduce((groups, item) => {
    const key = item.product.sys.id;
    if (!groups[key]) {
      groups[key] = [];
    }
    groups[key].push(item);
    return groups;
  }, {});

  const handleWhatsAppClick = () => {
    // Construye el mensaje de WhatsApp con la lista de deseos, precio y cantidad
    const message = "¡Hola! Estoy interesado en comprar los siguientes productos:\n\n";
    
    const itemsDetails = Object.values(groupedCartItems)
      .map((group) => {
        const product = group[0].product;
        const quantity = group.reduce((total, item) => total + item.quantity, 0);
        const totalPrice = group.reduce((total, item) => total + item.totalPrice, 0);

        return `${quantity} x ${product.fields.productTitle} - $${product.fields.productPrice} c/u = $${totalPrice}`;
      })
      .join("\n");

    const totalPrice = `\n\nPrecio Total: $${cartItems.reduce((total, item) => total + item.totalPrice, 0)}`;

    const encodedMessage = encodeURIComponent(`${message}${itemsDetails}${totalPrice}`);
    const whatsappLink = `https://wa.me/+573222133890?text=${encodedMessage}`;

    // Abre la ventana de WhatsApp con el mensaje predefinido
    window.open(whatsappLink, '_blank');

    // Cierra el modal después de hacer clic en el botón de WhatsApp
    onClose();
  };

  return (
    <div className="cart-modal" style={{ maxHeight: "80vh", overflowY: "auto", position: "relative" }}>
      <button className="close-button" onClick={onClose}>
        X
      </button>
      <h2>Lista de deseos</h2>
      {Object.values(groupedCartItems).map((group, index) => (
        <div key={index}>
          <h3>{group[0].product.fields.productTitle}</h3>
          <table>
            <thead>
              <tr>
                <th>Cantidad</th>
                <th>Precio Individual</th>
                <th>Precio Total</th>
              </tr>
            </thead>
            <tbody>
              {group.map((item) => (
                <tr key={item.product.sys.id}>
                  <td>{item.quantity}</td>
                  <td>${item.product.fields.productPrice}</td>
                  <td>${item.totalPrice}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <hr />
        </div>
      ))}
      <p>
        Precio Final: $
        {cartItems.reduce((total, item) => total + item.totalPrice, 0)}
      </p>
      
      {/* Botón para Comprar por WhatsApp al final del modal con precio y cantidad */}
      <div className="text-center mt-3">
        <button className="btn btn-success" onClick={handleWhatsAppClick}>
          Comprar por WhatsApp - Precio Total: ${cartItems.reduce((total, item) => total + item.totalPrice, 0)}
        </button>
      </div>
    </div>
  );
};

export default CartModal;
