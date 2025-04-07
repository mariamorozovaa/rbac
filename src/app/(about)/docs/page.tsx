"use client";

import { Typography } from 'antd';
import { Breadcrumb, Layout, theme } from 'antd';
import AppSider from '../../../components/AppSider'
import AppHeader from '../../../components/AppHeader'
import React from 'react';
import { DeleteOutlined, UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
import { Button, Upload, Flex } from 'antd';
import { Input, Space } from 'antd';
import type { GetProps } from 'antd';


const { Header, Content } = Layout;

type SearchProps = GetProps<typeof Input.Search>;

const { Search } = Input;
const onSearch: SearchProps['onSearch'] = (value, _e, info) => console.log(info?.source, value);

export default function IncomingRequest () {

  const props: UploadProps = {
    // action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    // onChange({ file, fileList }) {
    //   if (file.status !== 'uploading') {
    //     console.log(file, fileList);
    //   }
    // },
    defaultFileList: [
      {
        uid: '1',
        name: 'Инструкция пользователя.pdf',
        size: 36777777,
        status: 'done',
        url: '/',
      },
      {
        uid: '2',
        name: 'Инструкция администратора.pdf',
        size: 56777777,
        status: 'done',
        url: '/',
      },
      {
        uid: '3',
        name: 'Полный функционал системы.pdf',
        size: 86777777,
        status: 'done',
        url: '/',
      },
    ],
    showUploadList: {
      extra: ({ size = 0 }) => (
        <span style={{ color: '#cccccc' }}>({(size / 1024 / 1024).toFixed(2)}MB)</span>
      ),
      showDownloadIcon: true,
      downloadIcon: 'Скачать',
      showRemoveIcon: true,
      removeIcon: <DeleteOutlined onClick={(e) => console.log(e, 'custom removeIcon event')} />,
    },
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const nameOfPage = 'Документы';

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
        title: 'Документы',
      },
    ]}
  />
        <Typography.Title level={4}>{nameOfPage}</Typography.Title>
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
          <Typography.Text style={{ whiteSpace: 'nowrap' }}>Документ:</Typography.Text>
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
            <Typography.Title level={5}>{nameOfPage}</Typography.Title>
            <Button type="primary" icon={<UploadOutlined />}>Добавить файл</Button>
            </div>
           <Upload {...props}> 
            {/* кнопка раньше была здесь */}
          </Upload>
          </div>
        </Content>
      </Layout>
    </Layout>
  </Layout>
  );
};


