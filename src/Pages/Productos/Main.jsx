import React from 'react'
import Card from './Card'
import styles from './main.module.css'

export default function Main() {
  return (
    <div className = {styles.wrapper}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}
