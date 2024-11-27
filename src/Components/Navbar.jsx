import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Styles/navbar.module.css'

export default function Navbar() {

    return(
    <nav className = {styles.menu}>
        <ul className = {styles.lista}>
            <li className = {styles.item}><NavLink to = '/' className = {styles.link}>Home</NavLink></li>
            <li className = {styles.item}><NavLink to = '/productos' className = {styles.link} id = "productos">Productos</NavLink></li>
            <li className = {styles.item}><NavLink to = '/fabricantes_componentes' className = {styles.link}>Fabricantes y Componentes</NavLink></li>
        </ul>    
    </nav>
  )
}