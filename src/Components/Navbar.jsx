import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from '../Styles/navbar.module.css'

export default function Navbar() {
    return(
    <nav className = {styles.menu}>
        <ul className = {styles.lista}>
            <li className = {styles.item}><NavLink to = '/' className = {styles.link}>Home</NavLink></li>
            <li className = {styles.item}><NavLink to = '/productos' className = {styles.link}>Productos</NavLink></li>
            <li className = {styles.item}><NavLink to = '/fabricantes_y_componentes' className = {styles.link}>Fabricantes y Componentes</NavLink></li>
        </ul>
    </nav>
  )
}
