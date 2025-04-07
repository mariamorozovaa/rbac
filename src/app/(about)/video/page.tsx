"use client";

import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import AppSider from '../../../components/AppSider'
import AppHeader from '../../../components/AppHeader'
import React from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Upload, Flex } from 'antd';
import type { UploadFile } from 'antd';
import type { GetProps } from 'antd';
import { Input, Space } from 'antd';

const { Header, Content } = Layout;
type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;

const fileList: UploadFile[] = [
  {
    uid: '0',
    name: 'Обзорный ролик.mp4',
    status: 'done',
    url: 'https://example.com/video4.mp4',
    thumbUrl: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=200&auto=format',

  },
  {
    uid: '-1',
    name: 'Интерфейс системы.mp4',
    status: 'done',
    url: 'https://example.com/video4.mp4',
    thumbUrl: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=200&auto=format',
  },
  {
    uid: '-2',
    name: 'Функционал пользователя.mp4',
    status: 'done',
    url: 'https://example.com/video4.mp4',
    thumbUrl: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=200&auto=format',
  },
  {
    uid: '-3',
    name: 'Функционал администратора.mp4',
    status: 'done',
    url: 'https://example.com/video4.mp4',
    thumbUrl: 'https://images.unsplash.com/photo-1579403124614-197f69d8187b?w=200&auto=format',
  },
];
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);


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
        title: 'О системе',
      },
      {
        title: 'Видео',
      },
    ]}
  />
        <Typography.Title level={4}>Видео</Typography.Title>
        </Header>
        <Content style={{ margin: '0 16px', paddingTop:'16px' }}>
        <div
            style={{
              padding: 24,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
              marginBottom: 24
            }}
          > 
        <Flex gap="middle" style={{ display: 'flex', alignItems: 'center' }}>
          <Typography.Text style={{ whiteSpace: 'nowrap' }}>Видео:</Typography.Text>
          <Space.Compact style={{ width: '100%' }}>
          <Search placeholder="Наименование" onSearch={onSearch} enterButton />
          </Space.Compact>
        </Flex>
          </div>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <div style={{
                  display: 'flex', justifyContent: 'space-between', paddingBottom: 24
                }}>
                <Typography.Title level={5}>Видео</Typography.Title>
                <Button type="primary" icon={<UploadOutlined />}>Добавить файл</Button>
                </div>
          <Upload
    action="/"
    listType="picture"
    defaultFileList={fileList}
  >
    
  </Upload>
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
};