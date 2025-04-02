import Footer from "../../components/footer/Footer"
import Menu from "../../components/header/menu"
import "./Acerca_us.scss"

const Acerca_us = () => {
  return (
    <>
      <Menu />
      <section>
        <div className="acerca-us">
          <section className="hero">
            <div className="hero-content">
              <h1>Sobre GoClean</h1>
              <h2>
                Brindamos servicios de limpieza a domicilio con calidad, confianza y flexibilidad,
                permitiendo a cualquier persona convertirse en proveedor del servicio.
              </h2>
            </div>
          </section>

          <section className="valores">
            <h2>Nuestros Valores</h2>
            <div className="valores-grid">
              <div className="valor">
                <div className="icon">⭐</div>
                <h3>Calidad</h3>
                <p>Prestadores de servicio calificados y verificados, evaluados después de cada servicio.</p>
              </div>
              <div className="valor">
                <div className="icon">🤝</div>
                <h3>Confianza</h3>
                <p>Seguro de responsabilidad civil incluido.</p>
              </div>
              <div className="valor">
                <div className="icon">⏳</div>
                <h3>Flexibilidad</h3>
                <p>Agenda tu servicio de limpieza cuando lo necesites.</p>
              </div>
            </div>
          </section>

          <section className="estadisticas">
            <h2>Estadísticas Clave</h2>
            <div className="estadisticas-grid">
              <div className="estadistica">
                <h3>+10,000</h3>
                <p>Servicios Completados</p>
              </div>
              <div className="estadistica">
                <h3>4.8/5</h3>
                <p>Calificación Promedio</p>
              </div>
              <div className="estadistica">
                <h3>+5,000</h3>
                <p>Clientes Satisfechos</p>
              </div>
            </div>
          </section>

          <section className="testimonios">
            <h2>Lo que dicen nuestros clientes</h2>
            <div className="testimonios-grid">
              <div className="testimonio">
                <p>"GoClean ha hecho mi vida más fácil. Los recomiendo totalmente."</p>
                <h4>- Andrea R.</h4>
              </div>
              <div className="testimonio">
                <p>"Un servicio confiable y eficiente. ¡Muy satisfecho con los resultados!"</p>
                <h4>- Carlos M.</h4>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Footer/>
    </>
  )
}
export default Acerca_us;