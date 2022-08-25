import { DatePicker, Space } from "antd";
import React from "react";
const { RangePicker } = DatePicker;

function onChange(value, dateString) {
  console.log("Selected Time: ", value);
  console.log("Formatted Selected Time: ", dateString);
}

const App = () => (
  <Space direction="vertical" size={12}>
    <RangePicker onChange={onChange} />
  </Space>
);

export default App;
