import React from 'react';
import styles from '../Styles/header.module.css' 
import banner from '../assets/banner.jpg'
import logo from '../assets/logo.png'

export default function Header() {
    return (
        <div className = {styles.header}>
            <img src = {banner} alt = "banner" className = {styles.banner}/>
            <img src = {logo} alt = "logo" className = {styles.logo} />
            <button className = {styles.signin}>Sign in</button>
            <button className = {styles.login}>Log in</button>
        </div>
  )
}