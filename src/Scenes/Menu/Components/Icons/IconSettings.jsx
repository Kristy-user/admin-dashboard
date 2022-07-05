import React from 'react';
import styled from 'styled-components';
import setting from 'assets/icons/setting.svg';

const SettingsIcon = styled.div`
  width: 20px;
  height: 19px;
  mask-image: url(${setting});
`;

const IconSettings = (props) => {
  return <SettingsIcon className={props.className}></SettingsIcon>;
};

export default IconSettings;
