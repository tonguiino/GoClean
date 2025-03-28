import Menu from "../../components/header/menu"
import banner from "../../assets/img/Se_Un_Socio.jpg"
import "./Home.scss"


const Home = () => {
    return (
        <>
            <Menu />
            <section>
                <div>
                    <img src={banner} className="img-banner" alt="invitacion a ser socio" />
                </div>

            </section>
        </>

    )
}
export default Home
