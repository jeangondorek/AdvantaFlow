import api from './api';

export const getUsuarios = async (token: string) => {
  const response = await api.get('/usuarios', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getUsuarioById = async (id: number, token: string) => {
  const response = await api.get(`/usuarios/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createUsuario = async (data: any, token: string) => {
  const response = await api.post('/usuarios', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
