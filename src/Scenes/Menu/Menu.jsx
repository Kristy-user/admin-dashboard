import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from 'assets/icons/logo.svg';
import CurrentUser from '../Menu/Components/CurrentUser';
import IconDashboard from '../Menu/Components/Icons/IconDashboard';
import IconSettings from '../Menu/Components/Icons/IconSettings';
import IconUsers from '../Menu/Components/Icons/IconUsers';
import IconVacation from '../Menu/Components/Icons/IconVacation';
import IconPL from '../Menu/Components/Icons/PL';

const StyledNavMenu = styled.div`
  width: 100px;
  height: 100%;
  text-decoration: none;
  padding: 24px 15px;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: #f5f9fe;
  border-right: 1px solid rgba(46, 91, 255, 0.1);
  margin-right: 5px;
  nav {
    margin-top: 0;
  }
  .menu-item {
    width: 70px;
    height: 42px;
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & :hover {
      color: #00a0ec;
      div {
        background-color: #00a0ec;
      }
    }
  }
  a {
    cursor: inherit;
    color: inherit;
  }
  .active {
    h3 {
      color: #00a0ec;
    }
    .icon {
      background-color: #00a0ec;
    }
  }

  .menu-item:last-child {
    height: 56px;
  }
  .icon {
    background-color: #afb6c6;
    margin-bottom: 8px;
  }
  h3 {
    font-weight: 600;
    font-size: 12px;
    line-height: 14px;
    color: #afb6c6;
    margin-bottom: 0;
  }
  .menu-list {
    display: flex;
    flex-direction: column;
    align-content: center;
    text-align: center;
    margin-top: 3px;
  }
  .logo-link {
    margin-top: 0;
  }
  .logo {
    width: 34px;
    height: 34px;
    background-image: url(${logo});
  }
`;

const Menu = () => {
  let activeStyle = {};

  return (
    <StyledNavMenu>
      <Link className="logo-link" to="/">
        <div className={'logo'}></div>
      </Link>

      <nav>
        <ul className={'menu-list'}>
          <li className={'menu-item'}>
            <NavLink
              to="dashboard"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconDashboard className={'icon'} />
              <h3>Dashboard</h3>
            </NavLink>
          </li>
          <li className={'menu-item'}>
            <NavLink
              to="users"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconUsers className={'icon'} />
              <h3>Users</h3>
            </NavLink>
          </li>
          <li className={'menu-item'}>
            <NavLink
              to="settings"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconSettings className={'icon'} />
              <h3>Settings</h3>
            </NavLink>
          </li>
          <li className={'menu-item'}>
            <NavLink
              to="p&l"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconPL className={'icon'} />
              <h3>P&L</h3>
            </NavLink>
          </li>
          <li className={'menu-item'}>
            <NavLink
              to="vacation-manager"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              <IconVacation className={'icon'} />
              <h3>Vacation Manager</h3>
            </NavLink>
          </li>
        </ul>
      </nav>
      <CurrentUser />
    </StyledNavMenu>
  );
};
export default Menu;
