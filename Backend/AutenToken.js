import {jwt} from 'jsonwebtoken'

const verifyToken = (req, res, next) => {
    const token = req.headers['autorizado']
    if (!token) return res.status(403).json({message: 'No se proporciono el token'})

    try{
        const desifrada = jwt.verify(token, 'contraseña secreta')
        req.usuario = desifrada
        next()
    }catch(error){
        res.status(401).json({message: 'Token inválido'})
    }
}

export {verifyToken}