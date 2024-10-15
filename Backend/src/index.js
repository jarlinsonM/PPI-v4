import express from 'express';
import cors from 'cors';
import router from './Routes/ServiciosRoute.js';
import { sql, getConnection } from './Config/Connection.js';
import routerC from './Routes/CitasRouter.js';
import routerU from './Routes/UsuariosRouter.js';
const app = express();

app.use(cors());
app.use(express.json());
app.use(routerC);
app.use(router);
app.use(routerU)
//app.get('/Servicios', router);
//app.get('/Servicios/citas', router);

app.listen(process.env.PORT, ()=>{
    getConnection();
    console.log(`Conectado en el puerto: ${process.env.PORT}`)
})