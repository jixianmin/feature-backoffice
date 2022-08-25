import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const Block = () => (
  <>
    <Select
      defaultValue="전체"
      style={{
        width: "100%",
      }}
      onChange={handleChange}
    >
      <Option value="전체">전체</Option>
      <Option value="차단">차단</Option>
      <Option value="미차단">미차단</Option>
    </Select>
  </>
);

export default Block;
