import { StrictMode } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import styles from './Styles/header.module.css'

function App() {
  return (
    <StrictMode>
      <Header />
      <nav className = {styles.menu}>
        <ul className = {styles.lista}>
            <li className = {styles.item} >Home</li>
            <li className = {styles.item}>Contactanos</li>
            <li className = {styles.item}>Ingresa</li>
            <li className = {styles.item}>Registrate</li>
        </ul>
      </nav>
      <Main />
    </StrictMode>
  );
}

export default App
