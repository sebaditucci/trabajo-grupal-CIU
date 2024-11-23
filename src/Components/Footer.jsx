import React from 'react'
import styles from '../Styles/footer.module.css'

export default function Footer() {
  return (
    <div className = {styles.footer}>
        <div className = {styles.datos}>
            <p className = {styles.nombre}>Sebastián Di Tucci</p>
            <a href = "sebastiandit240@gmail.com" target = "_blank" className = {styles.link}>sebastiandit240@gmail.com</a>
        </div>
        <div className = {styles.datos}>
            <p className = {styles.nombre}>Rodrigo Sebok</p>
            <a href = "rodrigosebok@gmail.com" target = "_blank" className = {styles.link}>rodrigosebok@gmail.com</a>
        </div>
        <div className = {styles.datos}>
            <p className = {styles.nombre}>Magalí Seoane</p>
            <a href = "magalielizabeth.seoane@estudiantes.unahur.edu.ar" target = "_blank" className = {styles.link}>magalielizabeth.seoane@estudiantes.unahur.edu.ar</a>
        </div>
        <div className = {styles.datos}>
          <p className = {styles.nombre}>Franco Trautweiler</p>
          <a href = "francotraut9@gmail.com" target = "_blank" className = {styles.link}>francotraut9@gmail.com</a>
        </div>
    </div>
  )
}
