import { getAllCitas } from "../Model/CitasModel.js";

const getAllcita = async (req, res) =>{

    const citas = await getAllCitas();
    res.json(citas);
}

export {getAllcita}