import { Layout } from 'antd';
import AppSider from '../components/AppSider';
import AppHeader from '../components/AppHeader';
import AppLayout from '@/components/AppLayout';

import React from 'react';

export default function Home() {
  return (
    <Layout>
      <AppHeader />
      <Layout style={{ minHeight: '100vh' }}>
        <AppSider />
        <AppLayout />
      </Layout>
    </Layout>
  );
}
