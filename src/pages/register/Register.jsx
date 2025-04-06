import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Register.scss"

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    console.log(errors)
    const onSubmit = handleSubmit((data) => {
        console.log(data)
    })

    return (
        <>
            <Menu />
            <section className="register-container">
                <form className="register-form" onSubmit={onSubmit}>
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="nombre" {...register('nombre', { required: true, message: 'es un campo requerido', minLength: 2, maxLength: 50 })} />
                    {errors.nombre?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                    {errors.nombre?.type === 'minLength' && <span className="span-error">{'Debe tener mas de 2 caracteres'} </span>}
                    {errors.nombre?.type === 'maxLength' && <span className="span-error">{'Debe tener menos de 50 caracteres'} </span>}
                    <label htmlFor="email">Correo electronico</label>
                    <input type="email" {...register('email', { required: true })} />
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" {...register('telefono', { required: true })} />
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" {...register('direccion', { required: true, max: 100, message: 'Direccion no valida' })} />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" {...register('contraseña', { required: true })} />
                    <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
                    <input type="password" {...register('confirmar-contraseña', { required: true })} />
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