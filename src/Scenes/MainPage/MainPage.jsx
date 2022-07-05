import React from 'react';
import SubMenu from '../SubMenu/SubMenu';
import Main from './Components/Main';

const MainPage = (props) => {
  return (
    <>
      <SubMenu component={props.component} />
      <Main />
    </>
  );
};

export default MainPage;
