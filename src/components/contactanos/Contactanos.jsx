import React from 'react';
import './Contactanos.scss';
import banner from '../../assets/img/atencionCliente.jpg';

const Contactanos = () => {
    return (
        <section className="contactanos">
            <div className="contactanos-content">
                <div className="image-container">
                    <img src={banner} alt="Atención al cliente GoClean" />
                </div>
                <div className="form-container">
                    <h2>¿Necesitas ayuda? ¡Contáctanos!</h2>
                    <p>Estamos aquí para responder a tus preguntas y ofrecerte el mejor soporte posible. Completa el formulario a continuación y nos pondremos en contacto contigo lo antes posible.</p>

                    <form>
                        <div className="form-group">
                            <label htmlFor="nombre">Nombre:</label>
                            <input type="text" id="nombre" name="nombre" placeholder="Tu nombre" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="email" id="email" name="email" placeholder="Tu email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensaje">Mensaje:</label>
                            <textarea id="mensaje" name="mensaje" placeholder="Escribe tu mensaje aquí"></textarea>
                        </div>
                        <button type="submit">Enviar mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contactanos;
