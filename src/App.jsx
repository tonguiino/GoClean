// import { useState } from 'react'
import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Socio from './components/socio/Socio';
import Contactanos from './components/contactanos/Contactanos';
import Acerca_us from './pages/acerca_de_nosotros/Acerca_us';
import Precio from './pages/precio/Precio';
import Login from './pages/Login/Login';
import Olvidaste_tu_contraseña from './pages/olvidaste_la_contraseña/olvidaste_tu_contraseña';
import Register from './pages/register/Register';
import DashboardUsuario from './pages/dashboard_usuario/Dashboard_usuario';
import DashboardSocio from './components/dashboard_socio/Dashboard_socio';




function App() {


  //En este bloque se agregaran las rutas del proyecto, se debe crear una ruta nueva po rcada pagina, sigan la estructura como ejemplo la de HOME
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/socio' element={<Socio />} ></Route>
        <Route path='/dashboard_socio' element={<DashboardSocio />}></Route>
        <Route path='/dashboard_usuario' element={<DashboardUsuario />}></Route>
        <Route path='/acercaNosotros' element={<Acerca_us />} ></Route>
        <Route path='/precios' element={<Precio />} ></Route>
        <Route path='/contactanos' element={<Contactanos />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/olvidaste_tu_contraseña' element={<Olvidaste_tu_contraseña />}></Route>
        <Route path='/registrate' element={<Register/>}></Route>
        {/* De aqui para abajo siguen añadiendo las rutas que necesiten */}
      </Routes>
    </>
  )
}

export default App
