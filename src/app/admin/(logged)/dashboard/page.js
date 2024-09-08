'use client'
import request from '@/utils/request';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  useEffect(() => {
    request({ url: '/api/admin/information' }).then(res => {
      console.log(res.data);
    })
  }, [])
  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/admin/login');
  }
  return (
    <div>
      <div>admin dashboard</div>
      <button onClick={handleLogout}>logout</button>
    </div>
  )
}
