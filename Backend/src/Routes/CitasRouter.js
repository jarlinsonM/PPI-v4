import { getAllcita } from "../Controller/controllerCitas.js";
import express from 'express';
const routerC = express.Router();

routerC.get('/Servicios/citas', getAllcita);

export default routerC;