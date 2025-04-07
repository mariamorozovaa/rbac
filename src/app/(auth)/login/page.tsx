'use client';

import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Form, Input, Card, message } from 'antd';
import { useRouter } from 'next/navigation';
import React from 'react';

const LoginPage: React.FC = () => {
  const router = useRouter();

  const onFinish = (values: { username: string; password: string }) => {
    if (values.username === 'admin' && values.password === 'admin') {
      message.success('Авторизация успешна!');
      // Сохраняем статус авторизации в localStorage
      localStorage.setItem('isAuthenticated', 'true');
      router.push('/');
    } else {
      message.error('Неверные учетные данные!');
    }
  };

  return (
    <div>
      <Card title="Авторизация">
        <Form name="normal_login" initialValues={{ remember: true }} onFinish={onFinish}>
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Пожалуйста, введите логин!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Пожалуйста, введите пароль!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Пароль"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default LoginPage;
