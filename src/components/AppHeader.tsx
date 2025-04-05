"use client";

import { Typography, Image, Space,Badge } from 'antd';
import { Layout, theme } from 'antd';
import Link from 'next/link'
import { UserOutlined, BellOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';


const { Header } = Layout;

const { Text } = Typography;

export default function AppHeader () {

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const data = [
    {
      title: 'Иванов И. И.',
    },
    
  ];

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 28 }}>
      <Link href={'/'} style={{display: 'flex'}}>
      <Image 
    width={35}
    preview={false}
    src="/./favicon.ico" alt="RBAC"/>
      <Typography.Title level={3} style={{ display: 'flex', alignItems: 'center', padding: '0 0 0 1rem', margin: 0, color: colorBgContainer }}>
      RBAC
     </Typography.Title>
      </Link>
  <div style={{ display: 'flex', alignItems: 'center', gap: 15}}>

      <Badge count={5}>
        <BellOutlined style={{ color: colorBgContainer, fontSize: 24}}/>
      </Badge>
   
    <Avatar style={{ backgroundColor: '#1677ff'}} shape="circle" icon={<UserOutlined />} />
    <Text style = {{color: colorBgContainer}}>Иванов И.И.</Text>
  </div>

    </Header>
  </Layout>
  );
};
