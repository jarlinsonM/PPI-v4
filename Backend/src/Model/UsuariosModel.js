import { sql } from "../Config/Connection.js";

const getAllUsuarios = async() =>{

    try {
        
        const usuarios = await sql.query('SELECT * FROM usuario');
        return usuarios.recordset;

    } catch (error) {
        throw error;
    }
}

export {getAllUsuario}