import React from 'react';
import styles from '../Styles/header.module.css' 
import banner from '../assets/banner.jpg'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <div className = {styles.header}>
            <img src = {banner} alt = "Imagen de portada" title = "banner" className = {styles.banner} loading = "lazy"/>
            <img src = {logo} alt = "logo de TechManu" title = "logo" className = {styles.logo} loading = "lazy"/>
            <button className = {styles.signin}>Sign in</button>
            <button className = {styles.login}>Log in</button>
        </div>
  )
}