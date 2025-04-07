import React from "react";
import "./Socio.scss";
import banner from "../../assets/img/haztesocio.png";
import Menu from "../../components/header/menu";
import Footer from "../footer/Footer";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Socio = () => {
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

                // Almacenar token si más adelante se usa
                localStorage.setItem("usuario", JSON.stringify(resData.data));
                localStorage.setItem("rol", resData.data.rol);

                if (resData.data.rol === "Socio") {
                    navigate("/dashboard_socio");
                } else {
                    navigate("/dashboard_cliente");
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input type="email" placeholder="Correo electrónico" {...register("correo")} required />
                                <input type="password" placeholder="Contraseña" {...register("contrasena")} required />
                                <button type="submit">Iniciar sesión</button>
                                <a href="/Olvidaste_tu_contraseña">¿Olvidaste tu contraseña?</a>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Socio;
