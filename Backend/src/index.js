import express from 'express';
import cors from 'cors';
import router from './Routes/ServiciosRoute.js';
import { sql, getConnection } from './Config/Connection.js';
const app = express();

app.use(cors());
app.use(express.json());
app.get('/Servicios', router);

app.listen(process.env.PORT, ()=>{
    getConnection();
    console.log(`Conectado en el puerto: ${process.env.PORT}`)
})