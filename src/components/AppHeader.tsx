"use client";

import { Typography, Image } from 'antd';
import { Layout, theme } from 'antd';
import Link from 'next/link'


const { Header } = Layout;

export default function AppHeader () {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', paddingLeft: 28 }}>
      <div className="demo-logo" />
      <Link href={'/'} style={{display: 'flex'}}>
      <Image 
    width={35}
    preview={false}
    src="/./favicon.ico" alt="Company Logo"/>
      <Typography.Title level={3} style={{ display: 'flex', alignItems: 'center', padding: '0 0 0 1rem', margin: 0, color: colorBgContainer }}>
      RBAC
     </Typography.Title>
      </Link>
    </Header>
  </Layout>
  );
};
