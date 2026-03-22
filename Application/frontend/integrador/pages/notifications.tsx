import { useState } from 'react';

export default function NotificationsPage() {
  const [message, setMessage] = useState('');
  const [feedback, setFeedback] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFeedback('');
    setError('');
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'}/notifications`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      });
      if (!res.ok) throw new Error('Erro');
      const data = await res.json();
      setFeedback('Notificação enviada: ' + data.message);
      setMessage('');
    } catch {
      setError('Erro ao enviar notificação');
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: 'auto', padding: 32 }}>
      <h2>Notificações de Feedback</h2>
      <form onSubmit={handleSubmit}>
        <input value={message} onChange={e => setMessage(e.target.value)} placeholder="Mensagem" required />
        <button type="submit">Enviar</button>
      </form>
      {feedback && <div style={{ color: 'green' }}>{feedback}</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </div>
  );
}
