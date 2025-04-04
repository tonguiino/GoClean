import Footer from "../../components/footer/Footer";
import Menu from "../../components/header/menu";
import "./Register.scss"

const Register = () => {


    return (
        <>
            <Menu />
            <section className="register-container">
                <form className="register-form" action="">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" placeholder="nombre" />
                    <label htmlFor="mail">Correo electronico</label>
                    <input type="email" />
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" />
                    <label htmlFor="direccion">Direccion</label>
                    <input type="text" />
                    <label htmlFor="contraseña">Contraseña</label>
                    <input type="password" />
                    <label htmlFor="confirmar-contraseña">Confirmar contraseña</label>
                    <input type="password" />
                    <label htmlFor="sexo">sexo</label>
                    <select>
                        <option value="h">Hombre</option>
                        <option value="m">Mujer</option>
                        <option value="o">otro</option>
                    </select>
                    <label htmlFor="rol">registrate como:</label>
                    <select name="" id="">
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