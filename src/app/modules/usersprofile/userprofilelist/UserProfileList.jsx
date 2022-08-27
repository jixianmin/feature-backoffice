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

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App = ({ buckets, currentPage }) => {
  console.log(buckets);
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 20,
  });
  ////////////////////
  //console.log(buckets);
  //////////////
  const fetchData = (params = {}) => {
    setLoading(true);
    fetch(
      `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
    )
      .then((res) => res.json())
      .then(({ results }) => {
        console.log(results);
        setData(results);
        setLoading(false);
        setPagination({
          ...params.pagination,
          total: 200, // 200 is mock data, you should read it from server
          // total: data.totalCount,
        });
      });
  };

  useEffect(() => {
    console.log(pagination);
    fetchData({
      pagination,
    });
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    fetchData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination: newPagination,
      ...filters,
    });
  };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.id}
      dataSource={buckets}
      //   pagination={pagination}
      pagination={pagination}
      loading={loading}
      // onChange={handleTableChange}
    />
  );
};

export default App;
