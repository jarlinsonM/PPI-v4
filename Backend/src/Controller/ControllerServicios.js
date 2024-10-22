import { AgregarServicio, getAllServicios } from "../Model/ServiciosModel.js";

const getAllSer = async (req, res) => {

  const servicios = await getAllServicios();
  res.json(servicios);
}

export const AgregarSer = async (req, res) => {
  try {
    const formDataS = req.body;
    const AddServ = await AgregarServicio(formDataS);
    res.json(AddServ);
  } catch (error) {
    console.error(error);
  };
}

export { getAllSer }