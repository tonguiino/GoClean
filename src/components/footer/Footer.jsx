import './Footer.scss';



const Footer = () => {

    const year = new Date().getFullYear();


    return (
        <>
            <footer>
                <div className='footer'>
                    <p>Terminos de servicio</p>
                    <p>Politica de privacidad</p>
                    <p>Mapa del sitio</p>
                    <p className='middle'>&copy; {year} GoCLean. Todos lo redechos reservados. </p>
                </div>
            </footer>
        </>
    )
}

export default Footer;