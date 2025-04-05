import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Register.scss"

const Register = () => {
    const {register,handleSubmit } = useForm();

    return (
        <>
            <Menu />
            <section className="register-container">
                <form className="register-form" action="">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="nombre" {...register('nombre')}/>
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" {...register('email')}/>
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" {...register('telefono')} />
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" {...register('direccion')} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" {...register('contraseña')} />
                    <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
                    <input type="password" {...register('confirmar-contraseña')} />
                    <label htmlFor="sexo">sexo</label>
                    <select {...register('sexo')}>
                        <option value="h">Hombre</option>
                        <option value="m">Mujer</option>
                        <option value="o">otro</option>
                    </select>
                    <label htmlFor="rol">registrate como:</label>
                    <select {...register('rol')}>
                        <option value="u">Usuario</option>
                        <option value="s">Socio</option>
                    </select>
                    <button className="submit">Continuar</button>
                </form>
            </section>
            <Footer />
        </>
    )
}
export default Register;