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
                <div className="container-goclean-text">
                    <h2>¿Por qué elegir GoClean?</h2>
                    <p>No importa si vives en un estudio, casa o tienes una oficina grande, GoClean ofrece soluciones de limpieza personalizadas. Nuestros profesionales de la limpieza son expertos en hacer que tus espacios luzcan siempre relucinetes y lo mejor!! Puedes reservar este servicio en linea y en menos de 1 minuto</p>
                </div>
                <div className="container-goclean-step">
                    <h2>Obtén un espacio limpio en 3 sencillos pasos</h2>
                    <p>Reserva un servicio de limpieza</p>
                    <p>Deja que nuestros profesionales hagan su magia</p>
                    <p>Disfruta de tu espacio impecable</p>
                </div>
                <div className="contaeiner-goclean-questions">
                    <details name="goclean">
                        <summary >¿Cuanto cuesta un servicio de limpieza?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio similique assumenda rem iure hic! Suscipit, obcaecati deserunt quae quia non dignissimos et perspiciatis quidem repellat mollitia soluta sit sint alias!</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Cuanto cuesta un servicio de limpieza?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio similique assumenda rem iure hic! Suscipit, obcaecati deserunt quae quia non dignissimos et perspiciatis quidem repellat mollitia soluta sit sint alias!</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Cuanto cuesta un servicio de limpieza?</summary>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio similique assumenda rem iure hic! Suscipit, obcaecati deserunt quae quia non dignissimos et perspiciatis quidem repellat mollitia soluta sit sint alias!</p>
                    </details>
                </div>
                <div className="container-goclean-contac">
                <h2>Contactanos</h2>
                    <p>No importa si vives en un estudio, casa o tienes una oficina grande, GoClean ofrece soluciones de limpieza personalizadas. Nuestros profesionales de la limpieza son expertos en hacer que tus espacios luzcan siempre relucinetes y lo mejor!! Puedes reservar este servicio en linea y en menos de 1 minuto</p>
               
                </div>

            </section>
        </>

    )
}
export default Home
