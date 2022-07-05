import React from 'react';
import styled from 'styled-components';
import vacation from 'assets/icons/vacation-manager.svg';

const VacationIcon = styled.div`
  width: 20px;
  height: 20px;
  mask-image: url(${vacation});
`;

const IconVacation = (props) => {
  return <VacationIcon className={props.className}></VacationIcon>;
};

export default IconVacation;
