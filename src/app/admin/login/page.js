// app/admin/login/page.js
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import request from '@/utils/request';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    request({url: '/api/admin/auth', method: 'POST', data: {username, password}}).then(res=>{
      setMessage(res.data.message);
      if (res.data.code === 0) {
        router.push('/admin/dashboard');
      }
    })
  };

  return (
    <div>
      <h1>登录</h1>
      <input
        type="text"
        placeholder="用户名"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="密码"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>登录</button>
      {message && <p>{message}</p>}
    </div>
  );
}