import { useEffect, useState } from 'react';
import { getClientes, createCliente } from '../services/clienteService';
import { isAuthenticated } from '../utils/auth';
import { useRouter } from 'next/router';

export default function ClientsPage() {
  const [clientes, setClientes] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    getClientes(token)
      .then(setClientes)
      .catch(() => setError('Erro ao carregar clientes'));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token') || '';
      await createCliente({ nome, cpf }, token);
      setNome('');
      setCpf('');
      const updated = await getClientes(token);
      setClientes(updated);
    } catch {
      setError('Erro ao criar cliente');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Clientes</h2>
      <form onSubmit={handleSubmit}>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
        <button type="submit">Adicionar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {clientes.map((c: any) => (
          <li key={c.id}>{c.nome} - {c.cpf}</li>
        ))}
      </ul>
    </div>
  );
}
