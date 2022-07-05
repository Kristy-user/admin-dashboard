import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import BreadCrumb from '../../../Components/Breadcrumbs/BreadCrumb';
import arrow from '../../../assets/icons/arrow.svg';
const StartPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-content: flex-start;
  align-items: flex-start;
  padding-left: 32px;
  margin-top: 0;
  margin-left: 0;
  padding-top: 22px;
  position: relative;

  .switcher {
    position: absolute;
    border-radius: 50%;
    border: 1px solid #dfe5f9;
    background-color: #ffff;
    width: 24px;
    height: 24px;
    left: -18px;
    top: 78px;
    z-index: 1;
    &:after {
      position: absolute;
      content: '';

      background-image: url(${arrow});
      background-size: cover;
      background-repeat: no-repeat;
      top: 6px;
      left: 5px;
      width: 12px;
      height: 9px;
      z-index: 11;
    }
  }
`;

const Main = () => {
  return (
    <StartPageWrapper>
      <BreadCrumb />
      <Outlet />
    </StartPageWrapper>
  );
};

export default Main;
