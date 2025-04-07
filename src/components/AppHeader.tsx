'use client';

import { Typography, Image, Space, Badge } from 'antd';
import { useRouter } from 'next/navigation';
import { Layout, theme, Dropdown } from 'antd';
import Link from 'next/link';
import { UserOutlined, BellOutlined, SettingOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, MenuProps } from 'antd';

const { Header } = Layout;

const { Text } = Typography;

export default function AppHeader() {
  const router = useRouter();

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/login');
  };

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: 'Мой аккаунт',
      disabled: true,
    },
    {
      type: 'divider',
    },
    {
      key: '2',
      label: 'Профиль',
      icon: <UserOutlined />,
    },

    {
      key: '3',
      label: 'Настройки',
      icon: <SettingOutlined />,
    },
    {
      key: '4',
      label: 'Выйти',
      icon: <LogoutOutlined />,
    },
  ];

  return (
    <Layout>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: 28,
        }}
      >
        <Link href={'/'} style={{ display: 'flex' }}>
          <Image width={35} preview={false} src="/./favicon.ico" alt="RBAC" />
          <Typography.Title
            level={3}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0 0 0 1rem',
              margin: 0,
              color: colorBgContainer,
            }}
          >
            RBAC
          </Typography.Title>
        </Link>
        <div style={{ display: 'flex', alignItems: 'center', gap: 15 }}>
          <Badge count={5}>
            <BellOutlined style={{ color: colorBgContainer, fontSize: 24 }} />
          </Badge>
          <Dropdown menu={{ items, onClick: handleLogout }}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <Avatar
                  style={{ backgroundColor: '#1677ff' }}
                  shape="circle"
                  icon={<UserOutlined />}
                />
                <Text style={{ color: colorBgContainer }}>Иванов И.И.</Text>
              </Space>
            </a>
          </Dropdown>
        </div>
      </Header>
    </Layout>
  );
}
