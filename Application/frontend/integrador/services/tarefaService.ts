import api from './api';

export const getTarefas = async (token: string) => {
  const response = await api.get('/tarefas', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getTarefaById = async (id: number, token: string) => {
  const response = await api.get(`/tarefas/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createTarefa = async (data: any, token: string) => {
  const response = await api.post('/tarefas', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
