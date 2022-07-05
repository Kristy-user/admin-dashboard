import { Avatar } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';
import ShowMenuCard from './Pop-up/ShowMenuCard';

const CardWrapper = styled.div`
  padding: 20px;
  min-width: 304px;
  max-width: 304px;
  max-height: 173px;
  border-radius: 12px;
  border: 1px solid #e5e5e5;
  margin-right: 16px;
  position: relative;
  z-index: 0;
  margin-bottom: 16px;

  .card-header {
    display: flex;
    width: 100%;
    justify-content: start;
  }
  .tittle {
    font-size: 15px;
    line-height: 140%;
    color: #1e212a;
    font-weight: 600;
    margin: auto 0;
    display: block;
  }
  .card-item {
    font-weight: 500;
    font-size: 13px;
    line-height: 16px;
    color: #1e212a;
    display: flex;
    margin-top: 6px;

    & div:first-child {
      margin-left: 0;
      padding-bottom: 3px;
    }
    & div:hover:last-child {
      text-decoration: underline;
    }
  }
  .item-link {
    margin-left: -14px;
  }
  .card-links {
    margin-top: 24px;
  }
  .ant-avatar-group .ant-avatar:not(:first-child) {
    margin-left: 2px;
  }
  .ant-avatar {
    font-weight: 600;
    font-size: 12px;
    line-height: 22px;
  }
  .ant-avatar-string {
    top: 3.5px;
  }
  .item-link {
    align-self: flex-start;
    font-weight: 400;
    color: #00a0ec;
  }
  .default {
    background-color: #00a0ec;
    margin-left: 7px;
    color: #fff;
    border-radius: 10px;
    padding: 3px 14px;
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
  }
  .edit:hover,
  .edit.active {
    background: #eef7fc;
    border-radius: 6px;
    & span:before {
      background-color: #00aeec;
    }
  }
  .edit {
    width: 24px;
    height: 24px;
    margin-top: -8px;
    margin-right: -10px;
  }
  .edit span {
    position: relative;
  }

  .edit span:before {
    display: block;
    position: absolute;
    content: '';
    border-radius: 50%;
    top: 7px;
    left: 8px;
    margin: 3px;
    width: 2.6px;
    height: 2.88px;
    background-color: #dadada;
  }
  span:first-child:before {
    top: 3px;
  }
  span:last-child:before {
    top: 11px;
  }
`;

const Card = (props) => {
  let { id, isDefault, tittle, holidays, leave_policies, users } =
    props.cardData;
  const [toggleMenu, setToggleMenu] = useState(false);

  function editCard() {
    setToggleMenu(!toggleMenu);
  }

  return (
    <CardWrapper>
      <div className={'card-header'}>
        <h4 className={'tittle'}>{tittle}</h4>
        {isDefault ? (
          <div className={'default'}>default</div>
        ) : (
          <>
            <div
              className={`edit ${toggleMenu ? 'active' : ''}`}
              onClick={() => editCard()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            <ShowMenuCard
              id={id}
              tittle={tittle}
              isShow={toggleMenu}
              closeMenu={editCard}
            />
          </>
        )}
      </div>
      <ul className={'card-links'}>
        <li className={'card-item'}>
          <div className={'item-name'}>Holidays</div>
          <div className={'item-link'}>View Holidays</div>
        </li>
        <li className={'card-item'}>
          <div className={'item-name'}>Leave Policies</div>
          <div className={'item-link'}>View Leave Policies</div>
        </li>
      </ul>
      <Avatar.Group
        maxCount={7}
        maxStyle={{
          color: '#00A0EC',
          backgroundColor: 'transparent',
        }}
      >
        {users
          ? users.map((user, index) =>
              user.photo ? (
                <Avatar key={id} src={user.photo} />
              ) : user.sex === 'm' ? (
                <Avatar
                  key={id}
                  style={{
                    backgroundColor: '#00A0EC',
                  }}
                >
                  {user.name
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </Avatar>
              ) : (
                <Avatar
                  key={id}
                  style={{
                    backgroundColor: '#434EAA',
                  }}
                >
                  {user.name
                    .split(' ')
                    .map((s) => s[0])
                    .join('')}
                </Avatar>
              )
            )
          : ''}
      </Avatar.Group>
    </CardWrapper>
  );
};

export default Card;
