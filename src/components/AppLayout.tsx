"use client";

import { Layout } from 'antd';
import AppSider from '../components/AppSider'
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent';

export default function AppLayout () {

  return (
    <Layout>
      <AppHeader/>
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout>
        <AppContent/>
      </Layout>
    </Layout>
    </Layout>
  );
};