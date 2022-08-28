import React, { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;

const App = ({ descriptions, setDescriptions, adminValue, setAdminValue }) => {
  const handleChange = (value) => {
    //console.log(`selected ${value}`);
    switch (value) {
      case '최고관리자':
        setAdminValue(value);
        setDescriptions({
          ...descriptions,
          level: 'S',
        });
        break;
      case '일반관리자':
        setAdminValue(value);
        setDescriptions({
          ...descriptions,
          level: 'A',
        });
        break;
      case '일반회원':
        setAdminValue(value);
        setDescriptions({
          ...descriptions,
          level: 'M',
        });
        break;
      default:
        setAdminValue('전체');
        setDescriptions({
          ...descriptions,
          level: '',
        });
    }
  };
  return (
    <>
      <Select
        defaultValue='전체'
        value={adminValue}
        style={{
          width: '100%',
        }}
        onChange={handleChange}
      >
        <Option value='전체'>전체</Option>
        <Option value='최고관리자'>최고관리자</Option>
        <Option value='일반관리자'>일반관리자</Option>
        <Option value='일반회원'>일반회원</Option>
      </Select>
    </>
  );
};

export default App;
