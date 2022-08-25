import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <>
    <Select
      defaultValue="최고관리자"
      style={{
        width: "100%",
      }}
      onChange={handleChange}
    >
      <Option value="전체">전체</Option>
      <Option value="최고관리자">최고관리자</Option>
      <Option value="일반관리자">일반관리자</Option>
      <Option value="일반회원">일반회원</Option>
    </Select>
  </>
);

export default App;
