import React, { useState } from 'react';
import { Select } from 'antd';
const { Option } = Select;

const Block = ({
  descriptions,
  setDescriptions,
  blindValue,
  setBlindValue,
}) => {
  const handleChange = (value) => {
    switch (value) {
      case '차단':
        setBlindValue(value);
        setDescriptions({
          ...descriptions,
          blind: 1,
        });
        break;
      case '미차단':
        setBlindValue(value);
        setDescriptions({
          ...descriptions,
          blind: 0,
        });
        break;
      default:
        setBlindValue('전체');
        setDescriptions({
          ...descriptions,
          blind: '',
        });
    }
  };
  return (
    <>
      <Select
        defaultValue='전체'
        value={blindValue}
        style={{
          width: '100%',
        }}
        onChange={handleChange}
      >
        <Option value='전체'>전체</Option>
        <Option value='차단'>차단</Option>
        <Option value='미차단'>미차단</Option>
      </Select>
    </>
  );
};

export default Block;
