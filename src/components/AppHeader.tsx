"use client";

import { useRouter } from 'next/navigation';
import type { MenuProps } from 'antd';
import { Typography, Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link'


const { Header } = Layout;

export default function AppHeader () {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', paddingLeft: 28 }}>
      <div className="demo-logo" />
      <Link href={'/'} style={{display: 'flex'}}>
      <Image 
    width={35}
    preview={false}
    src="/./favicon.ico"/>
      <Typography.Title level={3} style={{ display: 'flex', alignItems: 'center', padding: '0 0 0 1rem', margin: 0, color: colorBgContainer }}>
      RBAC
     </Typography.Title>
      </Link>
    </Header>
  </Layout>
  );
};
