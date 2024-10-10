import { sql } from "../Config/Connection.js";

const getAllServicios = async() =>{

    try {
        
        const servicios = await sql.query('SELECT * FROM servicio');
        return servicios.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllServicios}