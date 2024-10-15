import icono from '../ImagenesSpa/Logo.png'
import '../Css/Login.css'
import { useState, useEffect } from 'react'
import { RegisterUser } from '../Services/RegisterServer.js'
const Register = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    direccion: '',
    tipoDocumento: '',
    numeroDocumento: '',
    edad: '',
    correo: '',
    userName: '',
    password: '',
    confirmarPassword: '',
  });
  const [error, setError] = useState ('');

  // useEffect(()=>{
  //   fetchRegistro()
  // },[])


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registro = await RegisterUser(formData);
      console.log('Registro exitoso:', registro);
    } catch (error) {
      setError('Error al registrar el usuario');
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
    <div className="container row align-items-center">
      <div className="col-6">
        <h1>Bienvenido A NatrueBodySpace</h1>
      </div>
      <div className="card col-6 centrarElm">
        <img src={icono} alt="" className="logoLogin" />
        <form onSubmit={handleSubmit}>
          <div className="col-md-3 form">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input type="text" className="form-control" id="nombre" value={formData.nombre} onChange={handleChange}/>
          </div>
          <div className="col-md-3 form">
            <label htmlFor="apellidos" className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="apellidos" value={formData.apellidos} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="telefono" className="form-label">Teléfono</label>
            <input type="number" className="form-control" id="telefono" value={formData.telefono} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="direccion" className="form-label">Dirección</label>
            <input type="text" className="form-control" id="direccion" value={formData.direccion} onChange={handleChange} />
          </div>
          <div className="mb-3 startelem">
            <select id="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange}>
              <option value="Ti">Tarjeta de identidad</option>
              <option value="cc">Cédula de Ciudadanía</option>
              <option value="ce">Cédula Extranjera</option>
              <option value="p">Pasaporte</option>
            </select>
          </div>
          <div className="mb-3 form">
            <input type="number" className="form-control" id="numeroDocumento" value={formData.numeroDocumento} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="edad" className="form-label">Edad</label>
            <input type="number" className="form-control" id="edad" value={formData.edad} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="correo" className="form-label">Correo Electrónico</label>
            <input type="email" className="form-control" id="correo" value={formData.correo} onChange={handleChange} placeholder="name@example.com" />
          </div>
          <div className="mb-3 form">
            <label htmlFor="userName" className="form-label">UserName</label>
            <input type="text" className="form-control" id="userName" value={formData.userName} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" value={formData.password} onChange={handleChange} />
          </div>
          <div className="mb-3 form">
            <label htmlFor="confirmarPassword" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="confirmarPassword" value={formData.confirmarPassword} onChange={handleChange} />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" htmlFor="invalidCheck">
                Acepta Términos y condiciones
              </label>
            </div>
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-success" value="Registrarse" id="BotonResgtro" />
          </div>
        </form>
      </div>
    </div>
    /*
      <div className="container row align-items-center">
        <div className="col-6">
          <h1 >Biebenido A NatrueBodySpace</h1>
        </div>
        <div className="card col-6 centrarElm">
          <img src={icono} alt="" className="logoLogin" />
          <form onSubmit={handleSubmit}> 
          <div className="col-md-3 form">
            <label for="Nombre" class="form-label">Nombre</label>
            <input type="text" className="form-control" id="Nombre" />
          </div>
          <div className="col-md-3 form">
            <label for="Apellidos" className="form-label">Apellidos</label>
            <input type="text" className="form-control" id="Apellido" />
          </div>
          <div className="mb-3 form">
            <label for="Tell" className="form-label">Telefono</label>
            <input type="number" className="form-control" id="Tell" />
          </div>
          <div className="mb-3 form">
            <label for="Direecion" className="form-label">Direecion</label>
            <input type="text" className="form-control" id="Direecion" />
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
            <label for="UserName" className="form-label">UserName</label>
            <input type="text" className="form-control" id="UserName" />
          </div>
          <div className="mb-3 form">
            <label for="password" className="form-label">Contraseña</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="mb-3 form">
            <label for="password" className="form-label">Confirmar Contraseña</label>
            <input type="password" className="form-control" id="password" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
              <label className="form-check-label" for="invalidCheck">
                Acepta Terminos Y condiciones
              </label>
              <div className="invalid-feedback">
                Antes de continuar Acepta Terminos Y condiciones
              </div>
            </div>
          </div>
          <div className="mb-3">
            <input type="submit" className="btn btn-success" value={"Registrarse"} id="BotonResgtro" />
          </div>
          </form>
          
        </div>
      </div>
      */
  )
}

export default Register
