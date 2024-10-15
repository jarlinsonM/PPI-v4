import { sql } from "../Config/Connection.js";

const getAllUsuarios = async() =>{

    try {
        
        const usuarios = await sql.query('SELECT * FROM usuario');
        return usuarios.recordset;

    } catch (error) {
        throw error;
    }
}

const RegistrarUser = async(formData) =>{
    const {
        nombre,
        apellidos,
        telefono,
        direccion,
        tipoDocumento,
        numeroDocumento,
        edad,
        correo,
        userName,
        password,
        confirmarPassword
      } = formData;

    try {
        const Rusuarios = await sql.query(`
            INSERT INTO usuario (nombre, apellidos, telefono, direccion, tipoDocumento, numeroDocumento, edad, correo, userName, passwordus, confirmarPassword)
            VALUES ('${nombre}', '${apellidos}', ${telefono}, '${direccion}',
             '${tipoDocumento}', ${numeroDocumento}, ${edad}, '${correo}', '${userName}', '${password}','${confirmarPassword}')`);
      
          return Rusuarios.recordset;
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
}

export {getAllUsuarios , RegistrarUser}


