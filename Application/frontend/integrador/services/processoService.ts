import api from './api';

export const getProcessos = async (token: string) => {
  const response = await api.get('/processos', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getProcessoById = async (id: number, token: string) => {
  const response = await api.get(`/processos/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createProcesso = async (data: any, token: string) => {
  const response = await api.post('/processos', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
