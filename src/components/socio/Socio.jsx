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
                    <h2>¿Listo para ser tu propio jefe?</h2>
                    <p>Conviértete en un profesional de limpieza independiente con GoClean. Elige tus propios horarios, administra tus tarifas y acepta solo los trabajos que se ajusten a tu vida.</p>
                    <a href="/registro" className="btn">Regístrate como profesional de limpieza</a>

                    <div className="form-container">
                        <h3>¿Ya eres un profesional? Inicia sesión</h3>
                        <form>
                            <input type="email" placeholder="Correo electrónico" required />
                            <input type="password" placeholder="Contraseña" required />
                            <button type="submit">Iniciar sesión</button>
                            <a href="#">¿Olvidaste tu contraseña?</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    </>
    );
};

export default Socio;

