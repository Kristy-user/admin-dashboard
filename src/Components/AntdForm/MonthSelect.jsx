import React from 'react';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import { month } from '../../assets/textInfo';

const MonthSelect = (props) => {
  return (
    <Select
      value={props.value}
      onChange={props.onChange}
      style={{ marginRight: 18, width: '26%', fontSize: 13, lineHeight: 20 }}
    >
      {month.map((item, index) => (
        <Select.Option
          style={{ margin: 0, color: '#040404' }}
          key={index}
          value={item}
        >
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};
export default MonthSelect;
