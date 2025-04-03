import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';
import { usersdata } from './users'

interface DataType {
  key: React.Key;
  name: string;
  address: string;
  rang: string;
  place: string;
}

const columns: TableColumnsType<DataType> = [
  {
    title: 'ФИО',
    dataIndex: 'name',
    filters: [
      {
        text: 'Иванов',
        value: 'Иванов',
      },
      {
        text: 'Петров',
        value: 'Петров',
      },
    
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: '30%',
  },
  {
    title: 'Должность',
    dataIndex: 'rang',
  },
  {
    title: 'Подразделение',
    dataIndex: 'place',
    filters: [
      {
        text: 'Группа обеспечения испытаний',
        value: 'Группа',
      },
      {
        text: 'ОСП',
        value: 'ОСП',
      },
    ],
    onFilter: (value, record) => record.place.startsWith(value as string),
    filterSearch: true,
    width: '30%',
  },

  {
    title: 'Почта',
    dataIndex: 'address',
    
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const TableUser: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={usersdata} onChange={onChange} />
);

export default TableUser;