
'use client';
import { useState, useEffect } from 'react';
import { isAuthenticated } from '../utils/auth';
import { useRouter } from 'next/router';


export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const [checkedAuth, setCheckedAuth] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    setError('');
    if (!file) return;
    try {
      const token = localStorage.getItem('token') || '';
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/anexos/upload`, {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      } as any);
      if (!res.ok) throw new Error('Erro no upload');
      setMessage('Upload realizado com sucesso!');
      setFile(null);
    } catch {
      setError('Erro ao fazer upload');
    }
  };


  useEffect(() => {
    if (!isAuthenticated()) {
      router.replace('/login');
    } else {
      setCheckedAuth(true);
    }
  }, []);

  if (!checkedAuth) return null;

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
      <h2>Upload de Arquivo</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} required />
        <button type="submit">Enviar</button>
      </form>
      {message && <div style={{ color: 'green' }}>{message}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
