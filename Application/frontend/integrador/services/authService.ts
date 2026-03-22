import api from './api';

export const login = async (cpf: string, senha: string) => {
  const response = await api.post('/auth/login', { cpf, senha });
  return response.data;
};

export const getProfile = async (token: string) => {
  const response = await api.get('/auth/profile', {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
