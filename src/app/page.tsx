"use client";

import { Layout, Typography, Breadcrumb, theme, Card, Col, Row } from 'antd';
import AppSider from '../components/AppSider'
import AppHeader from '../components/AppHeader'
import { Button, Flex } from 'antd';
import { Divider, List } from 'antd';

export default function AppLayout () {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];

  return (
    
    <Layout>
      <AppHeader/>
    <Layout style={{ minHeight: '100vh' }}>
      <AppSider />
      <Layout>
        <Layout.Header style={{ paddingLeft: 16, background: colorBgContainer, height: '100px' }}> 
        <Breadcrumb style={{ margin: '16px 0' }}
    items={[
      {
        title: 'Главная',
      },
      {
        title: 'Заявки',
      },
    ]}
  />
        <Typography.Title level={4}>Главная</Typography.Title>
        </Layout.Header>
        <Layout.Content style={{ margin: '0 16px', paddingTop:'16px' }}>
          <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginBottom: 24
            }}
          > <Flex gap="small" wrap style={{gap: 24, display: 'flex', }}>
          <Button type="primary">Запросить доступ для себя</Button>
          <Button type="primary">Запросить доступ для других</Button>
          <Button type="primary">Отозвать доступ</Button>
          <Button type="primary">Мои доступы</Button>
        </Flex>
          </div>
          <Row gutter={16}>
    <Col span={12}>
      <Card title="Отправленные заявки" variant="borderless">
    <List
      size="large"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
      </Card>
    </Col>
    <Col span={12}>
      <Card title="Входящие заявки" variant="borderless">
      <List
      size="large"
      dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
      </Card>
    </Col>
  </Row>
        </Layout.Content>
      </Layout>
      </Layout>
    </Layout>
  )
}
