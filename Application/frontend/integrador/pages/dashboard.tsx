import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { isAuthenticated, logout } from '../utils/auth';

export default function Dashboard() {
  const [metrics, setMetrics] = useState<any>(null);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/dashboard/metrics`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(setMetrics)
      .catch(() => setError('Erro ao carregar métricas'));
  }, [router]);

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Dashboard</h2>
      <button onClick={handleLogout}>Logout</button>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {metrics ? (
        <ul>
          <li>Processos: {metrics.processos}</li>
          <li>Tarefas: {metrics.tarefas}</li>
          <li>Clientes: {metrics.clientes}</li>
        </ul>
      ) : (
        <p>Carregando métricas...</p>
      )}
    </div>
  );
}
