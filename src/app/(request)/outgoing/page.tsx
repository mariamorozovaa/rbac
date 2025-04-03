"use client";

import { useRouter } from 'next/navigation';
import type { MenuProps } from 'antd';
import { Typography, Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {TableOutlined, WarningOutlined, ProfileOutlined, CheckCircleOutlined} from '@ant-design/icons';
import TableUserTest from '../../Table';
import Link from 'next/link'
import AppHeader from '@/components/AppHeader';
import AppSider from '@/components/AppSider';

const { Header, Content, Sider } = Layout;

const OutGoingRequest: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Title } = Typography;

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)

  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <AppHeader/>
    <Layout >
      <AppSider/>
      <Layout>
        <Header style={{ paddingLeft: 16, background: colorBgContainer, height: '100px' }}> 
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Заявки</Breadcrumb.Item>
            <Breadcrumb.Item>Исходящие</Breadcrumb.Item>
          </Breadcrumb>
        <Title level={4}>Исходящие заявки</Title>
        </Header>
        <Content style={{ margin: '0 16px', paddingTop:'16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
          <TableUserTest/>

          </div>
        </Content>
      </Layout>
    </Layout>
    </Layout>
  );
};

export default OutGoingRequest;