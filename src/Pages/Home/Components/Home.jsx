import React from 'react'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'
import styles from '../Styles/home.module.css'
import { NavLink } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header />
        {/*Puse el nav aca para que funcione el position sticky*/}
        <nav className = {styles.menu}>
          <ul className = {styles.lista}>
              <li className = {styles.item}><NavLink to = '/' className = {styles.link}>Home</NavLink></li>
              <li className = {styles.item}><NavLink to = '/productos' className = {styles.link}>Productos</NavLink></li>
              <li className = {styles.item}>Fabricantes y Componentes</li>
          </ul>
        </nav>
        <Main />
        <Footer />
    </div>
  )
}
