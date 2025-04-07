import React from "react";
import "./Login.scss";
import imagenlogin from "../../assets/img/imagenlogin.png";
import Menu from "../../components/header/menu";
import Footer from "../../components/footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/login", {
        correo: data.correo,
        contrasena: data.contrasena
      });

      const resData = response.data;
      console.log("Respuesta del servidor:", resData);

      if (resData.status === "ok") {
        alert("Inicio de sesión exitoso 🎉");

        // Guardar usuario localmente
        localStorage.setItem("usuario", JSON.stringify(resData.data));
        localStorage.setItem("rol", resData.data.rol);

        // Redirigir según rol
        if (resData.data.rol === "Socio") {
          navigate("/dashboard_socio");
        } else {
          navigate("/dashboard_usuario");
        }
      } else {
        alert("Credenciales incorrectas");
      }
    } catch (error) {
      console.error("Error en login:", error);
      alert("Error en el inicio de sesión. Revisa tus datos.");
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

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-group">
              <input
                type="email"
                placeholder="Correo electrónico"
                className="input-field"
                {...register("correo")}
                required
              />
            </div>
            <div className="input-group">
              <input
                type="password"
                placeholder="Contraseña"
                className="input-field"
                {...register("contrasena")}
                required
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

