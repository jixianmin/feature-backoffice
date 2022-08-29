import { Descriptions, Select } from 'antd';
import React from 'react';
const { Option } = Select;

const App = ({ descriptions, setDescriptions }) => {
  const handleChange = (value) => {
    setDescriptions({ ...descriptions, time_zone: value });
  };
  return (
    <>
      <Select
        defaultValue='KTC'
        style={{
          width: 120,
        }}
        onChange={handleChange}
      >
        <Option value='KTC'>한국 시간</Option>
        <Option value='UTC'>표준 시간</Option>
      </Select>
    </>
  );
};

export default App;
