'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Sider from './sider'
import Header from './header'
import {  HomeOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';

import { Layout,  theme } from 'antd';
const {  Content } = Layout;

export default function AdminLayout({ children }) {
  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed) => {
    setCollapsed(collapsed);
  };
  const items = [{
    label: <Link href='/admin/dashboard'>Home</Link>,
    icon: <HomeOutlined />,
    key: '/admin/dashboard'
  },
  {
    label: <Link href='/admin/products'>Products</Link>,
    icon: <ProductOutlined />,
    key: '/admin/products'
  },
  {
    label: <Link href='/admin/blogs'>Blogs</Link>,
    icon: <UnorderedListOutlined />,
    key: '/admin/blogs'
  }]
  return (
    <Layout className='h-screen overflow-hidden' hasSider={true}>
      <Sider collapsed={collapsed} items={items}/>
      <Layout>
        <Header onCollapse={onCollapse} collapsed={collapsed}/>
        <Content style={{ margin: '24px 16px', padding: 24, minHeight: 280, background: colorBgContainer, borderRadius: borderRadiusLG, }} > {children} </Content>
      </Layout>
    </Layout>
  )
}
