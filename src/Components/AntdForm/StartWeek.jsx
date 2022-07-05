import React from 'react';
import 'antd/dist/antd.css';

import { Select } from 'antd';

const StartWeek = (props) => {
  return (
    <Select
      onChange={props.onChange}
      value={props.value}
      style={{
        height: 22,
        width: '94%',
        fontSize: '13px',
      }}
    >
      {['Sunday', 'Monday'].map((item, index) => (
        <Select.Option
          style={{
            height: 22,
            width: '100%',
            backgroundColor: '#ffff',
          }}
          key={index}
          value={item}
        >
          {item}
        </Select.Option>
      ))}
    </Select>
  );
};
export default StartWeek;
