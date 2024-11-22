import {useState, useEffect} from 'react'
import Header from '../Components/Header'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import {CardFabricante, CardComponente} from '../Components/CardsDetalles'
import styles from '../Styles/fabricantesYComponentes.module.css'

export default function Fabricantes() {
  const [fabricantes, setFabricantes] = useState([])
  const [componentes, setComponentes] = useState([])

  const fetchData = async () => {
    try {
      const responseF = await fetch(`http://localhost:5000/fabricantes`)
      const responseC = await fetch(`http://localhost:5000/componentes`)
      const dataF = await responseF.json()
      const dataC = await responseC.json()
      setFabricantes(dataF)
      setComponentes(dataC)
    } catch (error) {
      console.error('Error al obtener los datos:', error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  if (!fabricantes) {
    return <p>Cargando datos de los fabricantes</p>;
  }

  if (!componentes) {
    return <p>Cargando datos de los componentes</p>;
  }

  return (
    <div>
      <Header/>
      <Navbar/>
      <h1 className = {styles.titulo}>Fabricantes</h1>
      <div className = {styles.wrapper}>
        {fabricantes.map((fabricante) => (
          <CardFabricante fabricante = {fabricante} key = {fabricante.id}/>
        ))}
      </div>
      <h1 className = {styles.titulo}>Componentes</h1>
      <div className = {styles.wrapper}>
        {componentes.map((componente) => (
          <CardComponente componente = {componente} key = {componente.id}/>
        ))}
      </div>
      <Footer/>
    </div>
  )
}
