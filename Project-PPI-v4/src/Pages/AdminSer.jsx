import { useEffect, useState } from 'react'
import { ServiciosAdd } from '../Services/ServiciosServer.js'

const AdminSer = () => {
    const [servicios, setServicios] = useState([])

    useEffect(() => {
        const getAllServicios = async () => {
            try {
                const response = await fetch('http://localhost:3000/Servicios')
                const data = await response.json()
                setServicios(data) // Guardar los servicios en el estado
            } catch (error) {
                console.log(error)
            }
        }
        getAllServicios()
    }, [])

    const [formDataS, setFormDataS] = useState({
        nombre: '',
        Descripcion: '',
        Duracion: '',
        Precio: '',

    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');



    const handleSubmit = async (e) => {
        e.preventDefault(); // Evita que la página se recargue
    
        try {
          // Llamada a la función que hace la petición al servidor
          const response = await ServiciosAdd(formDataS);
          setSuccess('Servicio agregado exitosamente.');
          setError(''); // Limpiar error si es exitoso
        } catch (err) {
          setError('Error al agregar el servicio.');
          setSuccess(''); // Limpiar éxito si ocurre error
        }
      }

    const handleChange = (e) => {
        const { id, value } = e.target; // El ID corresponde a cada input
        setFormDataS((prevState) => ({
          ...prevState,
          [id]: value, // Actualiza el campo específico en el estado
        }));
      };
    return (
        <div className='container'>
            <h1>Servicios Ofrecidos</h1>
            <table className='table table-spriped table-hover'>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Duracion</th>
                        <th>Precio</th>
                    </tr>
                </thead>
                <tbody>
                    {servicios.map(servicio =>(
                        <tr key={servicio.ID_servicio}>
                            <td>{servicio.nombreServicio}</td>
                            <td>{servicio.Descripcion}</td>
                            <td>{servicio.duracion}</td>
                            <td>{servicio.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <h1>Agregar Servicio</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre Del Servicio</label>
                    <input type="text" className="form-control" id="nombre" value={formDataS.nombre} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Descripcion" className="form-label">Descripcion</label>
                    <textarea className="form-control" id="Descripcion" rows="3" value={formDataS.Descripcion} onChange={handleChange}></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="Duracion" className="form-label">Duracion</label>
                    <input type="text" className="form-control" id="Duracion" value={formDataS.Duracion} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Precio" className="form-label">Precio</label>
                    <input type="number" className="form-control" id="Precio" value={formDataS.Precio} onChange={handleChange} />
                </div>
                <div>
                {error && <p className="text-danger">{error}</p>}
                {success && <p className="text-success">{success}</p>}

                <input type="submit" className="btn btn-success" value="Guardar" id='saveServicio'/>
                </div>
                
            </form>

        </div>




    )
}

export default AdminSer