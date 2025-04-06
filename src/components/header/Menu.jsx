import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import './Menu.scss'
import { useState } from "react";

const Menu = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <header className={`header-nav ${isOpen ? '' : 'open-menu'}`}>
                <div className="h-button" onClick={toggleMenu}>
                    {isOpen ? <IoCloseSharp className="close" /> : <GiHamburgerMenu className="hamburguesa" />}
                </div>
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <h2 className="title-menu">GoClean</h2>
                    <ul className="nav-menu">
                        <li><NavLink to='/' className='inicio'>Inicio</NavLink></li>
                        <li><NavLink to='/socio'>Sé un socio</NavLink></li>
                        <li><NavLink to='/acercaNosotros'>Acerca de nosotros</NavLink></li>
                        <li><NavLink to='/precios'>Precios</NavLink></li>
                        <li><NavLink to='/contactanos'>Contáctanos</NavLink></li>
                    </ul>
                    <ul className="nav-users">
                        <li><NavLink to='/registrate' className=''>Regístrate</NavLink></li>
                        <li><NavLink to='#' className=''>Inicia sesión</NavLink></li>
                    </ul>
                </div>
            </header>
        </>
    )

}
export default Menu;