import Navegacion  from '../Componentes/Header/Navegacion';
import Footer from '../Componentes/Footer/Footer';
import Header from '../Componentes/Header/Header';
import Router from '../Router/Router'

const Layouts = () => {
    return (
        <>
            <Navegacion />
            <Header />
            <div>
                <Router />
            </div>
            <Footer />
        </>
    )
}

export default Layouts
