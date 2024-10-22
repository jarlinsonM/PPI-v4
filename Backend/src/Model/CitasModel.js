import { sql } from "../Config/Connection.js";

const getAllCitas = async() =>{
    try {
        const citas = await sql.query('SELECT * FROM cita');
        return citas.recordset;
    } catch (error) {
        throw error;
    }
}

export {getAllCitas}