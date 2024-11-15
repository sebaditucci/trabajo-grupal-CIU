import { StrictMode } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import styles from './Styles/app.module.css'

function App() {
  return (
    <StrictMode>
      <Header />
      <nav className = {styles.menu}>
        <ul className = {styles.lista}>
            <li className = {styles.item} >Home</li>
            <li className = {styles.item}>Quienes Somos</li>
            <li className = {styles.item}>Ubicación</li>
            <li className = {styles.item}>Contacto</li>
        </ul>
      </nav>
      <Main />
    </StrictMode>
  );
}

export default App
