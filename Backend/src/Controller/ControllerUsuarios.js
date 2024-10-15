import { getAllUsuarios } from "../Model/UsuariosModel.js";

const getAllUser = async (req, res) =>{

    const user = await getAllUsuarios();
    res.json(user);
}
export {getAllUser}