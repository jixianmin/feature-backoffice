import { Table } from "antd";
import qs from "qs";
import React, { useEffect, useState } from "react";
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    // width: "20%",
    width: "70px",
  },
  {
    title: "이메일",
    dataIndex: "email",
    sorter: true,
    width: "249px",
  },
  {
    title: "닉네임",
    dataIndex: "name",
    sorter: true,
    render: (name) => `${name.first} ${name.last}`,
    width: "129px",
  },
  {
    title: "국가",
    dataIndex: "country",
    sorter: true,
    width: "129px",
  },
  {
    title: "권한",
    dataIndex: "authority",
    sorter: true,
    width: "89px",
  },
  {
    title: "블루브릭",
    dataIndex: "bluebrick",
    sorter: true,
    width: "119px",
  },
  {
    title: "레드브릭",
    dataIndex: "redbrick",
    sorter: true,
    width: "119px",
  },
  {
    title: "T-브릭",
    dataIndex: "t-brick",
    sorter: true,
    width: "119px",
  },
  {
    title: "가입일",
    dataIndex: "Member since",
    sorter: true,
    width: "119px",
  },
  {
    title: "최근접속일",
    dataIndex: "recently accessed",
    sorter: true,
    width: "119px",
  },
  {
    title: "기능",
    dataIndex: "function",
    sorter: true,
    width: "250px",
  },
];

const getRandomuserParams = (params) => ({
  results: params.pagination?.pageSize,
  page: params.pagination?.current,
  ...params,
});

const App = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  // const fetchData = (params = {}) => {
  //   setLoading(true);
  //   fetch(
  //     `https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`
  //   )
  //     .then((res) => res.json())
  //     .then(({ results }) => {
  //       setData(results);
  //       setLoading(false);
  //       setPagination({
  //         ...params.pagination,
  //         total: 200, // 200 is mock data, you should read it from server
  //         // total: data.totalCount,
  //       });
  //     });
  // // };

  // useEffect(() => {
  //   fetchData({
  //     pagination,
  //   });
  // }, []);

  // const handleTableChange = (newPagination, filters, sorter) => {
  //   fetchData({
  //     sortField: sorter.field,
  //     sortOrder: sorter.order,
  //     pagination: newPagination,
  //     ...filters,
  //   });
  // };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.login.uuid}
      dataSource={data}
      //   pagination={pagination}
      pagination={pagination}
      loading={loading}
      // onChange={handleTableChange}
    />
  );
};

export default App;
