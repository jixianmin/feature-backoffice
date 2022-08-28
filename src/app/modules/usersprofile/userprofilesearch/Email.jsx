import { Input } from 'antd';
import React from 'react';

const UserName = ({ descriptions, setDescriptions }) => {
  const onChange = (e) => {
    setDescriptions({
      ...descriptions,
      email: e.target.value,
    });
  };
  return (
    <Input
      style={{
        width: '100%',
      }}
      onChange={onChange}
      value={descriptions.email}
    />
  );
};

export default UserName;
