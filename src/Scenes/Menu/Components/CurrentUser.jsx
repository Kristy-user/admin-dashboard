import React from 'react';
import { Avatar } from 'antd';
import 'antd/dist/antd.css';
import styled from 'styled-components';
import bell from 'assets/icons/bell.svg';

const CurrentUserWrapper = styled.div`
  margin-bottom: 0;
  .ant-avatar-string {
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
  }
  .notifications {
    margin-bottom: 22px;
  }
  .bell {
    margin-left: 9px;
    width: 12px;
    height: 14.5px;
    background: url(${bell}) no-repeat;
    position: relative;
  }

  .bell:after {
    position: absolute;
    content: '';
    left: 90%;
    bottom: 80%;
    background-color: #00a0ec;
    width: 4.8px;
    height: 4.8px;

    border-radius: 50%;
  }
`;
const CurrentUser = () => {
  return (
    <CurrentUserWrapper>
      <div className="notifications">
        <div className={'bell'}></div>
      </div>
      <Avatar
        size={34}
        style={{
          color: '#fffff',
          backgroundColor: '#00a0ec',
        }}
      >
        JS
      </Avatar>
    </CurrentUserWrapper>
  );
};

export default CurrentUser;
