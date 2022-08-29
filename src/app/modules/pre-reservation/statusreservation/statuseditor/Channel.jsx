import { Select } from 'antd';
import React from 'react';
const { Option } = Select;
const children = [
  <Option key=''>전체</Option>,
  <Option key='push'>FCM 푸시</Option>,
  <Option key='popup'>팝업(스와이프)</Option>,
  <Option key='fb'>페이스북</Option>,
  <Option key='insta'>인스타그램</Option>,
  <Option key='google'>구글</Option>,
  <Option key='fb2'>페이스북 2</Option>,
  <Option key='insta2'>인스타그램 2</Option>,
  <Option key='1234'>test</Option>,
];

// for (let i = 10; i < 36; i++) {
//   children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
// }

const App = ({ descriptions, setDescriptions }) => {
  const handleChange = (value) => {
    setDescriptions({ ...descriptions, channels: value.join() });
  };

  return (
    <Select
      mode='tags'
      style={{
        width: '100%',
        minWidth: '200px',
      }}
      placeholder='Tags Mode'
      onChange={handleChange}
    >
      {children}
    </Select>
  );
};

export default App;
