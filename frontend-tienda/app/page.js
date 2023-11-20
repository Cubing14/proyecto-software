"use client"

// Home.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import CartModal from '../components/CartModal';
import styles from "../app/page.module.css"

const Home = () => {
  const [products, setProducts] = useState([]);
  const [data, setData] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://cdn.contentful.com/spaces/lxi3viv4d7l6/environments/master/entries?access_token=Ad0lhglKQJbTUcgHqvh9cuN0NxXI-GteoE6Q1oZf5Is'
        );
        const data = await response.json();
        setProducts(data.items);
        setData(data.includes);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (product, quantity) => {
    const existingCartItemIndex = cartItems.findIndex(
      (item) => item.product.sys.id === product.sys.id
    );

    if (existingCartItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingCartItemIndex].quantity += quantity;
      updatedCartItems[existingCartItemIndex].totalPrice =
        updatedCartItems[existingCartItemIndex].quantity * product.fields.productPrice;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([
        ...cartItems,
        {
          product,
          quantity,
          totalPrice: quantity * product.fields.productPrice,
        },
      ]);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenCartModal = () => {
    setIsCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setIsCartModalOpen(false);
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: '#f2f2f2', position: 'relative' }}>
      <h1 className="mb-4 text-center">Nuestros productos</h1>
      <div className="row justify-content-center">
        {products.map((product) => (
          <div key={product.sys.id} className="col-md-4 mb-4">
            <ProductCard
              product={product}
              data={data}
              onAddToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>

      {/* Botón del carrito (fijo en la esquina inferior derecha) */}
      <button className={styles.cartButton} onClick={handleOpenCartModal}>
        Ver Carrito ({cartItems.length})
      </button>

      {/* Carrito de Compras (sobreposición) */}
      {isCartModalOpen && (
        <div className={styles.cartModalContainer}>
          <CartModal cartItems={cartItems} onClose={handleCloseCartModal} />
        </div>
      )}

      {/* Botón "Volver arriba" */}
      <button className={styles.scrollToTopButton} onClick={handleScrollToTop}>
        Volver arriba
      </button>
    </div>
  );
};

export default Home;
