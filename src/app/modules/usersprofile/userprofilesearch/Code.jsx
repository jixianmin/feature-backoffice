import { Input } from 'antd';
import React from 'react';

const UserName = ({ descriptions, setDescriptions }) => {
  const onChange = (e) => {
    setDescriptions({
      ...descriptions,
      code: e.target.value,
    });
  };
  return (
    <Input
      style={{
        width: '100%',
      }}
      onChange={onChange}
      value={descriptions.code}
    />
  );
};

export default UserName;
