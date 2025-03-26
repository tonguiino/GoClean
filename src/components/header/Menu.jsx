import { NavLink } from "react-router-dom";
import './Menu.scss'

const Menu = () => {

    return (
        <>
            <header className="header-nav">
                <h2>GoClean</h2>
                <ul className="nav-menu">
                    <li><NavLink to='#' className='inicio'>inicio</NavLink></li>
                    <li><NavLink to='#'>Se un socio</NavLink></li>
                    <li><NavLink to='#'>Acerca de nosotros</NavLink></li>
                    <li><NavLink to='#'>Precios</NavLink></li>
                    <li><NavLink to='#'>Contactanos</NavLink></li>
                </ul>
                <ul className="nav-users">
                    <li><NavLink to='#' className='Registrate'>inicio</NavLink></li>
                    <li><NavLink to='#' className='Inicia aqui!!'>inicio</NavLink></li>
                </ul>
            </header>

        </>
    )

}
export default Menu;