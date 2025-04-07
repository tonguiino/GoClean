import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Dashboard_Usuario.scss";
import HandleAgendar from "./HandleAgendar"; // Asegúrate de que la ruta sea correcta

const DashboardUsuario = () => {
  const [usuario, setUsuario] = useState(null);
  const [serviciosDisponibles, setServiciosDisponibles] = useState([
    { tipo: "Estándar", precio: 300, img: "https://i.pravatar.cc/50?img=10" },
    { tipo: "Premium", precio: 400, img: "https://i.pravatar.cc/50?img=11" },
    { tipo: "Económico", precio: 200, img: "https://i.pravatar.cc/50?img=12" },
  ]);
  const [direccion, setDireccion] = useState("Calle 123 # 456");
  const [tipoSeleccionado, setTipoSeleccionado] = useState("Estándar");
  const [fecha, setFecha] = useState(new Date().toISOString().split("T")[0]); // Para la fecha
  const [hora, setHora] = useState("12:00"); // Para la hora
  const [agendado, setAgendado] = useState(false); // Para el feedback del botón
  const [error, setError] = useState(""); // Para mostrar mensaje de error

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      setUsuario(JSON.parse(storedUser));
    }
  }, []);

  const handleAgendar = async () => {
    if (!usuario || !usuario.id) {
      alert("Debes iniciar sesión para agendar un servicio.");
      return;
    }

    try {
      const nuevoServicio = {
        usuario_id: usuario.id,  // Asegúrate de que esto esté bien
        tipo_servicio: tipoSeleccionado,
        direccion,
        fecha: fecha,
        hora: hora,
        descripcion: "Limpieza programada desde el dashboard",
      };

      const response = await axios.post("http://127.0.0.1:8000/api/agendar", nuevoServicio);
      if (response.status === 201) {
        console.log("Respuesta del servidor:", response.data);
        setAgendado(true);
        setTimeout(() => setAgendado(false), 3000); // Feedback visual por 3 segundos
      } else {
        setError("❌ Ocurrió un error al agendar el servicio.");
      }
    } catch (err) {
      console.error("Error al agendar servicio:", err);
      setError("❌ Ocurrió un error al agendar el servicio.");
    }
  };

  return (
    <div className="dashboard-usuario">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li className="activo">Dashboard</li>
          <li>Agendar Servicio</li>
          <li>Historial</li>
          <li>Perfil</li>
          <li>Calificación</li>
        </ul>

        <div className="progreso">
          <p>Tu perfil está completo</p>
          <div className="barra">
            <div className="relleno" style={{ width: "60%" }}></div>
          </div>
          <p className="porcentaje">60%</p>
          <button className="continuar">Continuar</button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="contenido">
        <h1>¡Hola, {usuario?.nombre || "Usuario"}!</h1>

        <section className="agenda">
          <h2>Agenda una limpieza</h2>

          <ul className="tipos-servicio">
            {serviciosDisponibles.map((servicio, i) => (
              <li
                key={i}
                onClick={() => setTipoSeleccionado(servicio.tipo)}
                style={{
                  border:
                    tipoSeleccionado === servicio.tipo
                      ? "2px solid #00bfff"
                      : "1px solid #ccc",
                  cursor: "pointer", // Hacerlo más interactivo
                }}
              >
                <img src={servicio.img} alt={servicio.tipo} />
                <div className="info-servicio">
                  <span>{servicio.tipo}</span>
                  <span className="precio">${servicio.precio}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="detalle-agenda">
            <div className="ubicacion">
              <span role="img" aria-label="ubicación">📍</span>
              <div>
                <input
                  type="text"
                  value={direccion}
                  onChange={(e) => setDireccion(e.target.value)}
                  placeholder="Ingresa tu dirección"
                />
              </div>
            </div>

            {/* Fecha y Hora */}
            <div className="fecha-hora">
              <input
                type="date"
                value={fecha}
                onChange={(e) => setFecha(e.target.value)}
              />
              <input
                type="time"
                value={hora}
                onChange={(e) => setHora(e.target.value)}
              />
            </div>

            {/* Feedback visual del botón */}
            <button
              className="btn-agendar"
              onClick={handleAgendar}
              disabled={agendado} // Deshabilitar botón después de agendar
            >
              {agendado ? "Servicio Agendado" : "Agendar"}
            </button>

            {/* Mostrar mensaje de error */}
            {error && <p className="error">{error}</p>}
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardUsuario;
