import { getAllUser, Log_inU, registerU } from "../Controller/ControllerUsuarios.js";
import express from 'express';
const routerU = express.Router();


routerU.get('/register', getAllUser);
routerU.post('/register', registerU)
routerU.post('/register', Log_inU)
export default routerU;