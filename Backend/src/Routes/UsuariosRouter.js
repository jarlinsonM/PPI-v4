import { getAllUser } from "../Controller/ControllerUsuarios.js";
import express from 'express';
const routerU = express.Router();

routerU.get('/register', getAllUser);

export default routerU;