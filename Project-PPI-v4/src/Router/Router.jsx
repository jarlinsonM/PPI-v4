import {Routes, Route} from 'react-router-dom'
import Principal from '../Pages/Principal'
import Servicios from '../Pages/Servicios'
import Nosotros from  '../Pages/Nosotros'
import Agenda from '../Pages/Agenda'
import Login  from '../Pages/Login'
import Register from '../Pages/Register'
import Citas from '../Pages/Citas'
import AdminSer from '../Pages/AdminSer'
import AdminUs from '../Pages/AdminUs'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Principal />}/>
      <Route path="/Servicios" element={<Servicios />}/>
      <Route path="/Nosotros" element={<Nosotros />}/>
      <Route path="/Servicios/Agenda" element={<Agenda />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />}/>
      <Route path="/Servicios/citas" element={<Citas />}/>
      <Route path="Admin/Servicios" element={<AdminSer />}/>
      <Route path="Admin/Usuarios" element={<AdminUs />}/> 
    </Routes>
  )
}

export default Router
