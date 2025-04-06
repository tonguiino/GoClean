import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Register.scss";

const Register = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/usuarios', {
        nombre: data.nombre,
        correo: data.email,
        telefono: data.telefono,
        direccion: data.direccion,
        contrasena: data.contrasena,
        contrasena_confirmation: data.contrasena_confirmation,
        sexo: data.sexo === 'h' ? 'Masculino' : data.sexo === 'm' ? 'Femenino' : 'Otro',
        rol: data.rol === 'u' ? 'Cliente' : 'Socio',
        verificado: false
      });

      console.log('Registro exitoso', response.data);
      alert('Registro exitoso');
      navigate('/login');
    } catch (error) {
      console.error('Error al registrar:', error.response?.data || error.message);
      alert('Error al registrar');
    }
  };

  return (
    <>
      <Menu />
      <section className="register-container">
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nombre">Nombre</label>
          <input type="text" placeholder="nombre" {...register('nombre', { required: true })} />
          {errors.nombre && <span className="span-error">Nombre es requerido</span>}

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" {...register('email', { required: true })} />
          {errors.email && <span className="span-error">Correo es requerido</span>}

          <label htmlFor="telefono">Teléfono</label>
          <input type="text" {...register('telefono', { required: true })} />
          {errors.telefono && <span className="span-error">Teléfono es requerido</span>}

          <label htmlFor="direccion">Dirección</label>
          <input type="text" {...register('direccion', { required: true })} />
          {errors.direccion && <span className="span-error">Dirección es requerida</span>}

          <label htmlFor="contrasena">Contraseña</label>
          <input type="password" {...register('contrasena', { required: true })} />
          {errors.contrasena && <span className="span-error">Contraseña es requerida</span>}

          <label htmlFor="contrasena_confirmation">Confirmar contraseña</label>
          <input
            type="password"
            {...register('contrasena_confirmation', {
              required: true,
              validate: (value) => value === watch('contrasena') || "Las contraseñas no coinciden"
            })}
          />
          {errors.contrasena_confirmation && <span className="span-error">{errors.contrasena_confirmation.message}</span>}

          <label htmlFor="sexo">Sexo</label>
          <select {...register('sexo')}>
            <option value="h">Hombre</option>
            <option value="m">Mujer</option>
            <option value="o">Otro</option>
          </select>

          <label htmlFor="rol">Regístrate como:</label>
          <select {...register('rol')}>
            <option value="u">Usuario</option>
            <option value="s">Socio</option>
          </select>

          <button className="submit">Continuar</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Register;
