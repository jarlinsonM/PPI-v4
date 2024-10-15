import axios from 'axios';

const api = 'http://localhost:3000/register'

export const RegistrarUser = async (formData) => { // Recibe formData como parámetro
  try {
    const response = await axios.post(api, formData, {
      headers: {
        'Content-Type': 'application/json', // Asegura que estás enviando JSON
      },
    });
    console.log('Datos enviados correctamente:', response.data);
    return response.data; // Si necesitas manejar la respuesta en el frontend
  } catch (error) {
    console.error('Error enviando los datos:', error);
    throw error; // Para manejar el error en el frontend
  }
};
