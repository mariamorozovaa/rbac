"use client";

import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import TableUserTest from '../../Table';
import AppHeader from '@/components/AppHeader';
import AppSider from '@/components/AppSider';

const { Header, Content } = Layout;

const OutGoingRequest: React.FC = () => {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Title } = Typography;

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