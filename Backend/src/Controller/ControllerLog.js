import jwt from 'jsonwebtoken'
import { LogearUser } from '../Model/UsuariosModel'

const logearUser = async (req,res) =>{
    const {userName,password} = req.body

    try{
        
        const usuario = await LogearUser(userName)

        if (!usuario) {
            return res.status(401).json({sucess: false, message: 'Credenciales incorrectas'})
        }

        if (usuario.contrasena !== password){
            return res.status(400).json({sucess: false, message: 'Contraseña incorrecta'})
        }
        const token = jwt.sign({id: usuario.id, userName: usuario.userName },
            'secretKey',
            { expiresIn: '1h' }
        )
        res.status(200).json({sucess: true, token})
    }catch(error){
        res.status(500).json({sucess: false, message: 'Error al iniciar sesion',error})
    }
}

export {logearUser}