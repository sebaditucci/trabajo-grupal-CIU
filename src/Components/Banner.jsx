import React from 'react'
import styles from '../Styles/banner.module.css'

export default function Banner() {

    return (
    <div>
    <div className = {styles.banner}></div>
        <h1 className = {styles.titulo}>
                    Somos <br/> una empresa
                </h1>
    </div>
  )
}
