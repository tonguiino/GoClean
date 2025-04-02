import './Footer.scss';



const Footer = () => {

    const year = new Date().getFullYear();


    return (
        <>
            <footer>

                <p>&copy {year} GoCLean. Todos lo redechos reservados. </p>
            </footer>
        </>
    )
}

export default Footer;