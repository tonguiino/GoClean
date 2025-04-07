import axios from "axios";

const handleAgendar = async (usuario, tipoSeleccionado, direccion, fecha, hora, setAgendado, setError) => {
    if (!usuario) {
        alert("Debes iniciar sesión para agendar un servicio.");
        return;
    }

    try {
        const nuevoServicio = {
            usuario_id: usuario.id, // Asegúrate de usar 'usuario_id' aquí
            tipo_servicio: tipoSeleccionado,
            direccion,
            fecha: fecha,
            hora: hora,
            descripcion: "Limpieza programada desde el dashboard", // Descripción predeterminada
        };

        // Hacer el POST al backend para el dashboard_usuario
        const responseUsuario = await axios.post("http://127.0.0.1:8000/api/agendar", nuevoServicio);
        console.log("Servicio agendado en dashboard_usuario:", responseUsuario.data);

        // Hacer el POST al backend para el dashboard_socio
        const responseSocio = await axios.post("http://127.0.0.1:8000/api/dashboard_socio/agendar", nuevoServicio);
        console.log("Servicio agendado en dashboard_socio:", responseSocio.data);

        setAgendado(true);
        setTimeout(() => setAgendado(false), 3000); // Feedback visual por 3 segundos
    } catch (err) {
        console.error("Error al agendar servicio:", err);
        setError("❌ Ocurrió un error al agendar el servicio.");
    }
};

export default handleAgendar;