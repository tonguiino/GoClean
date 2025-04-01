import React from "react";
import "./Socio.scss"; 
import banner from "../../assets/img/haztesocio.png";
import Menu from "../../components/header/menu";

const Socio = () => {

    return (    
    <>
        <Menu />
        <section className="socio">
            <div className="content">
                <div className="img-container">
                    <img src={banner} alt="Sé un socio GoClean" />
                </div> 
                <div className="text-container">
                    <h2>Conviértete en socio de GoClean</h2>
                    <p>Únete a nuestra comunidad y accede a clientes que buscan servicios de limpieza.</p>
                    <a href="/registro" className="btn">¡Regístrate ahora!</a>
                </div>
            </div>
        </section>
    </>
);
};

export default Socio;
