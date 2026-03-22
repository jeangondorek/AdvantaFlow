import api from './api';

export const getPerfis = async (token: string) => {
  const response = await api.get('/perfis', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getPerfilById = async (id: number, token: string) => {
  const response = await api.get(`/perfis/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
