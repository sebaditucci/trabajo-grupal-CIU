import React from 'react'
import styles from '../Styles/cardsDetalles.module.css'

function CardFabricante({fabricante}) {
  return (
    <div className = {styles.card}>
      <img src = {`../../public/${fabricante.pathImgPerfil}`} className = {styles.img} title = {`${fabricante.nombre}`}
      alt = {`imagen de perfil de ${fabricante.nombre}`} loading = "lazy"/>
      <div className = {styles.container}>
        <p className = {styles.nombre}>{fabricante.nombre}</p>
        <p className = {styles.texto}>{fabricante.direccion}</p>
        <a href = {`tel:${fabricante.numeroContacto}`} className = {styles.link}>{fabricante.numeroContacto}</a>
      </div>
    </div>
  )
}

function CardComponente({componente}) {
  return (
    <div className = {styles.card}>
      <div className = {styles.container}>
        <p className = {styles.nombre}>{componente.nombre}</p>
        <p className = {styles.texto}>{componente.descripcion}</p>
      </div>
    </div>
  )
}

export {CardFabricante, CardComponente}