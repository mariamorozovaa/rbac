"use client";

import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import  TableUser  from "../../tables/UsersTable"
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
        <Breadcrumb style={{ margin: '16px 0' }}
    items={[
      {
        title: <a href="/">Заявки</a>,
      },
      {
        title: 'Исходящие',
      },
    ]}
  />
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
          <TableUser/>

          </div>
        </Content>
      </Layout>
    </Layout>
    </Layout>
  );
};

export default OutGoingRequest;