import corporalM from '../ImagenesSpa/masaje-corporal.png'
import facial from '../ImagenesSpa/masaje-facial.png'
import shiatsu from '../ImagenesSpa/masaje-shiatsu.png'
import masajeF from '../ImagenesSpa/fisioterapia.png'
import Mdeportivo from '../ImagenesSpa/masaje_deportivo.png'
import masajeT from '../ImagenesSpa/Baño-turco.png'
import Planfamilia from '../ImagenesSpa/Plan_familia.png'
import Planpareja from '../ImagenesSpa/masaje-en-pareja.png'
import '../Css/Servicios.css'


const Servicios = () => {
    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-4 card separacion">
                        <img src={corporalM} alt=" " />
                        <div className='card-body'>
                            <h2>Masaje Corporal</h2>
                            <p className='card-text'>
                                Un masaje corporal es una técnica de terapia manual que implica la manipulación
                                de los tejidos blandos del cuerpo, incluyendo músculos, tendones y ligamentos,
                                con el objetivo de:
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>
                            <ul>
                                <li>Mejorar la circulación sanguínea.</li>
                                <li>Aliviar la tensión muscular.</li>
                                <li>Reducir el estrés.</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                    <div className="col-4 card separacion">
                        <img src={facial} alt="" />
                        <div className='card-body'>
                            <h2>Masaje Facial</h2>
                            <p className='card-text'>
                                El masaje facial es una técnica terapéutica que implica el uso de movimientos suaves y presión manual
                                en el rostro y el cuello para estimular la circulación sanguínea, relajar los músculos faciales y
                                promover una piel más saludable
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>
                            <ul>
                                <li>Alivia la tensión facial</li>
                                <li>Acelera la regeneración facial.</li>
                                <li>Incrementa la absorción de las cremas.</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                    <div className="col-4 card separacion">
                        <img src={shiatsu} alt="" />
                        <div className='card-body'>
                            <h2>Masaje Shiatsu</h2>
                            <p className='card-text'>

                                El Shiatsu es una técnica de masaje terapéutico de origen japonés que se basa en la aplicación
                                de presión con los dedos,palmas y codos en puntos específicos del cuerpo conocidos como puntos
                                de acupuntura o meridianos.
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>

                            <ul>
                                <li>Equilibra la energía del cuerpo</li>
                                <li>Mejorar la circulación</li>
                                <li>Aliviar la tensión muscular</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                </div>
            </div>
            {/* segunda fila */}
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-4 card separacion">
                        <img src={masajeF} alt="" />
                        <div className='card-body'>
                            <h2>Masaje fisioterapeutico</h2>
                            <p className='card-text'>
                                los masajes terapéuticos son utilizados cuando se necesitan solventar problemas de tipo muscular,
                                es decir que tienen una finalidad médica por lo que deben ser aplicados por fisioterapeutas
                                profesionales.Los masajes terapéutico incluye una serie de técnicas de masaje utilizados para el
                                tratamiento de diversas patologías que afectan el sistema neuromuscular y esquelético
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>
                            <ul>
                                <li>aumentar el rango de movilidad de la estructura que se trata o de las adyacentes.</li>
                                <li>mejorar las condiciones de los tejidos blandos</li>
                                <li>aumenta los niveles de dopamina, creando en el paciente una sensación de tranquilidad y bienestar.</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                    <div class="col-4 card separacion">
                        <img src={Mdeportivo} alt="" />
                        <div className='card-body'>
                            <h2>Masaje Deportivo</h2>
                            <p className='card-text'>

                                El masaje deportivo es una técnica más de abordaje del masaje terapéutico, encargado de la
                                preparación de los tejidos del atleta para el esfuerzo que genera la disciplina que realiza,
                                en pro de un mejor rendimiento deportivo, recuperación post competición o entrenamiento y
                                en la prevención de lesiones.
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>
                            <ul>
                                <li>Previene lesiones a nivel muscular, tendinoso, ligamentoso, articula</li>
                                <li>Relaja la musculatura del deportista</li>
                                <li>Brinda motivación y concentración para la competencia</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                    <div class="col-4 card separacion">
                        <img src={masajeT} alt="" />
                        <div className='card-body'>
                            <h2>Masaje Turco</h2>
                            <p className='card-text'>

                                El masaje turco o el masaje de baño turco es un antiguo método de curación
                                y relajación que utiliza técnicas manuales, calor y vapor para ayudar a desintoxicar
                                el cuerpo, mejorar la circulación y aliviar el estrés.
                                El masaje turco se practica en un baño de vapor cálido, conocido como hamam, que se utiliza para
                                sudar y relajarse.
                            </p>
                            <h3 className='card-title text-center'>Beneficios</h3>
                            <ul>
                                <li>Relaja los músculos y reduce el estrés con la aplicación del calor y la presión del vapor.</li>
                                <li>Alivia el dolor y mejora la movilidad articular con sus movimientos suaves y profundos.</li>
                                <li>Purifica la piel al eliminar las impurezas y estimular la circulación.</li>
                            </ul>
                            <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                        </div>
                    </div>
                </div>
            </div>
            {/*tercera Fila */}
            <div class="row justify-content-around text-center">
                <div class="col-4 card separacion">
                    <img src={Planfamilia} alt="" />
                    <div className='card-body'>
                        <h2>Plan Familiar</h2>
                        <p className='card-text'>

                            Este plan incluye masajes a eleccion para toda la famimila.
                        </p>
                        <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                    </div>
                </div>
                <div class="col-4 card separacion">
                    <img src={Planpareja} alt="" />
                    <div className='card-body'>

                        <h2>Plan Pareja</h2>
                        <p className='card-text'>

                            Este plan incluye masajes a eleccion para las parejas.
                        </p>
                        <input type="button" className='btn btn-success' value={'Agendar Servicio'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Servicios
