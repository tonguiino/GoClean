import { useForm } from "react-hook-form";
import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Register.scss"
import imgRegister from "../../assets/img/register-img.png"


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
                <h2 className="form-title">Crea tu cuenta en GoClean</h2>
                <p className="form-subtitle">  Únete a nuestra comunidad y comienza a disfrutar de un servicio de limpieza confiable, rápido y a tu medida.
                    Ya sea que estés buscando ayuda para tu hogar o deseas ofrecer tus servicios como profesional,
                    este es el primer paso. Completa los datos a continuación para crear tu cuenta.</p>




                <div className="img-form-content">
                    <img src={imgRegister} alt="" className="img-register" />
                    <form className="register-form" onSubmit={onSubmit}>
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" placeholder="Santiago Tonguino" {...register('nombre', { required: true, minLength: 2, maxLength: 50, validate: value => value.trim() !== '' || 'No puede estar vacio' })} />
                        {errors.nombre?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                        {errors.nombre?.type === 'minLength' && <span className="span-error">{'Debe tener mas de 2 caracteres'} </span>}
                        {errors.nombre?.type === 'maxLength' && <span className="span-error">{'Debe tener menos de 50 caracteres'} </span>}
                        <label htmlFor="email">Correo electronico</label>
                        <input type="email" placeholder="santiagogoclean@ejemplo.com" {...register('email', { required: true })} />
                        {errors.email?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                        <label htmlFor="telefono">Telefono</label>
                        <input type="text" placeholder="3001234567" {...register('telefono', { required: true })} />
                        {errors.telefono?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                        <label htmlFor="direccion">Direccion</label>
                        <input type="text" placeholder="cr 20 # 20 b 20"{...register('direccion', { required: true, max: 100, message: 'Direccion no valida' })} />
                        {errors.direccion?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" placeholder="*********" {...register('contraseña', { required: true })} />
                        {errors.contraseña?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}
                        <label htmlFor="confirmarContraseña">Confirmar contraseña</label>
                        <input type="password" placeholder="*********" {...register('confirmar-contraseña', { required: true })} />
                        {errors.confirmarContraseña?.type === 'required' && <span className="span-error">{'Debes comletar el campo'}</span>}

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
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Register;