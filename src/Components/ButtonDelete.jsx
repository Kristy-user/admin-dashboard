import React from 'react';
import styled from 'styled-components';

const ButtonDeleteStyle = styled.button`
  color: #fff;
  font-size: 13px;
  font-weight: 600;
  background: linear-gradient(0deg, #f24445, #f24445), #ffffff;
  border-radius: 6px;
  line-height: 16px;
  padding: 12px 24px;
`;

const ButtonDelete = (props) => {
  return (
    <ButtonDeleteStyle
      className={props.className}
      onClick={() => {
        props.delete();
        props.setModal(false);
      }}
    >
      Yes, Delete
    </ButtonDeleteStyle>
  );
};

export default ButtonDelete;
