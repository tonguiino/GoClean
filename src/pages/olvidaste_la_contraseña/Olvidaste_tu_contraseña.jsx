import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Olvidaste_tu_contraseña.scss";

const Olvidaste_tu_contraseña = () => {
    return (
        <>
            <Menu />
            <div className="recovery-container">
                <div className="recovery-box">
                    <h2>Recuperar contraseña</h2>
                    <p>Ingrese su correo electrónico para recibir un enlace de restablecimiento de contraseña</p>
                    <form className="recovery-form">
                        <label htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="ejemplo@correo.com"
                            required
                        />
                        <button type="submit">Enviar enlace</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Olvidaste_tu_contraseña;
