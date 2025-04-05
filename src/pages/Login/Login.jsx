import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Login.scss";
import imagenlogin from "../../assets/img/imagenlogin.png";

const Login = () => {
    return (
        <>
        <Menu />
        <div className="login-container">
            {/* Espacio para la imagen */}
            <div className="image-section">
                 <img src={imagenlogin} alt="imagen login" />
            </div>

            {/* Formulario */}
            <div className="login-form">
                <h1>¡Bienvenido a GoClean!</h1>
                <h2>Inicia sesión para programar tu próxima limpieza</h2>

                <form>
                    <div className="input-group">
                        <input type="email" placeholder="Correo electrónico" className="input-field" />
                    </div>
                    <div className="input-group">
                        <input type="password" placeholder="Contraseña" className="input-field" />
                    </div>
                    <button type="submit" className="button-primary">Iniciar sesión</button>
                </form>

                <div className="links">
                    <p><a href="/Olvidaste_tu_contraseña">¿Olvidaste tu contraseña?</a></p>
                    <p><a href="/">¿Eres nuevo en GoClean?</a></p>
                </div>

                <button className="button-secondary">Regístrate y agenda tu limpieza</button>
            </div>
        </div>       
        <Footer />
        </>
    );
}

export default Login;
