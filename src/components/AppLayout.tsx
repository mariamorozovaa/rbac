"use client";

import { Layout, theme } from 'antd';
import AppSider from '../components/AppSider'
import { useRouter } from 'next/navigation';
import AppHeader from '../components/AppHeader'
import AppContent from '../components/AppContent';

const { Header, Content, Sider } = Layout;

export default function AppLayout () {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

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