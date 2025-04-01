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
    </div>
            </section>
        </>

    )
}
export default Acerca_us
