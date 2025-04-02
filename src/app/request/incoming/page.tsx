"use client";

import { useRouter } from 'next/navigation';
import type { MenuProps } from 'antd';
import { Typography, Image } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import {TableOutlined, WarningOutlined, ProfileOutlined, CheckCircleOutlined} from '@ant-design/icons';
import TableUser from "../../Users"
import Link from 'next/link'

const { Header, Content, Sider } = Layout;


type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Заявки', 'request', <TableOutlined/>, [
    getItem('Входящие', 'incoming'),
    getItem('Исходящие', 'outgoing'),
    getItem('Все заявки', 'all'),
  ]),
  getItem('Управление', '5', < ProfileOutlined/>, [
    getItem('Пользователи', '6'),
    getItem('Роли', '7'),
    getItem('Системы', '8'),
  ]),
  getItem('Изменения', '9', < WarningOutlined/>, [
    getItem('Логирование', '10'),
    getItem('Отчеты', '11'),
  ]),
  getItem('О системе', '12', <CheckCircleOutlined />, [
    getItem('Документы', '13'),
    getItem('Видео', '14'),
    getItem('Обновления', '15'),
  ]),
];

const IncomingRequest: React.FC = () => {
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const { Title } = Typography;

  const onClick: MenuProps['onClick'] = (e) => {
    console.log(e)
  };


  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', paddingLeft: 28 }}>
    <div className="demo-logo" />
    <Link href={'/'} style={{display: 'flex'}}
    >
      <Image 
    width={35}
    preview={false}
    src="/./favicon.ico"/>
    <Title level={3} style={{ display: 'flex', alignItems: 'center', padding: '0 0 0 1rem', margin: 0, color: colorBgContainer }}>
      RBAC
    </Title>
    </Link>
  </Header>
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ background: colorBgContainer }} collapsible 
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['2']}
            style={{ height: '100%', borderRight: 0 }} items={items}
            onClick={(id) => router.replace(`${id.key}`)}
            // onClick={(id) => {console.log(id.key)}} 
            />
      </Sider>
      <Layout>
        <Header style={{ paddingLeft: 16, background: colorBgContainer, height: '100px' }}> 
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Заявки</Breadcrumb.Item>
            <Breadcrumb.Item>Входящие</Breadcrumb.Item>
          </Breadcrumb>
        <Title level={4}>Входящие заявки</Title>
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

export default IncomingRequest;