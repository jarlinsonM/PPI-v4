import { useEffect, useState } from 'react'

const Citas = () => {
  const [citas, setCitas] = useState([])


  useEffect(() => {
    const getAllCitas = async () => {
      try {
        const response = await fetch('http://localhost:3000/servicios/citas')
        const data = await response.json()
        setCitas(data) // Guardar los usuarios en el estado
      } catch (error) {
        console.log(error)
      }
    };
    getAllCitas();

  }, [])
  return (
    <table className='table table-spriped table-hover'>
      <thead>
        <tr>
          <th>Documento</th>
          <th>Servicio</th>
          <th>Fecha</th>
          <th>Hora</th>
          <th>Estado</th>
        </tr>
      </thead>
      <tbody>
        {citas.map(cita => (
          <tr key={cita.id_cita}>
            <td>{cita.numeroDocumento}</td>
            <td>{cita.Id_servicio}</td>
            <td>{cita.fecha}</td>
            <td>{cita.hora}</td>
            <td>{cita.esstado}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Citas
