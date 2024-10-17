import axios from 'axios';

const api = 'http://localhost:3000/register'

export const RegisterUser = async (formData) => { // Recibe formData como parámetro
  try {
    const response = await axios.post(api, formData, {
      headers: {
        'Content-Type': 'application/json', // Asegura que estás enviando JSON
      },
    });
    alert('Registro Exitoso');
    console.log('Datos enviados correctamente:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error enviando los datos:', error);
    throw error; // Para manejar el error en el frontend
  }
};

const apiLogin = 'http://localhost:3000/register'

export const LoginUser = async (formData) => { // Recibe formData como parámetro
  try {
    const response1 = await axios.post(apiLogin, formData, {
      headers: {
        'Content-Type': 'application/json', // Asegura que estás enviando JSON
      },
    });
    //alert('Login Exitoso');
    console.log('Datos enviados correctamente:', response1.data);
    return response1.data;
  } catch (error) {
    console.error('Error enviando los datos:', error);
    throw error; // Para manejar el error en el frontend
  }
};