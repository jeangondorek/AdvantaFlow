import { useEffect, useState } from 'react';
import { getUsuarios, createUsuario } from '../../services/usuarioService';
import { isAuthenticated } from '../../utils/auth';
import { useRouter } from 'next/router';

export default function AdminUsersPage() {
  const [usuarios, setUsuarios] = useState([]);
  const [nome, setNome] = useState('');
  const [cpf, setCpf] = useState('');
  const [senha, setSenha] = useState('');
  const [perfilId, setPerfilId] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push('/login');
      return;
    }
    const token = localStorage.getItem('token') || '';
    getUsuarios(token)
      .then(setUsuarios)
      .catch(() => setError('Erro ao carregar usuários'));
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const token = localStorage.getItem('token') || '';
      await createUsuario({ nome, cpf, senha, perfilId: Number(perfilId) }, token);
      setNome('');
      setCpf('');
      setSenha('');
      setPerfilId('');
      const updated = await getUsuarios(token);
      setUsuarios(updated);
    } catch {
      setError('Erro ao criar usuário');
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: 'auto', padding: 32 }}>
      <h2>Usuários (Admin)</h2>
      <form onSubmit={handleSubmit}>
        <input value={nome} onChange={e => setNome(e.target.value)} placeholder="Nome" required />
        <input value={cpf} onChange={e => setCpf(e.target.value)} placeholder="CPF" required />
        <input value={senha} onChange={e => setSenha(e.target.value)} placeholder="Senha" required />
        <input value={perfilId} onChange={e => setPerfilId(e.target.value)} placeholder="Perfil ID" required />
        <button type="submit">Adicionar</button>
      </form>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <ul>
        {usuarios.map((u: any) => (
          <li key={u.id}>{u.nome} - {u.cpf} - Perfil: {u.perfilId}</li>
        ))}
      </ul>
    </div>
  );
}
