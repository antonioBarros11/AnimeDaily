import axiosInstance from "../lib/axiosConfig";

export async function authLogin(email, password) {
  try {
    const response = await axiosInstance.post(`/api/auth/login`, {
      correo: email,
      contraseña: password,
    });
    if (response.status === 401) {
      return {
        error: "credenciales no validas",
      };
    }
    return response;
  } catch (error) {
    return {
      error: "Error al intentar sesión",
    };
  }
}

export async function authRegister(registerCredential) {
  const { userName, email, password } = registerCredential;
  try {
    const response = await axiosInstance.post(`/api/auth/register`, {
      correo: email,
      username: userName,
      contraseña: password,
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

export async function authRefresh() {
  try {
    const response = await axiosInstance.post(`/api/auth/refresh`);
    if (response.status === 401) {
      return {
        error: "credenciales no validas",
      };
    }
    return response;
  } catch (error) {
    return {
      error: "Error al intentar sesión",
    };
  }
}
