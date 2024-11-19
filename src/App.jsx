import { StrictMode } from 'react'
import Home from './Pages/Home/Home'
import Productos from './Pages/Productos/Productos'
import { Navigate, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <StrictMode>
      <Routes>
        <Route path = '/' element = {<Home />}></Route>
        <Route path = '/productos' element = {<Productos />}></Route>
        <Route path = '/*' element = {<Navigate to = '/'/>}></Route>
      </Routes>
    </StrictMode>
  );
}

export default App
