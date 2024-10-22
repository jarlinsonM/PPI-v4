import { sql } from "../Config/Connection.js";

const getAllServicios = async() =>{

    try {
        
        const servicios = await sql.query('SELECT * FROM servicio');
        return servicios.recordset;

    } catch (error) {
        throw error;
    }
}

const AgregarServicio = async (formDataS) => {
    const {
        nombre,
        Descripcion,
        Duracion,
        Precio,
    } = formDataS;

    try {
        const AgregarService = await sql.query(`execute addServicio '${nombre}','${Descripcion}', '${Duracion}', ${Precio}`);

        return AgregarService.recordset;
    } catch (error) {
        console.error("Error al Agregar el servicio:", error);
        throw error;
    }
}
export {getAllServicios,  AgregarServicio};
