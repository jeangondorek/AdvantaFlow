import api from './api';

export const getClientes = async (token: string) => {
  const response = await api.get('/clientes', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const getClienteByCpf = async (cpf: string, token: string) => {
  const response = await api.get(`/clientes/cpf/${cpf}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const createCliente = async (data: any, token: string) => {
  const response = await api.post('/clientes', data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
