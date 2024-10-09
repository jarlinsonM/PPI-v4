import icono from '../ImagenesSpa/Logo.png'
import '../Css/Login.css'
const Register = () => {
  return (
    <div className="container row align-items-center">
      <div className="col-6">
        <h1 >Biebenido A NatrueBodySpace</h1>
      </div>
      <div className="card col-6 centrarElm">
        <img src={icono} alt="" className="logoLogin" />
        <div className="mb-3 form">
          <label for="Nombre" class="form-label">Nombre</label>
          <input type="text" className="form-control" id="Nombre" />
        </div>
        <div className="mb-3 form">
          <label for="Apellidos" className="form-label">Apellidos</label>
          <input type="text" className="form-control" id="Apellido" />
        </div>
        <div className="mb-3 startelem">
          <select name="TipoDocumeto" id="Documento">
            <option value="Ti">Tarjeta de identidad</option>
            <option value="cc">Cedula Ciudadnia</option>
            <option value="ce">Cedula Extranjera</option>
            <option value="p">Pasaporte</option>
          </select>
        </div>
        <div className="mb-3 form">
          <input type="number" className="form-control" id="Ndocument" />
        </div>
        <div className="mb-3 form">
          <label for="edad" className="form-label">Edad</label>
          <input type="number" className="form-control" id="edad" />
        </div>
        <div className="mb-3 form">
          <label for="Correo" className="form-label">Correo Electronico</label>
          <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
        </div>
        <div className="mb-3 form">
          <label for="password" className="form-label">Contraseña</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3 form">
          <label for="password" className="form-label">Confirmar Contraseña</label>
          <input type="password" className="form-control" id="password" />
        </div>
        <div className="mb-3">
          <input type="button" className="btn btn-success" value={"Register"} id="BotonResgtro" />
        </div>
      </div>
    </div>

  )
}

export default Register
