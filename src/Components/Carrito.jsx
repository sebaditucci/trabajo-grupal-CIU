import React from 'react';
import styles from '../Styles/carrito.module.css';

export default function Carrito({ productos, remover }) {

  function calcularTotal() {
    return productos.reduce((acum, producto) => {
      return acum + producto.precio * producto.cantidad
    }, 0)
  }

  return (
    <div className={styles.container}>
      <p className = {styles.total}>Total: ${calcularTotal()}</p>
      <p className={styles.titulo}>Carrito</p>
      <div className={styles.productos}>
        {productos.length > 0 ? (
          productos.map((producto) => (
            <div className={styles.wrapper} key={producto.id}>
              <p>{producto.nombre}</p>
              <p>{`$${producto.precio}`}</p>
              {producto.cantidad > 1 && <p> x{producto.cantidad}</p>} {}
              <button className={styles.boton} onClick={() => remover(producto.id)}>
                Remover
              </button>
            </div>
          ))
        ) : (
          <p>No hay productos en el carrito.</p>
        )}
      </div>
    </div>
  );
}
