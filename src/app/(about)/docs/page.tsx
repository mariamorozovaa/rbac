"use client";

import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import  TableUser  from "../../../components/UsersTable"
import AppSider from '../../../components/AppSider'
import AppHeader from '../../../components/AppHeader'

const { Header, Content } = Layout;

export default function IncomingRequest () {

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <AppHeader/>
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider/>
      <Layout>
        <Header style={{ paddingLeft: 16, background: colorBgContainer, height: '100px' }}> 
            <Breadcrumb style={{ margin: '16px 0' }}
    items={[
      {
        title: <a href="/">Заявки</a>,
      },
      {
        title: 'Все заявки',
      },
    ]}
  />
        <Typography.Title level={4}>Все заявки</Typography.Title>
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