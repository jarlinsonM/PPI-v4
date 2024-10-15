import {useEffect, useState} from 'react'
//import '../Css/AdminUs.css'

const AdminUs = () => {
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        const getAllUser = async () => {
            try {
                const response = await fetch('http://localhost:3000/register')
                const data = await response.json()
                setUsuarios(data) // Guardar los usuarios en el estado
            } catch (error) {
                console.log(error)
            }
        };
        getAllUser()
        
    }, [])
    
  return (
    <div className='container'>
      <h1>Datos de Usuarios</h1>
      <table className='table table-striped table-hover text-center'>
        <thead >
          <tr>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Teléfono</th>
            <th>Direccion</th>
            <th>tipoDocumento</th>
            <th>numeroDocumento</th>
            <th>Edad</th>
            <th>Correo electronico</th>
            <th>userName</th>
            <th>Contraseña</th>
          </tr>
        
        </thead>
        <tbody>
          {usuarios.map(usuario => (
            <tr key={usuario.numeroDocumento}>
              <td>{usuario.nombre}</td>
              <td>{usuario.apellidos}</td>
              <td>{usuario.telefono}</td>
              <td>{usuario.direccion}</td>
              <td>{usuario.tipoDocumento}</td>
              <td>{usuario.numeroDocumento}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.correo}</td>
              <td>{usuario.userName}</td>
              <td>{usuario.passwordus}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default AdminUs