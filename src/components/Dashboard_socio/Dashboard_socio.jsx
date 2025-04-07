import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Dashboard_Socio.scss";

const DashboardSocio = () => {
  const [servicios, setServicios] = useState([]);
  const [calificaciones, setCalificaciones] = useState([]);
  const [facturas, setFacturas] = useState([]);
  const [solicitudes, setSolicitudes] = useState([]); // Nueva variable de estado para solicitudes
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("usuario");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUsuario(parsedUser);
      fetchData(parsedUser.id);
    }
  }, []);

  const fetchData = async (userId) => {
    try {
      const [servRes, caliRes, factRes, solicRes] = await Promise.all([
        axios.get(`http://127.0.0.1:8000/api/servicios/socio/${userId}`),
        axios.get(`http://127.0.0.1:8000/api/calificaciones/socio/${userId}`),
        axios.get(`http://127.0.0.1:8000/api/facturas/socio/${userId}`),
        axios.get(`http://127.0.0.1:8000/api/solicitudes/socio/${userId}`), // Nuevo endpoint para solicitudes
      ]);

      setServicios(servRes.data);
      setCalificaciones(caliRes.data);
      setFacturas(factRes.data);
      setSolicitudes(solicRes.data); // Guardar solicitudes
    } catch (error) {
      console.error("Error al cargar los datos del socio:", error);
    }
  };

  const calcularPromedio = () => {
    if (calificaciones.length === 0) return 0;
    const total = calificaciones.reduce((sum, cal) => sum + cal.puntaje, 0);
    return (total / calificaciones.length).toFixed(1);
  };

  const renderEstrellas = () => {
    const promedio = Math.round(calcularPromedio());
    return "★".repeat(promedio) + "☆".repeat(5 - promedio);
  };

  const handleLogout = () => {
    localStorage.removeItem("usuario");
    navigate("/socio");
  };

  // Función para aceptar una solicitud
  const handleAceptar = async (solicitudId) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/solicitudes/${solicitudId}/aceptar`);
      setSolicitudes((prev) => prev.filter((sol) => sol.id !== solicitudId)); // Eliminar solicitud aceptada
    } catch (error) {
      console.error("Error al aceptar la solicitud:", error);
    }
  };

  // Función para rechazar una solicitud
  const handleRechazar = async (solicitudId) => {
    try {
      await axios.put(`http://127.0.0.1:8000/api/solicitudes/${solicitudId}/rechazar`);
      setSolicitudes((prev) => prev.filter((sol) => sol.id !== solicitudId)); // Eliminar solicitud rechazada
    } catch (error) {
      console.error("Error al rechazar la solicitud:", error);
    }
  };

  return (
    <div className="dashboard-socio">
      <aside className="sidebar">
        <h2>GoClean</h2>
        <ul>
          <li>Perfil</li>
          <li>Solicitudes Recientes</li>
          <li>Gestión de Reservas Activas</li>
          <li>Historial Detallado de Servicios</li>
          <li>Documentación Legal</li>
        </ul>
        <button className="logout-button" onClick={handleLogout}>
          Cerrar Sesión
        </button>
      </aside>

      <main className="main-content">
        <div className="perfil-header">
          <img
            src="https://i.pravatar.cc/150?img=47"
            alt="Foto del socio"
            className="foto-perfil"
          />
          <h2>{usuario?.nombre || "Cargando nombre..."}</h2>
          <p className="rol">Prestador de servicios de limpieza a domicilio</p>
          <p className="experiencia">
            5 años de experiencia, calificación promedio de {calcularPromedio()}
          </p>
          <div className="botones">
            <button
              className="btn-editar"
              onClick={() => navigate("/editar-perfil")}
            >
              Editar
            </button>
            <button className="btn-preview">Vista previa</button>
          </div>
        </div>

        {/* Nueva sección de solicitudes recientes */}
        <section className="solicitudes">
          <h3>Solicitudes Recientes</h3>
          {solicitudes.length === 0 ? (
            <p>No tienes solicitudes pendientes.</p>
          ) : (
            solicitudes.map((solicitud) => (
              <div className="item-solicitud" key={solicitud.id}>
                <p className="titulo">Servicio: {solicitud.tipo_servicio}</p>
                <p className="descripcion">Descripción: {solicitud.descripcion}</p>
                <p className="fecha">Fecha: {solicitud.fecha}</p>
                <div className="acciones">
                  <button
                    className="btn-aceptar"
                    onClick={() => handleAceptar(solicitud.id)}
                  >
                    Aceptar
                  </button>
                  <button
                    className="btn-rechazar"
                    onClick={() => handleRechazar(solicitud.id)}
                  >
                    Rechazar
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="descripcion">
          <h3>Descripción</h3>
          <p>
            Me encanta ayudar a las personas a mantener sus hogares limpios y
            ordenados. Soy muy detallista y eficiente. Siempre trato a mis
            clientes como si fueran mi familia.
          </p>
        </section>

        <section className="experiencia">
          <h3>Servicios realizados</h3>
          {servicios.length === 0 ? (
            <p>No hay servicios registrados.</p>
          ) : (
            servicios.map((serv) => (
              <div className="item-exp" key={serv.id}>
                <img
                  src="https://i.pravatar.cc/100?img=12"
                  alt="foto experiencia"
                />
                <div>
                  <p className="titulo">{serv.tipo_servicio}</p>
                  <p className="fecha">{serv.fecha}</p>
                  <p className="descripcion">{serv.descripcion}</p>
                </div>
              </div>
            ))
          )}
        </section>

        <section className="calificaciones">
          <h3>Calificaciones</h3>
          <div className="puntaje-principal">
            <span className="promedio">{calcularPromedio()}</span>
            <span className="estrellas">{renderEstrellas()}</span>
            <span className="total-reviews">
              {calificaciones.length} reviews
            </span>
          </div>
          <div className="barra-calificaciones">
            {[5, 4, 3, 2, 1].map((estrella) => {
              const total = calificaciones.length;
              const cantidad = calificaciones.filter(
                (c) => c.puntaje === estrella
              ).length;
              const porcentaje = total ? (cantidad / total) * 100 : 0;
              return (
                <div className="linea" key={estrella}>
                  <span>{estrella} ★</span>
                  <div className="barra">
                    <div
                      className="relleno"
                      style={{ width: `${porcentaje}%` }}
                    ></div>
                  </div>
                  <span>{porcentaje.toFixed(0)}%</span>
                </div>
              );
            })}
          </div>
        </section>

        <section className="facturas">
          <h3>Facturas</h3>
          {facturas.length === 0 ? (
            <p>No hay facturas disponibles.</p>
          ) : (
            <ul>
              {facturas.map((fact) => (
                <li key={fact.id}>
                  Monto: ${fact.monto} - Estado: {fact.estado}
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
    </div>
  );
};

export default DashboardSocio;
