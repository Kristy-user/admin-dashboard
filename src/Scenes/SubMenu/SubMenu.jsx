import React, { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import arrow from '../../assets/icons/arrow.svg';
const SubMenuWrapper = styled.div`
  &.small {
    width: 10px;
  }
  margin: 0;
  width: fit-content;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  background: #f5f9fe;
  align-items: flex-start;
  align-content: flex-start;
  top: -8px;
  position: relative;
  width: 240px;
  &:after {
    position: absolute;
    content: '';
    border-right: 1px solid rgba(46, 91, 255, 0.1);
    width: 2px;
    height: 100%;
    right: 5px;
    top: 8px;
  }
  & > div {
    margin: 0;
    display: flex;
    flex-direction: column;
    color: #1e212a;
    text-align: left;
  }
  .switcher {
    position: relative;
    border-radius: 50%;
    border: 1px solid #dfe5f9;
    background-color: #ffff;
    width: 24px;
    height: 24px;
    left: 203px;
    top: 86px;
    z-index: 1;
    background-image: url(${arrow});
    background-repeat: no-repeat;
    background-position: center;
  }
  .unswitch {
    transform: rotate(180deg);
    left: -15px;
    top: 88px;
  }

  .title {
    text-transform: capitalize;
    font-weight: 600;
    font-size: 16px;
    line-height: 120%;
    color: #afb6c6;
    padding-top: 6px;
    padding-bottom: 14px;
    text-align: left;
    margin: 0;
  }
  .hidden {
    display: none;
  }
`;

const SubMenu = (props) => {
  let location = useLocation();
  let currentTitle = location.pathname.split('/')[1];
  const [toggleClass, setToggleClass] = useState(false);

  function openMenu() {
    setToggleClass(!toggleClass);
  }
  return (
    <SubMenuWrapper className={!toggleClass ? '' : 'small'}>
      {' '}
      <div
        className={`switcher ${toggleClass ? 'unswitch' : ''}`}
        onClick={(e) => openMenu(e)}
      ></div>
      <h2 className={`title ${!toggleClass ? 'show' : 'hidden'} `}>
        {currentTitle.split('-').join(' ')}
      </h2>
      {!toggleClass ? props.component : ''}
    </SubMenuWrapper>
  );
};

export default SubMenu;
