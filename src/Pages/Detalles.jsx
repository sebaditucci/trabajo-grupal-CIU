import React from 'react'
import { useParams } from 'react-router-dom'

export default function Detalles() {
    const {id} = useParams();
  return (
    <div>Mostrando detalles del producto con id: {id}</div>
  )
}
