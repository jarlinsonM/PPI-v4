import { Link } from "react-router-dom"
import icono from '../../ImagenesSpa/Logo.png'
import iconoPerfil from '../../ImagenesSpa/icono_perfil.png'
import '../../Css/Navegacion.css'

const Navegacion = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-bran " to="/"> <img src={icono} alt="" className="logos" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Principal</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Servicios">Servicios</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Nosotros">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Servicios/Agenda">Agenda</Link>
                            </li>

                        </ul>
                    </div>

                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <Link className="navbar-bran d-flex" to="#"><img src={iconoPerfil} className="logos " alt="" /></Link>
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="/Login">Login</a></li>
                            <li><a className="dropdown-item" href="/register">Register</a></li>
                            <li><a className="dropdown-item" href="#">Perfil</a></li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}

export default Navegacion
