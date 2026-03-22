import { useEffect, useState } from 'react';
import { getTarefas, createTarefa } from '../services/tarefaService';
import { isAuthenticated } from '../utils/auth';
import { useRouter } from 'next/router';

export default function TasksPage() {
  const [tarefas, setTarefas] = useState([]);
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    getTarefas(token)
      .then(setTarefas)
      .catch(() => setError('Erro ao carregar tarefas'));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token') || '';
      await createTarefa({ titulo, descricao }, token);
      setTitulo('');
      setDescricao('');
      const updated = await getTarefas(token);
      setTarefas(updated);
    } catch {
      setError('Erro ao criar tarefa');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Tarefas</h2>
      <form onSubmit={handleSubmit}>
        <input value={titulo} onChange={e => setTitulo(e.target.value)} placeholder="Título" required />
        <input value={descricao} onChange={e => setDescricao(e.target.value)} placeholder="Descrição" required />
        <button type="submit">Adicionar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {tarefas.map((t: any) => (
          <li key={t.id}>{t.titulo} - {t.descricao}</li>
        ))}
      </ul>
    </div>
  );
}
