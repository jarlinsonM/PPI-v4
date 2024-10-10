import { getAllSer } from "../Controller/ControllerServicios.js";
import express from 'express';
const router = express.Router();

router.get('/Servicios', getAllSer);

export default router;