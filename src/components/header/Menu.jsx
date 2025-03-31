import { NavLink } from "react-router-dom";
import './Menu.scss'

const Menu = () => {

    return (
        <>
            <header className="header-nav">
                <h2>GoClean</h2>
                <ul className="nav-menu">
                    <li><NavLink to='/' className='inicio'>inicio</NavLink></li>
                    <li><NavLink to='#'>se un socio</NavLink></li>
                    <li><NavLink to='/about'>acerca de nosotros</NavLink></li>
                    <li><NavLink to='#'>precios</NavLink></li>
                    <li><NavLink to='#'>contactanos</NavLink></li>
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