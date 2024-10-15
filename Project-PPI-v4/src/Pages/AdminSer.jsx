import { useEffect, useState } from 'react'

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
                    {servicios.map(servicio => (
                        <tr key={servicio.id}>
                            <td>{servicio.nombre}</td>
                            <td>{servicio.descripcion}</td>
                            <td>{servicio.duracion}</td>
                            <td>{servicio.precio}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AdminSer