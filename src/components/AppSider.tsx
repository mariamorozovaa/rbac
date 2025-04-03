"use client";

import { useRouter } from 'next/navigation';
import type { MenuProps } from 'antd';
import { Typography } from 'antd';
import { Layout, Menu, theme } from 'antd';
import {TableOutlined, WarningOutlined, ProfileOutlined, CheckCircleOutlined} from '@ant-design/icons';

const siderStyle: React.CSSProperties = {
  overflow: 'auto',
  height: '100vh',
  position: 'sticky',
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: 'thin',
  scrollbarGutter: 'stable',
};

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
  getItem('Управление', 'management', < ProfileOutlined/>, [
    getItem('Пользователи', 'users'),
    getItem('Роли', 'roles'),
    getItem('Системы', 'systems'),
  ]),
  getItem('Изменения', 'edit', < WarningOutlined/>, [
    getItem('Логирование', 'logs'),
    getItem('Отчеты', 'reports'),
  ]),
  getItem('О системе', 'about', <CheckCircleOutlined />, [
    getItem('Документы', 'docs'),
    getItem('Видео', 'video'),
    getItem('Обновления', 'updates'),
  ]),
];

const AppSider: React.FC = () => {
  const router = useRouter();

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    
      <Layout.Sider style={siderStyle} collapsible 
      >
        <div className="demo-logo-vertical" />
        <Menu theme="light" mode="inline"
            defaultSelectedKeys={['request']}
            defaultOpenKeys={['request','management','edit','about' ]}
            style={{ height: '100%', borderRight: 0 }} items={items}
            onClick={(id) => router.replace(`${id.key}`)}
            />
      </Layout.Sider>

  );
};

export default AppSider;

