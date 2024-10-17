import '../../Css/Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col ">
                        <h4 className='text'>Correo:
                            <a href="#"><h5 className='text'>NoaturaBodySpace@spa.com.co</h5> </a>
                            <a href=""><h5 className='text'>AtencionAlUsuario@spa.com.co</h5></a>
                        </h4>
                    </div>
                    <div className="col">
                        <h5 className='text'>Telefono: 99-999-999</h5>
                        <h5 className='text'>Direccion: Calle 06#30-45, La candelaria</h5>
                    </div>
                    <div className="col">
                        <h4 className='text'>Sigenos en nuestras redes sociales</h4>
                        <img src="#" alt="instagram" />
                        <img src="#" alt="Facebook" />
                        <img src="#" alt="Tik Tok" />
                        <img src="#" alt="You tube" />
                    </div>
                </div>

            </div>
            <div>
                <p className="text-center text">
                    Copyright &copy; 2024 NoaturaBodySpace Todos los derechos reservados
                </p>
            </div>

        </div>

    )
}

export default Footer
