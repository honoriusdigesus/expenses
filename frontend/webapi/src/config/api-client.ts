import axios from "axios";

//Crea un cliente de axios con la URL base de la API para hacer las peticiones
const apiClient = axios.create({
    baseURL: 'http://localhost:8080/',
    headers: {
        'Content-Type': 'application/json'
    }
});

export default apiClient;