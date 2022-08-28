import { Table } from 'antd';
import React, { useEffect, useState } from 'react';

const columns = [
  {
    title: '날짜',
    dataIndex: 'date',
    width: '20%',
  },
  {
    title: '신청',
    dataIndex: 'count',
    width: '20%',
  },
  {
    title: '완료',
    dataIndex: 'completed',
    width: '20%',
  },
  {
    title: '대기',
    dataIndex: 'waiting',
    width: '20%',
  },
  {
    title: '전환율',
    dataIndex: 'ratio',
    width: '20%',
  },
];

const UserProfileList = ({ buckets }) => {
  //   const [idSort, setIdSort] = useState('');
  //   const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

  //   const onChange = (page, filter, sorter) => {
  //     console.log('솔트', sorter);
  //     if (page.pageSize !== filters.perPage) {
  //       return setFilters({
  //         ...filters,
  //         perPage: page.pageSize,
  //       });
  //     } else if (page.current !== filters.page) {
  //       return setFilters({
  //         ...filters,
  //         page: page.current,
  //       });
  //     }
  //     if (sorter) {
  //       if (sorter.order === 'ascend') {
  //         return setFilters({
  //           ...filters,
  //           order: sorter.field,
  //           sort: 'asc',
  //         });
  //       } else if (sorter.order === 'descend') {
  //         return setFilters({
  //           ...filters,
  //           order: sorter.field,
  //           sort: 'desc',
  //         });
  //       }
  //     }
  //   };

  return (
    <Table
      columns={columns}
      rowKey={(record) => record.date}
      dataSource={buckets}
      //   pagination={{
      //     total: totalPage,
      //     defaultCurrent: 1,
      //     pageSize: filters.perPage,
      //     current: filters.page,
      //   }}
      loading={loading}
      //onChange={onChange}
      pagination={false}
    />
  );
};

export default UserProfileList;
// import { Input } from 'antd';
// import React from 'react';

// const UserName = () => {
//   return (
//     <Input
//       style={{
//         width: '100%',
//       }}
//     />
//   );
// };

// export default UserName;
