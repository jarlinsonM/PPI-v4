import oip from '../ImagenesSpa/OIP.png'
import ac from '../ImagenesSpa/01.png'
import brerc from '../ImagenesSpa/BRERC_Spa.png'
import '../Css/Carousel.css'

const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        <div className="carousel-item active">
        <img src={oip} className="d-block w-100 carousel-img" alt="Imagen 1"/>
        </div>
        <div className="carousel-item">
        <img src={ac} className="d-block w-100 carousel-img" alt="Imagen 2"/>
        </div>
        <div className="carousel-item">
        <img src={brerc} className="d-block w-100 carousel-img" alt="Imagen 3"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        
      </button>
    </div>
  )
}

export default Carousel
