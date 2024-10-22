import { getAllSer } from "../Controller/ControllerServicios.js";
import { AgregarSer } from "../Controller/ControllerServicios.js";
import express from 'express';
const router = express.Router();

router.get('/Servicios', getAllSer);
router.post('/Servicios', AgregarSer);

export default router;