import React from 'react'
import styles from '../Styles/card.module.css'
import { Link } from 'react-router-dom'

export default function Card({nombre,descripcion,precio, id}) {
  return (
    <div className= {styles.card}>
        <p className = {styles.titulo}>{nombre}</p>
        <p className = {styles.texto}>{descripcion}</p>
        <p className = {styles.texto}>${precio}</p>
        <Link className = {styles.detalles} to = {`/${id}`}>Detalles</Link>
        <Link className = {styles.agregar}>Agregar</Link>
    </div>
  )
}
