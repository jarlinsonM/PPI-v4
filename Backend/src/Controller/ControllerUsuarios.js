import { getAllUsuarios } from "../Model/UsuariosModel.js";
import { RegistrarUser } from "../Model/UsuariosModel.js";

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



export {getAllUser}

