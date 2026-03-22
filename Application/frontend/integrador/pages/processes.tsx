import { useEffect, useState } from 'react';
import { getProcessos, createProcesso } from '../services/processoService';
import { isAuthenticated } from '../utils/auth';
import { useRouter } from 'next/router';

export default function ProcessesPage() {
  const [processos, setProcessos] = useState([]);
  const [numero, setNumero] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    getProcessos(token)
      .then(setProcessos)
      .catch(() => setError('Erro ao carregar processos'));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token') || '';
      await createProcesso({ numero, descricao }, token);
      setNumero('');
      setDescricao('');
      const updated = await getProcessos(token);
      setProcessos(updated);
    } catch {
      setError('Erro ao criar processo');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Processos</h2>
      <form onSubmit={handleSubmit}>
        <input value={numero} onChange={e => setNumero(e.target.value)} placeholder="Número" required />
        <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição" required />
        <button type="submit">Adicionar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {processos.map((p: any) => (
          <li key={p.id}>{p.numero} - {p.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
