import sql from 'mssql';
import dotenv from 'dotenv'
dotenv.config()

const stringConnection = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    options : {
        trustServerCertificate : true,
    },
};

const getConnection = async ()=>{

    try {        
        await sql.connect(stringConnection);
        console.log('Conectado a la BD');
    } catch (error) {
        console.log('Error de conexion: ', error)
    }
}

export {sql, getConnection}