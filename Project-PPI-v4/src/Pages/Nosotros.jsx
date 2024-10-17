import Carousel from "../Carousel/Carousel"
import '../Css/Nosotros.css'


const Nosotros = () => {
  return (

    <div className= 'container'>
      <Carousel />
      <div className=" col-8 mx-auto">
        <h1 className="text-center">Nosotros</h1>
        <p className="p">
          NaturaBodySpace es un establecimiento de ocio y salud que ofrece ciertos tipos de tratamientos,
          sistemas de relajación, terapias que ayudan a mejorar la salud y brindar al cuerpo relajación,
          tranquilidad, e inclusocon ciertas técnicas se puede ayudar al cuerpo en otros niveles para eliminar
          dolencias y padecimientos.
          Entre otros de los servicios que se pueden tomar en NaturaBodySpace son los
          tratamientos estéticos o de belleza que tienen diferentes objetivos a cumplir. En primera instancia
          pretenden dar un mejor aspecto estético, bien sea por el tratamiento de la piel, la eliminación de
          arrugas, depilaciones, exfoliaciones, mascarillas
        </p>
      </div>
    </div>




  )
}

export default Nosotros
