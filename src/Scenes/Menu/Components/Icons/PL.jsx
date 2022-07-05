import React from 'react';
import styled from 'styled-components';
import folder from 'assets/icons/folder.svg';

const PLIcon = styled.div`
  width: 20px;
  height: 15.32px;
  mask-image: url(${folder});
`;
const IconPL = (props) => {
  return <PLIcon className={props.className}></PLIcon>;
};

export default IconPL;
