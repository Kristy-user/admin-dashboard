import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import styled from 'styled-components';

const MainWrapper = styled.div`
  margin-left: 0;
`;

const MenuComponent = () => {
  return (
    <MainWrapper>
      <Outlet />
    </MainWrapper>
  );
};

export default MenuComponent;
