import React from 'react';
import styled from 'styled-components';
import users from 'assets/icons/users.svg';

const UsersIcon = styled.div`
  height: 17px;
  width: 20px;
  mask-image: url(${users});
`;

const IconUsers = (props) => {
  return <UsersIcon className={props.className}></UsersIcon>;
};

export default IconUsers;
