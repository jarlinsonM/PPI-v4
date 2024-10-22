import axios from 'axios'

const api = 'http://localhost:3000/servicios/citas'
export const getCitas = async()=>{
    const respuesta = await axios.get(api)
    return respuesta.data
}