import axiosInstance from "../lib/axiosConfig";

export async function authLogin(email,password) {
  try {
    const response = await axiosInstance.post(`/api/auth/login`,{
        Correo: email,
        Contraseña: password
    });
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "Error no se a encontrado un usuario con estas credenciales",
      };
    }
    return response.token;
  } catch (error) {
    return {
      error: "Error al intentar sesión",
    };
  }
}

export async function authRegister(registerCredential) {
    const {name,userName,email,password} = registerCredential
  try {
    const response = await axiosInstance.post(`/api/auth/register`,{
        nombre:name,
        Correo:email,
        Username: userName,
        Contraseña: password
    });
    if (response.status !== 200 && response.status !== 204) {
      return {
        error: "No se ha podido Registrar el usuario ",
      };
    }
    return response.data;
  } catch (error) {
    return {
      error: "Error al intentar registrar un usuario ",
    };
  }
}