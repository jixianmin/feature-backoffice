import { Select } from "antd";
import React from "react";
const { Option } = Select;
const children = [
  <Option key="1">전체</Option>,
  <Option key="2">FCM 푸시</Option>,
  <Option key="3">팝업(스와이프)</Option>,
  <Option key="4">페이스북</Option>,
  <Option key="5">인스타그램</Option>,
  <Option key="6">구글</Option>,
  <Option key="7">페이스북 2</Option>,
  <Option key="8">인스타그램 2</Option>,
  <Option key="9">test</Option>,
];

// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <Select
    mode="tags"
    style={{
      width: "100%",
      minWidth: "200px",
    }}
    placeholder="Tags Mode"
    onChange={handleChange}
  >
    {children}
  </Select>
);

export default App;
