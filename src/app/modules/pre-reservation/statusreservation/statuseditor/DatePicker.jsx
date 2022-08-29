import { DatePicker, Space } from 'antd';
import React from 'react';
import moment from 'moment';
const { RangePicker } = DatePicker;

const App = ({
  descriptions,
  setDescriptions,
  datePickerValue,
  setDatePickerValue,
}) => {
  function onChange(value, dateString) {
    setDatePickerValue([moment(dateString[0]), moment(dateString[1])]);
    setDescriptions({
      ...descriptions,
      start_at: dateString[0],
      end_at: dateString[1],
    });
  }
  return (
    <Space direction='vertical' size={12}>
      <RangePicker
        onChange={onChange}
        value={datePickerValue}
        //value={null}
      />
    </Space>
  );
};

export default App;
