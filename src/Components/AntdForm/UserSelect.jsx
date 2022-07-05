import React from 'react';
import 'antd/dist/antd.css';
import warning from 'assets/icons/warning.svg';
import { Select } from 'antd';
import styled from 'styled-components';
const UserSelectWrapper = styled.div`
  .message {
    display: flex;
  }
  .text {
    display: block;
    color: #868c98;
    font-weight: 400;
    font-size: 12px;
    line-height: 16px;
    margin: 4px 8px;
  }
  .warning {
    background: url(${warning}) center no-repeat;
    background-size: cover;
    min-width: 16px;
    min-height: 16px;
    background-size: cover;
    margin-top: 6px;
  }
`;

const UserSelect = (props) => {
  return (
    <UserSelectWrapper>
      <Select
        mode="multiple"
        placeholder="Add users"
        value={props.value}
        onChange={props.onChange}
        style={{
          color: '#00a0ec',
          width: '100%',
          fontSize: 13,
          lineHeight: 20,
        }}
      >
        {props.filteredUsers.map((item) => (
          <Select.Option style={{ color: '#00a0ec' }} key={item} value={item}>
            {item}
          </Select.Option>
        ))}
      </Select>
      {props.value ? (
        <div className="message">
          <div className="icon warning"></div>
          <p className="text">
            Adding or removing a user might impact the user's configuration and
            leave information (e.g. the initial brought forward days).
          </p>
        </div>
      ) : null}
    </UserSelectWrapper>
  );
};
export default UserSelect;
