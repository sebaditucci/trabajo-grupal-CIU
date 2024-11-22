import React from 'react'
import styles from '../Styles/footer.module.css'

export default function Footer() {
  return (
    <div className = {styles.footer}>
        <p className = {styles.nombre}>Sebastián Di Tucci</p>
        <div className = {styles.separador}></div>
        <p className = {styles.nombre}>Rodrigo Sebok</p>
        <div className = {styles.separador}></div>
        <p className = {styles.nombre}>Magalí Seoane</p>
        <div className = {styles.separador}></div>
        <p className = {styles.nombre}>Franco Trautweiler</p>
    </div>
  )
}
