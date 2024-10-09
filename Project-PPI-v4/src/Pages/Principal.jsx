import ImgInicio from '../ImagenesSpa/principal.png'
import '../Css/Principal.css'
const Principal = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 middle">
          <h1 className='title text-center'>¡Bienvenido a Natura BodySpace</h1>
          <p>
            En Natura BodySpace, nos dedicamos a ofrecerte una experiencia de relajación y bienestar inigualable.
            Nuestro oasis de serenidad está diseñado para ayudarte a desconectar del ajetreo diario y reconectar
            contigo mismo.
          </p>
          <div>
            <ul>
              <li>Descubre la belleza interior  exterior con nuestros tratamientos faciales personalizado</li>
              <li>Sumérgete en nuestras piscinas de hidroterapia y disfruta de los beneficios del agua para tu
                cuerpo y mente.</li>
            </ul>
          </div>
        </div>
        <div className='col-4'>
          <div>
            <img src={ImgInicio} alt="" />
          </div>
          <div className='text-center'>
            <h2 className='h2title'>Reserva tu Cita</h2>
            <p>No esperes más para vivir una experiencia de relajación y bienestar.
              Reserva tu cita hoy mismo y déjanos ser tu refugio en medio del ajetreo diario.</p>
          </div>
          <div className=''>
            <button type="button" class="btn btn-secondary boton">Ver servicios</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Principal

