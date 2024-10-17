import { getAllUsuarios } from "../Model/UsuariosModel.js";
import { RegistrarUser } from "../Model/UsuariosModel.js";
import {LogearUser} from  "../Model/UsuariosModel.js";

const getAllUser = async (req, res) =>{

    const user = await getAllUsuarios();
    res.json(user);
}


export const registerU = async (req, res) => {
  try {
    const formData = req.body; 
    const ruser = await RegistrarUser(formData); 
    res.json(ruser); 
  } catch (error) {
    console.error(error);
    //res.status(500).json({ error: "Error registrando el usuario" }); 
  }
};
export const Log_inU = async (req, res) => {
  try {
    const formData = req.body; 
    const lgUser = await LogearUser(formData); 
    res.json(lgUser); 
    if (lgUser) {
      res.status(200).json({ message: "Login exitoso", lgUser}); // Si el usuario es encontrado
    } else {
      res.status(401).json({ error: "Usuario o contraseña incorrectos" }); // Si las credenciales son incorrectas
    }
  } catch (error) {
    console.error("Error al iniciar sesión:", error);
    res.status(500).json({ error: "Error del servidor al iniciar sesión" });
  }
};


export {getAllUser}

