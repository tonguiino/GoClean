import Menu from "../../components/header/menu"
import banner from "../../assets/img/Se_Un_Socio.jpg"
import "./Home.scss"


const Home = () => {
    return (
        <>
            <Menu />
            <section>
                <div className="container-img-banner">
                    <img src={banner} className="img-banner" alt="invitacion a ser socio" />
                </div>
                <div className="container-goclean-info">
                    <h2>¿Por qué elegir GoClean?</h2>
                    <p>No importa si vives en un estudio, casa o tienes una oficina grande, GoClean ofrece soluciones de limpieza personalizadas. Nuestros profesionales de la limpieza son expertos en hacer que tus espacios luzcan siempre relucinetes y lo mejor!! Puedes reservar este servicio en linea y en menos de 1 minuto</p>
                </div>

            </section>
        </>

    )
}
export default Home
