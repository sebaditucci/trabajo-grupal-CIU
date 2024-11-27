import React from 'react'
import styles from '../Styles/card.module.css'
import { Link } from 'react-router-dom'

export default function Card({producto, agregar}) {
  return (
    <div className= {styles.card}>
      <img src = {`../../public/${producto.pathImg}`} className = {styles.img} title = {`${producto.nombre}`}
      alt = {`imagen de perfil de ${producto.nombre}`} loading = "lazy"/>
      <p className = {styles.titulo}>{producto.nombre}</p>
      <p className = {styles.texto}>{producto.descripcion}</p>
      <p className = {styles.texto}>${producto.precio}</p>
      <Link className = {styles.detalles} to = {`/${producto.id}`}>Detalles</Link>
      <button className = {styles.agregar} onClick = {agregar}>Agregar</button>
    </div>
  ) 
}

