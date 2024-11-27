import { React, useState, useEffect } from 'react'
import Card from '../Components/Card'
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import styles from '../Styles/productos.module.css'
import Carrito from '../Components/Carrito'

export default function Productos() {
  const [posts, setPosts] = useState([])
  const [productos, setProductos] = useState([])
  const [mostrarCarritoState, setMostrarCarritoState] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:5000/productos')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  function agregar(producto) {
    setProductos((prevProductos) => {
      const productoExistente = prevProductos.find(p => p.id === producto.id);
      if (productoExistente) {
        return prevProductos.map(p =>
          p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p
        );
      } else {
        return [...prevProductos, { ...producto, cantidad: 1 }];
      }
    });
  }

  function mostrarCarrito() {
    setMostrarCarritoState(!mostrarCarritoState)
  }

  function remover(id) {
    setProductos((prevProductos) => prevProductos.filter((producto) => producto.id !== id))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Header />
      <Navbar />
      <div className={styles.productos}>
        {
          posts.length > 0 ? (
            posts.map((producto) => (
              <Card key={producto.id} producto={producto} agregar={() => agregar(producto)} />
            ))
          ) : (<p>Cargando productos...</p>)
        }
      </div>
      {mostrarCarritoState && <Carrito productos={productos} remover={remover} />}
      <button className={styles.boton} onClick={mostrarCarrito}>Carrito</button>
      <Footer />
    </div>
  )
}