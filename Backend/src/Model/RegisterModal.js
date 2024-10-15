import { sql } from "../Config/Connection.js";

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
        password
      } = formData;

    try {
        const Rusuarios = await sql.query(`
            INSERT INTO usuario (nombre, apellidos, telefono, direccion, tipoDocumento, numeroDocumento, edad, correo, userName, password)
            VALUES ('${nombre}', '${apellidos}', ${telefono}, '${direccion}',
             '${tipoDocumento}', ${numeroDocumento}, ${edad}, '${correo}', '${userName}', '${password}')`);
      
          return Rusuarios.recordset;
    } catch (error) {
        console.error("Error al registrar el usuario:", error);
        throw error;
    }
}

export {RegistrarUser}