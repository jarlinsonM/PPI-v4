import { Link } from "react-router-dom"
import icono from '../ImagenesSpa/Logo.png'
import ImgLogin from '../ImagenesSpa/camaMasaje.png'
import '../Css/servicios.css'
import '../Css/Login.css'

const Login = () => {
  return (
    <div className="container row align-items-center ">
      <div className="col-6">
      <h1>Bienvenido A NatrueBodySpace</h1>
      </div>
      <div className="card separacion col-6">
        <img src={icono} alt=""  className="logoLogin"/>
        <div className="card-body">
          <label htmlFor="Usuario" id="usuario">Usuario</label>
          <input type="text" id="usuario" />
        </div>
        <div>
          <label htmlFor="passWord" id="password">PassWord</label>
          <input type="password" id="password" />
        </div>
        <div className="text-center">
          <Link className="botonRegister " to="/agenda">
            <input type="button" className='btn btn-success btnSeparacion' value={"Login"} id='botonLogin' />
          </Link>
          <Link className="botonRegister " to="/register">
            <input type="button" className='btn btn-success btnSeparacion' value={"Register"} id='botonRegister' />
          </Link>
        </div>
      </div>

    </div>
  )
}

export default Login
