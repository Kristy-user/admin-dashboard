import React from 'react';
import styled from 'styled-components';
import home from 'assets/icons/home.svg';

const DashboardIcon = styled.div`
  height: 20px;
  width: 18px;
  mask-image: url(${home});
`;

const IconDashboard = (props) => {
  return <DashboardIcon className={props.className}></DashboardIcon>;
};

export default IconDashboard;
