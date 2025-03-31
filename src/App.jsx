// import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Socio from './components/socio/Socio';
import Contactanos from './components/contactanos/Contactanos';



function App() {


//En este bloque se agregaran las rutas del proyecto, se debe crear una ruta nueva po rcada pagina, sigan la estructura como ejemplo la de HOME
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} ></Route>
        <Route path='/socio' element={<Socio/>} ></Route>
        <Route path='/contactanos' element={<Contactanos/>} ></Route>
        {/* De aqui para abajo siguen añadiendo las rutas que necesiten */}
      </Routes>
    </>
  )
}

export default App
