import { getAllServicios } from "../Model/ServiciosModel.js";

const getAllSer = async (req, res) =>{

    const servicios = await getAllServicios();
    res.json(servicios);
}

export {getAllSer}