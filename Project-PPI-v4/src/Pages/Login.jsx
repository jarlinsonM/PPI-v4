import { Link } from "react-router-dom"
import icono from '../ImagenesSpa/Logo.png'
import { useState } from "react"
import '../Css/servicios.css'
import '../Css/Login.css'
import {LoginUser} from '../Services/RegisterServer.js'
const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });
  const [error, setError] = useState ('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const Log_in = await LoginUser(formData);
      console.log('Login exitoso:', Log_in);
    } catch (error) {
      setError('Error al iniciar sesion');
    }
  }

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <div className="container row align-items-center ">
      <div className="col-6">
      <h1>Bienvenido A NatrueBodySpace</h1>
      </div>
      <form onSubmit={handleSubmit}>
      <div className="card separacion col-6">
        <img src={icono} alt=""  className="logoLogin"/>
        <div className="card-body">
        <div className="mb-3 form">
            <label htmlFor="userName" className="form-label">UserName</label>
            <input type="text" className="form-control" id="userName" value={formData.userName} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <Link className="botonRegister " to="#">
            <input type="submit" className='btn btn-success btnSeparacion' value={"Login"} id='botonLogin' />
          </Link>
          <Link className="botonRegister " to="/register">
            <input type="button" className='btn btn-success btnSeparacion' value={"Register"} id='botonRegister' />
          </Link>
        </div>
      </div>
      </form>
    </div>
  )
}
export default Login
