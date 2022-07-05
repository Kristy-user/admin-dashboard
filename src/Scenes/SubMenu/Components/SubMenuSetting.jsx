import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import IconSettings2 from '../../Menu/Components/Icons/IconSettings2';
import IconVacation from '../../Menu/Components/Icons/IconVacation';

const SubMenuItemWrapper = styled.div`
  min-width: 240px;
  & nav {
    margin-left: 0;
  }

  .submenu-item a {
    align-items: center;
  }
  .submenu-item {
    margin-left: 0;
    font-weight: 500;
    font-size: 14px;
    line-height: 120%;
    flex-wrap: wrap;
    text-align: left;
    margin-bottom: 16px;
    &:hover,
    &.active {
      div {
        background-color: #00a0ec;
      }
    }
  }

  .icon {
    background-color: #afb6c6;
    margin: auto 0;
    margin-right: 12px;
    display: inline-block;
    position: relative;
    top: 6px;
  }
  .submenu-item > .submenu-list {
    margin-left: 30px;
  }
  .submenu-inner {
    font-weight: 400;
    font-size: 13px;

    margin-top: 19px;
  }
  .sub-item {
    position: relative;
    z-index: 1;
    font-weight: 400;
  }
  .sub-item {
    &.active {
      color: #00a0ec;
      background-color: #eef7fc;
      &:before {
        position: absolute;
        content: '';
        bottom: -5px;
        left: -53px;
        width: 238px;
        height: 32px;
        background-color: #eef7fc;
        z-index: -1;
      }
    }
  }
  .active {
    h3 {
      color: #00a0ec;
    }
    .icon {
      background-color: #00a0ec;
    }
  }
`;

const SubMenuSetting = (props) => {
  let activeStyle = {
    color: '#00a0ec',
  };
  return (
    <SubMenuItemWrapper className={props.className}>
      <nav className={'submenu-nav'}>
        <ul className={'submenu-list'}>
          <li className={'submenu-item'}>
            <NavLink
              to="general"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconSettings2 className={'icon'} />
              General
            </NavLink>
          </li>
          <li className={'submenu-item'}>
            <NavLink
              to="vacation-manager"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconVacation className={'icon'} />
              Vacation Manager
            </NavLink>
            <ul className={'submenu-list'}>
              <li className={'submenu-inner'}>
                <NavLink
                  to="vacation-manager/leave-types"
                  className={'sub-item'}
                >
                  Leave Types
                </NavLink>
              </li>
              <li className={'submenu-inner'}>
                <NavLink to="vacation-manager/locations" className={'sub-item'}>
                  Locations
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </SubMenuItemWrapper>
  );
};

export default SubMenuSetting;
