"use client";

import { useRouter, usePathname } from 'next/navigation';
import { Layout, Menu, MenuProps } from 'antd';
import { 
  TableOutlined, 
  ProfileOutlined, 
  WarningOutlined, 
  CheckCircleOutlined 
} from '@ant-design/icons';
import { useState, useMemo, useCallback } from 'react';

type MenuItem = Required<MenuProps>['items'][number];

const AppSider = () => {
  const router = useRouter();
  const pathname = usePathname();

  const [items, parentMap] = useMemo(() => {
    const parentMap = new Map<string, string>();
    
    const getItem = (
      label: string,
      key: string,
      icon?: React.ReactNode,
      children?: MenuItem[]
    ): MenuItem => {

      if (children) {
        children.forEach(child => {
          if (child && child.key) {
            parentMap.set(child.key as string, key);
          }
        });
      }
      
      return { 
        key,
        icon,
        children,
        label,
        type: children ? 'subMenu' : 'item'
      } as MenuItem;
    };

    const menuItems: MenuItem[] = [
      getItem('Заявки', 'request', <TableOutlined />, [
        getItem('Входящие', 'incoming'),
        getItem('Исходящие', 'outgoing'),
        getItem('Все заявки', 'all'),
      ]),
      getItem('Управление', 'management', <ProfileOutlined />, [
        getItem('Пользователи', 'users'),
        getItem('Роли', 'roles'),
        getItem('Системы', 'systems'),
      ]),
      getItem('Изменения', 'edit', <WarningOutlined />, [
        getItem('Логирование', 'logs'),
        getItem('Отчеты', 'reports'),
      ]),
      getItem('О системе', 'about', <CheckCircleOutlined />, [
        getItem('Документы', 'docs'),
        getItem('Видео', 'video'),
        getItem('Обновления', 'updates'),
      ]),
    ];

    return [menuItems, parentMap];
  }, []);

  const [{ current, openKeys }, setMenuState] = useState(() => {
    const currentKey = pathname.slice(1);
    const parentKey = currentKey ? parentMap.get(currentKey) : null;
    return {
      current: currentKey || '',
      openKeys: parentKey ? [parentKey] : ['request']
    };
  });

  const handleMenuClick = useCallback(({ key }: { key: string }) => {
    setMenuState({
      current: key,
      openKeys: [parentMap.get(key) || 'request']
    });
    router.replace(`/${key}`);
  }, [parentMap, router]);

  const handleOpenChange = useCallback((keys: string[]) => {
    setMenuState(prev => ({
      ...prev,
      openKeys: keys.length ? [keys[keys.length - 1]] : []
    }));
  }, []);

  return (
    <Layout.Sider 
      width={250} 
      collapsible
      theme='light'
      style={{ 
        overflow: 'auto',
        height: '100vh',
        position: 'sticky',
        left: 0,
        top: 0,
      }}
    >
      <Menu
        mode="inline"
        selectedKeys={[current]}
        openKeys={openKeys}
        onOpenChange={handleOpenChange}
        items={items}
        onClick={handleMenuClick}
        style={{ height: '100%', borderRight: 0 }}
      />
    </Layout.Sider>
  );
};

export default AppSider;

// const items: MenuItem[] = [
//   {
//     key: 'request',
//     label: 'Заявки',
//     icon: <TableOutlined />,
//     children: [
//       { key: 'incoming', label: 'Входящие' },
//       { key: 'outgoing', label: 'Исходящие' },
//       { key: 'all', label: 'Все заявки' },
//     ],
//   },
//   {
//     key: 'management',
//     label: 'Управление',
//     icon: <ProfileOutlined />,
//     children: [
//       { key: 'users', label: 'Пользователи' },
//       { key: 'roles', label: 'Роли' },
//       { key: 'systems', label: 'Системы' },
//     ],
//   },
//   {
//     key: 'edit',
//     label: 'Изменения',
//     icon: <WarningOutlined />,
//     children: [
//       { key: 'logs', label: 'Логирование' },
//       { key: 'reports', label: 'Отчеты' },
//     ],
//   },
//   {
//     key: 'about',
//     label: 'О системе',
//     icon: <CheckCircleOutlined />,
//     children: [
//       { key: 'docs', label: 'Документы' },
//       { key: 'video', label: 'Видео' },
//       { key: 'updates', label: 'Обновления' },
//     ],
//   },
// ];

// const App: React.FC = () => {
//   const router = useRouter();
//   // const pathname = usePathname();
//   // const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
//   // const [openKeys, setOpenKeys] = useState<string[]>([]);

//   // useEffect(() => {
//   //   const pathParts = pathname.split('/').filter(Boolean);
//   //   if (pathParts.length > 0) {
//   //     const key = pathParts[0]; 
//   //     setSelectedKeys([key]);

//   //     if (pathParts.length > 1) {
//   //       setOpenKeys([key]);
//   //     }
//   //   }
//   // }, [pathname]);

//   const onClick: MenuProps['onClick'] = (e) => {
//     // setSelectedKeys([e.key]);
//     router.replace(`/${e.key}`);
//   };
//   // const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
//   //   setOpenKeys(keys);
//   // };

//   return (
//     <Layout.Sider 
//       width={250} 
//       collapsible
//       theme='light'
//       style={{ 
//         overflow: 'auto',
//         height: '100vh',
//         position: 'sticky',
//         left: 0,
//         top: 0,
//       }}
//     >
//       <Menu
//         onClick={onClick}
//         style={{ width: 256 }}
//         defaultOpenKeys={['request']}
//         // selectedKeys={selectedKeys}
//         // onOpenChange={onOpenChange}
//         // openKeys={openKeys}
//         mode="inline"
//         items={items}
//       />
//     </Layout.Sider>
//   );
// };

// export default App;