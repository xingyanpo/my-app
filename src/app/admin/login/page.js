// app/admin/login/page.js
'use client';
import React, { useEffect } from 'react';
import { Button, Form, Input } from 'antd';
import request from '@/utils/request';
import { useRouter } from 'next/navigation';

export default function Login() {
  const router = useRouter();

  const onFinish = (values) => {
    request.post('/api/admin/auth', values).then(res => {
      if (res.data.code === 0) {
        router.push('/admin/dashboard');
      }
    })
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      router.push('/admin/dashboard');
    }
  });

  return (
    <section className="w-full h-screen overflow-hidden grid place-items-center bg-[url('/images/admin-bg.jpg')] bg-cover bg-center bg-no-repeat">
      <Form className='w-full flex flex-col items-start ' name="basic" labelCol={{ span: 4, }} wrapperCol={{ span: 16, }} style={{ maxWidth: 600, }} initialValues={{ remember: true, }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off" >
        <Form.Item className='w-full' label="Username" name="username" rules={[{ required: true, message: 'Please input your username!', },]}>
          <Input />
        </Form.Item>

        <Form.Item className='w-full' label="Password" name="password" rules={[{ required: true, message: 'Please input your password!', },]} >
          <Input.Password />
        </Form.Item>

        <Form.Item className='w-full' wrapperCol={{ offset: 9, span: 16, }} >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </section>
  )
}


