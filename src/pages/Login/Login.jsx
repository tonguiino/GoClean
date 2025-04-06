import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Login.scss";
import imagenlogin from "../../assets/img/imagenlogin.png";

const Login = () => {
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        correo,
        contrasena
      });

      console.log("Login exitoso", response.data);
      alert("¡Inicio de sesión exitoso!");
      // Redirige, por ejemplo, a la página principal
      navigate("/");
    } catch (error) {
      console.error("Error al iniciar sesión:", error.response?.data || error.message);
      alert("Credenciales incorrectas 😢");
    }
  };

  return (
    <>
      <Menu />
      <div className="login-container">
        <div className="image-section">
          <img src={imagenlogin} alt="imagen login" />
        </div>

        <div className="login-form">
          <h1>¡Bienvenido a GoClean!</h1>
          <h2>Inicia sesión para programar tu próxima limpieza</h2>

          <form onSubmit={handleLogin}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="input-field"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="input-field"
                value={contrasena}
                onChange={(e) => setContrasena(e.target.value)}
              />
            </div>
            <button type="submit" className="button-primary">Iniciar sesión</button>
          </form>

          <div className="links">
            <p><a href="/Olvidaste_tu_contraseña">¿Olvidaste tu contraseña?</a></p>
            <p><a href="/">¿Eres nuevo en GoClean?</a></p>
          </div>

          <button className="button-secondary" onClick={() => navigate("/register")}>
            Regístrate y agenda tu limpieza
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
