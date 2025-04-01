import { NavLink } from "react-router-dom";
import './Menu.scss'

const Menu = () => {

    return (
        <>
            <header className="header-nav">
                <h2>GoClean</h2>
                <ul className="nav-menu">
                    <li><NavLink to='/' className='inicio'>Inicio</NavLink></li>
                    <li><NavLink to='/socio'>Sé un socio</NavLink></li>
                    <li><NavLink to='/acercaNosotros'>Acerca de nosotros</NavLink></li>
                    <li><NavLink to='/precios'>Precios</NavLink></li>
                    <li><NavLink to='/contactanos'>Contactanos</NavLink></li>
                </ul>
                <ul className="nav-users">
                    <li><NavLink to='#' className=''>Registrate</NavLink></li>
                    <li><NavLink to='#' className=''>Inicia aqui!!</NavLink></li>
                </ul>
            </header>
        </>
    )

}
export default Menu;