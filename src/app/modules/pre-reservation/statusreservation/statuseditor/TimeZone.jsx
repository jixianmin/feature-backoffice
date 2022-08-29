import { Select } from "antd";
import React from "react";
const { Option } = Select;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

const App = () => (
  <>
    <Select
      defaultValue="kr"
      style={{
        width: 120,
      }}
      onChange={handleChange}
    >
      <Option value="kr">한국 시간</Option>
      <Option value="df">표준 시간</Option>
    </Select>
  </>
);

export default App;
