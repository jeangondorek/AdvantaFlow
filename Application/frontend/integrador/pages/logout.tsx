import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { logout } from '../utils/auth';

export default function LogoutPage() {
  const router = useRouter();
  useEffect(() => {
    logout();
    router.push('/login');
  }, [router]);
  return <p>Saindo...</p>;
}
