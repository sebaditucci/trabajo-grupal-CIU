import { StrictMode } from 'react'
import Header from './Components/Header'
import Main from './Components/Main'
import Footer from './Components/Footer'
import styles from './Styles/app.module.css'

function App() {
  return (
    <StrictMode>
      <Header />
      {/*Puse el nav aca para que funcione el position: sticky;*/}
      <nav className = {styles.menu}>
        <ul className = {styles.lista}>
            <li className = {styles.item} >Home</li>
            <li className = {styles.item}>Historia</li>
            <li className = {styles.item}>Filosofía</li>
            <li className = {styles.item}>Contacto</li>
        </ul>
      </nav>
      <Main />
      <Footer />
    </StrictMode>
  );
}

export default App
