import {React, useState, useEffect} from 'react'
import Card from '../Components/Card'
import Header from "../Components/Header"
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
import styles from '../Styles/productos.module.css'

export default function Productos() {
  const [posts, setPosts] = useState([])

  const fetchData = async () => {
    try {
      const response = await fetch ('http://localhost:5000/productos')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])
  
  return (
    <div>
        <Header/>
        <Navbar/> 
        <div className = {styles.wrapper}>
        {posts.length > 0 ? (
         posts.map((producto) => (
          <Card key = {producto.id} producto = {producto}/>
        ))
      ) : (
        <p>Cargando productos...</p>
      )}
        </div>
        <Footer/>
    </div>
  )
}
