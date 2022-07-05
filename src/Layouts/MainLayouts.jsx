import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import Menu from '../Scenes/Menu/Menu';

const MainPageWrapper = styled.div`
  max-width: 1366px;
  height: 768px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const MainLayouts = () => {
  return (
    <MainPageWrapper>
      <Menu />
      <Outlet />
    </MainPageWrapper>
  );
};

export default MainLayouts;
