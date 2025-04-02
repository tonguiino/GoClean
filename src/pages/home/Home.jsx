import Menu from "../../components/header/menu"
import banner from "../../assets/img/Se_Un_Socio.jpg"
import "./Home.scss"
import { IoIosArrowForward } from "react-icons/io";
import Footer from "../../components/footer/Footer";



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
                        <summary >¿Que incluye un servicio de limpieza?</summary>
                        <p>Un servicio de limpieza cubre la limpieza general de los espacios acordados, como habitaciones, baños, cocina y áreas comunes. Dependiendo del plan elegido, puede incluir barrido, trapeado, aspirado, desinfección de superficies y organización básica.</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Que pasa si no estoy satisfecho con el servicio?</summary>
                        <p>Queremos que estés completamente satisfecho. Si el servicio no cumple tus expectativas, puedes reportarlo en nuestra plataforma dentro de las primeras 24 horas. Evaluaremos tu caso y podremos ofrecerte una corrección gratuita o un reembolso parcial, según corresponda.</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Necesito proporcionar los productos de limpieza?</summary>
                        <p>No es obligatorio. Nuestros socios llevan sus propios productos y herramientas. Sin embargo, si prefieres que usen productos específicos, puedes coordinarlo con el socio antes del servicio.</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Puedo cambiar la fecha de mi reserva?</summary>
                        <p>Sí, entendemos que los planes pueden cambiar. Puedes modificar la fecha de tu servicio a través de la plataforma, siempre que lo hagas con al menos 24 horas de anticipación.</p>
                    </details>
                    <details name="goclean">
                        <summary >¿Como puedo cancelar o reprogramar mi reserva?</summary>
                        <p>Desde la sección de reservas en nuestra plataforma, puedes cancelar o reprogramar tu servicio. Si cancelas con al menos 24 horas de antelación, recibirás un reembolso total. Para cancelaciones con menos tiempo, pueden aplicarse cargos según nuestras políticas.</p>
                    </details>
                </div>
                <div className="container-goclean-contac">
                    <h2>Contactanos</h2>
                    <p>No importa si vives en un estudio, casa o tienes una oficina grande, GoClean ofrece soluciones de limpieza personalizadas. Nuestros profesionales de la limpieza son expertos en hacer que tus espacios luzcan siempre relucinetes y lo mejor!! Puedes reservar este servicio en linea y en menos de 1 minuto</p>

                </div>

            </section>
            <Footer />
        </>

    )
}
export default Home
