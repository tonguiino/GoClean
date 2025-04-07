import "./Card.scss"
import { BsFillHouseHeartFill } from "react-icons/bs";
import { PiBathtubFill } from "react-icons/pi";
import { FaBoxOpen } from "react-icons/fa";
import { FaBucket } from "react-icons/fa6";




const Card = ({titulo,hora_inicio,hora_final,tiempo,precio}) => {

    return (
        <div className="card-container">
            <h2 className="title-card">{titulo}</h2>
            <p>De {hora_inicio} a {hora_final}</p>
            <p>{tiempo} horas de limpieza</p>
            <h3>${precio}</h3>
            <ul>
                <li><BsFillHouseHeartFill /> Limpieza de áreas principales</li>
                <li><PiBathtubFill /> Baños y cocina incluidos</li>
                <li><FaBoxOpen /> Organización de objetos y superficies</li>
                <li><FaBucket /> Barrido y trapeado en todas las áreas asignadas</li>
            </ul>
            <a className="button-card" href="#">Elegir plan</a>
        </div>
    )
}

export default Card;