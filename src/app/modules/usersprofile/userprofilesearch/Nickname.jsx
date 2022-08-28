import { Input } from 'antd';
import React from 'react';

const UserName = ({ descriptions, setDescriptions }) => {
  const onChange = (e) => {
    setDescriptions({
      ...descriptions,
      nickname: e.target.value,
    });
  };
  return (
    <Input
      style={{
        width: '100%',
      }}
      onChange={onChange}
      value={descriptions.nickname}
    />
  );
};

export default UserName;
