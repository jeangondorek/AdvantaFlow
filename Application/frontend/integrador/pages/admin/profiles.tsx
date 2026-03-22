import { useEffect, useState } from 'react';
import { getPerfis } from '../../services/perfilService';
import { isAuthenticated } from '../../utils/auth';
import { useRouter } from 'next/router';

export default function AdminProfilesPage() {
  const [perfis, setPerfis] = useState([]);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    getPerfis(token)
      .then(setPerfis)
      .catch(() => setError('Erro ao carregar perfis'));
  }, [router]);

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Perfis (Admin)</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {perfis.map((p: any) => (
          <li key={p.id}>{p.nome}</li>
        ))}
      </ul>
    </div>
  );
}
