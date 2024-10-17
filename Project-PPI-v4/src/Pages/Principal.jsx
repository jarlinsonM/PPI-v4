import ImgInicio from '../ImagenesSpa/principal.png'
import '../Css/Principal.css'
import { Link, NavLink } from 'react-router-dom'
const Principal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 middle ">
          <h1 className='text-center title'>¡Bienvenido a Natura BodySpace</h1>
          <p className='parrafos'>
            En Natura BodySpace, nos dedicamos a ofrecerte una experiencia de relajación y bienestar inigualable.
            Nuestro oasis de serenidad está diseñado para ayudarte a desconectar del ajetreo diario y reconectar
            contigo mismo.
          </p>
          <div>
            <ul className='li'>
              <li>Descubre la belleza interior  exterior con nuestros tratamientos faciales personalizado</li>
              <li>Sumérgete en nuestras piscinas de hidroterapia y disfruta de los beneficios del agua para tu
                cuerpo y mente.</li>
            </ul>
          </div>
        </div>
        <div className='col-4 div2'>
          <div className=''>
            <img className='img' src={ImgInicio} alt="" />
          </div>
          <div className='text-center2'>

            <p className='parrafos2'> No esperes más para vivir una experiencia de relajación y bienestar.
              Reserva tu cita hoy mismo y déjanos ser tu refugio en medio del ajetreo diario.</p>
            <Link to="/Servicios"><h2 className='h2title'>Reserva tu Cita</h2></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Principal

