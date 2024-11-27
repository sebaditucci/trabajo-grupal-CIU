import {React, useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import styles from '../Styles/detalles.module.css'

export default function Detalles() {
  const {id} = useParams();
  const [productoF, setFabricantes] = useState([])
  const [productoC, setComponentes] = useState([])

  const fetchData = async () => {
    try {
      const responseF = await fetch(`http://localhost:5000/productos/${id}/fabricantes`)
      const responseC = await fetch(`http://localhost:5000/productos/${id}/componentes`)
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

  if (!productoF?.Fabricantes) {
    return <p>Cargando datos de los fabricantes</p>;
  }

  if (!productoC?.Componentes) {
    return <p>Cargando datos de los componentes</p>;
  }

  return (
    <div className = {styles.detalles} >
      <div className = {styles.datos}>
        <img src = {`../../public/${productoC.pathImg}`} className = {styles.img} title = {`${productoC.nombre}`} 
        alt = {`imagen de un/a ${productoC.nombre}`} loading = "lazy"/>
        <div className = {styles.info}>
          <p className = {styles.nombre}>{productoC.nombre}</p>
          <p>{productoC.descripcion}</p>
          <p>${productoC.precio}</p>
        </div>  
        <button className = {styles.boton}>Agregar al carrito</button>
      </div>
      <div className = {styles.fabricantesYComponentes}>
        <div className = {styles.conteiner}>
          <p className = {styles.titulo}>Fabricantes</p>
          <div className = {styles.cartas}>
            {productoF.Fabricantes.map((fabricante) => (
              <Link to = "/fabricantes_componentes#fabricantes"> <img src = {`../../public/${fabricante.pathImgPerfil}`} className = {styles.fabricante} title = {`${fabricante.nombre}`}/></Link>
            ))}
          </div>
        </div>
        <div className = {styles.conteiner}>
          <p className = {styles.titulo}>Componentes</p>
          <div className = {styles.cartas}>
            {productoC.Componentes.map((componente) => (
                <Link to = "/fabricantes_componentes#componentes" className = {styles.componente}>{componente.nombre}</Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  )
}