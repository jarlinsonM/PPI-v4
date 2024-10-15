import { getAllUser } from "../Controller/ControllerUsuarios.js";
import { registerU } from "../Controller/ControllerUsuarios.js";
import express from 'express';
const routerU = express.Router();


routerU.get('/register', getAllUser);
routerU.post('/register', registerU)
export default routerU;