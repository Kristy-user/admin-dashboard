import React from 'react';
import styled from 'styled-components';
import setting from 'assets/icons/settings-2.svg';

const SettingsIcon = styled.div`
  width: 20px;
  height: 19px;
  mask-image: url(${setting});
`;

const IconSettings2 = (props) => {
  return <SettingsIcon className={props.className}></SettingsIcon>;
};

export default IconSettings2;
