import { Link } from "react-router-dom"
import icono from '../ImagenesSpa/Logo.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../Css/servicios.css'
import '../Css/Login.css'
import { LoginUser } from '../Services/RegisterServer.js'

const Login = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(''); // Para mostrar el mensaje de éxito
  const navigate = useNavigate(); // Para redirigir al usuario después del login

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Limpiar error antes de hacer la solicitud
    setSuccess(''); // Limpiar mensaje de éxito

    try {
      const response = await LoginUser(formData);
      setSuccess('Login exitoso'); // Establece el mensaje de éxito
      console.log('Login exitoso:', response);
      navigate("/servicios"); // Redirigir al dashboard o página de inicio después del login
    } catch (error) {
      setError('Error al iniciar sesión'); // Muestra el mensaje de error si falla
      console.error('Error al iniciar sesión:', error);
    }
  };
  
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
          <img src={icono} alt="" className="logoLogin" />
          <div className="card-body">
            <div className="mb-3 form">
              <label htmlFor="userName" className="form-label">UserName</label>
              <input type="text" className="form-control" id="userName" value={formData.userName} onChange={handleChange} />
            </div>
            <div className="mb-3 form">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
            </div>
            <div>
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
              <input type="submit" className='btn btn-success btnSeparacion' value={"Login"} id='botonLogin' />

              <Link className="botonRegister " to="/register">
                <input type="button" className='btn btn-success btnSeparacion' value={"Register"} id='botonRegister' />
              </Link>
            </div>

          </div>
        </div>
      </form>
    </div>
  )
}
export default Login
