import React from 'react';
import styled from 'styled-components';
import warning from '../../assets/icons/warning.svg';
import ButtonDelete from '../ButtonDelete';
import { ModalStyle } from '../../CommonStyles/modalWindow';

const DeleteCardStyle = styled.div`
  max-width: 480px;
  max-height: 262px;

  ${ModalStyle} .warning {
    background: url(${warning}) center no-repeat;
    background-size: cover;
    min-width: 16px;
    min-height: 16px;
    margin-right: 12px;
    background-size: cover;
    margin-top: 0;
  }

  .message {
    display: flex;
  }
  .text {
    max-width: 354px;
    display: block;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
  }
  .container {
    margin-top: 42px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    text-align: left;
    & > div {
      margin-left: 0;
      padding-bottom: 13px;
    }
  }
  .delete {
    width: fit-content;
    margin-right: 1px;
    align-self: flex-end;
    margin-bottom: 24px;
  }
`;

const DeleteCard = (props) => {
  return (
    <DeleteCardStyle>
      <h4>Delete Location</h4>
      <div className="close" onClick={() => props.setModal(false)}></div>
      <div className="container">
        <div>Are you sure want to delete "{props.tittle}" Location? </div>
        <div className="message">
          <div className="icon warning"></div>
          <p className="text">
            Deleting a location might impact the users' configuration and leave
            information (e.g. the initial brought forward days).
          </p>
        </div>
        <ButtonDelete
          className={'delete'}
          delete={props.delete}
          setModal={props.setModal}
        />
      </div>
    </DeleteCardStyle>
  );
};

export default DeleteCard;
