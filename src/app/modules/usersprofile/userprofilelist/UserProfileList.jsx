import { Table } from 'antd';
import qs from 'qs';
import React, { useEffect, useState } from 'react';

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    // width: "20%",
    width: '70px',
  },
  {
    title: '이메일',
    dataIndex: 'email',
    sorter: true,
    width: '249px',
  },
  {
    title: '닉네임',
    // dataIndex: 'nickname',
    dataIndex: 'nickname',
    sorter: true,
    // render: (name) => `${name.first} ${name.last}`,
    width: '129px',
  },
  {
    title: '국가',
    dataIndex: 'nation',
    sorter: true,
    width: '129px',
  },
  {
    title: '권한',
    dataIndex: 'level',
    sorter: true,
    width: '89px',
  },
  {
    title: '블루브릭',
    dataIndex: 'blue_point',
    sorter: true,
    width: '119px',
  },
  {
    title: '레드브릭',
    dataIndex: 'red_point',
    sorter: true,
    width: '119px',
  },
  {
    title: 'T-브릭',
    dataIndex: 't_point',
    sorter: true,
    width: '119px',
  },
  {
    title: '가입일',
    dataIndex: 'created_at',
    sorter: true,
    width: '119px',
  },
  {
    title: '최근접속일',
    dataIndex: 'updated_at',
    sorter: true,
    width: '119px',
  },
  {
    title: '기능',
    dataIndex: 'function',
    sorter: true,
    width: '250px',
  },
];

const UserProfileList = ({
  buckets,
  fetchData,
  totalPage,
  setBuckets,
  filters,
  setFilters,
}) => {
  const [idSort, setIdSort] = useState('');
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  const onChange = (page, filter, sorter) => {
    console.log('솔트', sorter);
    if (page.pageSize !== filters.perPage) {
      return setFilters({
        ...filters,
        perPage: page.pageSize,
      });
    } else if (page.current !== filters.page) {
      return setFilters({
        ...filters,
        page: page.current,
      });
    }
    if (sorter) {
      if (sorter.order === 'ascend') {
        return setFilters({
          ...filters,
          order: sorter.field,
          sort: 'asc',
        });
      } else if (sorter.order === 'descend') {
        return setFilters({
          ...filters,
          order: sorter.field,
          sort: 'desc',
        });
      }
    }
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={buckets}
      pagination={{
        total: totalPage,
        defaultCurrent: 1,
        pageSize: filters.perPage,
        current: filters.page,
      }}
      loading={loading}
      onChange={onChange}
    />
  );
};

export default UserProfileList;
