import React from 'react';
import styles from '../Styles/header.module.css' 

export default function Header() {
    return (
        <div class = "header">
            <div className = {styles.banner}></div>
            <h1 className = {styles.titulo}> Somos <br/> TechManu </h1>
        </div>
  )
}