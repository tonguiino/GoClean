import "./Card.scss"
const Card = ({titulo,hora_inicio,hora_final,tiempo,precio}) => {

    return (
        <div className="card-container">
            <h2 className="title-card">{titulo}</h2>
            <p>De {hora_inicio} a {hora_final}</p>
            <p>{tiempo} horas de limpieza</p>
            <h3>${precio}</h3>
            <ul>
                <li>lavado enano</li>
            </ul>
            <a className="button-card" href="#">Elegir plan</a>
        </div>
    )
}

export default Card;