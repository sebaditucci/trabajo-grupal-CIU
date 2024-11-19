import React from 'react'
import styles from './card.module.css'

export default function Card() {
  return (
    <div className= {styles.card}>
        <div className= {styles.img}></div>
        <p className = {styles.texto}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis, dignissimos quasi repellendus illum suscipit 
            amet quod modi debitis similique inventore maiores voluptatibus alias nam aliquid dolorem dolores, dolorum labore voluptas!
        </p>
    </div>
  )
}
