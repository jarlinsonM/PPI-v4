import { Link } from "react-router-dom"
import icono from '../ImagenesSpa/Logo.png'
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../Css/servicios.css'
import '../Css/Login.css'
//import { LoginUser } from '../Services/RegisterServer.js'

const Login = ({onLogin}) => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [success, setSuccess]= useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const loginData = {userName,password}

    try {
      const response = await fetch('http://localhost:3000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()

      if (data.success) {
        console.log("Login Exitoso")
        onLogin()
        navigate('/Principal')
      }else{
        console.log("Error de autenticacion: ", data.message)
      }
    } catch (error) {
      console.error('Error al iniciar sesión:', error)
      setError('Sea producido un error, por favor internar nuevamente')
    }
  }
  
  const validateForm = () =>{
    return userName.length > 0 && password.length > 0
  }

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
              <input type="text" className="form-control" id="userName" value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="mb-3 form">
              <label htmlFor="password" className="form-label">Contraseña</label>
              <input type="password" className="form-control" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              {error && <p className="text-danger">{error}</p>}
              {success && <p className="text-success">{success}</p>}
              <input type="submit" className='btn btn-success btnSeparacion' value="Login" id='botonLogin' disabled={!validateForm()}/>

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