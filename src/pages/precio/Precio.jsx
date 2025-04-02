import Card from "../../components/cardPrecios/Card";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import imgSofa from "../../assets/img/Sofa-sala-limpio.jpg"
import "./Precio.scss"

const Precio = () => {

    return (
        <>
            <Menu />
            <section className="price-container">
                <img src={imgSofa} alt="" />
                <div>
                    <h2>Elige el plan perfecto para ti</h2>
                    <p>Conoce nuestros planes de limpieza flexibles y elige el que mejor se adapte a tus necesidades</p>
                </div>
                <div className="cards-container">
                    <Card className="card" titulo="Plan mañana" hora_inicio="8:00 a.m" hora_final="12:00 m" tiempo="4" precio="80.000" ></Card>

                    <Card titulo="Plan Tarde" hora_inicio="1:00 p.m" hora_final="5:00 p.m" tiempo="4" precio="80.000"></Card>

                    <Card titulo="Plan día completo" hora_inicio="8:00 a.m" hora_final="4:00 p.m" tiempo="8" precio="140.000"></Card>
                </div>
            </section>
            <Footer />

        </>
    )
}
export default Precio;