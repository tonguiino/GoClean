import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Acerca_us.scss";
import acercaNosotrosImg from "../../assets/img/acercadenosotros.jpg"; // Importa la imagen

const Acerca_us = () => {
  return (
    <>
      <Menu />
      <section>
      <h2 className="titulo-valores">Nuestros Valores</h2>
        <div className="acerca-us">
          {/* Contenedor de la imagen */}
          <div className="image-container">
            <img src={acercaNosotrosImg} alt="Acerca de Nosotros" />
          </div>

          {/* Sección de valores */}
          <section className="valores">
            <div className="valores-grid">
              <div className="valor">
                <div className="icon">⭐</div>
                <div className="valor-texto">
                  <h3>Calidad</h3>
                  <p>Prestadores de servicio calificados y verificados, evaluados después de cada servicio.</p>
                </div>
              </div>
              <div className="valor">
                <div className="icon">🤝</div>
                <div className="valor-texto">
                  <h3>Confianza</h3>
                  <p>Seguro de responsabilidad civil incluido.</p>
                </div>
              </div>
              <div className="valor">
                <div className="icon">⏳</div>
                <div className="valor-texto">
                  <h3>Flexibilidad</h3>
                  <p>Agenda tu servicio de limpieza cuando lo necesites.</p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Sección de Misión y Visión */}
        <div className="mision-vision">
          <div className="mision">
            <h2>Nuestra Misión</h2>
            <p>
              En GoClean, nuestra misión es ofrecer servicios de limpieza a domicilio de calidad, 
              accesibles y confiables, facilitando la vida de nuestros clientes y brindando oportunidades 
              de trabajo a los prestadores de servicio.
            </p>
          </div>
          <div className="vision">
            <h2>Nuestra Visión</h2>
            <p>
              Ser la plataforma líder en servicios de limpieza a domicilio en Latinoamérica, 
              destacándonos por nuestra innovación, seguridad y compromiso con la excelencia.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Acerca_us;
