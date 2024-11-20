import React from 'react'
import Home from './Pages/Home'
import Productos from './Pages/Productos'
import { Navigate, Route, Routes } from 'react-router-dom';
import Detalles from './Pages/Detalles';

function App() {
  return (
    <Routes>
      <Route path = '/' element = {<Home />}></Route>
      <Route path = '/productos' element = {<Productos />}></Route>
      <Route path = '/:id' element = {<Detalles/>}></Route>
      <Route path = '/*' element = {<Navigate to = '/'/>}></Route>
    </Routes>
  );
}

export default App
